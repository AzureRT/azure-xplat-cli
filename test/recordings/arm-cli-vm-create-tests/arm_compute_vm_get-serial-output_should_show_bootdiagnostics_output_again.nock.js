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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate1542/providers/Microsoft.Compute/virtualMachines/xplatvm?$expand=instanceView&api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"e72cd0a4-7a93-4ff2-993d-7600b9fdaa26\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cliabf6fa9c0818dfc7-os-1453922989200\",\r\n        \"createOption\": \"FromImage\",\r\n        \"image\": {\r\n          \"uri\": \"https://xplatteststorage12085.blob.core.windows.net/system/Microsoft.Compute/Images/vhds/xplatvm3-osDisk.59c975a8-728d-4491-9b9c-131f60bd5a0a.vhd\"\r\n        },\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage12085.blob.core.windows.net/xplatteststoragecnt15650/cliabf6fa9c0818dfc7-os-1453922989200.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate1542/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage12085.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"vmAgent\": {\r\n        \"vmAgentVersion\": \"WALinuxAgent-2.0.14\",\r\n        \"statuses\": [\r\n          {\r\n            \"code\": \"ProvisioningState/succeeded\",\r\n            \"level\": \"Info\",\r\n            \"displayStatus\": \"Ready\",\r\n            \"message\": \"GuestAgent is running and accepting new configurations.\",\r\n            \"time\": \"2016-01-27T19:42:18+00:00\"\r\n          }\r\n        ],\r\n        \"extensionHandlers\": []\r\n      },\r\n      \"disks\": [\r\n        {\r\n          \"name\": \"cliabf6fa9c0818dfc7-os-1453922989200\",\r\n          \"statuses\": [\r\n            {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Provisioning succeeded\",\r\n              \"time\": \"2016-01-27T19:41:36.0598243+00:00\"\r\n            }\r\n          ]\r\n        }\r\n      ],\r\n      \"bootDiagnostics\": {\r\n        \"consoleScreenshotBlobUri\": \"https://xplatteststorage12085.blob.core.windows.net/bootdiagnostics-xplatvm-e72cd0a4-7a93-4ff2-993d-7600b9fdaa26/xplatvm.e72cd0a4-7a93-4ff2-993d-7600b9fdaa26.screenshot.bmp\",\r\n        \"serialConsoleLogBlobUri\": \"https://xplatteststorage12085.blob.core.windows.net/bootdiagnostics-xplatvm-e72cd0a4-7a93-4ff2-993d-7600b9fdaa26/xplatvm.e72cd0a4-7a93-4ff2-993d-7600b9fdaa26.serialconsole.log\"\r\n      },\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"time\": \"2016-01-27T19:42:08.403616+00:00\"\r\n        },\r\n        {\r\n          \"code\": \"PowerState/running\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"VM running\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate1542/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3368',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130983958640259585',
  'x-ms-request-id': '63c927e8-ad9f-42d6-a9cb-60c3f3cf5686',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14950',
  'x-ms-correlation-request-id': 'ae6c065f-477f-4814-9630-184811bb966b',
  'x-ms-routing-request-id': 'WESTUS:20160127T194240Z:ae6c065f-477f-4814-9630-184811bb966b',
  date: 'Wed, 27 Jan 2016 19:42:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate1542/providers/Microsoft.Compute/virtualMachines/xplatvm?$expand=instanceView&api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"e72cd0a4-7a93-4ff2-993d-7600b9fdaa26\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cliabf6fa9c0818dfc7-os-1453922989200\",\r\n        \"createOption\": \"FromImage\",\r\n        \"image\": {\r\n          \"uri\": \"https://xplatteststorage12085.blob.core.windows.net/system/Microsoft.Compute/Images/vhds/xplatvm3-osDisk.59c975a8-728d-4491-9b9c-131f60bd5a0a.vhd\"\r\n        },\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage12085.blob.core.windows.net/xplatteststoragecnt15650/cliabf6fa9c0818dfc7-os-1453922989200.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate1542/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage12085.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"vmAgent\": {\r\n        \"vmAgentVersion\": \"WALinuxAgent-2.0.14\",\r\n        \"statuses\": [\r\n          {\r\n            \"code\": \"ProvisioningState/succeeded\",\r\n            \"level\": \"Info\",\r\n            \"displayStatus\": \"Ready\",\r\n            \"message\": \"GuestAgent is running and accepting new configurations.\",\r\n            \"time\": \"2016-01-27T19:42:18+00:00\"\r\n          }\r\n        ],\r\n        \"extensionHandlers\": []\r\n      },\r\n      \"disks\": [\r\n        {\r\n          \"name\": \"cliabf6fa9c0818dfc7-os-1453922989200\",\r\n          \"statuses\": [\r\n            {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Provisioning succeeded\",\r\n              \"time\": \"2016-01-27T19:41:36.0598243+00:00\"\r\n            }\r\n          ]\r\n        }\r\n      ],\r\n      \"bootDiagnostics\": {\r\n        \"consoleScreenshotBlobUri\": \"https://xplatteststorage12085.blob.core.windows.net/bootdiagnostics-xplatvm-e72cd0a4-7a93-4ff2-993d-7600b9fdaa26/xplatvm.e72cd0a4-7a93-4ff2-993d-7600b9fdaa26.screenshot.bmp\",\r\n        \"serialConsoleLogBlobUri\": \"https://xplatteststorage12085.blob.core.windows.net/bootdiagnostics-xplatvm-e72cd0a4-7a93-4ff2-993d-7600b9fdaa26/xplatvm.e72cd0a4-7a93-4ff2-993d-7600b9fdaa26.serialconsole.log\"\r\n      },\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"time\": \"2016-01-27T19:42:08.403616+00:00\"\r\n        },\r\n        {\r\n          \"code\": \"PowerState/running\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"VM running\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate1542/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3368',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130983958640259585',
  'x-ms-request-id': '63c927e8-ad9f-42d6-a9cb-60c3f3cf5686',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14950',
  'x-ms-correlation-request-id': 'ae6c065f-477f-4814-9630-184811bb966b',
  'x-ms-routing-request-id': 'WESTUS:20160127T194240Z:ae6c065f-477f-4814-9630-184811bb966b',
  date: 'Wed, 27 Jan 2016 19:42:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate1542/providers/Microsoft.Storage/storageAccounts/xplatteststorage12085/listKeys?api-version=2015-06-15')
  .reply(200, "{\"key1\":\"XOIfJIMH+gI4e+gTKCH7RliIlwJw81VSPwTj0TEydMX48gIVJMtK1KvDRpsKTfTQhkB465WvLd92+cuX3pW6jw==\",\"key2\":\"l8nnSyPFOO2gnG9DzyyQgDcyho0n60ChbeXbSJa2Ju7XKQ4zzLF5P6c3dtTF8ciSZHOikguu+UV98pGnQVq9qQ==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'da1d2a38-5cb2-404c-a979-be47226f9bcd',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': 'da1d2a38-5cb2-404c-a979-be47226f9bcd',
  'x-ms-routing-request-id': 'WESTUS:20160127T194240Z:da1d2a38-5cb2-404c-a979-be47226f9bcd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Jan 2016 19:42:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate1542/providers/Microsoft.Storage/storageAccounts/xplatteststorage12085/listKeys?api-version=2015-06-15')
  .reply(200, "{\"key1\":\"XOIfJIMH+gI4e+gTKCH7RliIlwJw81VSPwTj0TEydMX48gIVJMtK1KvDRpsKTfTQhkB465WvLd92+cuX3pW6jw==\",\"key2\":\"l8nnSyPFOO2gnG9DzyyQgDcyho0n60ChbeXbSJa2Ju7XKQ4zzLF5P6c3dtTF8ciSZHOikguu+UV98pGnQVq9qQ==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'da1d2a38-5cb2-404c-a979-be47226f9bcd',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': 'da1d2a38-5cb2-404c-a979-be47226f9bcd',
  'x-ms-routing-request-id': 'WESTUS:20160127T194240Z:da1d2a38-5cb2-404c-a979-be47226f9bcd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Jan 2016 19:42:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplatteststorage12085.blob.core.windows.net:443')
  .head('/bootdiagnostics-xplatvm-e72cd0a4-7a93-4ff2-993d-7600b9fdaa26/xplatvm.e72cd0a4-7a93-4ff2-993d-7600b9fdaa26.serialconsole.log')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2d8630c8-0001-006f-663a-598eab000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 27 Jan 2016 19:42:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplatteststorage12085.blob.core.windows.net:443')
  .head('/bootdiagnostics-xplatvm-e72cd0a4-7a93-4ff2-993d-7600b9fdaa26/xplatvm.e72cd0a4-7a93-4ff2-993d-7600b9fdaa26.serialconsole.log')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2d8630c8-0001-006f-663a-598eab000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 27 Jan 2016 19:42:40 GMT',
  connection: 'close' });
 return result; }]];