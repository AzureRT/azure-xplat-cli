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
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/0?api-version=2015-06-15')
  .reply(200, "{\r\n  \"instanceId\": \"0\",\r\n  \"sku\": {\r\n    \"name\": \"Standard_A1\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"latestModelApplied\": true,\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServer\",\r\n        \"offer\": \"WindowsServer\",\r\n        \"sku\": \"2012-R2-Datacenter\",\r\n        \"version\": \"4.0.20160229\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"test-os-0-76386e026d4d46d4b0d71fedeed9b788\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage15539.blob.core.windows.net/xplatteststoragecnt19298/test-os-0-76386e026d4d46d4b0d71fedeed9b788.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      }\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"test-0\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/0/networkInterfaces/test\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/0\",\r\n  \"name\": \"xplattestvmss5_0\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1593',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131010277893354386',
  'x-ms-request-id': 'cb499d94-4385-4fc8-a4bf-f35aa85e1ed1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '4fdaf174-6797-427d-8625-a252885e4396',
  'x-ms-routing-request-id': 'WESTUS:20160313T031150Z:4fdaf174-6797-427d-8625-a252885e4396',
  date: 'Sun, 13 Mar 2016 03:11:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/0?api-version=2015-06-15')
  .reply(200, "{\r\n  \"instanceId\": \"0\",\r\n  \"sku\": {\r\n    \"name\": \"Standard_A1\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"latestModelApplied\": true,\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServer\",\r\n        \"offer\": \"WindowsServer\",\r\n        \"sku\": \"2012-R2-Datacenter\",\r\n        \"version\": \"4.0.20160229\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"test-os-0-76386e026d4d46d4b0d71fedeed9b788\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage15539.blob.core.windows.net/xplatteststoragecnt19298/test-os-0-76386e026d4d46d4b0d71fedeed9b788.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      }\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"test-0\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/0/networkInterfaces/test\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/0\",\r\n  \"name\": \"xplattestvmss5_0\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1593',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131010277893354386',
  'x-ms-request-id': 'cb499d94-4385-4fc8-a4bf-f35aa85e1ed1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '4fdaf174-6797-427d-8625-a252885e4396',
  'x-ms-routing-request-id': 'WESTUS:20160313T031150Z:4fdaf174-6797-427d-8625-a252885e4396',
  date: 'Sun, 13 Mar 2016 03:11:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/1?api-version=2015-06-15')
  .reply(200, "{\r\n  \"instanceId\": \"1\",\r\n  \"sku\": {\r\n    \"name\": \"Standard_A1\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"latestModelApplied\": true,\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServer\",\r\n        \"offer\": \"WindowsServer\",\r\n        \"sku\": \"2012-R2-Datacenter\",\r\n        \"version\": \"4.0.20160229\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"test-os-1-86230e28c14f4d8282f35142d377ef2a\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage22389.blob.core.windows.net/xplatteststoragecnt21575/test-os-1-86230e28c14f4d8282f35142d377ef2a.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      }\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"test-1\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/1/networkInterfaces/test\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/1\",\r\n  \"name\": \"xplattestvmss5_1\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1593',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131010277893354386',
  'x-ms-request-id': '8dc51f5e-f752-4f26-8248-e7f53d778ad9',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '5950af7a-b20f-4511-88ac-97d9f7063cd2',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160313T031151Z:5950af7a-b20f-4511-88ac-97d9f7063cd2',
  date: 'Sun, 13 Mar 2016 03:11:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/1?api-version=2015-06-15')
  .reply(200, "{\r\n  \"instanceId\": \"1\",\r\n  \"sku\": {\r\n    \"name\": \"Standard_A1\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"latestModelApplied\": true,\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServer\",\r\n        \"offer\": \"WindowsServer\",\r\n        \"sku\": \"2012-R2-Datacenter\",\r\n        \"version\": \"4.0.20160229\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"test-os-1-86230e28c14f4d8282f35142d377ef2a\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage22389.blob.core.windows.net/xplatteststoragecnt21575/test-os-1-86230e28c14f4d8282f35142d377ef2a.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      }\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"test-1\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/1/networkInterfaces/test\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate4245/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/1\",\r\n  \"name\": \"xplattestvmss5_1\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1593',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131010277893354386',
  'x-ms-request-id': '8dc51f5e-f752-4f26-8248-e7f53d778ad9',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '5950af7a-b20f-4511-88ac-97d9f7063cd2',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160313T031151Z:5950af7a-b20f-4511-88ac-97d9f7063cd2',
  date: 'Sun, 13 Mar 2016 03:11:51 GMT',
  connection: 'close' });
 return result; }]];