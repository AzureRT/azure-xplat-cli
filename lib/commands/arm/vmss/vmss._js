/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var util = require('util');

var networkNic = require('../vm/networkNic');
var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

function getResourceId(subId, rgName, provider, type, name, subType, subName) {
  var format = '/subscriptions/%s/resourceGroups/%s/providers/%s/%s/%s';
  var resourceId = util.format(format, subId, rgName, provider, type, name);
  
  var subFormat = '/%s/%s';
  if (subType || subName) {
    resourceId += util.format(subFormat, subType, subName);
  }
  
  return resourceId;
}

function getContainerAndVhdUri(storageName, containerAndVhdName) {
  if (containerAndVhdName) {
    var format = 'https://%s.blob.core.windows.net/%s';
    var containerUri = util.format(format, storageName, containerAndVhdName);
    return containerUri;
  }
  else {
    return null;
  }
}

exports.init = function (cli) {
  var vmssQuickCreate = cli.category('vmss').description($('Commands to manage your virtual machine scale set.'));
  vmssQuickCreate.command('quick-create')
  .description($('Create a virtual machine scale set with default resources in a resource group'))
  .usage('[options] <resource-group-name> <name> <location> <image-urn> <admin-username> <admin-password>')
  .option('-g, --resource-group-name <resource-group-name>', $('the resource group name'))
  .option('-n, --name <name>', $('the virtual machine name'))
  .option('-l, --location <location>', $('the location'))
  .option('-Q, --image-urn <image-urn>', $('the image reference, e.g. "publisher:offer:skus:version"'))
  .option('-u, --admin-username <admin-username>', $('the user name'))
  .option('-p, --admin-password <admin-password>', $('the password'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, name, location, imageUrn, adminUsername, adminPassword, options, _) {
    // Read Required Parameters
    resourceGroupName = cli.interaction.promptIfNotGiven($('Resource group name: '), options.resourceGroupName, _);
    name = cli.interaction.promptIfNotGiven($('Virtual machine name: '), options.name, _);
    location = cli.interaction.promptIfNotGiven($('Location name: '), options.location, _);
    adminUsername = cli.interaction.promptIfNotGiven($('User name: '), options.adminUsername, _);
    adminPassword = cli.interaction.promptPasswordIfNotGiven($('Password: '), options.adminPassword, _);
    location = utils.toLowerCaseAndRemoveSpace(location);

    // Read Image Parameter
    imageUrn = cli.interaction.promptIfNotGiven($('ImageURN (format: "publisherName:offer:skus:version"): '), options.imageUrn, _);
    var imageUrnParts = imageUrn.split(':');
    if (imageUrnParts.length !== 4) {
      throw new Error($('--image-urn must be in the form "publisherName:offer:skus:version"'));
    }

    options.imageReferencePublisher = imageUrnParts[0];
    options.imageReferenceOffer = imageUrnParts[1];
    options.imageReferenceSku = imageUrnParts[2];
    options.imageReferenceVersion = imageUrnParts[3];

    // Define Utility Functions - Reference: http://www.cse.yorku.ca/~oz/hash.html
    var hash = 5381;
    var seedstr = resourceGroupName + name + location + imageUrn;
    for (var i = 0; i < seedstr.length; i++) {
      var c = parseInt(seedstr.charCodeAt(i));
      hash = ((((hash << 5) + hash) + c) % Number.MAX_VALUE) >>> 0;
    }

    var removeAllSpace = function (str) {
        return (str.replace(/[\(\)\{\}\[\]\.\,\;\:\"\ ']/g, '').toLowerCase());
    };

    var resourceNamePrefix = removeAllSpace(name).slice(0, 5) + '-' +
        removeAllSpace(location).slice(0, 5)  + '-' + hash;

    var resourceName = function (postFix) {
      return resourceNamePrefix + '-' + postFix;
    };

    var normalizeString = function (str) {
      return str.replace(/[^a-zA-Z0-9]+/g, '').slice(0, 24).toLowerCase();
    };

    // Setup Default Parameters
    options.skuCapacity = 2;
    options.skuName = 'Standard_A1';
    options.skuTier = 'Standard';
    options.upgradePolicyMode = 'Manual';
    options.computerNamePrefix = name;
    options.virtualHardDiskContainer = resourceName('disk-container');
    options.osDiskCaching = 'None';
    options.osDiskCreateOption = 'FromImage';
    options.osDiskName = resourceName('os-disk');
    
    // Setup Subscription Parameter
    var subscription = profile.current.getSubscription(options.subscription);
    cli.output.info('options = ' + JSON.stringify(options));
    cli.output.info('subscription = ' + JSON.stringify(subscription));

    // Create Default Storage Resources
    var generateNewStorageAccountName = function (str) {
      if (str && str.length > 20) {
        str = str.slice(0, 20);
      }

      return normalizeString(str + hash);
    };
    
    var storageManagementClient = utils.createStorageResourceProviderClient(subscription);
    var stoParams = {};
    stoParams.name = generateNewStorageAccountName(name + 'sto');
    stoParams.location = location;
    stoParams.accountType = 'Standard_GRS';
    storageManagementClient.storageAccounts.create(resourceGroupName, stoParams.name, stoParams, _);
    options.storageAccountName = stoParams.name;

    // Create Default Network Resources
    var params = {};
    params.nicName = resourceName('nic');
    params.publicipName = resourceName('pip');
    params.publicipDomainName = resourceName('pip');
    params.vnetName = resourceName('vnet');
    params.vnetAddressPrefix = '10.0.0.0/16';
    params.vnetSubnetName = resourceName('snet');
    params.vnetSubnetAddressprefix = '10.0.1.0/24';
    params.location = location;
    var networkResourceProviderClient = utils.createNetworkResourceProviderClient(subscription);
    var netNic = new networkNic(cli, networkResourceProviderClient, resourceGroupName, params);
    netNic.createOrUpdateNICIfRequired(_);
    options.networkInterfaceConfigurationName = params.nicName;
    options.ipConfigurationName = params.publicipName;
    options.virtualNetworkName = params.vnetName;
    options.ipConfigurationSubnet = params.vnetSubnetName;

    // Setup Parameter Object
    var parametersObj = {
      name : options.name,
      location : options.location,
      sku : {
        capacity : options.skuCapacity,
        name : options.skuName,
        tier : options.skuTier
      },
      upgradePolicy : {
        mode : options.upgradePolicyMode
      },
      virtualMachineProfile : {
        networkProfile : {
          networkInterfaceConfigurations : [
            {
              name : options.networkInterfaceConfigurationName,
              primary : true,
              iPConfigurations : [
                {
                  name : options.ipConfigurationName,
                  subnet : {
                    referenceUri : getResourceId(subscription.id, options.resourceGroupName, 'Microsoft.Network', 'virtualNetworks', options.virtualNetworkName, 'subnets', options.ipConfigurationSubnet)
                  }
                }
              ]
            }
          ]
        },
        oSProfile : {
          computerNamePrefix : options.computerNamePrefix,
          adminPassword : options.adminPassword,
          adminUsername : options.adminUsername,
        },
        storageProfile : {
          imageReference : {
            offer : options.imageReferenceOffer,
            publisher : options.imageReferencePublisher,
            sku : options.imageReferenceSku,
            version : options.imageReferenceVersion
          },
          oSDisk : {
            caching : options.osDiskCaching,
            createOption : options.osDiskCreateOption,
            name : options.osDiskName,
            virtualHardDiskContainers : [
              getContainerAndVhdUri(options.storageAccountName, options.virtualHardDiskContainer)
            ]
          }
        }
      }
    };
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSets.createOrUpdate(options.resourceGroupName, parametersObj, _);
    cli.output.json(result);
  });

};
