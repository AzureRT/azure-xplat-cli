// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/virtualMachineScaleSets?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"sku\": {\r\n        \"name\": \"Standard_A1\",\r\n        \"tier\": \"Standard\",\r\n        \"capacity\": 51\r\n      },\r\n      \"properties\": {\r\n        \"upgradePolicy\": {\r\n          \"mode\": \"Manual\"\r\n        },\r\n        \"virtualMachineProfile\": {\r\n          \"osProfile\": {\r\n            \"computerNamePrefix\": \"test\",\r\n            \"adminUsername\": \"azureuser\",\r\n            \"windowsConfiguration\": {\r\n              \"provisionVMAgent\": true,\r\n              \"enableAutomaticUpdates\": true\r\n            },\r\n            \"secrets\": []\r\n          },\r\n          \"storageProfile\": {\r\n            \"osDisk\": {\r\n              \"vhdContainers\": [\r\n                \"https://xplatteststorage15539.blob.core.windows.net/xplatteststoragecnt19298\",\r\n                \"https://xplatteststorage22389.blob.core.windows.net/xplatteststoragecnt21575\",\r\n                \"https://xplatteststorage3936.blob.core.windows.net/xplatteststoragecnt31155\"\r\n              ],\r\n              \"name\": \"test\",\r\n              \"createOption\": \"FromImage\",\r\n              \"caching\": \"None\"\r\n            },\r\n            \"imageReference\": {\r\n              \"publisher\": \"MicrosoftWindowsServer\",\r\n              \"offer\": \"WindowsServer\",\r\n              \"sku\": \"2012-R2-Datacenter\",\r\n              \"version\": \"latest\"\r\n            }\r\n          },\r\n          \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Network/virtualNetworks/xplattestvnet193/subnets/xplattestsubnet232\"}}}]}}]}\r\n        },\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/XPLATTSTVMSSGCREATE4245/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n      \"name\": \"xplattestvmss5\",\r\n      \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2054',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131010277893354386',
  'x-ms-request-id': 'a60e720e-6414-423f-b6bd-9733739a2857',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'a58161b4-cdba-4d45-8a35-77bbf622c13b',
  'x-ms-routing-request-id': 'WESTUS:20160313T031111Z:a58161b4-cdba-4d45-8a35-77bbf622c13b',
  date: 'Sun, 13 Mar 2016 03:11:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/virtualMachineScaleSets?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"sku\": {\r\n        \"name\": \"Standard_A1\",\r\n        \"tier\": \"Standard\",\r\n        \"capacity\": 51\r\n      },\r\n      \"properties\": {\r\n        \"upgradePolicy\": {\r\n          \"mode\": \"Manual\"\r\n        },\r\n        \"virtualMachineProfile\": {\r\n          \"osProfile\": {\r\n            \"computerNamePrefix\": \"test\",\r\n            \"adminUsername\": \"azureuser\",\r\n            \"windowsConfiguration\": {\r\n              \"provisionVMAgent\": true,\r\n              \"enableAutomaticUpdates\": true\r\n            },\r\n            \"secrets\": []\r\n          },\r\n          \"storageProfile\": {\r\n            \"osDisk\": {\r\n              \"vhdContainers\": [\r\n                \"https://xplatteststorage15539.blob.core.windows.net/xplatteststoragecnt19298\",\r\n                \"https://xplatteststorage22389.blob.core.windows.net/xplatteststoragecnt21575\",\r\n                \"https://xplatteststorage3936.blob.core.windows.net/xplatteststoragecnt31155\"\r\n              ],\r\n              \"name\": \"test\",\r\n              \"createOption\": \"FromImage\",\r\n              \"caching\": \"None\"\r\n            },\r\n            \"imageReference\": {\r\n              \"publisher\": \"MicrosoftWindowsServer\",\r\n              \"offer\": \"WindowsServer\",\r\n              \"sku\": \"2012-R2-Datacenter\",\r\n              \"version\": \"latest\"\r\n            }\r\n          },\r\n          \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Network/virtualNetworks/xplattestvnet193/subnets/xplattestsubnet232\"}}}]}}]}\r\n        },\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/XPLATTSTVMSSGCREATE4245/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n      \"name\": \"xplattestvmss5\",\r\n      \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2054',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131010277893354386',
  'x-ms-request-id': 'a60e720e-6414-423f-b6bd-9733739a2857',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'a58161b4-cdba-4d45-8a35-77bbf622c13b',
  'x-ms-routing-request-id': 'WESTUS:20160313T031111Z:a58161b4-cdba-4d45-8a35-77bbf622c13b',
  date: 'Sun, 13 Mar 2016 03:11:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Compute/virtualMachineScaleSets?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"sku\": {\r\n        \"name\": \"Standard_A1\",\r\n        \"tier\": \"Standard\",\r\n        \"capacity\": 51\r\n      },\r\n      \"properties\": {\r\n        \"upgradePolicy\": {\r\n          \"mode\": \"Manual\"\r\n        },\r\n        \"virtualMachineProfile\": {\r\n          \"osProfile\": {\r\n            \"computerNamePrefix\": \"test\",\r\n            \"adminUsername\": \"azureuser\",\r\n            \"windowsConfiguration\": {\r\n              \"provisionVMAgent\": true,\r\n              \"enableAutomaticUpdates\": true\r\n            },\r\n            \"secrets\": []\r\n          },\r\n          \"storageProfile\": {\r\n            \"osDisk\": {\r\n              \"vhdContainers\": [\r\n                \"https://xplatteststorage15539.blob.core.windows.net/xplatteststoragecnt19298\",\r\n                \"https://xplatteststorage22389.blob.core.windows.net/xplatteststoragecnt21575\",\r\n                \"https://xplatteststorage3936.blob.core.windows.net/xplatteststoragecnt31155\"\r\n              ],\r\n              \"name\": \"test\",\r\n              \"createOption\": \"FromImage\",\r\n              \"caching\": \"None\"\r\n            },\r\n            \"imageReference\": {\r\n              \"publisher\": \"MicrosoftWindowsServer\",\r\n              \"offer\": \"WindowsServer\",\r\n              \"sku\": \"2012-R2-Datacenter\",\r\n              \"version\": \"latest\"\r\n            }\r\n          },\r\n          \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Network/virtualNetworks/xplattestvnet193/subnets/xplattestsubnet232\"}}}]}}]}\r\n        },\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n      \"name\": \"xplattestvmss5\",\r\n      \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2054',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131010277893354386',
  'x-ms-request-id': 'aaa11870-4a7b-4c76-ae8b-e1bc55fb1efb',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'bebdbe15-df22-4fab-907f-75cf3caaa2c9',
  'x-ms-routing-request-id': 'WESTUS:20160313T031112Z:bebdbe15-df22-4fab-907f-75cf3caaa2c9',
  date: 'Sun, 13 Mar 2016 03:11:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Compute/virtualMachineScaleSets?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"sku\": {\r\n        \"name\": \"Standard_A1\",\r\n        \"tier\": \"Standard\",\r\n        \"capacity\": 51\r\n      },\r\n      \"properties\": {\r\n        \"upgradePolicy\": {\r\n          \"mode\": \"Manual\"\r\n        },\r\n        \"virtualMachineProfile\": {\r\n          \"osProfile\": {\r\n            \"computerNamePrefix\": \"test\",\r\n            \"adminUsername\": \"azureuser\",\r\n            \"windowsConfiguration\": {\r\n              \"provisionVMAgent\": true,\r\n              \"enableAutomaticUpdates\": true\r\n            },\r\n            \"secrets\": []\r\n          },\r\n          \"storageProfile\": {\r\n            \"osDisk\": {\r\n              \"vhdContainers\": [\r\n                \"https://xplatteststorage15539.blob.core.windows.net/xplatteststoragecnt19298\",\r\n                \"https://xplatteststorage22389.blob.core.windows.net/xplatteststoragecnt21575\",\r\n                \"https://xplatteststorage3936.blob.core.windows.net/xplatteststoragecnt31155\"\r\n              ],\r\n              \"name\": \"test\",\r\n              \"createOption\": \"FromImage\",\r\n              \"caching\": \"None\"\r\n            },\r\n            \"imageReference\": {\r\n              \"publisher\": \"MicrosoftWindowsServer\",\r\n              \"offer\": \"WindowsServer\",\r\n              \"sku\": \"2012-R2-Datacenter\",\r\n              \"version\": \"latest\"\r\n            }\r\n          },\r\n          \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Network/virtualNetworks/xplattestvnet193/subnets/xplattestsubnet232\"}}}]}}]}\r\n        },\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n      \"name\": \"xplattestvmss5\",\r\n      \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2054',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131010277893354386',
  'x-ms-request-id': 'aaa11870-4a7b-4c76-ae8b-e1bc55fb1efb',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'bebdbe15-df22-4fab-907f-75cf3caaa2c9',
  'x-ms-routing-request-id': 'WESTUS:20160313T031112Z:bebdbe15-df22-4fab-907f-75cf3caaa2c9',
  date: 'Sun, 13 Mar 2016 03:11:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Compute/virtualMachineScaleSets?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"sku\": {\r\n        \"name\": \"Standard_A1\",\r\n        \"tier\": \"Standard\",\r\n        \"capacity\": 51\r\n      },\r\n      \"properties\": {\r\n        \"upgradePolicy\": {\r\n          \"mode\": \"Manual\"\r\n        },\r\n        \"virtualMachineProfile\": {\r\n          \"osProfile\": {\r\n            \"computerNamePrefix\": \"test\",\r\n            \"adminUsername\": \"azureuser\",\r\n            \"windowsConfiguration\": {\r\n              \"provisionVMAgent\": true,\r\n              \"enableAutomaticUpdates\": true\r\n            },\r\n            \"secrets\": []\r\n          },\r\n          \"storageProfile\": {\r\n            \"osDisk\": {\r\n              \"vhdContainers\": [\r\n                \"https://xplatteststorage15539.blob.core.windows.net/xplatteststoragecnt19298\",\r\n                \"https://xplatteststorage22389.blob.core.windows.net/xplatteststoragecnt21575\",\r\n                \"https://xplatteststorage3936.blob.core.windows.net/xplatteststoragecnt31155\"\r\n              ],\r\n              \"name\": \"test\",\r\n              \"createOption\": \"FromImage\",\r\n              \"caching\": \"None\"\r\n            },\r\n            \"imageReference\": {\r\n              \"publisher\": \"MicrosoftWindowsServer\",\r\n              \"offer\": \"WindowsServer\",\r\n              \"sku\": \"2012-R2-Datacenter\",\r\n              \"version\": \"latest\"\r\n            }\r\n          },\r\n          \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Network/virtualNetworks/xplattestvnet193/subnets/xplattestsubnet232\"}}}]}}]}\r\n        },\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n      \"name\": \"xplattestvmss5\",\r\n      \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2054',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131010277893354386',
  'x-ms-request-id': 'ef0d4c94-1a7f-4c76-8cf5-cb8c5d8b215d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'd1728793-f6a0-4f9c-8379-6bedb6d03a0c',
  'x-ms-routing-request-id': 'WESTUS:20160313T031113Z:d1728793-f6a0-4f9c-8379-6bedb6d03a0c',
  date: 'Sun, 13 Mar 2016 03:11:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Compute/virtualMachineScaleSets?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"sku\": {\r\n        \"name\": \"Standard_A1\",\r\n        \"tier\": \"Standard\",\r\n        \"capacity\": 51\r\n      },\r\n      \"properties\": {\r\n        \"upgradePolicy\": {\r\n          \"mode\": \"Manual\"\r\n        },\r\n        \"virtualMachineProfile\": {\r\n          \"osProfile\": {\r\n            \"computerNamePrefix\": \"test\",\r\n            \"adminUsername\": \"azureuser\",\r\n            \"windowsConfiguration\": {\r\n              \"provisionVMAgent\": true,\r\n              \"enableAutomaticUpdates\": true\r\n            },\r\n            \"secrets\": []\r\n          },\r\n          \"storageProfile\": {\r\n            \"osDisk\": {\r\n              \"vhdContainers\": [\r\n                \"https://xplatteststorage15539.blob.core.windows.net/xplatteststoragecnt19298\",\r\n                \"https://xplatteststorage22389.blob.core.windows.net/xplatteststoragecnt21575\",\r\n                \"https://xplatteststorage3936.blob.core.windows.net/xplatteststoragecnt31155\"\r\n              ],\r\n              \"name\": \"test\",\r\n              \"createOption\": \"FromImage\",\r\n              \"caching\": \"None\"\r\n            },\r\n            \"imageReference\": {\r\n              \"publisher\": \"MicrosoftWindowsServer\",\r\n              \"offer\": \"WindowsServer\",\r\n              \"sku\": \"2012-R2-Datacenter\",\r\n              \"version\": \"latest\"\r\n            }\r\n          },\r\n          \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Network/virtualNetworks/xplattestvnet193/subnets/xplattestsubnet232\"}}}]}}]}\r\n        },\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n      \"name\": \"xplattestvmss5\",\r\n      \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2054',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131010277893354386',
  'x-ms-request-id': 'ef0d4c94-1a7f-4c76-8cf5-cb8c5d8b215d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'd1728793-f6a0-4f9c-8379-6bedb6d03a0c',
  'x-ms-routing-request-id': 'WESTUS:20160313T031113Z:d1728793-f6a0-4f9c-8379-6bedb6d03a0c',
  date: 'Sun, 13 Mar 2016 03:11:13 GMT',
  connection: 'close' });
 return result; }]];
