// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
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
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate473/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/0?api-version=2015-06-15')
  .reply(200, "{\r\n  \"instanceId\": \"0\",\r\n  \"sku\": {\r\n    \"name\": \"Standard_A1\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"latestModelApplied\": true,\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServer\",\r\n        \"offer\": \"WindowsServer\",\r\n        \"sku\": \"2012-R2-Datacenter\",\r\n        \"version\": \"4.0.20160126\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"test-os-0-f1d4701fd19c4ec9862d50189c4ada27\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage12731.blob.core.windows.net/xplatteststoragecnt11009/test-os-0-f1d4701fd19c4ec9862d50189c4ada27.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      }\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"test-0\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate473/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/0/networkInterfaces/test\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate473/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/0\",\r\n  \"name\": \"xplattestvmss5_0\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1591',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': '1a599f4c-6bc7-407d-bbc5-9628078384c9',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'e7ccd1d5-bfe7-4899-86bc-10dd9c876c8e',
  'x-ms-routing-request-id': 'CENTRALUS:20160223T002216Z:e7ccd1d5-bfe7-4899-86bc-10dd9c876c8e',
  date: 'Tue, 23 Feb 2016 00:22:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate473/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/0?api-version=2015-06-15')
  .reply(200, "{\r\n  \"instanceId\": \"0\",\r\n  \"sku\": {\r\n    \"name\": \"Standard_A1\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"latestModelApplied\": true,\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServer\",\r\n        \"offer\": \"WindowsServer\",\r\n        \"sku\": \"2012-R2-Datacenter\",\r\n        \"version\": \"4.0.20160126\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"test-os-0-f1d4701fd19c4ec9862d50189c4ada27\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage12731.blob.core.windows.net/xplatteststoragecnt11009/test-os-0-f1d4701fd19c4ec9862d50189c4ada27.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      }\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"test-0\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate473/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/0/networkInterfaces/test\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate473/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/0\",\r\n  \"name\": \"xplattestvmss5_0\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1591',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': '1a599f4c-6bc7-407d-bbc5-9628078384c9',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'e7ccd1d5-bfe7-4899-86bc-10dd9c876c8e',
  'x-ms-routing-request-id': 'CENTRALUS:20160223T002216Z:e7ccd1d5-bfe7-4899-86bc-10dd9c876c8e',
  date: 'Tue, 23 Feb 2016 00:22:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate473/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/1?api-version=2015-06-15')
  .reply(200, "{\r\n  \"instanceId\": \"1\",\r\n  \"sku\": {\r\n    \"name\": \"Standard_A1\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"latestModelApplied\": true,\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServer\",\r\n        \"offer\": \"WindowsServer\",\r\n        \"sku\": \"2012-R2-Datacenter\",\r\n        \"version\": \"4.0.20160126\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"test-os-1-b0af230087154cbd94d0ff09cab35a35\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage12731.blob.core.windows.net/xplatteststoragecnt11009/test-os-1-b0af230087154cbd94d0ff09cab35a35.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      }\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"test-1\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate473/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/1/networkInterfaces/test\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate473/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/1\",\r\n  \"name\": \"xplattestvmss5_1\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1591',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': 'adce36ee-7903-4516-88fc-6d80d9e954c0',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '928ae5e3-fdbc-4a1b-bbcd-fe06c150df01',
  'x-ms-routing-request-id': 'CENTRALUS:20160223T002217Z:928ae5e3-fdbc-4a1b-bbcd-fe06c150df01',
  date: 'Tue, 23 Feb 2016 00:22:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate473/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/1?api-version=2015-06-15')
  .reply(200, "{\r\n  \"instanceId\": \"1\",\r\n  \"sku\": {\r\n    \"name\": \"Standard_A1\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"latestModelApplied\": true,\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServer\",\r\n        \"offer\": \"WindowsServer\",\r\n        \"sku\": \"2012-R2-Datacenter\",\r\n        \"version\": \"4.0.20160126\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"test-os-1-b0af230087154cbd94d0ff09cab35a35\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage12731.blob.core.windows.net/xplatteststoragecnt11009/test-os-1-b0af230087154cbd94d0ff09cab35a35.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      }\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"test-1\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate473/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/1/networkInterfaces/test\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate473/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/1\",\r\n  \"name\": \"xplattestvmss5_1\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1591',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': 'adce36ee-7903-4516-88fc-6d80d9e954c0',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '928ae5e3-fdbc-4a1b-bbcd-fe06c150df01',
  'x-ms-routing-request-id': 'CENTRALUS:20160223T002217Z:928ae5e3-fdbc-4a1b-bbcd-fe06c150df01',
  date: 'Tue, 23 Feb 2016 00:22:17 GMT',
  connection: 'close' });
 return result; }]];