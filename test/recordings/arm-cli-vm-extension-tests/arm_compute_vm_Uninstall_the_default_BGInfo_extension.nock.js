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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension4095/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"b5e563a3-129f-4a05-8597-6ae6a73f1cb6\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli5a354fa5db19145c-os-1458023802368\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext8776.blob.core.windows.net/xplatstoragecntext6680/cli5a354fa5db19145c-os-1458023802368.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension4095/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext8776.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension4095/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo\",\r\n      \"name\": \"BGInfo\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension4095/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2259',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131020128379995003',
  'x-ms-request-id': '78827d01-4c0d-414b-bc3b-9ba6c6dc6718',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': '1461093c-03f6-4c4b-8525-aa3b38ba2a63',
  'x-ms-routing-request-id': 'WESTUS:20160315T064820Z:1461093c-03f6-4c4b-8525-aa3b38ba2a63',
  date: 'Tue, 15 Mar 2016 06:48:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension4095/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"b5e563a3-129f-4a05-8597-6ae6a73f1cb6\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli5a354fa5db19145c-os-1458023802368\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext8776.blob.core.windows.net/xplatstoragecntext6680/cli5a354fa5db19145c-os-1458023802368.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension4095/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext8776.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension4095/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo\",\r\n      \"name\": \"BGInfo\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension4095/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2259',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131020128379995003',
  'x-ms-request-id': '78827d01-4c0d-414b-bc3b-9ba6c6dc6718',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': '1461093c-03f6-4c4b-8525-aa3b38ba2a63',
  'x-ms-routing-request-id': 'WESTUS:20160315T064820Z:1461093c-03f6-4c4b-8525-aa3b38ba2a63',
  date: 'Tue, 15 Mar 2016 06:48:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension4095/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo?$expand=instanceView&api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.Compute\",\r\n    \"type\": \"BGInfo\",\r\n    \"typeHandlerVersion\": \"2.1\",\r\n    \"autoUpgradeMinorVersion\": true,\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"name\": \"BGInfo\",\r\n      \"type\": \"Microsoft.Compute.BGInfo\",\r\n      \"typeHandlerVersion\": \"2.1\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension4095/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo\",\r\n  \"name\": \"BGInfo\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '887',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131020128379995003',
  'x-ms-request-id': 'bb2368ff-909d-489d-b47d-d582a36bf922',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '8a926632-d1bd-44c5-ad73-7d134adebc9d',
  'x-ms-routing-request-id': 'WESTUS:20160315T064820Z:8a926632-d1bd-44c5-ad73-7d134adebc9d',
  date: 'Tue, 15 Mar 2016 06:48:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension4095/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo?$expand=instanceView&api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.Compute\",\r\n    \"type\": \"BGInfo\",\r\n    \"typeHandlerVersion\": \"2.1\",\r\n    \"autoUpgradeMinorVersion\": true,\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"name\": \"BGInfo\",\r\n      \"type\": \"Microsoft.Compute.BGInfo\",\r\n      \"typeHandlerVersion\": \"2.1\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension4095/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo\",\r\n  \"name\": \"BGInfo\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '887',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131020128379995003',
  'x-ms-request-id': 'bb2368ff-909d-489d-b47d-d582a36bf922',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '8a926632-d1bd-44c5-ad73-7d134adebc9d',
  'x-ms-routing-request-id': 'WESTUS:20160315T064820Z:8a926632-d1bd-44c5-ad73-7d134adebc9d',
  date: 'Tue, 15 Mar 2016 06:48:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension4095/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/bf0cd27c-cf3e-4905-b985-c03294e3ce6f?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/bf0cd27c-cf3e-4905-b985-c03294e3ce6f?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131020128379995003',
  'x-ms-request-id': 'bf0cd27c-cf3e-4905-b985-c03294e3ce6f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '52fa9f18-9c1a-404f-9f79-ef3b73e903ef',
  'x-ms-routing-request-id': 'WESTUS:20160315T064822Z:52fa9f18-9c1a-404f-9f79-ef3b73e903ef',
  date: 'Tue, 15 Mar 2016 06:48:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension4095/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/bf0cd27c-cf3e-4905-b985-c03294e3ce6f?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/bf0cd27c-cf3e-4905-b985-c03294e3ce6f?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131020128379995003',
  'x-ms-request-id': 'bf0cd27c-cf3e-4905-b985-c03294e3ce6f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '52fa9f18-9c1a-404f-9f79-ef3b73e903ef',
  'x-ms-routing-request-id': 'WESTUS:20160315T064822Z:52fa9f18-9c1a-404f-9f79-ef3b73e903ef',
  date: 'Tue, 15 Mar 2016 06:48:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/bf0cd27c-cf3e-4905-b985-c03294e3ce6f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"bf0cd27c-cf3e-4905-b985-c03294e3ce6f\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-15T06:48:21.54186+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '139',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131020128379995003',
  'x-ms-request-id': 'b083d13f-4155-4b78-ac99-be9a6e6743c2',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '7d0a9f87-73b8-410e-b6e3-42b0446b9896',
  'x-ms-routing-request-id': 'WESTUS:20160315T064852Z:7d0a9f87-73b8-410e-b6e3-42b0446b9896',
  date: 'Tue, 15 Mar 2016 06:48:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/bf0cd27c-cf3e-4905-b985-c03294e3ce6f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"bf0cd27c-cf3e-4905-b985-c03294e3ce6f\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-15T06:48:21.54186+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '139',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131020128379995003',
  'x-ms-request-id': 'b083d13f-4155-4b78-ac99-be9a6e6743c2',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '7d0a9f87-73b8-410e-b6e3-42b0446b9896',
  'x-ms-routing-request-id': 'WESTUS:20160315T064852Z:7d0a9f87-73b8-410e-b6e3-42b0446b9896',
  date: 'Tue, 15 Mar 2016 06:48:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/bf0cd27c-cf3e-4905-b985-c03294e3ce6f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"bf0cd27c-cf3e-4905-b985-c03294e3ce6f\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-15T06:48:21.54186+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '139',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131020128379995003',
  'x-ms-request-id': 'a73eef65-b37c-4b6b-8f2a-13963faed94d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '15f35d34-2ea4-406e-a934-dbafdb243a04',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160315T064923Z:15f35d34-2ea4-406e-a934-dbafdb243a04',
  date: 'Tue, 15 Mar 2016 06:49:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/bf0cd27c-cf3e-4905-b985-c03294e3ce6f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"bf0cd27c-cf3e-4905-b985-c03294e3ce6f\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-15T06:48:21.54186+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '139',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131020128379995003',
  'x-ms-request-id': 'a73eef65-b37c-4b6b-8f2a-13963faed94d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '15f35d34-2ea4-406e-a934-dbafdb243a04',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160315T064923Z:15f35d34-2ea4-406e-a934-dbafdb243a04',
  date: 'Tue, 15 Mar 2016 06:49:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/bf0cd27c-cf3e-4905-b985-c03294e3ce6f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"bf0cd27c-cf3e-4905-b985-c03294e3ce6f\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-03-15T06:48:21.54186+00:00\",\r\n  \"endTime\": \"2016-03-15T06:49:24.354746+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '188',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131020128379995003',
  'x-ms-request-id': '99a61c2c-ae35-41f9-b8da-7ffdba0c6f25',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '8a31d1e7-1a37-4b6c-9b49-5f48ee038d4a',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160315T064953Z:8a31d1e7-1a37-4b6c-9b49-5f48ee038d4a',
  date: 'Tue, 15 Mar 2016 06:49:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/bf0cd27c-cf3e-4905-b985-c03294e3ce6f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"bf0cd27c-cf3e-4905-b985-c03294e3ce6f\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-03-15T06:48:21.54186+00:00\",\r\n  \"endTime\": \"2016-03-15T06:49:24.354746+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '188',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131020128379995003',
  'x-ms-request-id': '99a61c2c-ae35-41f9-b8da-7ffdba0c6f25',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '8a31d1e7-1a37-4b6c-9b49-5f48ee038d4a',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160315T064953Z:8a31d1e7-1a37-4b6c-9b49-5f48ee038d4a',
  date: 'Tue, 15 Mar 2016 06:49:53 GMT',
  connection: 'close' });
 return result; }]];
