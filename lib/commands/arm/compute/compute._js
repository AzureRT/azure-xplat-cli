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

var fs = require('fs');
var jsonpatch = require('json-patch');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

function beautify(jsonText) {
    var obj = JSON.parse(jsonText);
    return JSON.stringify(obj, null, 2);
}

exports.init = function (cli) {

//virtualMachineScaleSet -> CreateOrUpdate
/*
{"provisioningState":"","sku":{"capacity":null,"name":"","tier":""},"upgradePolicy":{"mode":""},"virtualMachineProfile":{"extensionProfile":{"extensions":[{"autoUpgradeMinorVersion":false,"extensionType":"","protectedSettings":"","provisioningState":"","publisher":"","settings":"","typeHandlerVersion":"","id":"","name":"","type":"","location":"","tags":{}}]},"networkProfile":{"networkInterfaceConfigurations":[{"iPConfigurations":[{"loadBalancerBackendAddressPools":[{"referenceUri":""}],"loadBalancerInboundNatPools":[{"referenceUri":""}],"name":"","subnet":{"referenceUri":""}}],"name":"","primary":null}]},"oSProfile":{"computerNamePrefix":"","adminPassword":"","adminUsername":"","customData":"","linuxConfiguration":{"disablePasswordAuthentication":null,"sshConfiguration":{"publicKeys":[{"keyData":"","path":""}]}},"secrets":[{"sourceVault":{"referenceUri":""},"vaultCertificates":[{"certificateStore":"","certificateUrl":""}]}],"windowsConfiguration":{"additionalUnattendContents":[{"componentName":"","content":"","passName":"","settingName":""}],"enableAutomaticUpdates":null,"provisionVMAgent":null,"timeZone":"","winRMConfiguration":{"listeners":[{"certificateUrl":"","protocol":""}]}}},"storageProfile":{"imageReference":{"offer":"","publisher":"","sku":"","version":""},"oSDisk":{"caching":"","createOption":"","name":"","operatingSystemType":"","sourceImage":{"uri":""},"virtualHardDiskContainers":[""]}}},"id":"","name":"","type":"","location":"","tags":{}}
*/
  var vmssCreateOrUpdate = cli.category('vmss').description($('Commands to manage your virtual machine scale set.'));
  vmssCreateOrUpdate.command('create-or-update')
  .description($('create-or-update method to manage your virtual machine scale set.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--parameters <parameters>', $('parameters'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, parameters, options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    cli.output.info('parameters = ' + options.parameters);
    var parametersObj = null;
    if (options.parameterFile) {
      cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
      var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
      parametersObj = JSON.parse(fileContent);
    }
    else {
      parametersObj = JSON.parse(options.parameters);
    }
    cli.output.info('parametersObj = ' + JSON.stringify(parametersObj));
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSets.createOrUpdate(options.resourceGroupName, parametersObj, _);
    cli.output.json(result);
  });
  var vmssCreateOrUpdatecreateOrUpdateParameters1 = vmssCreateOrUpdate.category('parameters')
  .description($('Commands to manage parameter for your virtual machine scale set.'));
  var vmssCreateOrUpdatecreateOrUpdateGenerate1 = vmssCreateOrUpdatecreateOrUpdateParameters1.category('generate')
  .description($('Commands to generate parameter file for your virtual machine scale set.'));
  vmssCreateOrUpdatecreateOrUpdateGenerate1.command('create-or-update')
  .description($('Generate vmssCreateOrUpdate parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .execute(function (options) {
    cli.output.info('{\"provisioningState\":\"\",\"sku\":{\"capacity\":null,\"name\":\"\",\"tier\":\"\"},\"upgradePolicy\":{\"mode\":\"\"},\"virtualMachineProfile\":{\"extensionProfile\":{\"extensions\":[{\"autoUpgradeMinorVersion\":false,\"extensionType\":\"\",\"protectedSettings\":\"\",\"provisioningState\":\"\",\"publisher\":\"\",\"settings\":\"\",\"typeHandlerVersion\":\"\",\"id\":\"\",\"name\":\"\",\"type\":\"\",\"location\":\"\",\"tags\":{}}]},\"networkProfile\":{\"networkInterfaceConfigurations\":[{\"iPConfigurations\":[{\"loadBalancerBackendAddressPools\":[{\"referenceUri\":\"\"}],\"loadBalancerInboundNatPools\":[{\"referenceUri\":\"\"}],\"name\":\"\",\"subnet\":{\"referenceUri\":\"\"}}],\"name\":\"\",\"primary\":null}]},\"oSProfile\":{\"computerNamePrefix\":\"\",\"adminPassword\":\"\",\"adminUsername\":\"\",\"customData\":\"\",\"linuxConfiguration\":{\"disablePasswordAuthentication\":null,\"sshConfiguration\":{\"publicKeys\":[{\"keyData\":\"\",\"path\":\"\"}]}},\"secrets\":[{\"sourceVault\":{\"referenceUri\":\"\"},\"vaultCertificates\":[{\"certificateStore\":\"\",\"certificateUrl\":\"\"}]}],\"windowsConfiguration\":{\"additionalUnattendContents\":[{\"componentName\":\"\",\"content\":\"\",\"passName\":\"\",\"settingName\":\"\"}],\"enableAutomaticUpdates\":null,\"provisionVMAgent\":null,\"timeZone\":\"\",\"winRMConfiguration\":{\"listeners\":[{\"certificateUrl\":\"\",\"protocol\":\"\"}]}}},\"storageProfile\":{\"imageReference\":{\"offer\":\"\",\"publisher\":\"\",\"sku\":\"\",\"version\":\"\"},\"oSDisk\":{\"caching\":\"\",\"createOption\":\"\",\"name\":\"\",\"operatingSystemType\":\"\",\"sourceImage\":{\"uri\":\"\"},\"virtualHardDiskContainers\":[\"\"]}}},\"id\":\"\",\"name\":\"\",\"type\":\"\",\"location\":\"\",\"tags\":{}}');
    var filePath = 'vmssCreateOrUpdate_createOrUpdate.json';
    if (options.parameterFile) {
      filePath = options.parameterFile;
    }
    fs.writeFileSync(filePath, beautify('{\r\n\"provisioningState\":\"\",\r\n\"sku\":{\r\n\"capacity\":null,\r\n\"name\":\"\",\r\n\"tier\":\"\"\r\n},\r\n\"upgradePolicy\":{\r\n\"mode\":\"\"\r\n},\r\n\"virtualMachineProfile\":{\r\n\"extensionProfile\":{\r\n\"extensions\":[\r\n{\r\n\"autoUpgradeMinorVersion\":false,\r\n\"extensionType\":\"\",\r\n\"protectedSettings\":\"\",\r\n\"provisioningState\":\"\",\r\n\"publisher\":\"\",\r\n\"settings\":\"\",\r\n\"typeHandlerVersion\":\"\",\r\n\"id\":\"\",\r\n\"name\":\"\",\r\n\"type\":\"\",\r\n\"location\":\"\",\r\n\"tags\":{\r\n\r\n}\r\n}\r\n]\r\n},\r\n\"networkProfile\":{\r\n\"networkInterfaceConfigurations\":[\r\n{\r\n\"iPConfigurations\":[\r\n{\r\n\"loadBalancerBackendAddressPools\":[\r\n{\r\n\"referenceUri\":\"\"\r\n}\r\n],\r\n\"loadBalancerInboundNatPools\":[\r\n{\r\n\"referenceUri\":\"\"\r\n}\r\n],\r\n\"name\":\"\",\r\n\"subnet\":{\r\n\"referenceUri\":\"\"\r\n}\r\n}\r\n],\r\n\"name\":\"\",\r\n\"primary\":null\r\n}\r\n]\r\n},\r\n\"oSProfile\":{\r\n\"computerNamePrefix\":\"\",\r\n\"adminPassword\":\"\",\r\n\"adminUsername\":\"\",\r\n\"customData\":\"\",\r\n\"linuxConfiguration\":{\r\n\"disablePasswordAuthentication\":null,\r\n\"sshConfiguration\":{\r\n\"publicKeys\":[\r\n{\r\n\"keyData\":\"\",\r\n\"path\":\"\"\r\n}\r\n]\r\n}\r\n},\r\n\"secrets\":[\r\n{\r\n\"sourceVault\":{\r\n\"referenceUri\":\"\"\r\n},\r\n\"vaultCertificates\":[\r\n{\r\n\"certificateStore\":\"\",\r\n\"certificateUrl\":\"\"\r\n}\r\n]\r\n}\r\n],\r\n\"windowsConfiguration\":{\r\n\"additionalUnattendContents\":[\r\n{\r\n\"componentName\":\"\",\r\n\"content\":\"\",\r\n\"passName\":\"\",\r\n\"settingName\":\"\"\r\n}\r\n],\r\n\"enableAutomaticUpdates\":null,\r\n\"provisionVMAgent\":null,\r\n\"timeZone\":\"\",\r\n\"winRMConfiguration\":{\r\n\"listeners\":[\r\n{\r\n\"certificateUrl\":\"\",\r\n\"protocol\":\"\"\r\n}\r\n]\r\n}\r\n}\r\n},\r\n\"storageProfile\":{\r\n\"imageReference\":{\r\n\"offer\":\"\",\r\n\"publisher\":\"\",\r\n\"sku\":\"\",\r\n\"version\":\"\"\r\n},\r\n\"oSDisk\":{\r\n\"caching\":\"\",\r\n\"createOption\":\"\",\r\n\"name\":\"\",\r\n\"operatingSystemType\":\"\",\r\n\"sourceImage\":{\r\n\"uri\":\"\"\r\n},\r\n\"virtualHardDiskContainers\":[\r\n\"\"\r\n]\r\n}\r\n}\r\n},\r\n\"id\":\"\",\r\n\"name\":\"\",\r\n\"type\":\"\",\r\n\"location\":\"\",\r\n\"tags\":{\r\n\r\n}\r\n}'));
    cli.output.info('=====================================');
    cli.output.info('Parameter file output to: ' + filePath);
    cli.output.info('=====================================');
  });

  vmssCreateOrUpdatecreateOrUpdateParameters1.command('patch')
  .description($('Command to patch vmssCreateOrUpdate parameter JSON file.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--operation <operation>', $('The JSON patch operation: add, remove, or replace.'))
  .option('--path <path>', $('The JSON data path, e.g.: \"foo/1\".'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .execute(function(options) {
    cli.output.info(options.parameterFile);
    cli.output.info(options.operation);
    cli.output.info(options.path);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    if (options.operation == 'add') {
      jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    }
    else if (options.operation == 'remove') {
      jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    }
    else if (options.operation == 'replace') {
      jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set virtual-machine-scale-set
  var catparametersVirtualMachineScaleSetVirtualMachineScaleSet0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetVirtualMachineScaleSet0 = catparametersVirtualMachineScaleSetVirtualMachineScaleSet0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetVirtualMachineScaleSet0 = parametersVirtualMachineScaleSetVirtualMachineScaleSet0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetVirtualMachineScaleSet0.command('virtual-machine-scale-set')
  .description($('Set catparametersVirtualMachineScaleSetVirtualMachineScaleSet0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--provisioning-state <provisioningState>', $('Set the provisioning-state value.'))
  .option('--sku <sku>', $('Set the sku value.'))
  .option('--upgrade-policy <upgradePolicy>', $('Set the upgrade-policy value.'))
  .option('--virtual-machine-profile <virtualMachineProfile>', $('Set the virtual-machine-profile value.'))
  .option('--id <id>', $('Set the id value.'))
  .option('--name <name>', $('Set the name value.'))
  .option('--type <type>', $('Set the type value.'))
  .option('--location <location>', $('Set the location value.'))
  .option('--tags <tags>', $('Set the tags value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '';
    var paramPath = options.path + '/' + 'provisioningState';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.provisioningState) {
      if (options.parse && options.provisioningState) {
        options.provisioningState = JSON.parse(options.provisioningState);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.provisioningState}]);
    }
    paramPath = options.path + '/' + 'sku';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.sku) {
      if (options.parse && options.sku) {
        options.sku = JSON.parse(options.sku);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.sku}]);
    }
    paramPath = options.path + '/' + 'upgradePolicy';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.upgradePolicy) {
      if (options.parse && options.upgradePolicy) {
        options.upgradePolicy = JSON.parse(options.upgradePolicy);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.upgradePolicy}]);
    }
    paramPath = options.path + '/' + 'virtualMachineProfile';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.virtualMachineProfile) {
      if (options.parse && options.virtualMachineProfile) {
        options.virtualMachineProfile = JSON.parse(options.virtualMachineProfile);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.virtualMachineProfile}]);
    }
    paramPath = options.path + '/' + 'id';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.id) {
      if (options.parse && options.id) {
        options.id = JSON.parse(options.id);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.id}]);
    }
    paramPath = options.path + '/' + 'name';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.name) {
      if (options.parse && options.name) {
        options.name = JSON.parse(options.name);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.name}]);
    }
    paramPath = options.path + '/' + 'type';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.type) {
      if (options.parse && options.type) {
        options.type = JSON.parse(options.type);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.type}]);
    }
    paramPath = options.path + '/' + 'location';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.location) {
      if (options.parse && options.location) {
        options.location = JSON.parse(options.location);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.location}]);
    }
    paramPath = options.path + '/' + 'tags';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.tags) {
      if (options.parse && options.tags) {
        options.tags = JSON.parse(options.tags);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.tags}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove virtual-machine-scale-set
  var catparametersVirtualMachineScaleSetVirtualMachineScaleSet1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetVirtualMachineScaleSet1 = catparametersVirtualMachineScaleSetVirtualMachineScaleSet1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetVirtualMachineScaleSet1 = parametersVirtualMachineScaleSetVirtualMachineScaleSet1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetVirtualMachineScaleSet1.command('virtual-machine-scale-set')
  .description($('Remove catparametersVirtualMachineScaleSetVirtualMachineScaleSet1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '';
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add virtual-machine-scale-set
  var catparametersVirtualMachineScaleSetVirtualMachineScaleSet2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetVirtualMachineScaleSet2 = catparametersVirtualMachineScaleSetVirtualMachineScaleSet2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetVirtualMachineScaleSet2 = parametersVirtualMachineScaleSetVirtualMachineScaleSet2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetVirtualMachineScaleSet2.command('virtual-machine-scale-set')
  .description($('Remove catparametersVirtualMachineScaleSetVirtualMachineScaleSet2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--provisioning-state <provisioningState>', $('Add the provisioning-state value.'))
  .option('--sku <sku>', $('Add the sku value.'))
  .option('--upgrade-policy <upgradePolicy>', $('Add the upgrade-policy value.'))
  .option('--virtual-machine-profile <virtualMachineProfile>', $('Add the virtual-machine-profile value.'))
  .option('--id <id>', $('Add the id value.'))
  .option('--name <name>', $('Add the name value.'))
  .option('--type <type>', $('Add the type value.'))
  .option('--location <location>', $('Add the location value.'))
  .option('--tags <tags>', $('Add the tags value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '' + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '' + '/' + 'provisioningState';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.provisioningState) {
      if (options.parse && options.provisioningState) {
        options.provisioningState = JSON.parse(options.provisioningState);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.provisioningState}]);
    }
    paramPath = '' + '/' + 'sku';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.sku) {
      if (options.parse && options.sku) {
        options.sku = JSON.parse(options.sku);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.sku}]);
    }
    paramPath = '' + '/' + 'upgradePolicy';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.upgradePolicy) {
      if (options.parse && options.upgradePolicy) {
        options.upgradePolicy = JSON.parse(options.upgradePolicy);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.upgradePolicy}]);
    }
    paramPath = '' + '/' + 'virtualMachineProfile';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.virtualMachineProfile) {
      if (options.parse && options.virtualMachineProfile) {
        options.virtualMachineProfile = JSON.parse(options.virtualMachineProfile);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.virtualMachineProfile}]);
    }
    paramPath = '' + '/' + 'id';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.id) {
      if (options.parse && options.id) {
        options.id = JSON.parse(options.id);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.id}]);
    }
    paramPath = '' + '/' + 'name';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.name) {
      if (options.parse && options.name) {
        options.name = JSON.parse(options.name);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.name}]);
    }
    paramPath = '' + '/' + 'type';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.type) {
      if (options.parse && options.type) {
        options.type = JSON.parse(options.type);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.type}]);
    }
    paramPath = '' + '/' + 'location';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.location) {
      if (options.parse && options.location) {
        options.location = JSON.parse(options.location);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.location}]);
    }
    paramPath = '' + '/' + 'tags';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.tags) {
      if (options.parse && options.tags) {
        options.tags = JSON.parse(options.tags);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.tags}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set sku
  var catparametersVirtualMachineScaleSetSku0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetSku0 = catparametersVirtualMachineScaleSetSku0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetSku0 = parametersVirtualMachineScaleSetSku0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetSku0.command('sku')
  .description($('Set catparametersVirtualMachineScaleSetSku0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--capacity <capacity>', $('Set the capacity value.'))
  .option('--name <name>', $('Set the name value.'))
  .option('--tier <tier>', $('Set the tier value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/sku';
    var paramPath = options.path + '/' + 'capacity';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.capacity) {
      if (options.parse && options.capacity) {
        options.capacity = JSON.parse(options.capacity);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.capacity}]);
    }
    paramPath = options.path + '/' + 'name';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.name) {
      if (options.parse && options.name) {
        options.name = JSON.parse(options.name);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.name}]);
    }
    paramPath = options.path + '/' + 'tier';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.tier) {
      if (options.parse && options.tier) {
        options.tier = JSON.parse(options.tier);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.tier}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove sku
  var catparametersVirtualMachineScaleSetSku1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetSku1 = catparametersVirtualMachineScaleSetSku1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetSku1 = parametersVirtualMachineScaleSetSku1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetSku1.command('sku')
  .description($('Remove catparametersVirtualMachineScaleSetSku1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/sku';
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add sku
  var catparametersVirtualMachineScaleSetSku2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetSku2 = catparametersVirtualMachineScaleSetSku2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetSku2 = parametersVirtualMachineScaleSetSku2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetSku2.command('sku')
  .description($('Remove catparametersVirtualMachineScaleSetSku2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--capacity <capacity>', $('Add the capacity value.'))
  .option('--name <name>', $('Add the name value.'))
  .option('--tier <tier>', $('Add the tier value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/sku' + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/sku' + '/' + 'capacity';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.capacity) {
      if (options.parse && options.capacity) {
        options.capacity = JSON.parse(options.capacity);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.capacity}]);
    }
    paramPath = '/sku' + '/' + 'name';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.name) {
      if (options.parse && options.name) {
        options.name = JSON.parse(options.name);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.name}]);
    }
    paramPath = '/sku' + '/' + 'tier';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.tier) {
      if (options.parse && options.tier) {
        options.tier = JSON.parse(options.tier);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.tier}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set upgrade-policy
  var catparametersVirtualMachineScaleSetUpgradePolicy0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetUpgradePolicy0 = catparametersVirtualMachineScaleSetUpgradePolicy0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetUpgradePolicy0 = parametersVirtualMachineScaleSetUpgradePolicy0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetUpgradePolicy0.command('upgrade-policy')
  .description($('Set catparametersVirtualMachineScaleSetUpgradePolicy0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--mode <mode>', $('Set the mode value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/upgradePolicy';
    var paramPath = options.path + '/' + 'mode';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.mode) {
      if (options.parse && options.mode) {
        options.mode = JSON.parse(options.mode);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.mode}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove upgrade-policy
  var catparametersVirtualMachineScaleSetUpgradePolicy1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetUpgradePolicy1 = catparametersVirtualMachineScaleSetUpgradePolicy1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetUpgradePolicy1 = parametersVirtualMachineScaleSetUpgradePolicy1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetUpgradePolicy1.command('upgrade-policy')
  .description($('Remove catparametersVirtualMachineScaleSetUpgradePolicy1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/upgradePolicy';
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add upgrade-policy
  var catparametersVirtualMachineScaleSetUpgradePolicy2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetUpgradePolicy2 = catparametersVirtualMachineScaleSetUpgradePolicy2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetUpgradePolicy2 = parametersVirtualMachineScaleSetUpgradePolicy2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetUpgradePolicy2.command('upgrade-policy')
  .description($('Remove catparametersVirtualMachineScaleSetUpgradePolicy2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--mode <mode>', $('Add the mode value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/upgradePolicy' + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/upgradePolicy' + '/' + 'mode';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.mode) {
      if (options.parse && options.mode) {
        options.mode = JSON.parse(options.mode);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.mode}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set virtual-machine-profile
  var catparametersVirtualMachineScaleSetVirtualMachineProfile0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetVirtualMachineProfile0 = catparametersVirtualMachineScaleSetVirtualMachineProfile0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetVirtualMachineProfile0 = parametersVirtualMachineScaleSetVirtualMachineProfile0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetVirtualMachineProfile0.command('virtual-machine-profile')
  .description($('Set catparametersVirtualMachineScaleSetVirtualMachineProfile0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--extension-profile <extensionProfile>', $('Set the extension-profile value.'))
  .option('--network-profile <networkProfile>', $('Set the network-profile value.'))
  .option('--os-profile <oSProfile>', $('Set the os-profile value.'))
  .option('--storage-profile <storageProfile>', $('Set the storage-profile value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile';
    var paramPath = options.path + '/' + 'extensionProfile';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.extensionProfile) {
      if (options.parse && options.extensionProfile) {
        options.extensionProfile = JSON.parse(options.extensionProfile);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.extensionProfile}]);
    }
    paramPath = options.path + '/' + 'networkProfile';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.networkProfile) {
      if (options.parse && options.networkProfile) {
        options.networkProfile = JSON.parse(options.networkProfile);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.networkProfile}]);
    }
    paramPath = options.path + '/' + 'oSProfile';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.oSProfile) {
      if (options.parse && options.oSProfile) {
        options.oSProfile = JSON.parse(options.oSProfile);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.oSProfile}]);
    }
    paramPath = options.path + '/' + 'storageProfile';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.storageProfile) {
      if (options.parse && options.storageProfile) {
        options.storageProfile = JSON.parse(options.storageProfile);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.storageProfile}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove virtual-machine-profile
  var catparametersVirtualMachineScaleSetVirtualMachineProfile1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetVirtualMachineProfile1 = catparametersVirtualMachineScaleSetVirtualMachineProfile1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetVirtualMachineProfile1 = parametersVirtualMachineScaleSetVirtualMachineProfile1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetVirtualMachineProfile1.command('virtual-machine-profile')
  .description($('Remove catparametersVirtualMachineScaleSetVirtualMachineProfile1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile';
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add virtual-machine-profile
  var catparametersVirtualMachineScaleSetVirtualMachineProfile2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetVirtualMachineProfile2 = catparametersVirtualMachineScaleSetVirtualMachineProfile2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetVirtualMachineProfile2 = parametersVirtualMachineScaleSetVirtualMachineProfile2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetVirtualMachineProfile2.command('virtual-machine-profile')
  .description($('Remove catparametersVirtualMachineScaleSetVirtualMachineProfile2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--extension-profile <extensionProfile>', $('Add the extension-profile value.'))
  .option('--network-profile <networkProfile>', $('Add the network-profile value.'))
  .option('--os-profile <oSProfile>', $('Add the os-profile value.'))
  .option('--storage-profile <storageProfile>', $('Add the storage-profile value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile' + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile' + '/' + 'extensionProfile';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.extensionProfile) {
      if (options.parse && options.extensionProfile) {
        options.extensionProfile = JSON.parse(options.extensionProfile);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.extensionProfile}]);
    }
    paramPath = '/virtualMachineProfile' + '/' + 'networkProfile';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.networkProfile) {
      if (options.parse && options.networkProfile) {
        options.networkProfile = JSON.parse(options.networkProfile);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.networkProfile}]);
    }
    paramPath = '/virtualMachineProfile' + '/' + 'oSProfile';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.oSProfile) {
      if (options.parse && options.oSProfile) {
        options.oSProfile = JSON.parse(options.oSProfile);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.oSProfile}]);
    }
    paramPath = '/virtualMachineProfile' + '/' + 'storageProfile';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.storageProfile) {
      if (options.parse && options.storageProfile) {
        options.storageProfile = JSON.parse(options.storageProfile);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.storageProfile}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set extension-profile
  var catparametersVirtualMachineScaleSetExtensionProfile0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetExtensionProfile0 = catparametersVirtualMachineScaleSetExtensionProfile0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetExtensionProfile0 = parametersVirtualMachineScaleSetExtensionProfile0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetExtensionProfile0.command('extension-profile')
  .description($('Set catparametersVirtualMachineScaleSetExtensionProfile0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--extensions <extensions>', $('Set the extensions value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/extensionProfile';
    var paramPath = options.path + '/' + 'extensions';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.extensions) {
      if (options.parse && options.extensions) {
        options.extensions = JSON.parse(options.extensions);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.extensions}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove extension-profile
  var catparametersVirtualMachineScaleSetExtensionProfile1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetExtensionProfile1 = catparametersVirtualMachineScaleSetExtensionProfile1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetExtensionProfile1 = parametersVirtualMachineScaleSetExtensionProfile1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetExtensionProfile1.command('extension-profile')
  .description($('Remove catparametersVirtualMachineScaleSetExtensionProfile1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/extensionProfile';
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add extension-profile
  var catparametersVirtualMachineScaleSetExtensionProfile2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetExtensionProfile2 = catparametersVirtualMachineScaleSetExtensionProfile2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetExtensionProfile2 = parametersVirtualMachineScaleSetExtensionProfile2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetExtensionProfile2.command('extension-profile')
  .description($('Remove catparametersVirtualMachineScaleSetExtensionProfile2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--extensions <extensions>', $('Add the extensions value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/extensionProfile' + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile/extensionProfile' + '/' + 'extensions';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.extensions) {
      if (options.parse && options.extensions) {
        options.extensions = JSON.parse(options.extensions);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.extensions}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set extensions
  var catparametersVirtualMachineScaleSetExtensions0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetExtensions0 = catparametersVirtualMachineScaleSetExtensions0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetExtensions0 = parametersVirtualMachineScaleSetExtensions0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetExtensions0.command('extensions')
  .description($('Set catparametersVirtualMachineScaleSetExtensions0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--index <index>', $('Indexer: index.'))
  .option('--auto-upgrade-minor-version <autoUpgradeMinorVersion>', $('Set the auto-upgrade-minor-version value.'))
  .option('--extension-type <extensionType>', $('Set the extension-type value.'))
  .option('--protected-settings <protectedSettings>', $('Set the protected-settings value.'))
  .option('--provisioning-state <provisioningState>', $('Set the provisioning-state value.'))
  .option('--publisher <publisher>', $('Set the publisher value.'))
  .option('--settings <settings>', $('Set the settings value.'))
  .option('--type-handler-version <typeHandlerVersion>', $('Set the type-handler-version value.'))
  .option('--id <id>', $('Set the id value.'))
  .option('--name <name>', $('Set the name value.'))
  .option('--type <type>', $('Set the type value.'))
  .option('--location <location>', $('Set the location value.'))
  .option('--tags <tags>', $('Set the tags value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/extensionProfile/extensions' + (options.index ? ('/' + options.index) : '');
    if (options.value) {
      jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    }
    var paramPath = options.path + '/' + 'autoUpgradeMinorVersion';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.autoUpgradeMinorVersion) {
      if (options.parse && options.autoUpgradeMinorVersion) {
        options.autoUpgradeMinorVersion = JSON.parse(options.autoUpgradeMinorVersion);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.autoUpgradeMinorVersion}]);
    }
    paramPath = options.path + '/' + 'extensionType';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.extensionType) {
      if (options.parse && options.extensionType) {
        options.extensionType = JSON.parse(options.extensionType);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.extensionType}]);
    }
    paramPath = options.path + '/' + 'protectedSettings';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.protectedSettings) {
      if (options.parse && options.protectedSettings) {
        options.protectedSettings = JSON.parse(options.protectedSettings);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.protectedSettings}]);
    }
    paramPath = options.path + '/' + 'provisioningState';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.provisioningState) {
      if (options.parse && options.provisioningState) {
        options.provisioningState = JSON.parse(options.provisioningState);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.provisioningState}]);
    }
    paramPath = options.path + '/' + 'publisher';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.publisher) {
      if (options.parse && options.publisher) {
        options.publisher = JSON.parse(options.publisher);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.publisher}]);
    }
    paramPath = options.path + '/' + 'settings';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.settings) {
      if (options.parse && options.settings) {
        options.settings = JSON.parse(options.settings);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.settings}]);
    }
    paramPath = options.path + '/' + 'typeHandlerVersion';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.typeHandlerVersion) {
      if (options.parse && options.typeHandlerVersion) {
        options.typeHandlerVersion = JSON.parse(options.typeHandlerVersion);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.typeHandlerVersion}]);
    }
    paramPath = options.path + '/' + 'id';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.id) {
      if (options.parse && options.id) {
        options.id = JSON.parse(options.id);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.id}]);
    }
    paramPath = options.path + '/' + 'name';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.name) {
      if (options.parse && options.name) {
        options.name = JSON.parse(options.name);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.name}]);
    }
    paramPath = options.path + '/' + 'type';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.type) {
      if (options.parse && options.type) {
        options.type = JSON.parse(options.type);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.type}]);
    }
    paramPath = options.path + '/' + 'location';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.location) {
      if (options.parse && options.location) {
        options.location = JSON.parse(options.location);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.location}]);
    }
    paramPath = options.path + '/' + 'tags';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.tags) {
      if (options.parse && options.tags) {
        options.tags = JSON.parse(options.tags);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.tags}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove extensions
  var catparametersVirtualMachineScaleSetExtensions1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetExtensions1 = catparametersVirtualMachineScaleSetExtensions1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetExtensions1 = parametersVirtualMachineScaleSetExtensions1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetExtensions1.command('extensions')
  .description($('Remove catparametersVirtualMachineScaleSetExtensions1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--index <index>', $('Indexer: index.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/extensionProfile/extensions' + (options.index ? ('/' + options.index) : '');
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add extensions
  var catparametersVirtualMachineScaleSetExtensions2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetExtensions2 = catparametersVirtualMachineScaleSetExtensions2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetExtensions2 = parametersVirtualMachineScaleSetExtensions2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetExtensions2.command('extensions')
  .description($('Remove catparametersVirtualMachineScaleSetExtensions2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--auto-upgrade-minor-version <autoUpgradeMinorVersion>', $('Add the auto-upgrade-minor-version value.'))
  .option('--extension-type <extensionType>', $('Add the extension-type value.'))
  .option('--protected-settings <protectedSettings>', $('Add the protected-settings value.'))
  .option('--provisioning-state <provisioningState>', $('Add the provisioning-state value.'))
  .option('--publisher <publisher>', $('Add the publisher value.'))
  .option('--settings <settings>', $('Add the settings value.'))
  .option('--type-handler-version <typeHandlerVersion>', $('Add the type-handler-version value.'))
  .option('--id <id>', $('Add the id value.'))
  .option('--name <name>', $('Add the name value.'))
  .option('--type <type>', $('Add the type value.'))
  .option('--location <location>', $('Add the location value.'))
  .option('--tags <tags>', $('Add the tags value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/extensionProfile/extensions' + (options.index ? ('/' + options.index) : '') + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile/extensionProfile/extensions' + (options.index ? ('/' + options.index) : '') + '/' + 'autoUpgradeMinorVersion';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.autoUpgradeMinorVersion) {
      if (options.parse && options.autoUpgradeMinorVersion) {
        options.autoUpgradeMinorVersion = JSON.parse(options.autoUpgradeMinorVersion);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.autoUpgradeMinorVersion}]);
    }
    paramPath = '/virtualMachineProfile/extensionProfile/extensions' + (options.index ? ('/' + options.index) : '') + '/' + 'extensionType';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.extensionType) {
      if (options.parse && options.extensionType) {
        options.extensionType = JSON.parse(options.extensionType);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.extensionType}]);
    }
    paramPath = '/virtualMachineProfile/extensionProfile/extensions' + (options.index ? ('/' + options.index) : '') + '/' + 'protectedSettings';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.protectedSettings) {
      if (options.parse && options.protectedSettings) {
        options.protectedSettings = JSON.parse(options.protectedSettings);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.protectedSettings}]);
    }
    paramPath = '/virtualMachineProfile/extensionProfile/extensions' + (options.index ? ('/' + options.index) : '') + '/' + 'provisioningState';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.provisioningState) {
      if (options.parse && options.provisioningState) {
        options.provisioningState = JSON.parse(options.provisioningState);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.provisioningState}]);
    }
    paramPath = '/virtualMachineProfile/extensionProfile/extensions' + (options.index ? ('/' + options.index) : '') + '/' + 'publisher';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.publisher) {
      if (options.parse && options.publisher) {
        options.publisher = JSON.parse(options.publisher);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.publisher}]);
    }
    paramPath = '/virtualMachineProfile/extensionProfile/extensions' + (options.index ? ('/' + options.index) : '') + '/' + 'settings';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.settings) {
      if (options.parse && options.settings) {
        options.settings = JSON.parse(options.settings);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.settings}]);
    }
    paramPath = '/virtualMachineProfile/extensionProfile/extensions' + (options.index ? ('/' + options.index) : '') + '/' + 'typeHandlerVersion';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.typeHandlerVersion) {
      if (options.parse && options.typeHandlerVersion) {
        options.typeHandlerVersion = JSON.parse(options.typeHandlerVersion);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.typeHandlerVersion}]);
    }
    paramPath = '/virtualMachineProfile/extensionProfile/extensions' + (options.index ? ('/' + options.index) : '') + '/' + 'id';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.id) {
      if (options.parse && options.id) {
        options.id = JSON.parse(options.id);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.id}]);
    }
    paramPath = '/virtualMachineProfile/extensionProfile/extensions' + (options.index ? ('/' + options.index) : '') + '/' + 'name';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.name) {
      if (options.parse && options.name) {
        options.name = JSON.parse(options.name);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.name}]);
    }
    paramPath = '/virtualMachineProfile/extensionProfile/extensions' + (options.index ? ('/' + options.index) : '') + '/' + 'type';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.type) {
      if (options.parse && options.type) {
        options.type = JSON.parse(options.type);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.type}]);
    }
    paramPath = '/virtualMachineProfile/extensionProfile/extensions' + (options.index ? ('/' + options.index) : '') + '/' + 'location';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.location) {
      if (options.parse && options.location) {
        options.location = JSON.parse(options.location);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.location}]);
    }
    paramPath = '/virtualMachineProfile/extensionProfile/extensions' + (options.index ? ('/' + options.index) : '') + '/' + 'tags';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.tags) {
      if (options.parse && options.tags) {
        options.tags = JSON.parse(options.tags);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.tags}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set network-profile
  var catparametersVirtualMachineScaleSetNetworkProfile0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetNetworkProfile0 = catparametersVirtualMachineScaleSetNetworkProfile0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetNetworkProfile0 = parametersVirtualMachineScaleSetNetworkProfile0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetNetworkProfile0.command('network-profile')
  .description($('Set catparametersVirtualMachineScaleSetNetworkProfile0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--network-interface-configurations <networkInterfaceConfigurations>', $('Set the network-interface-configurations value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/networkProfile';
    var paramPath = options.path + '/' + 'networkInterfaceConfigurations';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.networkInterfaceConfigurations) {
      if (options.parse && options.networkInterfaceConfigurations) {
        options.networkInterfaceConfigurations = JSON.parse(options.networkInterfaceConfigurations);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.networkInterfaceConfigurations}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove network-profile
  var catparametersVirtualMachineScaleSetNetworkProfile1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetNetworkProfile1 = catparametersVirtualMachineScaleSetNetworkProfile1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetNetworkProfile1 = parametersVirtualMachineScaleSetNetworkProfile1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetNetworkProfile1.command('network-profile')
  .description($('Remove catparametersVirtualMachineScaleSetNetworkProfile1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/networkProfile';
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add network-profile
  var catparametersVirtualMachineScaleSetNetworkProfile2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetNetworkProfile2 = catparametersVirtualMachineScaleSetNetworkProfile2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetNetworkProfile2 = parametersVirtualMachineScaleSetNetworkProfile2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetNetworkProfile2.command('network-profile')
  .description($('Remove catparametersVirtualMachineScaleSetNetworkProfile2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--network-interface-configurations <networkInterfaceConfigurations>', $('Add the network-interface-configurations value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/networkProfile' + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile/networkProfile' + '/' + 'networkInterfaceConfigurations';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.networkInterfaceConfigurations) {
      if (options.parse && options.networkInterfaceConfigurations) {
        options.networkInterfaceConfigurations = JSON.parse(options.networkInterfaceConfigurations);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.networkInterfaceConfigurations}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set network-interface-configurations
  var catparametersVirtualMachineScaleSetNetworkInterfaceConfigurations0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetNetworkInterfaceConfigurations0 = catparametersVirtualMachineScaleSetNetworkInterfaceConfigurations0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetNetworkInterfaceConfigurations0 = parametersVirtualMachineScaleSetNetworkInterfaceConfigurations0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetNetworkInterfaceConfigurations0.command('network-interface-configurations')
  .description($('Set catparametersVirtualMachineScaleSetNetworkInterfaceConfigurations0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--index <index>', $('Indexer: index.'))
  .option('--ip-configurations <ipConfigurations>', $('Set the ip-configurations value.'))
  .option('--name <name>', $('Set the name value.'))
  .option('--primary <primary>', $('Set the primary value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations' + (options.index ? ('/' + options.index) : '');
    if (options.value) {
      jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    }
    var paramPath = options.path + '/' + 'ipConfigurations';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.ipConfigurations) {
      if (options.parse && options.ipConfigurations) {
        options.ipConfigurations = JSON.parse(options.ipConfigurations);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.ipConfigurations}]);
    }
    paramPath = options.path + '/' + 'name';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.name) {
      if (options.parse && options.name) {
        options.name = JSON.parse(options.name);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.name}]);
    }
    paramPath = options.path + '/' + 'primary';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.primary) {
      if (options.parse && options.primary) {
        options.primary = JSON.parse(options.primary);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.primary}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove network-interface-configurations
  var catparametersVirtualMachineScaleSetNetworkInterfaceConfigurations1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetNetworkInterfaceConfigurations1 = catparametersVirtualMachineScaleSetNetworkInterfaceConfigurations1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetNetworkInterfaceConfigurations1 = parametersVirtualMachineScaleSetNetworkInterfaceConfigurations1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetNetworkInterfaceConfigurations1.command('network-interface-configurations')
  .description($('Remove catparametersVirtualMachineScaleSetNetworkInterfaceConfigurations1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--index <index>', $('Indexer: index.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations' + (options.index ? ('/' + options.index) : '');
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add network-interface-configurations
  var catparametersVirtualMachineScaleSetNetworkInterfaceConfigurations2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetNetworkInterfaceConfigurations2 = catparametersVirtualMachineScaleSetNetworkInterfaceConfigurations2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetNetworkInterfaceConfigurations2 = parametersVirtualMachineScaleSetNetworkInterfaceConfigurations2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetNetworkInterfaceConfigurations2.command('network-interface-configurations')
  .description($('Remove catparametersVirtualMachineScaleSetNetworkInterfaceConfigurations2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--ip-configurations <ipConfigurations>', $('Add the ip-configurations value.'))
  .option('--name <name>', $('Add the name value.'))
  .option('--primary <primary>', $('Add the primary value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations' + (options.index ? ('/' + options.index) : '') + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations' + (options.index ? ('/' + options.index) : '') + '/' + 'ipConfigurations';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.ipConfigurations) {
      if (options.parse && options.ipConfigurations) {
        options.ipConfigurations = JSON.parse(options.ipConfigurations);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.ipConfigurations}]);
    }
    paramPath = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations' + (options.index ? ('/' + options.index) : '') + '/' + 'name';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.name) {
      if (options.parse && options.name) {
        options.name = JSON.parse(options.name);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.name}]);
    }
    paramPath = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations' + (options.index ? ('/' + options.index) : '') + '/' + 'primary';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.primary) {
      if (options.parse && options.primary) {
        options.primary = JSON.parse(options.primary);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.primary}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set ip-configurations
  var catparametersVirtualMachineScaleSetIPConfigurations0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetIPConfigurations0 = catparametersVirtualMachineScaleSetIPConfigurations0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetIPConfigurations0 = parametersVirtualMachineScaleSetIPConfigurations0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetIPConfigurations0.command('ip-configurations')
  .description($('Set catparametersVirtualMachineScaleSetIPConfigurations0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--index <index>', $('Indexer: index.'))
  .option('--network-interface-configurations-index <network-interface-configurations-index>', $('Indexer: network-interface-configurations-index.'))
  .option('--load-balancer-backend-address-pools <loadBalancerBackendAddressPools>', $('Set the load-balancer-backend-address-pools value.'))
  .option('--load-balancer-inbound-nat-pools <loadBalancerInboundNatPools>', $('Set the load-balancer-inbound-nat-pools value.'))
  .option('--name <name>', $('Set the name value.'))
  .option('--subnet <subnet>', $('Set the subnet value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations/' + options.networkInterfaceConfigurationsIndex + '/iPConfigurations' + (options.index ? ('/' + options.index) : '');
    if (options.value) {
      jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    }
    var paramPath = options.path + '/' + 'loadBalancerBackendAddressPools';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.loadBalancerBackendAddressPools) {
      if (options.parse && options.loadBalancerBackendAddressPools) {
        options.loadBalancerBackendAddressPools = JSON.parse(options.loadBalancerBackendAddressPools);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.loadBalancerBackendAddressPools}]);
    }
    paramPath = options.path + '/' + 'loadBalancerInboundNatPools';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.loadBalancerInboundNatPools) {
      if (options.parse && options.loadBalancerInboundNatPools) {
        options.loadBalancerInboundNatPools = JSON.parse(options.loadBalancerInboundNatPools);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.loadBalancerInboundNatPools}]);
    }
    paramPath = options.path + '/' + 'name';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.name) {
      if (options.parse && options.name) {
        options.name = JSON.parse(options.name);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.name}]);
    }
    paramPath = options.path + '/' + 'subnet';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.subnet) {
      if (options.parse && options.subnet) {
        options.subnet = JSON.parse(options.subnet);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.subnet}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove ip-configurations
  var catparametersVirtualMachineScaleSetIPConfigurations1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetIPConfigurations1 = catparametersVirtualMachineScaleSetIPConfigurations1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetIPConfigurations1 = parametersVirtualMachineScaleSetIPConfigurations1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetIPConfigurations1.command('ip-configurations')
  .description($('Remove catparametersVirtualMachineScaleSetIPConfigurations1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--index <index>', $('Indexer: index.'))
  .option('--network-interface-configurations-index <network-interface-configurations-index>', $('Indexer: network-interface-configurations-index.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations/' + options.networkInterfaceConfigurationsIndex + '/iPConfigurations' + (options.index ? ('/' + options.index) : '');
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add ip-configurations
  var catparametersVirtualMachineScaleSetIPConfigurations2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetIPConfigurations2 = catparametersVirtualMachineScaleSetIPConfigurations2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetIPConfigurations2 = parametersVirtualMachineScaleSetIPConfigurations2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetIPConfigurations2.command('ip-configurations')
  .description($('Remove catparametersVirtualMachineScaleSetIPConfigurations2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--load-balancer-backend-address-pools <loadBalancerBackendAddressPools>', $('Add the load-balancer-backend-address-pools value.'))
  .option('--load-balancer-inbound-nat-pools <loadBalancerInboundNatPools>', $('Add the load-balancer-inbound-nat-pools value.'))
  .option('--name <name>', $('Add the name value.'))
  .option('--subnet <subnet>', $('Add the subnet value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations/' + options.networkInterfaceConfigurationsIndex + '/iPConfigurations' + (options.index ? ('/' + options.index) : '') + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations/' + options.networkInterfaceConfigurationsIndex + '/iPConfigurations' + (options.index ? ('/' + options.index) : '') + '/' + 'loadBalancerBackendAddressPools';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.loadBalancerBackendAddressPools) {
      if (options.parse && options.loadBalancerBackendAddressPools) {
        options.loadBalancerBackendAddressPools = JSON.parse(options.loadBalancerBackendAddressPools);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.loadBalancerBackendAddressPools}]);
    }
    paramPath = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations/' + options.networkInterfaceConfigurationsIndex + '/iPConfigurations' + (options.index ? ('/' + options.index) : '') + '/' + 'loadBalancerInboundNatPools';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.loadBalancerInboundNatPools) {
      if (options.parse && options.loadBalancerInboundNatPools) {
        options.loadBalancerInboundNatPools = JSON.parse(options.loadBalancerInboundNatPools);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.loadBalancerInboundNatPools}]);
    }
    paramPath = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations/' + options.networkInterfaceConfigurationsIndex + '/iPConfigurations' + (options.index ? ('/' + options.index) : '') + '/' + 'name';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.name) {
      if (options.parse && options.name) {
        options.name = JSON.parse(options.name);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.name}]);
    }
    paramPath = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations/' + options.networkInterfaceConfigurationsIndex + '/iPConfigurations' + (options.index ? ('/' + options.index) : '') + '/' + 'subnet';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.subnet) {
      if (options.parse && options.subnet) {
        options.subnet = JSON.parse(options.subnet);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.subnet}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set load-balancer-backend-address-pools
  var catparametersVirtualMachineScaleSetLoadBalancerBackendAddressPools0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetLoadBalancerBackendAddressPools0 = catparametersVirtualMachineScaleSetLoadBalancerBackendAddressPools0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetLoadBalancerBackendAddressPools0 = parametersVirtualMachineScaleSetLoadBalancerBackendAddressPools0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetLoadBalancerBackendAddressPools0.command('load-balancer-backend-address-pools')
  .description($('Set catparametersVirtualMachineScaleSetLoadBalancerBackendAddressPools0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--index <index>', $('Indexer: index.'))
  .option('--ip-configurations-index <ip-configurations-index>', $('Indexer: ip-configurations-index.'))
  .option('--network-interface-configurations-index <network-interface-configurations-index>', $('Indexer: network-interface-configurations-index.'))
  .option('--reference-uri <referenceUri>', $('Set the reference-uri value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations/' + options.networkInterfaceConfigurationsIndex + '/iPConfigurations/' + options.ipConfigurationsIndex + '/loadBalancerBackendAddressPools' + (options.index ? ('/' + options.index) : '');
    if (options.value) {
      jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    }
    var paramPath = options.path + '/' + 'referenceUri';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.referenceUri) {
      if (options.parse && options.referenceUri) {
        options.referenceUri = JSON.parse(options.referenceUri);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.referenceUri}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove load-balancer-backend-address-pools
  var catparametersVirtualMachineScaleSetLoadBalancerBackendAddressPools1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetLoadBalancerBackendAddressPools1 = catparametersVirtualMachineScaleSetLoadBalancerBackendAddressPools1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetLoadBalancerBackendAddressPools1 = parametersVirtualMachineScaleSetLoadBalancerBackendAddressPools1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetLoadBalancerBackendAddressPools1.command('load-balancer-backend-address-pools')
  .description($('Remove catparametersVirtualMachineScaleSetLoadBalancerBackendAddressPools1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--index <index>', $('Indexer: index.'))
  .option('--ip-configurations-index <ip-configurations-index>', $('Indexer: ip-configurations-index.'))
  .option('--network-interface-configurations-index <network-interface-configurations-index>', $('Indexer: network-interface-configurations-index.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations/' + options.networkInterfaceConfigurationsIndex + '/iPConfigurations/' + options.ipConfigurationsIndex + '/loadBalancerBackendAddressPools' + (options.index ? ('/' + options.index) : '');
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add load-balancer-backend-address-pools
  var catparametersVirtualMachineScaleSetLoadBalancerBackendAddressPools2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetLoadBalancerBackendAddressPools2 = catparametersVirtualMachineScaleSetLoadBalancerBackendAddressPools2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetLoadBalancerBackendAddressPools2 = parametersVirtualMachineScaleSetLoadBalancerBackendAddressPools2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetLoadBalancerBackendAddressPools2.command('load-balancer-backend-address-pools')
  .description($('Remove catparametersVirtualMachineScaleSetLoadBalancerBackendAddressPools2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--reference-uri <referenceUri>', $('Add the reference-uri value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations/' + options.networkInterfaceConfigurationsIndex + '/iPConfigurations/' + options.ipConfigurationsIndex + '/loadBalancerBackendAddressPools' + (options.index ? ('/' + options.index) : '') + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations/' + options.networkInterfaceConfigurationsIndex + '/iPConfigurations/' + options.ipConfigurationsIndex + '/loadBalancerBackendAddressPools' + (options.index ? ('/' + options.index) : '') + '/' + 'referenceUri';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.referenceUri) {
      if (options.parse && options.referenceUri) {
        options.referenceUri = JSON.parse(options.referenceUri);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.referenceUri}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set load-balancer-inbound-nat-pools
  var catparametersVirtualMachineScaleSetLoadBalancerInboundNatPools0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetLoadBalancerInboundNatPools0 = catparametersVirtualMachineScaleSetLoadBalancerInboundNatPools0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetLoadBalancerInboundNatPools0 = parametersVirtualMachineScaleSetLoadBalancerInboundNatPools0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetLoadBalancerInboundNatPools0.command('load-balancer-inbound-nat-pools')
  .description($('Set catparametersVirtualMachineScaleSetLoadBalancerInboundNatPools0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--index <index>', $('Indexer: index.'))
  .option('--ip-configurations-index <ip-configurations-index>', $('Indexer: ip-configurations-index.'))
  .option('--network-interface-configurations-index <network-interface-configurations-index>', $('Indexer: network-interface-configurations-index.'))
  .option('--reference-uri <referenceUri>', $('Set the reference-uri value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations/' + options.networkInterfaceConfigurationsIndex + '/iPConfigurations/' + options.ipConfigurationsIndex + '/loadBalancerInboundNatPools' + (options.index ? ('/' + options.index) : '');
    if (options.value) {
      jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    }
    var paramPath = options.path + '/' + 'referenceUri';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.referenceUri) {
      if (options.parse && options.referenceUri) {
        options.referenceUri = JSON.parse(options.referenceUri);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.referenceUri}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove load-balancer-inbound-nat-pools
  var catparametersVirtualMachineScaleSetLoadBalancerInboundNatPools1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetLoadBalancerInboundNatPools1 = catparametersVirtualMachineScaleSetLoadBalancerInboundNatPools1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetLoadBalancerInboundNatPools1 = parametersVirtualMachineScaleSetLoadBalancerInboundNatPools1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetLoadBalancerInboundNatPools1.command('load-balancer-inbound-nat-pools')
  .description($('Remove catparametersVirtualMachineScaleSetLoadBalancerInboundNatPools1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--index <index>', $('Indexer: index.'))
  .option('--ip-configurations-index <ip-configurations-index>', $('Indexer: ip-configurations-index.'))
  .option('--network-interface-configurations-index <network-interface-configurations-index>', $('Indexer: network-interface-configurations-index.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations/' + options.networkInterfaceConfigurationsIndex + '/iPConfigurations/' + options.ipConfigurationsIndex + '/loadBalancerInboundNatPools' + (options.index ? ('/' + options.index) : '');
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add load-balancer-inbound-nat-pools
  var catparametersVirtualMachineScaleSetLoadBalancerInboundNatPools2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetLoadBalancerInboundNatPools2 = catparametersVirtualMachineScaleSetLoadBalancerInboundNatPools2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetLoadBalancerInboundNatPools2 = parametersVirtualMachineScaleSetLoadBalancerInboundNatPools2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetLoadBalancerInboundNatPools2.command('load-balancer-inbound-nat-pools')
  .description($('Remove catparametersVirtualMachineScaleSetLoadBalancerInboundNatPools2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--reference-uri <referenceUri>', $('Add the reference-uri value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations/' + options.networkInterfaceConfigurationsIndex + '/iPConfigurations/' + options.ipConfigurationsIndex + '/loadBalancerInboundNatPools' + (options.index ? ('/' + options.index) : '') + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations/' + options.networkInterfaceConfigurationsIndex + '/iPConfigurations/' + options.ipConfigurationsIndex + '/loadBalancerInboundNatPools' + (options.index ? ('/' + options.index) : '') + '/' + 'referenceUri';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.referenceUri) {
      if (options.parse && options.referenceUri) {
        options.referenceUri = JSON.parse(options.referenceUri);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.referenceUri}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set subnet
  var catparametersVirtualMachineScaleSetSubnet0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetSubnet0 = catparametersVirtualMachineScaleSetSubnet0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetSubnet0 = parametersVirtualMachineScaleSetSubnet0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetSubnet0.command('subnet')
  .description($('Set catparametersVirtualMachineScaleSetSubnet0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--ip-configurations-index <ip-configurations-index>', $('Indexer: ip-configurations-index.'))
  .option('--network-interface-configurations-index <network-interface-configurations-index>', $('Indexer: network-interface-configurations-index.'))
  .option('--reference-uri <referenceUri>', $('Set the reference-uri value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations/' + options.networkInterfaceConfigurationsIndex + '/iPConfigurations/' + options.ipConfigurationsIndex + '/subnet';
    var paramPath = options.path + '/' + 'referenceUri';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.referenceUri) {
      if (options.parse && options.referenceUri) {
        options.referenceUri = JSON.parse(options.referenceUri);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.referenceUri}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove subnet
  var catparametersVirtualMachineScaleSetSubnet1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetSubnet1 = catparametersVirtualMachineScaleSetSubnet1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetSubnet1 = parametersVirtualMachineScaleSetSubnet1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetSubnet1.command('subnet')
  .description($('Remove catparametersVirtualMachineScaleSetSubnet1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--ip-configurations-index <ip-configurations-index>', $('Indexer: ip-configurations-index.'))
  .option('--network-interface-configurations-index <network-interface-configurations-index>', $('Indexer: network-interface-configurations-index.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations/' + options.networkInterfaceConfigurationsIndex + '/iPConfigurations/' + options.ipConfigurationsIndex + '/subnet';
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add subnet
  var catparametersVirtualMachineScaleSetSubnet2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetSubnet2 = catparametersVirtualMachineScaleSetSubnet2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetSubnet2 = parametersVirtualMachineScaleSetSubnet2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetSubnet2.command('subnet')
  .description($('Remove catparametersVirtualMachineScaleSetSubnet2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--reference-uri <referenceUri>', $('Add the reference-uri value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations/' + options.networkInterfaceConfigurationsIndex + '/iPConfigurations/' + options.ipConfigurationsIndex + '/subnet' + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile/networkProfile/networkInterfaceConfigurations/' + options.networkInterfaceConfigurationsIndex + '/iPConfigurations/' + options.ipConfigurationsIndex + '/subnet' + '/' + 'referenceUri';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.referenceUri) {
      if (options.parse && options.referenceUri) {
        options.referenceUri = JSON.parse(options.referenceUri);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.referenceUri}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set os-profile
  var catparametersVirtualMachineScaleSetOSProfile0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetOSProfile0 = catparametersVirtualMachineScaleSetOSProfile0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetOSProfile0 = parametersVirtualMachineScaleSetOSProfile0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetOSProfile0.command('os-profile')
  .description($('Set catparametersVirtualMachineScaleSetOSProfile0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--computer-name-prefix <computerNamePrefix>', $('Set the computer-name-prefix value.'))
  .option('--admin-password <adminPassword>', $('Set the admin-password value.'))
  .option('--admin-username <adminUsername>', $('Set the admin-username value.'))
  .option('--custom-data <customData>', $('Set the custom-data value.'))
  .option('--linux-configuration <linuxConfiguration>', $('Set the linux-configuration value.'))
  .option('--secrets <secrets>', $('Set the secrets value.'))
  .option('--windows-configuration <windowsConfiguration>', $('Set the windows-configuration value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/oSProfile';
    var paramPath = options.path + '/' + 'computerNamePrefix';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.computerNamePrefix) {
      if (options.parse && options.computerNamePrefix) {
        options.computerNamePrefix = JSON.parse(options.computerNamePrefix);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.computerNamePrefix}]);
    }
    paramPath = options.path + '/' + 'adminPassword';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.adminPassword) {
      if (options.parse && options.adminPassword) {
        options.adminPassword = JSON.parse(options.adminPassword);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.adminPassword}]);
    }
    paramPath = options.path + '/' + 'adminUsername';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.adminUsername) {
      if (options.parse && options.adminUsername) {
        options.adminUsername = JSON.parse(options.adminUsername);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.adminUsername}]);
    }
    paramPath = options.path + '/' + 'customData';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.customData) {
      if (options.parse && options.customData) {
        options.customData = JSON.parse(options.customData);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.customData}]);
    }
    paramPath = options.path + '/' + 'linuxConfiguration';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.linuxConfiguration) {
      if (options.parse && options.linuxConfiguration) {
        options.linuxConfiguration = JSON.parse(options.linuxConfiguration);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.linuxConfiguration}]);
    }
    paramPath = options.path + '/' + 'secrets';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.secrets) {
      if (options.parse && options.secrets) {
        options.secrets = JSON.parse(options.secrets);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.secrets}]);
    }
    paramPath = options.path + '/' + 'windowsConfiguration';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.windowsConfiguration) {
      if (options.parse && options.windowsConfiguration) {
        options.windowsConfiguration = JSON.parse(options.windowsConfiguration);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.windowsConfiguration}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove os-profile
  var catparametersVirtualMachineScaleSetOSProfile1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetOSProfile1 = catparametersVirtualMachineScaleSetOSProfile1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetOSProfile1 = parametersVirtualMachineScaleSetOSProfile1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetOSProfile1.command('os-profile')
  .description($('Remove catparametersVirtualMachineScaleSetOSProfile1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/oSProfile';
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add os-profile
  var catparametersVirtualMachineScaleSetOSProfile2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetOSProfile2 = catparametersVirtualMachineScaleSetOSProfile2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetOSProfile2 = parametersVirtualMachineScaleSetOSProfile2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetOSProfile2.command('os-profile')
  .description($('Remove catparametersVirtualMachineScaleSetOSProfile2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--computer-name-prefix <computerNamePrefix>', $('Add the computer-name-prefix value.'))
  .option('--admin-password <adminPassword>', $('Add the admin-password value.'))
  .option('--admin-username <adminUsername>', $('Add the admin-username value.'))
  .option('--custom-data <customData>', $('Add the custom-data value.'))
  .option('--linux-configuration <linuxConfiguration>', $('Add the linux-configuration value.'))
  .option('--secrets <secrets>', $('Add the secrets value.'))
  .option('--windows-configuration <windowsConfiguration>', $('Add the windows-configuration value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/oSProfile' + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile/oSProfile' + '/' + 'computerNamePrefix';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.computerNamePrefix) {
      if (options.parse && options.computerNamePrefix) {
        options.computerNamePrefix = JSON.parse(options.computerNamePrefix);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.computerNamePrefix}]);
    }
    paramPath = '/virtualMachineProfile/oSProfile' + '/' + 'adminPassword';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.adminPassword) {
      if (options.parse && options.adminPassword) {
        options.adminPassword = JSON.parse(options.adminPassword);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.adminPassword}]);
    }
    paramPath = '/virtualMachineProfile/oSProfile' + '/' + 'adminUsername';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.adminUsername) {
      if (options.parse && options.adminUsername) {
        options.adminUsername = JSON.parse(options.adminUsername);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.adminUsername}]);
    }
    paramPath = '/virtualMachineProfile/oSProfile' + '/' + 'customData';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.customData) {
      if (options.parse && options.customData) {
        options.customData = JSON.parse(options.customData);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.customData}]);
    }
    paramPath = '/virtualMachineProfile/oSProfile' + '/' + 'linuxConfiguration';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.linuxConfiguration) {
      if (options.parse && options.linuxConfiguration) {
        options.linuxConfiguration = JSON.parse(options.linuxConfiguration);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.linuxConfiguration}]);
    }
    paramPath = '/virtualMachineProfile/oSProfile' + '/' + 'secrets';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.secrets) {
      if (options.parse && options.secrets) {
        options.secrets = JSON.parse(options.secrets);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.secrets}]);
    }
    paramPath = '/virtualMachineProfile/oSProfile' + '/' + 'windowsConfiguration';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.windowsConfiguration) {
      if (options.parse && options.windowsConfiguration) {
        options.windowsConfiguration = JSON.parse(options.windowsConfiguration);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.windowsConfiguration}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set linux-configuration
  var catparametersVirtualMachineScaleSetLinuxConfiguration0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetLinuxConfiguration0 = catparametersVirtualMachineScaleSetLinuxConfiguration0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetLinuxConfiguration0 = parametersVirtualMachineScaleSetLinuxConfiguration0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetLinuxConfiguration0.command('linux-configuration')
  .description($('Set catparametersVirtualMachineScaleSetLinuxConfiguration0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--disable-password-authentication <disablePasswordAuthentication>', $('Set the disable-password-authentication value.'))
  .option('--ssh-configuration <sshConfiguration>', $('Set the ssh-configuration value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/oSProfile/linuxConfiguration';
    var paramPath = options.path + '/' + 'disablePasswordAuthentication';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.disablePasswordAuthentication) {
      if (options.parse && options.disablePasswordAuthentication) {
        options.disablePasswordAuthentication = JSON.parse(options.disablePasswordAuthentication);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.disablePasswordAuthentication}]);
    }
    paramPath = options.path + '/' + 'sshConfiguration';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.sshConfiguration) {
      if (options.parse && options.sshConfiguration) {
        options.sshConfiguration = JSON.parse(options.sshConfiguration);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.sshConfiguration}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove linux-configuration
  var catparametersVirtualMachineScaleSetLinuxConfiguration1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetLinuxConfiguration1 = catparametersVirtualMachineScaleSetLinuxConfiguration1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetLinuxConfiguration1 = parametersVirtualMachineScaleSetLinuxConfiguration1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetLinuxConfiguration1.command('linux-configuration')
  .description($('Remove catparametersVirtualMachineScaleSetLinuxConfiguration1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/oSProfile/linuxConfiguration';
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add linux-configuration
  var catparametersVirtualMachineScaleSetLinuxConfiguration2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetLinuxConfiguration2 = catparametersVirtualMachineScaleSetLinuxConfiguration2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetLinuxConfiguration2 = parametersVirtualMachineScaleSetLinuxConfiguration2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetLinuxConfiguration2.command('linux-configuration')
  .description($('Remove catparametersVirtualMachineScaleSetLinuxConfiguration2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--disable-password-authentication <disablePasswordAuthentication>', $('Add the disable-password-authentication value.'))
  .option('--ssh-configuration <sshConfiguration>', $('Add the ssh-configuration value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/oSProfile/linuxConfiguration' + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile/oSProfile/linuxConfiguration' + '/' + 'disablePasswordAuthentication';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.disablePasswordAuthentication) {
      if (options.parse && options.disablePasswordAuthentication) {
        options.disablePasswordAuthentication = JSON.parse(options.disablePasswordAuthentication);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.disablePasswordAuthentication}]);
    }
    paramPath = '/virtualMachineProfile/oSProfile/linuxConfiguration' + '/' + 'sshConfiguration';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.sshConfiguration) {
      if (options.parse && options.sshConfiguration) {
        options.sshConfiguration = JSON.parse(options.sshConfiguration);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.sshConfiguration}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set ssh-configuration
  var catparametersVirtualMachineScaleSetSshConfiguration0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetSshConfiguration0 = catparametersVirtualMachineScaleSetSshConfiguration0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetSshConfiguration0 = parametersVirtualMachineScaleSetSshConfiguration0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetSshConfiguration0.command('ssh-configuration')
  .description($('Set catparametersVirtualMachineScaleSetSshConfiguration0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--public-keys <publicKeys>', $('Set the public-keys value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/oSProfile/linuxConfiguration/sshConfiguration';
    var paramPath = options.path + '/' + 'publicKeys';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.publicKeys) {
      if (options.parse && options.publicKeys) {
        options.publicKeys = JSON.parse(options.publicKeys);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.publicKeys}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove ssh-configuration
  var catparametersVirtualMachineScaleSetSshConfiguration1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetSshConfiguration1 = catparametersVirtualMachineScaleSetSshConfiguration1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetSshConfiguration1 = parametersVirtualMachineScaleSetSshConfiguration1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetSshConfiguration1.command('ssh-configuration')
  .description($('Remove catparametersVirtualMachineScaleSetSshConfiguration1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/oSProfile/linuxConfiguration/sshConfiguration';
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add ssh-configuration
  var catparametersVirtualMachineScaleSetSshConfiguration2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetSshConfiguration2 = catparametersVirtualMachineScaleSetSshConfiguration2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetSshConfiguration2 = parametersVirtualMachineScaleSetSshConfiguration2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetSshConfiguration2.command('ssh-configuration')
  .description($('Remove catparametersVirtualMachineScaleSetSshConfiguration2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--public-keys <publicKeys>', $('Add the public-keys value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/oSProfile/linuxConfiguration/sshConfiguration' + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile/oSProfile/linuxConfiguration/sshConfiguration' + '/' + 'publicKeys';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.publicKeys) {
      if (options.parse && options.publicKeys) {
        options.publicKeys = JSON.parse(options.publicKeys);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.publicKeys}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set public-keys
  var catparametersVirtualMachineScaleSetPublicKeys0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetPublicKeys0 = catparametersVirtualMachineScaleSetPublicKeys0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetPublicKeys0 = parametersVirtualMachineScaleSetPublicKeys0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetPublicKeys0.command('public-keys')
  .description($('Set catparametersVirtualMachineScaleSetPublicKeys0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--index <index>', $('Indexer: index.'))
  .option('--key-data <keyData>', $('Set the key-data value.'))
  .option('--path <path>', $('Set the path value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/oSProfile/linuxConfiguration/sshConfiguration/publicKeys' + (options.index ? ('/' + options.index) : '');
    if (options.value) {
      jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    }
    var paramPath = options.path + '/' + 'keyData';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.keyData) {
      if (options.parse && options.keyData) {
        options.keyData = JSON.parse(options.keyData);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.keyData}]);
    }
    paramPath = options.path + '/' + 'path';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.path) {
      if (options.parse && options.path) {
        options.path = JSON.parse(options.path);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.path}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove public-keys
  var catparametersVirtualMachineScaleSetPublicKeys1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetPublicKeys1 = catparametersVirtualMachineScaleSetPublicKeys1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetPublicKeys1 = parametersVirtualMachineScaleSetPublicKeys1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetPublicKeys1.command('public-keys')
  .description($('Remove catparametersVirtualMachineScaleSetPublicKeys1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--index <index>', $('Indexer: index.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/oSProfile/linuxConfiguration/sshConfiguration/publicKeys' + (options.index ? ('/' + options.index) : '');
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add public-keys
  var catparametersVirtualMachineScaleSetPublicKeys2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetPublicKeys2 = catparametersVirtualMachineScaleSetPublicKeys2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetPublicKeys2 = parametersVirtualMachineScaleSetPublicKeys2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetPublicKeys2.command('public-keys')
  .description($('Remove catparametersVirtualMachineScaleSetPublicKeys2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--key-data <keyData>', $('Add the key-data value.'))
  .option('--path <path>', $('Add the path value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/oSProfile/linuxConfiguration/sshConfiguration/publicKeys' + (options.index ? ('/' + options.index) : '') + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile/oSProfile/linuxConfiguration/sshConfiguration/publicKeys' + (options.index ? ('/' + options.index) : '') + '/' + 'keyData';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.keyData) {
      if (options.parse && options.keyData) {
        options.keyData = JSON.parse(options.keyData);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.keyData}]);
    }
    paramPath = '/virtualMachineProfile/oSProfile/linuxConfiguration/sshConfiguration/publicKeys' + (options.index ? ('/' + options.index) : '') + '/' + 'path';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.path) {
      if (options.parse && options.path) {
        options.path = JSON.parse(options.path);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.path}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set secrets
  var catparametersVirtualMachineScaleSetSecrets0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetSecrets0 = catparametersVirtualMachineScaleSetSecrets0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetSecrets0 = parametersVirtualMachineScaleSetSecrets0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetSecrets0.command('secrets')
  .description($('Set catparametersVirtualMachineScaleSetSecrets0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--index <index>', $('Indexer: index.'))
  .option('--source-vault <sourceVault>', $('Set the source-vault value.'))
  .option('--vault-certificates <vaultCertificates>', $('Set the vault-certificates value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/oSProfile/secrets' + (options.index ? ('/' + options.index) : '');
    if (options.value) {
      jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    }
    var paramPath = options.path + '/' + 'sourceVault';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.sourceVault) {
      if (options.parse && options.sourceVault) {
        options.sourceVault = JSON.parse(options.sourceVault);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.sourceVault}]);
    }
    paramPath = options.path + '/' + 'vaultCertificates';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.vaultCertificates) {
      if (options.parse && options.vaultCertificates) {
        options.vaultCertificates = JSON.parse(options.vaultCertificates);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.vaultCertificates}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove secrets
  var catparametersVirtualMachineScaleSetSecrets1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetSecrets1 = catparametersVirtualMachineScaleSetSecrets1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetSecrets1 = parametersVirtualMachineScaleSetSecrets1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetSecrets1.command('secrets')
  .description($('Remove catparametersVirtualMachineScaleSetSecrets1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--index <index>', $('Indexer: index.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/oSProfile/secrets' + (options.index ? ('/' + options.index) : '');
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add secrets
  var catparametersVirtualMachineScaleSetSecrets2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetSecrets2 = catparametersVirtualMachineScaleSetSecrets2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetSecrets2 = parametersVirtualMachineScaleSetSecrets2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetSecrets2.command('secrets')
  .description($('Remove catparametersVirtualMachineScaleSetSecrets2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--source-vault <sourceVault>', $('Add the source-vault value.'))
  .option('--vault-certificates <vaultCertificates>', $('Add the vault-certificates value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/oSProfile/secrets' + (options.index ? ('/' + options.index) : '') + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile/oSProfile/secrets' + (options.index ? ('/' + options.index) : '') + '/' + 'sourceVault';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.sourceVault) {
      if (options.parse && options.sourceVault) {
        options.sourceVault = JSON.parse(options.sourceVault);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.sourceVault}]);
    }
    paramPath = '/virtualMachineProfile/oSProfile/secrets' + (options.index ? ('/' + options.index) : '') + '/' + 'vaultCertificates';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.vaultCertificates) {
      if (options.parse && options.vaultCertificates) {
        options.vaultCertificates = JSON.parse(options.vaultCertificates);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.vaultCertificates}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set source-vault
  var catparametersVirtualMachineScaleSetSourceVault0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetSourceVault0 = catparametersVirtualMachineScaleSetSourceVault0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetSourceVault0 = parametersVirtualMachineScaleSetSourceVault0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetSourceVault0.command('source-vault')
  .description($('Set catparametersVirtualMachineScaleSetSourceVault0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--secrets-index <secrets-index>', $('Indexer: secrets-index.'))
  .option('--reference-uri <referenceUri>', $('Set the reference-uri value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/oSProfile/secrets/' + options.secretsIndex + '/sourceVault';
    var paramPath = options.path + '/' + 'referenceUri';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.referenceUri) {
      if (options.parse && options.referenceUri) {
        options.referenceUri = JSON.parse(options.referenceUri);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.referenceUri}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove source-vault
  var catparametersVirtualMachineScaleSetSourceVault1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetSourceVault1 = catparametersVirtualMachineScaleSetSourceVault1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetSourceVault1 = parametersVirtualMachineScaleSetSourceVault1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetSourceVault1.command('source-vault')
  .description($('Remove catparametersVirtualMachineScaleSetSourceVault1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--secrets-index <secrets-index>', $('Indexer: secrets-index.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/oSProfile/secrets/' + options.secretsIndex + '/sourceVault';
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add source-vault
  var catparametersVirtualMachineScaleSetSourceVault2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetSourceVault2 = catparametersVirtualMachineScaleSetSourceVault2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetSourceVault2 = parametersVirtualMachineScaleSetSourceVault2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetSourceVault2.command('source-vault')
  .description($('Remove catparametersVirtualMachineScaleSetSourceVault2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--reference-uri <referenceUri>', $('Add the reference-uri value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/oSProfile/secrets/' + options.secretsIndex + '/sourceVault' + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile/oSProfile/secrets/' + options.secretsIndex + '/sourceVault' + '/' + 'referenceUri';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.referenceUri) {
      if (options.parse && options.referenceUri) {
        options.referenceUri = JSON.parse(options.referenceUri);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.referenceUri}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set vault-certificates
  var catparametersVirtualMachineScaleSetVaultCertificates0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetVaultCertificates0 = catparametersVirtualMachineScaleSetVaultCertificates0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetVaultCertificates0 = parametersVirtualMachineScaleSetVaultCertificates0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetVaultCertificates0.command('vault-certificates')
  .description($('Set catparametersVirtualMachineScaleSetVaultCertificates0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--index <index>', $('Indexer: index.'))
  .option('--secrets-index <secrets-index>', $('Indexer: secrets-index.'))
  .option('--certificate-store <certificateStore>', $('Set the certificate-store value.'))
  .option('--certificate-url <certificateUrl>', $('Set the certificate-url value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/oSProfile/secrets/' + options.secretsIndex + '/vaultCertificates' + (options.index ? ('/' + options.index) : '');
    if (options.value) {
      jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    }
    var paramPath = options.path + '/' + 'certificateStore';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.certificateStore) {
      if (options.parse && options.certificateStore) {
        options.certificateStore = JSON.parse(options.certificateStore);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.certificateStore}]);
    }
    paramPath = options.path + '/' + 'certificateUrl';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.certificateUrl) {
      if (options.parse && options.certificateUrl) {
        options.certificateUrl = JSON.parse(options.certificateUrl);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.certificateUrl}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove vault-certificates
  var catparametersVirtualMachineScaleSetVaultCertificates1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetVaultCertificates1 = catparametersVirtualMachineScaleSetVaultCertificates1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetVaultCertificates1 = parametersVirtualMachineScaleSetVaultCertificates1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetVaultCertificates1.command('vault-certificates')
  .description($('Remove catparametersVirtualMachineScaleSetVaultCertificates1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--index <index>', $('Indexer: index.'))
  .option('--secrets-index <secrets-index>', $('Indexer: secrets-index.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/oSProfile/secrets/' + options.secretsIndex + '/vaultCertificates' + (options.index ? ('/' + options.index) : '');
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add vault-certificates
  var catparametersVirtualMachineScaleSetVaultCertificates2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetVaultCertificates2 = catparametersVirtualMachineScaleSetVaultCertificates2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetVaultCertificates2 = parametersVirtualMachineScaleSetVaultCertificates2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetVaultCertificates2.command('vault-certificates')
  .description($('Remove catparametersVirtualMachineScaleSetVaultCertificates2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--certificate-store <certificateStore>', $('Add the certificate-store value.'))
  .option('--certificate-url <certificateUrl>', $('Add the certificate-url value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/oSProfile/secrets/' + options.secretsIndex + '/vaultCertificates' + (options.index ? ('/' + options.index) : '') + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile/oSProfile/secrets/' + options.secretsIndex + '/vaultCertificates' + (options.index ? ('/' + options.index) : '') + '/' + 'certificateStore';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.certificateStore) {
      if (options.parse && options.certificateStore) {
        options.certificateStore = JSON.parse(options.certificateStore);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.certificateStore}]);
    }
    paramPath = '/virtualMachineProfile/oSProfile/secrets/' + options.secretsIndex + '/vaultCertificates' + (options.index ? ('/' + options.index) : '') + '/' + 'certificateUrl';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.certificateUrl) {
      if (options.parse && options.certificateUrl) {
        options.certificateUrl = JSON.parse(options.certificateUrl);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.certificateUrl}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set windows-configuration
  var catparametersVirtualMachineScaleSetWindowsConfiguration0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetWindowsConfiguration0 = catparametersVirtualMachineScaleSetWindowsConfiguration0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetWindowsConfiguration0 = parametersVirtualMachineScaleSetWindowsConfiguration0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetWindowsConfiguration0.command('windows-configuration')
  .description($('Set catparametersVirtualMachineScaleSetWindowsConfiguration0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--additional-unattend-contents <additionalUnattendContents>', $('Set the additional-unattend-contents value.'))
  .option('--enable-automatic-updates <enableAutomaticUpdates>', $('Set the enable-automatic-updates value.'))
  .option('--provision-vm-agent <provisionVMAgent>', $('Set the provision-vm-agent value.'))
  .option('--time-zone <timeZone>', $('Set the time-zone value.'))
  .option('--win-rm-configuration <winRMConfiguration>', $('Set the win-rm-configuration value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/oSProfile/windowsConfiguration';
    var paramPath = options.path + '/' + 'additionalUnattendContents';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.additionalUnattendContents) {
      if (options.parse && options.additionalUnattendContents) {
        options.additionalUnattendContents = JSON.parse(options.additionalUnattendContents);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.additionalUnattendContents}]);
    }
    paramPath = options.path + '/' + 'enableAutomaticUpdates';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.enableAutomaticUpdates) {
      if (options.parse && options.enableAutomaticUpdates) {
        options.enableAutomaticUpdates = JSON.parse(options.enableAutomaticUpdates);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.enableAutomaticUpdates}]);
    }
    paramPath = options.path + '/' + 'provisionVMAgent';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.provisionVMAgent) {
      if (options.parse && options.provisionVMAgent) {
        options.provisionVMAgent = JSON.parse(options.provisionVMAgent);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.provisionVMAgent}]);
    }
    paramPath = options.path + '/' + 'timeZone';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.timeZone) {
      if (options.parse && options.timeZone) {
        options.timeZone = JSON.parse(options.timeZone);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.timeZone}]);
    }
    paramPath = options.path + '/' + 'winRMConfiguration';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.winRMConfiguration) {
      if (options.parse && options.winRMConfiguration) {
        options.winRMConfiguration = JSON.parse(options.winRMConfiguration);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.winRMConfiguration}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove windows-configuration
  var catparametersVirtualMachineScaleSetWindowsConfiguration1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetWindowsConfiguration1 = catparametersVirtualMachineScaleSetWindowsConfiguration1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetWindowsConfiguration1 = parametersVirtualMachineScaleSetWindowsConfiguration1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetWindowsConfiguration1.command('windows-configuration')
  .description($('Remove catparametersVirtualMachineScaleSetWindowsConfiguration1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/oSProfile/windowsConfiguration';
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add windows-configuration
  var catparametersVirtualMachineScaleSetWindowsConfiguration2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetWindowsConfiguration2 = catparametersVirtualMachineScaleSetWindowsConfiguration2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetWindowsConfiguration2 = parametersVirtualMachineScaleSetWindowsConfiguration2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetWindowsConfiguration2.command('windows-configuration')
  .description($('Remove catparametersVirtualMachineScaleSetWindowsConfiguration2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--additional-unattend-contents <additionalUnattendContents>', $('Add the additional-unattend-contents value.'))
  .option('--enable-automatic-updates <enableAutomaticUpdates>', $('Add the enable-automatic-updates value.'))
  .option('--provision-vm-agent <provisionVMAgent>', $('Add the provision-vm-agent value.'))
  .option('--time-zone <timeZone>', $('Add the time-zone value.'))
  .option('--win-rm-configuration <winRMConfiguration>', $('Add the win-rm-configuration value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/oSProfile/windowsConfiguration' + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile/oSProfile/windowsConfiguration' + '/' + 'additionalUnattendContents';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.additionalUnattendContents) {
      if (options.parse && options.additionalUnattendContents) {
        options.additionalUnattendContents = JSON.parse(options.additionalUnattendContents);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.additionalUnattendContents}]);
    }
    paramPath = '/virtualMachineProfile/oSProfile/windowsConfiguration' + '/' + 'enableAutomaticUpdates';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.enableAutomaticUpdates) {
      if (options.parse && options.enableAutomaticUpdates) {
        options.enableAutomaticUpdates = JSON.parse(options.enableAutomaticUpdates);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.enableAutomaticUpdates}]);
    }
    paramPath = '/virtualMachineProfile/oSProfile/windowsConfiguration' + '/' + 'provisionVMAgent';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.provisionVMAgent) {
      if (options.parse && options.provisionVMAgent) {
        options.provisionVMAgent = JSON.parse(options.provisionVMAgent);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.provisionVMAgent}]);
    }
    paramPath = '/virtualMachineProfile/oSProfile/windowsConfiguration' + '/' + 'timeZone';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.timeZone) {
      if (options.parse && options.timeZone) {
        options.timeZone = JSON.parse(options.timeZone);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.timeZone}]);
    }
    paramPath = '/virtualMachineProfile/oSProfile/windowsConfiguration' + '/' + 'winRMConfiguration';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.winRMConfiguration) {
      if (options.parse && options.winRMConfiguration) {
        options.winRMConfiguration = JSON.parse(options.winRMConfiguration);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.winRMConfiguration}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set additional-unattend-contents
  var catparametersVirtualMachineScaleSetAdditionalUnattendContents0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetAdditionalUnattendContents0 = catparametersVirtualMachineScaleSetAdditionalUnattendContents0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetAdditionalUnattendContents0 = parametersVirtualMachineScaleSetAdditionalUnattendContents0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetAdditionalUnattendContents0.command('additional-unattend-contents')
  .description($('Set catparametersVirtualMachineScaleSetAdditionalUnattendContents0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--index <index>', $('Indexer: index.'))
  .option('--component-name <componentName>', $('Set the component-name value.'))
  .option('--content <content>', $('Set the content value.'))
  .option('--pass-name <passName>', $('Set the pass-name value.'))
  .option('--setting-name <settingName>', $('Set the setting-name value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/oSProfile/windowsConfiguration/additionalUnattendContents' + (options.index ? ('/' + options.index) : '');
    if (options.value) {
      jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    }
    var paramPath = options.path + '/' + 'componentName';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.componentName) {
      if (options.parse && options.componentName) {
        options.componentName = JSON.parse(options.componentName);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.componentName}]);
    }
    paramPath = options.path + '/' + 'content';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.content) {
      if (options.parse && options.content) {
        options.content = JSON.parse(options.content);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.content}]);
    }
    paramPath = options.path + '/' + 'passName';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.passName) {
      if (options.parse && options.passName) {
        options.passName = JSON.parse(options.passName);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.passName}]);
    }
    paramPath = options.path + '/' + 'settingName';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.settingName) {
      if (options.parse && options.settingName) {
        options.settingName = JSON.parse(options.settingName);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.settingName}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove additional-unattend-contents
  var catparametersVirtualMachineScaleSetAdditionalUnattendContents1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetAdditionalUnattendContents1 = catparametersVirtualMachineScaleSetAdditionalUnattendContents1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetAdditionalUnattendContents1 = parametersVirtualMachineScaleSetAdditionalUnattendContents1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetAdditionalUnattendContents1.command('additional-unattend-contents')
  .description($('Remove catparametersVirtualMachineScaleSetAdditionalUnattendContents1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--index <index>', $('Indexer: index.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/oSProfile/windowsConfiguration/additionalUnattendContents' + (options.index ? ('/' + options.index) : '');
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add additional-unattend-contents
  var catparametersVirtualMachineScaleSetAdditionalUnattendContents2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetAdditionalUnattendContents2 = catparametersVirtualMachineScaleSetAdditionalUnattendContents2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetAdditionalUnattendContents2 = parametersVirtualMachineScaleSetAdditionalUnattendContents2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetAdditionalUnattendContents2.command('additional-unattend-contents')
  .description($('Remove catparametersVirtualMachineScaleSetAdditionalUnattendContents2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--component-name <componentName>', $('Add the component-name value.'))
  .option('--content <content>', $('Add the content value.'))
  .option('--pass-name <passName>', $('Add the pass-name value.'))
  .option('--setting-name <settingName>', $('Add the setting-name value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/oSProfile/windowsConfiguration/additionalUnattendContents' + (options.index ? ('/' + options.index) : '') + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile/oSProfile/windowsConfiguration/additionalUnattendContents' + (options.index ? ('/' + options.index) : '') + '/' + 'componentName';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.componentName) {
      if (options.parse && options.componentName) {
        options.componentName = JSON.parse(options.componentName);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.componentName}]);
    }
    paramPath = '/virtualMachineProfile/oSProfile/windowsConfiguration/additionalUnattendContents' + (options.index ? ('/' + options.index) : '') + '/' + 'content';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.content) {
      if (options.parse && options.content) {
        options.content = JSON.parse(options.content);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.content}]);
    }
    paramPath = '/virtualMachineProfile/oSProfile/windowsConfiguration/additionalUnattendContents' + (options.index ? ('/' + options.index) : '') + '/' + 'passName';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.passName) {
      if (options.parse && options.passName) {
        options.passName = JSON.parse(options.passName);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.passName}]);
    }
    paramPath = '/virtualMachineProfile/oSProfile/windowsConfiguration/additionalUnattendContents' + (options.index ? ('/' + options.index) : '') + '/' + 'settingName';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.settingName) {
      if (options.parse && options.settingName) {
        options.settingName = JSON.parse(options.settingName);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.settingName}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set win-rm-configuration
  var catparametersVirtualMachineScaleSetWinRMConfiguration0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetWinRMConfiguration0 = catparametersVirtualMachineScaleSetWinRMConfiguration0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetWinRMConfiguration0 = parametersVirtualMachineScaleSetWinRMConfiguration0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetWinRMConfiguration0.command('win-rm-configuration')
  .description($('Set catparametersVirtualMachineScaleSetWinRMConfiguration0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--listeners <listeners>', $('Set the listeners value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/oSProfile/windowsConfiguration/winRMConfiguration';
    var paramPath = options.path + '/' + 'listeners';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.listeners) {
      if (options.parse && options.listeners) {
        options.listeners = JSON.parse(options.listeners);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.listeners}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove win-rm-configuration
  var catparametersVirtualMachineScaleSetWinRMConfiguration1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetWinRMConfiguration1 = catparametersVirtualMachineScaleSetWinRMConfiguration1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetWinRMConfiguration1 = parametersVirtualMachineScaleSetWinRMConfiguration1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetWinRMConfiguration1.command('win-rm-configuration')
  .description($('Remove catparametersVirtualMachineScaleSetWinRMConfiguration1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/oSProfile/windowsConfiguration/winRMConfiguration';
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add win-rm-configuration
  var catparametersVirtualMachineScaleSetWinRMConfiguration2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetWinRMConfiguration2 = catparametersVirtualMachineScaleSetWinRMConfiguration2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetWinRMConfiguration2 = parametersVirtualMachineScaleSetWinRMConfiguration2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetWinRMConfiguration2.command('win-rm-configuration')
  .description($('Remove catparametersVirtualMachineScaleSetWinRMConfiguration2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--listeners <listeners>', $('Add the listeners value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/oSProfile/windowsConfiguration/winRMConfiguration' + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile/oSProfile/windowsConfiguration/winRMConfiguration' + '/' + 'listeners';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.listeners) {
      if (options.parse && options.listeners) {
        options.listeners = JSON.parse(options.listeners);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.listeners}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set listeners
  var catparametersVirtualMachineScaleSetListeners0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetListeners0 = catparametersVirtualMachineScaleSetListeners0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetListeners0 = parametersVirtualMachineScaleSetListeners0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetListeners0.command('listeners')
  .description($('Set catparametersVirtualMachineScaleSetListeners0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--index <index>', $('Indexer: index.'))
  .option('--certificate-url <certificateUrl>', $('Set the certificate-url value.'))
  .option('--protocol <protocol>', $('Set the protocol value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/oSProfile/windowsConfiguration/winRMConfiguration/listeners' + (options.index ? ('/' + options.index) : '');
    if (options.value) {
      jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    }
    var paramPath = options.path + '/' + 'certificateUrl';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.certificateUrl) {
      if (options.parse && options.certificateUrl) {
        options.certificateUrl = JSON.parse(options.certificateUrl);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.certificateUrl}]);
    }
    paramPath = options.path + '/' + 'protocol';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.protocol) {
      if (options.parse && options.protocol) {
        options.protocol = JSON.parse(options.protocol);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.protocol}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove listeners
  var catparametersVirtualMachineScaleSetListeners1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetListeners1 = catparametersVirtualMachineScaleSetListeners1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetListeners1 = parametersVirtualMachineScaleSetListeners1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetListeners1.command('listeners')
  .description($('Remove catparametersVirtualMachineScaleSetListeners1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--index <index>', $('Indexer: index.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/oSProfile/windowsConfiguration/winRMConfiguration/listeners' + (options.index ? ('/' + options.index) : '');
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add listeners
  var catparametersVirtualMachineScaleSetListeners2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetListeners2 = catparametersVirtualMachineScaleSetListeners2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetListeners2 = parametersVirtualMachineScaleSetListeners2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetListeners2.command('listeners')
  .description($('Remove catparametersVirtualMachineScaleSetListeners2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--certificate-url <certificateUrl>', $('Add the certificate-url value.'))
  .option('--protocol <protocol>', $('Add the protocol value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/oSProfile/windowsConfiguration/winRMConfiguration/listeners' + (options.index ? ('/' + options.index) : '') + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile/oSProfile/windowsConfiguration/winRMConfiguration/listeners' + (options.index ? ('/' + options.index) : '') + '/' + 'certificateUrl';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.certificateUrl) {
      if (options.parse && options.certificateUrl) {
        options.certificateUrl = JSON.parse(options.certificateUrl);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.certificateUrl}]);
    }
    paramPath = '/virtualMachineProfile/oSProfile/windowsConfiguration/winRMConfiguration/listeners' + (options.index ? ('/' + options.index) : '') + '/' + 'protocol';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.protocol) {
      if (options.parse && options.protocol) {
        options.protocol = JSON.parse(options.protocol);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.protocol}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set storage-profile
  var catparametersVirtualMachineScaleSetStorageProfile0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetStorageProfile0 = catparametersVirtualMachineScaleSetStorageProfile0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetStorageProfile0 = parametersVirtualMachineScaleSetStorageProfile0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetStorageProfile0.command('storage-profile')
  .description($('Set catparametersVirtualMachineScaleSetStorageProfile0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--image-reference <imageReference>', $('Set the image-reference value.'))
  .option('--os-disk <oSDisk>', $('Set the os-disk value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/storageProfile';
    var paramPath = options.path + '/' + 'imageReference';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.imageReference) {
      if (options.parse && options.imageReference) {
        options.imageReference = JSON.parse(options.imageReference);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.imageReference}]);
    }
    paramPath = options.path + '/' + 'oSDisk';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.oSDisk) {
      if (options.parse && options.oSDisk) {
        options.oSDisk = JSON.parse(options.oSDisk);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.oSDisk}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove storage-profile
  var catparametersVirtualMachineScaleSetStorageProfile1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetStorageProfile1 = catparametersVirtualMachineScaleSetStorageProfile1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetStorageProfile1 = parametersVirtualMachineScaleSetStorageProfile1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetStorageProfile1.command('storage-profile')
  .description($('Remove catparametersVirtualMachineScaleSetStorageProfile1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/storageProfile';
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add storage-profile
  var catparametersVirtualMachineScaleSetStorageProfile2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetStorageProfile2 = catparametersVirtualMachineScaleSetStorageProfile2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetStorageProfile2 = parametersVirtualMachineScaleSetStorageProfile2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetStorageProfile2.command('storage-profile')
  .description($('Remove catparametersVirtualMachineScaleSetStorageProfile2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--image-reference <imageReference>', $('Add the image-reference value.'))
  .option('--os-disk <oSDisk>', $('Add the os-disk value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/storageProfile' + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile/storageProfile' + '/' + 'imageReference';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.imageReference) {
      if (options.parse && options.imageReference) {
        options.imageReference = JSON.parse(options.imageReference);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.imageReference}]);
    }
    paramPath = '/virtualMachineProfile/storageProfile' + '/' + 'oSDisk';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.oSDisk) {
      if (options.parse && options.oSDisk) {
        options.oSDisk = JSON.parse(options.oSDisk);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.oSDisk}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set image-reference
  var catparametersVirtualMachineScaleSetImageReference0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetImageReference0 = catparametersVirtualMachineScaleSetImageReference0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetImageReference0 = parametersVirtualMachineScaleSetImageReference0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetImageReference0.command('image-reference')
  .description($('Set catparametersVirtualMachineScaleSetImageReference0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--offer <offer>', $('Set the offer value.'))
  .option('--publisher <publisher>', $('Set the publisher value.'))
  .option('--sku <sku>', $('Set the sku value.'))
  .option('--version <version>', $('Set the version value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/storageProfile/imageReference';
    var paramPath = options.path + '/' + 'offer';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.offer) {
      if (options.parse && options.offer) {
        options.offer = JSON.parse(options.offer);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.offer}]);
    }
    paramPath = options.path + '/' + 'publisher';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.publisher) {
      if (options.parse && options.publisher) {
        options.publisher = JSON.parse(options.publisher);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.publisher}]);
    }
    paramPath = options.path + '/' + 'sku';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.sku) {
      if (options.parse && options.sku) {
        options.sku = JSON.parse(options.sku);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.sku}]);
    }
    paramPath = options.path + '/' + 'version';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.version) {
      if (options.parse && options.version) {
        options.version = JSON.parse(options.version);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.version}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove image-reference
  var catparametersVirtualMachineScaleSetImageReference1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetImageReference1 = catparametersVirtualMachineScaleSetImageReference1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetImageReference1 = parametersVirtualMachineScaleSetImageReference1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetImageReference1.command('image-reference')
  .description($('Remove catparametersVirtualMachineScaleSetImageReference1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/storageProfile/imageReference';
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add image-reference
  var catparametersVirtualMachineScaleSetImageReference2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetImageReference2 = catparametersVirtualMachineScaleSetImageReference2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetImageReference2 = parametersVirtualMachineScaleSetImageReference2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetImageReference2.command('image-reference')
  .description($('Remove catparametersVirtualMachineScaleSetImageReference2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--offer <offer>', $('Add the offer value.'))
  .option('--publisher <publisher>', $('Add the publisher value.'))
  .option('--sku <sku>', $('Add the sku value.'))
  .option('--version <version>', $('Add the version value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/storageProfile/imageReference' + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile/storageProfile/imageReference' + '/' + 'offer';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.offer) {
      if (options.parse && options.offer) {
        options.offer = JSON.parse(options.offer);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.offer}]);
    }
    paramPath = '/virtualMachineProfile/storageProfile/imageReference' + '/' + 'publisher';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.publisher) {
      if (options.parse && options.publisher) {
        options.publisher = JSON.parse(options.publisher);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.publisher}]);
    }
    paramPath = '/virtualMachineProfile/storageProfile/imageReference' + '/' + 'sku';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.sku) {
      if (options.parse && options.sku) {
        options.sku = JSON.parse(options.sku);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.sku}]);
    }
    paramPath = '/virtualMachineProfile/storageProfile/imageReference' + '/' + 'version';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.version) {
      if (options.parse && options.version) {
        options.version = JSON.parse(options.version);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.version}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set os-disk
  var catparametersVirtualMachineScaleSetOSDisk0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetOSDisk0 = catparametersVirtualMachineScaleSetOSDisk0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetOSDisk0 = parametersVirtualMachineScaleSetOSDisk0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetOSDisk0.command('os-disk')
  .description($('Set catparametersVirtualMachineScaleSetOSDisk0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--caching <caching>', $('Set the caching value.'))
  .option('--create-option <createOption>', $('Set the create-option value.'))
  .option('--name <name>', $('Set the name value.'))
  .option('--operating-system-type <operatingSystemType>', $('Set the operating-system-type value.'))
  .option('--source-image <sourceImage>', $('Set the source-image value.'))
  .option('--virtual-hard-disk-containers <virtualHardDiskContainers>', $('Set the virtual-hard-disk-containers value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/storageProfile/oSDisk';
    var paramPath = options.path + '/' + 'caching';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.caching) {
      if (options.parse && options.caching) {
        options.caching = JSON.parse(options.caching);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.caching}]);
    }
    paramPath = options.path + '/' + 'createOption';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.createOption) {
      if (options.parse && options.createOption) {
        options.createOption = JSON.parse(options.createOption);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.createOption}]);
    }
    paramPath = options.path + '/' + 'name';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.name) {
      if (options.parse && options.name) {
        options.name = JSON.parse(options.name);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.name}]);
    }
    paramPath = options.path + '/' + 'operatingSystemType';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.operatingSystemType) {
      if (options.parse && options.operatingSystemType) {
        options.operatingSystemType = JSON.parse(options.operatingSystemType);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.operatingSystemType}]);
    }
    paramPath = options.path + '/' + 'sourceImage';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.sourceImage) {
      if (options.parse && options.sourceImage) {
        options.sourceImage = JSON.parse(options.sourceImage);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.sourceImage}]);
    }
    paramPath = options.path + '/' + 'virtualHardDiskContainers';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.virtualHardDiskContainers) {
      if (options.parse && options.virtualHardDiskContainers) {
        options.virtualHardDiskContainers = JSON.parse(options.virtualHardDiskContainers);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.virtualHardDiskContainers}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove os-disk
  var catparametersVirtualMachineScaleSetOSDisk1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetOSDisk1 = catparametersVirtualMachineScaleSetOSDisk1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetOSDisk1 = parametersVirtualMachineScaleSetOSDisk1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetOSDisk1.command('os-disk')
  .description($('Remove catparametersVirtualMachineScaleSetOSDisk1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/storageProfile/oSDisk';
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add os-disk
  var catparametersVirtualMachineScaleSetOSDisk2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetOSDisk2 = catparametersVirtualMachineScaleSetOSDisk2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetOSDisk2 = parametersVirtualMachineScaleSetOSDisk2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetOSDisk2.command('os-disk')
  .description($('Remove catparametersVirtualMachineScaleSetOSDisk2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--caching <caching>', $('Add the caching value.'))
  .option('--create-option <createOption>', $('Add the create-option value.'))
  .option('--name <name>', $('Add the name value.'))
  .option('--operating-system-type <operatingSystemType>', $('Add the operating-system-type value.'))
  .option('--source-image <sourceImage>', $('Add the source-image value.'))
  .option('--virtual-hard-disk-containers <virtualHardDiskContainers>', $('Add the virtual-hard-disk-containers value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/storageProfile/oSDisk' + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile/storageProfile/oSDisk' + '/' + 'caching';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.caching) {
      if (options.parse && options.caching) {
        options.caching = JSON.parse(options.caching);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.caching}]);
    }
    paramPath = '/virtualMachineProfile/storageProfile/oSDisk' + '/' + 'createOption';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.createOption) {
      if (options.parse && options.createOption) {
        options.createOption = JSON.parse(options.createOption);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.createOption}]);
    }
    paramPath = '/virtualMachineProfile/storageProfile/oSDisk' + '/' + 'name';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.name) {
      if (options.parse && options.name) {
        options.name = JSON.parse(options.name);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.name}]);
    }
    paramPath = '/virtualMachineProfile/storageProfile/oSDisk' + '/' + 'operatingSystemType';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.operatingSystemType) {
      if (options.parse && options.operatingSystemType) {
        options.operatingSystemType = JSON.parse(options.operatingSystemType);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.operatingSystemType}]);
    }
    paramPath = '/virtualMachineProfile/storageProfile/oSDisk' + '/' + 'sourceImage';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.sourceImage) {
      if (options.parse && options.sourceImage) {
        options.sourceImage = JSON.parse(options.sourceImage);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.sourceImage}]);
    }
    paramPath = '/virtualMachineProfile/storageProfile/oSDisk' + '/' + 'virtualHardDiskContainers';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.virtualHardDiskContainers) {
      if (options.parse && options.virtualHardDiskContainers) {
        options.virtualHardDiskContainers = JSON.parse(options.virtualHardDiskContainers);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.virtualHardDiskContainers}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set source-image
  var catparametersVirtualMachineScaleSetSourceImage0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetSourceImage0 = catparametersVirtualMachineScaleSetSourceImage0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetSourceImage0 = parametersVirtualMachineScaleSetSourceImage0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetSourceImage0.command('source-image')
  .description($('Set catparametersVirtualMachineScaleSetSourceImage0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--uri <uri>', $('Set the uri value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/storageProfile/oSDisk/sourceImage';
    var paramPath = options.path + '/' + 'uri';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.uri) {
      if (options.parse && options.uri) {
        options.uri = JSON.parse(options.uri);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.uri}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove source-image
  var catparametersVirtualMachineScaleSetSourceImage1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetSourceImage1 = catparametersVirtualMachineScaleSetSourceImage1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetSourceImage1 = parametersVirtualMachineScaleSetSourceImage1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetSourceImage1.command('source-image')
  .description($('Remove catparametersVirtualMachineScaleSetSourceImage1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/storageProfile/oSDisk/sourceImage';
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add source-image
  var catparametersVirtualMachineScaleSetSourceImage2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetSourceImage2 = catparametersVirtualMachineScaleSetSourceImage2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetSourceImage2 = parametersVirtualMachineScaleSetSourceImage2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetSourceImage2.command('source-image')
  .description($('Remove catparametersVirtualMachineScaleSetSourceImage2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--uri <uri>', $('Add the uri value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/storageProfile/oSDisk/sourceImage' + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '/virtualMachineProfile/storageProfile/oSDisk/sourceImage' + '/' + 'uri';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.uri) {
      if (options.parse && options.uri) {
        options.uri = JSON.parse(options.uri);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.uri}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set virtual-hard-disk-containers
  var catparametersVirtualMachineScaleSetVirtualHardDiskContainers0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetVirtualHardDiskContainers0 = catparametersVirtualMachineScaleSetVirtualHardDiskContainers0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set.'));
  var setparametersVirtualMachineScaleSetVirtualHardDiskContainers0 = parametersVirtualMachineScaleSetVirtualHardDiskContainers0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set.'));
  setparametersVirtualMachineScaleSetVirtualHardDiskContainers0.command('virtual-hard-disk-containers')
  .description($('Set catparametersVirtualMachineScaleSetVirtualHardDiskContainers0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--index <index>', $('Indexer: index.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '/virtualMachineProfile/storageProfile/oSDisk/virtualHardDiskContainers' + (options.index ? ('/' + options.index) : '');
    if (options.value) {
      jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove virtual-hard-disk-containers
  var catparametersVirtualMachineScaleSetVirtualHardDiskContainers1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetVirtualHardDiskContainers1 = catparametersVirtualMachineScaleSetVirtualHardDiskContainers1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetVirtualHardDiskContainers1 = parametersVirtualMachineScaleSetVirtualHardDiskContainers1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetVirtualHardDiskContainers1.command('virtual-hard-disk-containers')
  .description($('Remove catparametersVirtualMachineScaleSetVirtualHardDiskContainers1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--index <index>', $('Indexer: index.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '/virtualMachineProfile/storageProfile/oSDisk/virtualHardDiskContainers' + (options.index ? ('/' + options.index) : '');
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add virtual-hard-disk-containers
  var catparametersVirtualMachineScaleSetVirtualHardDiskContainers2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetVirtualHardDiskContainers2 = catparametersVirtualMachineScaleSetVirtualHardDiskContainers2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetVirtualHardDiskContainers2 = parametersVirtualMachineScaleSetVirtualHardDiskContainers2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetVirtualHardDiskContainers2.command('virtual-hard-disk-containers')
  .description($('Remove catparametersVirtualMachineScaleSetVirtualHardDiskContainers2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '/virtualMachineProfile/storageProfile/oSDisk/virtualHardDiskContainers' + (options.index ? ('/' + options.index) : '') + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });


//virtualMachineScaleSet -> Deallocate
  var vmssDeallocate = cli.category('vmss').description($('Commands to manage your virtual machine scale set.'));
  vmssDeallocate.command('deallocate')
  .description($('deallocate method to manage your virtual machine scale set.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--vm-scale-set-name <vm-scale-set-name>', $('vm-scale-set-name'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, vmScaleSetName, options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    cli.output.info('vmScaleSetName = ' + options.vmScaleSetName);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSets.deallocate(options.resourceGroupName, options.vmScaleSetName, _);
    cli.output.json(result);
  });
//virtualMachineScaleSet -> DeallocateInstances
/*
{"instanceIDs":[""]}
*/
  var vmssDeallocateInstances = cli.category('vmss').description($('Commands to manage your virtual machine scale set.'));
  vmssDeallocateInstances.command('deallocate-instances')
  .description($('deallocate-instances method to manage your virtual machine scale set.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--vm-scale-set-name <vm-scale-set-name>', $('vm-scale-set-name'))
  .option('--vm-instance-ids <vm-instance-ids>', $('vm-instance-ids'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, vmScaleSetName, vmInstanceIds, options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    cli.output.info('vmScaleSetName = ' + options.vmScaleSetName);
    cli.output.info('vmInstanceIds = ' + options.vmInstanceIds);
    var vmInstanceIdsObj = null;
    if (options.parameterFile) {
      cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
      var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
      vmInstanceIdsObj = JSON.parse(fileContent);
    }
    else {
      vmInstanceIdsObj = JSON.parse(options.vmInstanceIds);
    }
    cli.output.info('vmInstanceIdsObj = ' + JSON.stringify(vmInstanceIdsObj));
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSets.deallocateInstances(options.resourceGroupName, options.vmScaleSetName, vmInstanceIdsObj, _);
    cli.output.json(result);
  });
//virtualMachineScaleSet -> Delete
  var vmssDelete = cli.category('vmss').description($('Commands to manage your virtual machine scale set.'));
  vmssDelete.command('delete')
  .description($('delete method to manage your virtual machine scale set.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--vm-scale-set-name <vm-scale-set-name>', $('vm-scale-set-name'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, vmScaleSetName, options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    cli.output.info('vmScaleSetName = ' + options.vmScaleSetName);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSets.delete(options.resourceGroupName, options.vmScaleSetName, _);
    cli.output.json(result);
  });
//virtualMachineScaleSet -> DeleteInstances
/*
{"instanceIDs":[""]}
*/
  var vmssDeleteInstances = cli.category('vmss').description($('Commands to manage your virtual machine scale set.'));
  vmssDeleteInstances.command('delete-instances')
  .description($('delete-instances method to manage your virtual machine scale set.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--vm-scale-set-name <vm-scale-set-name>', $('vm-scale-set-name'))
  .option('--vm-instance-ids <vm-instance-ids>', $('vm-instance-ids'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, vmScaleSetName, vmInstanceIds, options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    cli.output.info('vmScaleSetName = ' + options.vmScaleSetName);
    cli.output.info('vmInstanceIds = ' + options.vmInstanceIds);
    var vmInstanceIdsObj = null;
    if (options.parameterFile) {
      cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
      var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
      vmInstanceIdsObj = JSON.parse(fileContent);
    }
    else {
      vmInstanceIdsObj = JSON.parse(options.vmInstanceIds);
    }
    cli.output.info('vmInstanceIdsObj = ' + JSON.stringify(vmInstanceIdsObj));
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSets.deleteInstances(options.resourceGroupName, options.vmScaleSetName, vmInstanceIdsObj, _);
    cli.output.json(result);
  });
//virtualMachineScaleSet -> Get
  var vmssGet = cli.category('vmss').description($('Commands to manage your virtual machine scale set.'));
  vmssGet.command('get')
  .description($('get method to manage your virtual machine scale set.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--vm-scale-set-name <vm-scale-set-name>', $('vm-scale-set-name'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, vmScaleSetName, options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    cli.output.info('vmScaleSetName = ' + options.vmScaleSetName);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSets.get(options.resourceGroupName, options.vmScaleSetName, _);
    cli.output.json(result);
  });
//virtualMachineScaleSet -> GetInstanceView
  var vmssGetInstanceView = cli.category('vmss').description($('Commands to manage your virtual machine scale set.'));
  vmssGetInstanceView.command('get-instance-view')
  .description($('get-instance-view method to manage your virtual machine scale set.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--vm-scale-set-name <vm-scale-set-name>', $('vm-scale-set-name'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, vmScaleSetName, options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    cli.output.info('vmScaleSetName = ' + options.vmScaleSetName);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSets.getInstanceView(options.resourceGroupName, options.vmScaleSetName, _);
    cli.output.json(result);
  });
//virtualMachineScaleSet -> List
  var vmssList = cli.category('vmss').description($('Commands to manage your virtual machine scale set.'));
  vmssList.command('list')
  .description($('list method to manage your virtual machine scale set.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSets.list(options.resourceGroupName, _);
    cli.output.json(result);
  });
//virtualMachineScaleSet -> ListAll
/*
{}
*/
  var vmssListAll = cli.category('vmss').description($('Commands to manage your virtual machine scale set.'));
  vmssListAll.command('list-all')
  .description($('list-all method to manage your virtual machine scale set.'))
  .usage('[options]')
  .option('--parameters <parameters>', $('parameters'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (parameters, options, _) {
    cli.output.info('parameters = ' + options.parameters);
    var parametersObj = null;
    if (options.parameterFile) {
      cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
      var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
      parametersObj = JSON.parse(fileContent);
    }
    else {
      parametersObj = JSON.parse(options.parameters);
    }
    cli.output.info('parametersObj = ' + JSON.stringify(parametersObj));
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSets.listAll(parametersObj, _);
    cli.output.json(result);
  });
  var vmssListAlllistAllParameters0 = vmssListAll.category('parameters')
  .description($('Commands to manage parameter for your virtual machine scale set.'));
  var vmssListAlllistAllGenerate0 = vmssListAlllistAllParameters0.category('generate')
  .description($('Commands to generate parameter file for your virtual machine scale set.'));
  vmssListAlllistAllGenerate0.command('list-all')
  .description($('Generate vmssListAll parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .execute(function (options) {
    cli.output.info('{}');
    var filePath = 'vmssListAll_listAll.json';
    if (options.parameterFile) {
      filePath = options.parameterFile;
    }
    fs.writeFileSync(filePath, beautify('{\r\n\r\n}'));
    cli.output.info('=====================================');
    cli.output.info('Parameter file output to: ' + filePath);
    cli.output.info('=====================================');
  });

  vmssListAlllistAllParameters0.command('patch')
  .description($('Command to patch vmssListAll parameter JSON file.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--operation <operation>', $('The JSON patch operation: add, remove, or replace.'))
  .option('--path <path>', $('The JSON data path, e.g.: \"foo/1\".'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .execute(function(options) {
    cli.output.info(options.parameterFile);
    cli.output.info(options.operation);
    cli.output.info(options.path);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    if (options.operation == 'add') {
      jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    }
    else if (options.operation == 'remove') {
      jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    }
    else if (options.operation == 'replace') {
      jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove list-parameters
  var catparametersVirtualMachineScaleSetListParameters1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetListParameters1 = catparametersVirtualMachineScaleSetListParameters1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set.'));
  var removeparametersVirtualMachineScaleSetListParameters1 = parametersVirtualMachineScaleSetListParameters1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set.'));
  removeparametersVirtualMachineScaleSetListParameters1.command('list-parameters')
  .description($('Remove catparametersVirtualMachineScaleSetListParameters1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '';
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add list-parameters
  var catparametersVirtualMachineScaleSetListParameters2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetListParameters2 = catparametersVirtualMachineScaleSetListParameters2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set.'));
  var addparametersVirtualMachineScaleSetListParameters2 = parametersVirtualMachineScaleSetListParameters2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set.'));
  addparametersVirtualMachineScaleSetListParameters2.command('list-parameters')
  .description($('Remove catparametersVirtualMachineScaleSetListParameters2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '' + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });


//virtualMachineScaleSet -> ListNext
  var vmssListNext = cli.category('vmss').description($('Commands to manage your virtual machine scale set.'));
  vmssListNext.command('list-next')
  .description($('list-next method to manage your virtual machine scale set.'))
  .usage('[options]')
  .option('--next-link <next-link>', $('next-link'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (nextLink, options, _) {
    cli.output.info('nextLink = ' + options.nextLink);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSets.listNext(options.nextLink, _);
    cli.output.json(result);
  });
//virtualMachineScaleSet -> ListSkus
  var vmssListSkus = cli.category('vmss').description($('Commands to manage your virtual machine scale set.'));
  vmssListSkus.command('list-skus')
  .description($('list-skus method to manage your virtual machine scale set.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--vm-scale-set-name <vm-scale-set-name>', $('vm-scale-set-name'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, vmScaleSetName, options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    cli.output.info('vmScaleSetName = ' + options.vmScaleSetName);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSets.listSkus(options.resourceGroupName, options.vmScaleSetName, _);
    cli.output.json(result);
  });
//virtualMachineScaleSet -> PowerOff
  var vmssPowerOff = cli.category('vmss').description($('Commands to manage your virtual machine scale set.'));
  vmssPowerOff.command('power-off')
  .description($('power-off method to manage your virtual machine scale set.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--vm-scale-set-name <vm-scale-set-name>', $('vm-scale-set-name'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, vmScaleSetName, options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    cli.output.info('vmScaleSetName = ' + options.vmScaleSetName);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSets.powerOff(options.resourceGroupName, options.vmScaleSetName, _);
    cli.output.json(result);
  });
//virtualMachineScaleSet -> PowerOffInstances
/*
{"instanceIDs":[""]}
*/
  var vmssPowerOffInstances = cli.category('vmss').description($('Commands to manage your virtual machine scale set.'));
  vmssPowerOffInstances.command('power-off-instances')
  .description($('power-off-instances method to manage your virtual machine scale set.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--vm-scale-set-name <vm-scale-set-name>', $('vm-scale-set-name'))
  .option('--vm-instance-ids <vm-instance-ids>', $('vm-instance-ids'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, vmScaleSetName, vmInstanceIds, options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    cli.output.info('vmScaleSetName = ' + options.vmScaleSetName);
    cli.output.info('vmInstanceIds = ' + options.vmInstanceIds);
    var vmInstanceIdsObj = null;
    if (options.parameterFile) {
      cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
      var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
      vmInstanceIdsObj = JSON.parse(fileContent);
    }
    else {
      vmInstanceIdsObj = JSON.parse(options.vmInstanceIds);
    }
    cli.output.info('vmInstanceIdsObj = ' + JSON.stringify(vmInstanceIdsObj));
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSets.powerOffInstances(options.resourceGroupName, options.vmScaleSetName, vmInstanceIdsObj, _);
    cli.output.json(result);
  });
//virtualMachineScaleSet -> Restart
  var vmssRestart = cli.category('vmss').description($('Commands to manage your virtual machine scale set.'));
  vmssRestart.command('restart')
  .description($('restart method to manage your virtual machine scale set.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--vm-scale-set-name <vm-scale-set-name>', $('vm-scale-set-name'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, vmScaleSetName, options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    cli.output.info('vmScaleSetName = ' + options.vmScaleSetName);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSets.restart(options.resourceGroupName, options.vmScaleSetName, _);
    cli.output.json(result);
  });
//virtualMachineScaleSet -> RestartInstances
/*
{"instanceIDs":[""]}
*/
  var vmssRestartInstances = cli.category('vmss').description($('Commands to manage your virtual machine scale set.'));
  vmssRestartInstances.command('restart-instances')
  .description($('restart-instances method to manage your virtual machine scale set.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--vm-scale-set-name <vm-scale-set-name>', $('vm-scale-set-name'))
  .option('--vm-instance-ids <vm-instance-ids>', $('vm-instance-ids'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, vmScaleSetName, vmInstanceIds, options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    cli.output.info('vmScaleSetName = ' + options.vmScaleSetName);
    cli.output.info('vmInstanceIds = ' + options.vmInstanceIds);
    var vmInstanceIdsObj = null;
    if (options.parameterFile) {
      cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
      var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
      vmInstanceIdsObj = JSON.parse(fileContent);
    }
    else {
      vmInstanceIdsObj = JSON.parse(options.vmInstanceIds);
    }
    cli.output.info('vmInstanceIdsObj = ' + JSON.stringify(vmInstanceIdsObj));
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSets.restartInstances(options.resourceGroupName, options.vmScaleSetName, vmInstanceIdsObj, _);
    cli.output.json(result);
  });
//virtualMachineScaleSet -> Start
  var vmssStart = cli.category('vmss').description($('Commands to manage your virtual machine scale set.'));
  vmssStart.command('start')
  .description($('start method to manage your virtual machine scale set.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--vm-scale-set-name <vm-scale-set-name>', $('vm-scale-set-name'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, vmScaleSetName, options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    cli.output.info('vmScaleSetName = ' + options.vmScaleSetName);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSets.start(options.resourceGroupName, options.vmScaleSetName, _);
    cli.output.json(result);
  });
//virtualMachineScaleSet -> StartInstances
/*
{"instanceIDs":[""]}
*/
  var vmssStartInstances = cli.category('vmss').description($('Commands to manage your virtual machine scale set.'));
  vmssStartInstances.command('start-instances')
  .description($('start-instances method to manage your virtual machine scale set.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--vm-scale-set-name <vm-scale-set-name>', $('vm-scale-set-name'))
  .option('--vm-instance-ids <vm-instance-ids>', $('vm-instance-ids'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, vmScaleSetName, vmInstanceIds, options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    cli.output.info('vmScaleSetName = ' + options.vmScaleSetName);
    cli.output.info('vmInstanceIds = ' + options.vmInstanceIds);
    var vmInstanceIdsObj = null;
    if (options.parameterFile) {
      cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
      var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
      vmInstanceIdsObj = JSON.parse(fileContent);
    }
    else {
      vmInstanceIdsObj = JSON.parse(options.vmInstanceIds);
    }
    cli.output.info('vmInstanceIdsObj = ' + JSON.stringify(vmInstanceIdsObj));
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSets.startInstances(options.resourceGroupName, options.vmScaleSetName, vmInstanceIdsObj, _);
    cli.output.json(result);
  });
//virtualMachineScaleSet -> UpdateInstances
/*
{"instanceIDs":[""]}
*/
  var vmssUpdateInstances = cli.category('vmss').description($('Commands to manage your virtual machine scale set.'));
  vmssUpdateInstances.command('update-instances')
  .description($('update-instances method to manage your virtual machine scale set.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--vm-scale-set-name <vm-scale-set-name>', $('vm-scale-set-name'))
  .option('--vm-instance-ids <vm-instance-ids>', $('vm-instance-ids'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, vmScaleSetName, vmInstanceIds, options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    cli.output.info('vmScaleSetName = ' + options.vmScaleSetName);
    cli.output.info('vmInstanceIds = ' + options.vmInstanceIds);
    var vmInstanceIdsObj = null;
    if (options.parameterFile) {
      cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
      var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
      vmInstanceIdsObj = JSON.parse(fileContent);
    }
    else {
      vmInstanceIdsObj = JSON.parse(options.vmInstanceIds);
    }
    cli.output.info('vmInstanceIdsObj = ' + JSON.stringify(vmInstanceIdsObj));
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSets.updateInstances(options.resourceGroupName, options.vmScaleSetName, vmInstanceIdsObj, _);
    cli.output.json(result);
  });
//virtualMachineScaleSetVM -> Deallocate
  var vmssvmDeallocate = cli.category('vmssvm').description($('Commands to manage your virtual machine scale set vm.'));
  vmssvmDeallocate.command('deallocate')
  .description($('deallocate method to manage your virtual machine scale set vm.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--vm-scale-set-name <vm-scale-set-name>', $('vm-scale-set-name'))
  .option('--instance-id <instance-id>', $('instance-id'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, vmScaleSetName, instanceId, options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    cli.output.info('vmScaleSetName = ' + options.vmScaleSetName);
    cli.output.info('instanceId = ' + options.instanceId);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSetVMs.deallocate(options.resourceGroupName, options.vmScaleSetName, options.instanceId, _);
    cli.output.json(result);
  });
//virtualMachineScaleSetVM -> Delete
  var vmssvmDelete = cli.category('vmssvm').description($('Commands to manage your virtual machine scale set vm.'));
  vmssvmDelete.command('delete')
  .description($('delete method to manage your virtual machine scale set vm.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--vm-scale-set-name <vm-scale-set-name>', $('vm-scale-set-name'))
  .option('--instance-id <instance-id>', $('instance-id'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, vmScaleSetName, instanceId, options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    cli.output.info('vmScaleSetName = ' + options.vmScaleSetName);
    cli.output.info('instanceId = ' + options.instanceId);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSetVMs.delete(options.resourceGroupName, options.vmScaleSetName, options.instanceId, _);
    cli.output.json(result);
  });
//virtualMachineScaleSetVM -> Get
  var vmssvmGet = cli.category('vmssvm').description($('Commands to manage your virtual machine scale set vm.'));
  vmssvmGet.command('get')
  .description($('get method to manage your virtual machine scale set vm.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--vm-scale-set-name <vm-scale-set-name>', $('vm-scale-set-name'))
  .option('--instance-id <instance-id>', $('instance-id'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, vmScaleSetName, instanceId, options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    cli.output.info('vmScaleSetName = ' + options.vmScaleSetName);
    cli.output.info('instanceId = ' + options.instanceId);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSetVMs.get(options.resourceGroupName, options.vmScaleSetName, options.instanceId, _);
    cli.output.json(result);
  });
//virtualMachineScaleSetVM -> GetInstanceView
  var vmssvmGetInstanceView = cli.category('vmssvm').description($('Commands to manage your virtual machine scale set vm.'));
  vmssvmGetInstanceView.command('get-instance-view')
  .description($('get-instance-view method to manage your virtual machine scale set vm.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--vm-scale-set-name <vm-scale-set-name>', $('vm-scale-set-name'))
  .option('--instance-id <instance-id>', $('instance-id'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, vmScaleSetName, instanceId, options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    cli.output.info('vmScaleSetName = ' + options.vmScaleSetName);
    cli.output.info('instanceId = ' + options.instanceId);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSetVMs.getInstanceView(options.resourceGroupName, options.vmScaleSetName, options.instanceId, _);
    cli.output.json(result);
  });
//virtualMachineScaleSetVM -> List
/*
{"expandExpression":"","filterExpression":"","resourceGroupName":"","selectExpression":"","virtualMachineScaleSetName":""}
*/
  var vmssvmList = cli.category('vmssvm').description($('Commands to manage your virtual machine scale set vm.'));
  vmssvmList.command('list')
  .description($('list method to manage your virtual machine scale set vm.'))
  .usage('[options]')
  .option('--parameters <parameters>', $('parameters'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (parameters, options, _) {
    cli.output.info('parameters = ' + options.parameters);
    var parametersObj = null;
    if (options.parameterFile) {
      cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
      var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
      parametersObj = JSON.parse(fileContent);
    }
    else {
      parametersObj = JSON.parse(options.parameters);
    }
    cli.output.info('parametersObj = ' + JSON.stringify(parametersObj));
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSetVMs.list(parametersObj, _);
    cli.output.json(result);
  });
  var vmssvmListlistParameters0 = vmssvmList.category('parameters')
  .description($('Commands to manage parameter for your virtual machine scale set vm.'));
  var vmssvmListlistGenerate0 = vmssvmListlistParameters0.category('generate')
  .description($('Commands to generate parameter file for your virtual machine scale set vm.'));
  vmssvmListlistGenerate0.command('list')
  .description($('Generate vmssvmList parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .execute(function (options) {
    cli.output.info('{\"expandExpression\":\"\",\"filterExpression\":\"\",\"resourceGroupName\":\"\",\"selectExpression\":\"\",\"virtualMachineScaleSetName\":\"\"}');
    var filePath = 'vmssvmList_list.json';
    if (options.parameterFile) {
      filePath = options.parameterFile;
    }
    fs.writeFileSync(filePath, beautify('{\r\n\"expandExpression\":\"\",\r\n\"filterExpression\":\"\",\r\n\"resourceGroupName\":\"\",\r\n\"selectExpression\":\"\",\r\n\"virtualMachineScaleSetName\":\"\"\r\n}'));
    cli.output.info('=====================================');
    cli.output.info('Parameter file output to: ' + filePath);
    cli.output.info('=====================================');
  });

  vmssvmListlistParameters0.command('patch')
  .description($('Command to patch vmssvmList parameter JSON file.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--operation <operation>', $('The JSON patch operation: add, remove, or replace.'))
  .option('--path <path>', $('The JSON data path, e.g.: \"foo/1\".'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .execute(function(options) {
    cli.output.info(options.parameterFile);
    cli.output.info(options.operation);
    cli.output.info(options.path);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    if (options.operation == 'add') {
      jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    }
    else if (options.operation == 'remove') {
      jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    }
    else if (options.operation == 'replace') {
      jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters set virtual-machine-scale-set-vm-list-parameters
  var catparametersVirtualMachineScaleSetVMVirtualMachineScaleSetVMListParameters0 = cli.category('vmss');
  var parametersVirtualMachineScaleSetVMVirtualMachineScaleSetVMListParameters0 = catparametersVirtualMachineScaleSetVMVirtualMachineScaleSetVMListParameters0.category('parameters')
  .description($('Commands to manage parameter for your virtual-machine-scale-set-vm.'));
  var setparametersVirtualMachineScaleSetVMVirtualMachineScaleSetVMListParameters0 = parametersVirtualMachineScaleSetVMVirtualMachineScaleSetVMListParameters0.category('set')
  .description($('Commands to set parameter file for your virtual-machine-scale-set-vm.'));
  setparametersVirtualMachineScaleSetVMVirtualMachineScaleSetVMListParameters0.command('virtual-machine-scale-set-vm-list-parameters')
  .description($('Set catparametersVirtualMachineScaleSetVMVirtualMachineScaleSetVMListParameters0 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--expand-expression <expandExpression>', $('Set the expand-expression value.'))
  .option('--filter-expression <filterExpression>', $('Set the filter-expression value.'))
  .option('--resource-group-name <resourceGroupName>', $('Set the resource-group-name value.'))
  .option('--select-expression <selectExpression>', $('Set the select-expression value.'))
  .option('--virtual-machine-scale-set-name <virtualMachineScaleSetName>', $('Set the virtual-machine-scale-set-name value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'replace';
    options.path = '';
    var paramPath = options.path + '/' + 'expandExpression';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.expandExpression) {
      if (options.parse && options.expandExpression) {
        options.expandExpression = JSON.parse(options.expandExpression);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.expandExpression}]);
    }
    paramPath = options.path + '/' + 'filterExpression';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.filterExpression) {
      if (options.parse && options.filterExpression) {
        options.filterExpression = JSON.parse(options.filterExpression);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.filterExpression}]);
    }
    paramPath = options.path + '/' + 'resourceGroupName';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.resourceGroupName) {
      if (options.parse && options.resourceGroupName) {
        options.resourceGroupName = JSON.parse(options.resourceGroupName);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.resourceGroupName}]);
    }
    paramPath = options.path + '/' + 'selectExpression';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.selectExpression) {
      if (options.parse && options.selectExpression) {
        options.selectExpression = JSON.parse(options.selectExpression);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.selectExpression}]);
    }
    paramPath = options.path + '/' + 'virtualMachineScaleSetName';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.virtualMachineScaleSetName) {
      if (options.parse && options.virtualMachineScaleSetName) {
        options.virtualMachineScaleSetName = JSON.parse(options.virtualMachineScaleSetName);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.virtualMachineScaleSetName}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });

  //parameters remove virtual-machine-scale-set-vm-list-parameters
  var catparametersVirtualMachineScaleSetVMVirtualMachineScaleSetVMListParameters1 = cli.category('vmss');
  var parametersVirtualMachineScaleSetVMVirtualMachineScaleSetVMListParameters1 = catparametersVirtualMachineScaleSetVMVirtualMachineScaleSetVMListParameters1.category('parameters')
  .description($('Commands to remove parameter for your virtual-machine-scale-set-vm.'));
  var removeparametersVirtualMachineScaleSetVMVirtualMachineScaleSetVMListParameters1 = parametersVirtualMachineScaleSetVMVirtualMachineScaleSetVMListParameters1.category('remove')
  .description($('Commands to remove values in the parameter file for your virtual-machine-scale-set-vm.'));
  removeparametersVirtualMachineScaleSetVMVirtualMachineScaleSetVMListParameters1.command('virtual-machine-scale-set-vm-list-parameters')
  .description($('Remove catparametersVirtualMachineScaleSetVMVirtualMachineScaleSetVMListParameters1 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'remove';
    options.path = '';
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path}]);
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });
  //parameters add virtual-machine-scale-set-vm-list-parameters
  var catparametersVirtualMachineScaleSetVMVirtualMachineScaleSetVMListParameters2 = cli.category('vmss');
  var parametersVirtualMachineScaleSetVMVirtualMachineScaleSetVMListParameters2 = catparametersVirtualMachineScaleSetVMVirtualMachineScaleSetVMListParameters2.category('parameters')
  .description($('Commands to add parameter for your virtual-machine-scale-set-vm.'));
  var addparametersVirtualMachineScaleSetVMVirtualMachineScaleSetVMListParameters2 = parametersVirtualMachineScaleSetVMVirtualMachineScaleSetVMListParameters2.category('add')
  .description($('Commands to add values in the parameter file for your virtual-machine-scale-set-vm.'));
  addparametersVirtualMachineScaleSetVMVirtualMachineScaleSetVMListParameters2.command('virtual-machine-scale-set-vm-list-parameters')
  .description($('Remove catparametersVirtualMachineScaleSetVMVirtualMachineScaleSetVMListParameters2 parameter string or files.'))
  .usage('[options]')
  .option('--parameter-file <parameter-file>', $('The parameter file path.'))
  .option('--key <key>', $('The JSON key.'))
  .option('--value <value>', $('The JSON value.'))
  .option('--parse', $('Parse the JSON value to object.'))
  .option('--expand-expression <expandExpression>', $('Add the expand-expression value.'))
  .option('--filter-expression <filterExpression>', $('Add the filter-expression value.'))
  .option('--resource-group-name <resourceGroupName>', $('Add the resource-group-name value.'))
  .option('--select-expression <selectExpression>', $('Add the select-expression value.'))
  .option('--virtual-machine-scale-set-name <virtualMachineScaleSetName>', $('Add the virtual-machine-scale-set-name value.'))
  .execute(function(options) {
    cli.output.info(options);
    cli.output.info(options.parameterFile);
    cli.output.info(options.key);
    cli.output.info(options.value);
    cli.output.info(options.parse);
    if (options.parse && options.value) {
      options.value = JSON.parse(options.value);
    }
    cli.output.info(options.value);
    cli.output.info('=====================================');
    cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
    cli.output.info('=====================================');
    var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
    var parametersObj = JSON.parse(fileContent);
    cli.output.info('JSON object:');
    cli.output.info(JSON.stringify(parametersObj));
    options.operation = 'add';
    options.path = '' + '/' + options.key;
    cli.output.info('options.path = ' + options.path);
    jsonpatch.apply(parametersObj, [{op: options.operation, path: options.path, value: options.value}]);
    var paramPath = '' + '/' + 'expandExpression';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.expandExpression) {
      if (options.parse && options.expandExpression) {
        options.expandExpression = JSON.parse(options.expandExpression);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.expandExpression}]);
    }
    paramPath = '' + '/' + 'filterExpression';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.filterExpression) {
      if (options.parse && options.filterExpression) {
        options.filterExpression = JSON.parse(options.filterExpression);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.filterExpression}]);
    }
    paramPath = '' + '/' + 'resourceGroupName';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.resourceGroupName) {
      if (options.parse && options.resourceGroupName) {
        options.resourceGroupName = JSON.parse(options.resourceGroupName);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.resourceGroupName}]);
    }
    paramPath = '' + '/' + 'selectExpression';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.selectExpression) {
      if (options.parse && options.selectExpression) {
        options.selectExpression = JSON.parse(options.selectExpression);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.selectExpression}]);
    }
    paramPath = '' + '/' + 'virtualMachineScaleSetName';
    cli.output.info('================================================');
    cli.output.info('JSON Parameters Path:' + paramPath);
    cli.output.info('================================================');
    if (options.virtualMachineScaleSetName) {
      if (options.parse && options.virtualMachineScaleSetName) {
        options.virtualMachineScaleSetName = JSON.parse(options.virtualMachineScaleSetName);
      }
      jsonpatch.apply(parametersObj, [{op: options.operation, path: paramPath, value: options.virtualMachineScaleSetName}]);
    }
    var updatedContent = JSON.stringify(parametersObj);
    cli.output.info('=====================================');
    cli.output.info('JSON object (updated):');
    cli.output.info(JSON.stringify(parametersObj));
    cli.output.info('=====================================');
    fs.writeFileSync(options.parameterFile, beautify(updatedContent));
    cli.output.info('=====================================');
    cli.output.info('Parameter file updated at: ' + options.parameterFile);
    cli.output.info('=====================================');
  });


//virtualMachineScaleSetVM -> PowerOff
  var vmssvmPowerOff = cli.category('vmssvm').description($('Commands to manage your virtual machine scale set vm.'));
  vmssvmPowerOff.command('power-off')
  .description($('power-off method to manage your virtual machine scale set vm.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--vm-scale-set-name <vm-scale-set-name>', $('vm-scale-set-name'))
  .option('--instance-id <instance-id>', $('instance-id'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, vmScaleSetName, instanceId, options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    cli.output.info('vmScaleSetName = ' + options.vmScaleSetName);
    cli.output.info('instanceId = ' + options.instanceId);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSetVMs.powerOff(options.resourceGroupName, options.vmScaleSetName, options.instanceId, _);
    cli.output.json(result);
  });
//virtualMachineScaleSetVM -> Restart
  var vmssvmRestart = cli.category('vmssvm').description($('Commands to manage your virtual machine scale set vm.'));
  vmssvmRestart.command('restart')
  .description($('restart method to manage your virtual machine scale set vm.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--vm-scale-set-name <vm-scale-set-name>', $('vm-scale-set-name'))
  .option('--instance-id <instance-id>', $('instance-id'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, vmScaleSetName, instanceId, options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    cli.output.info('vmScaleSetName = ' + options.vmScaleSetName);
    cli.output.info('instanceId = ' + options.instanceId);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSetVMs.restart(options.resourceGroupName, options.vmScaleSetName, options.instanceId, _);
    cli.output.json(result);
  });
//virtualMachineScaleSetVM -> Start
  var vmssvmStart = cli.category('vmssvm').description($('Commands to manage your virtual machine scale set vm.'));
  vmssvmStart.command('start')
  .description($('start method to manage your virtual machine scale set vm.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--vm-scale-set-name <vm-scale-set-name>', $('vm-scale-set-name'))
  .option('--instance-id <instance-id>', $('instance-id'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (resourceGroupName, vmScaleSetName, instanceId, options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    cli.output.info('vmScaleSetName = ' + options.vmScaleSetName);
    cli.output.info('instanceId = ' + options.instanceId);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSetVMs.start(options.resourceGroupName, options.vmScaleSetName, options.instanceId, _);
    cli.output.json(result);
  });


};
