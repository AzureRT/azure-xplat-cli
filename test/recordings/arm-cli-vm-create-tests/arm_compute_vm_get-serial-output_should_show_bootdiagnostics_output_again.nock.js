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
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate3135/providers/Microsoft.Compute/virtualMachines/xplatvm?$expand=instanceView&api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"cf0be4d0-c36a-4810-a76e-4d5ca81c61fd\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.04\",\r\n        \"version\": \"15.04.201507070\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cliddd050ce78f24cd2-os-1447437371734\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage18061.blob.core.windows.net/xplatteststoragecnt17686/cliddd050ce78f24cd2-os-1447437371734.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate3135/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage18061.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"vmAgent\": {\r\n        \"vmAgentVersion\": \"WALinuxAgent-2.0.13\",\r\n        \"statuses\": [\r\n          {\r\n            \"code\": \"ProvisioningState/succeeded\",\r\n            \"level\": \"Info\",\r\n            \"displayStatus\": \"Ready\",\r\n            \"message\": \"GuestAgent is running and accepting new configurations.\",\r\n            \"time\": \"2015-11-13T18:13:43+00:00\"\r\n          }\r\n        ],\r\n        \"extensionHandlers\": []\r\n      },\r\n      \"disks\": [\r\n        {\r\n          \"name\": \"cliddd050ce78f24cd2-os-1447437371734\",\r\n          \"statuses\": [\r\n            {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Provisioning succeeded\",\r\n              \"time\": \"2015-11-13T18:12:27.9757793+00:00\"\r\n            }\r\n          ]\r\n        }\r\n      ],\r\n      \"bootDiagnostics\": {\r\n        \"consoleScreenshotBlobUri\": \"https://xplatteststorage18061.blob.core.windows.net/bootdiagnostics-xplatvm-cf0be4d0-c36a-4810-a76e-4d5ca81c61fd/xplatvm.cf0be4d0-c36a-4810-a76e-4d5ca81c61fd.screenshot.bmp\",\r\n        \"serialConsoleLogBlobUri\": \"https://xplatteststorage18061.blob.core.windows.net/bootdiagnostics-xplatvm-cf0be4d0-c36a-4810-a76e-4d5ca81c61fd/xplatvm.cf0be4d0-c36a-4810-a76e-4d5ca81c61fd.serialconsole.log\"\r\n      },\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"time\": \"2015-11-13T18:13:35.1166007+00:00\"\r\n        },\r\n        {\r\n          \"code\": \"PowerState/running\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"VM running\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate3135/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5015',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': '8bf49827-c82b-4103-8788-ed1cd795d832',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '81334723-e73b-4658-bf6a-9b65d51c1b30',
  'x-ms-routing-request-id': 'WESTUS:20151113T181404Z:81334723-e73b-4658-bf6a-9b65d51c1b30',
  date: 'Fri, 13 Nov 2015 18:14:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate3135/providers/Microsoft.Compute/virtualMachines/xplatvm?$expand=instanceView&api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"cf0be4d0-c36a-4810-a76e-4d5ca81c61fd\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.04\",\r\n        \"version\": \"15.04.201507070\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cliddd050ce78f24cd2-os-1447437371734\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage18061.blob.core.windows.net/xplatteststoragecnt17686/cliddd050ce78f24cd2-os-1447437371734.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate3135/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage18061.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"vmAgent\": {\r\n        \"vmAgentVersion\": \"WALinuxAgent-2.0.13\",\r\n        \"statuses\": [\r\n          {\r\n            \"code\": \"ProvisioningState/succeeded\",\r\n            \"level\": \"Info\",\r\n            \"displayStatus\": \"Ready\",\r\n            \"message\": \"GuestAgent is running and accepting new configurations.\",\r\n            \"time\": \"2015-11-13T18:13:43+00:00\"\r\n          }\r\n        ],\r\n        \"extensionHandlers\": []\r\n      },\r\n      \"disks\": [\r\n        {\r\n          \"name\": \"cliddd050ce78f24cd2-os-1447437371734\",\r\n          \"statuses\": [\r\n            {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Provisioning succeeded\",\r\n              \"time\": \"2015-11-13T18:12:27.9757793+00:00\"\r\n            }\r\n          ]\r\n        }\r\n      ],\r\n      \"bootDiagnostics\": {\r\n        \"consoleScreenshotBlobUri\": \"https://xplatteststorage18061.blob.core.windows.net/bootdiagnostics-xplatvm-cf0be4d0-c36a-4810-a76e-4d5ca81c61fd/xplatvm.cf0be4d0-c36a-4810-a76e-4d5ca81c61fd.screenshot.bmp\",\r\n        \"serialConsoleLogBlobUri\": \"https://xplatteststorage18061.blob.core.windows.net/bootdiagnostics-xplatvm-cf0be4d0-c36a-4810-a76e-4d5ca81c61fd/xplatvm.cf0be4d0-c36a-4810-a76e-4d5ca81c61fd.serialconsole.log\"\r\n      },\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"time\": \"2015-11-13T18:13:35.1166007+00:00\"\r\n        },\r\n        {\r\n          \"code\": \"PowerState/running\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"VM running\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate3135/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5015',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': '8bf49827-c82b-4103-8788-ed1cd795d832',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '81334723-e73b-4658-bf6a-9b65d51c1b30',
  'x-ms-routing-request-id': 'WESTUS:20151113T181404Z:81334723-e73b-4658-bf6a-9b65d51c1b30',
  date: 'Fri, 13 Nov 2015 18:14:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate3135/providers/Microsoft.Storage/storageAccounts/xplatteststorage18061/listKeys?api-version=2015-06-15')
  .reply(200, "{\"key1\":\"sIYtzJK5qDaYPdtCyn6nS8XnmfCCgOF61j3ppK4Evu9A636RH6FEABRioIyq0q4ZyrbHK89xFx2n+62Mfveejg==\",\"key2\":\"EsQZn2/Sv3Ja32iM9qUvJz5cwvGlw9oEyaIOk82zQtZt5AKZik9r21TOmDG9+drLXJDxf/IKl2Xs3XbIX1Um6w==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd06b4fea-9f68-4972-a255-038deaecd3c4',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'd06b4fea-9f68-4972-a255-038deaecd3c4',
  'x-ms-routing-request-id': 'WESTUS:20151113T181405Z:d06b4fea-9f68-4972-a255-038deaecd3c4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 13 Nov 2015 18:14:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate3135/providers/Microsoft.Storage/storageAccounts/xplatteststorage18061/listKeys?api-version=2015-06-15')
  .reply(200, "{\"key1\":\"sIYtzJK5qDaYPdtCyn6nS8XnmfCCgOF61j3ppK4Evu9A636RH6FEABRioIyq0q4ZyrbHK89xFx2n+62Mfveejg==\",\"key2\":\"EsQZn2/Sv3Ja32iM9qUvJz5cwvGlw9oEyaIOk82zQtZt5AKZik9r21TOmDG9+drLXJDxf/IKl2Xs3XbIX1Um6w==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd06b4fea-9f68-4972-a255-038deaecd3c4',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'd06b4fea-9f68-4972-a255-038deaecd3c4',
  'x-ms-routing-request-id': 'WESTUS:20151113T181405Z:d06b4fea-9f68-4972-a255-038deaecd3c4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 13 Nov 2015 18:14:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplatteststorage18061.blob.core.windows.net:443')
  .head('/bootdiagnostics-xplatvm-cf0be4d0-c36a-4810-a76e-4d5ca81c61fd/xplatvm.cf0be4d0-c36a-4810-a76e-4d5ca81c61fd.serialconsole.log')
  .reply(200, "", { 'content-length': '5120',
  'last-modified': 'Fri, 13 Nov 2015 18:13:53 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D2EC56300B39E8"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9a4f4d99-0001-0009-263f-1e1b89000000',
  'x-ms-version': '2015-02-21',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'PageBlob',
  'x-ms-blob-sequence-number': '0',
  date: 'Fri, 13 Nov 2015 18:14:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplatteststorage18061.blob.core.windows.net:443')
  .head('/bootdiagnostics-xplatvm-cf0be4d0-c36a-4810-a76e-4d5ca81c61fd/xplatvm.cf0be4d0-c36a-4810-a76e-4d5ca81c61fd.serialconsole.log')
  .reply(200, "", { 'content-length': '5120',
  'last-modified': 'Fri, 13 Nov 2015 18:13:53 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D2EC56300B39E8"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9a4f4d99-0001-0009-263f-1e1b89000000',
  'x-ms-version': '2015-02-21',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'PageBlob',
  'x-ms-blob-sequence-number': '0',
  date: 'Fri, 13 Nov 2015 18:14:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplatteststorage18061.blob.core.windows.net:443')
  .get('/bootdiagnostics-xplatvm-cf0be4d0-c36a-4810-a76e-4d5ca81c61fd/xplatvm.cf0be4d0-c36a-4810-a76e-4d5ca81c61fd.serialconsole.log')
  .reply(200, "2015/11/13 18:11:03 ERROR:CalledProcessError.  Error Code ss 1\r\n2015/11/13 18:11:03 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:11:03 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:11:08 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:11:08 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:11:08 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:11:13 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:11:13 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:11:13 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:11:18 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:11:18 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:11:18 ERROR:CalledProcessError.  Command result ws \r\n2015/11/13 18:11:23 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:11:23 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:11:23 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:11:28 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:11:28 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:11:28 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:11:33 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:11:33 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:11:33 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:11:38 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:11:38 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:1:38 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:11:43 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:11:43 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:11:43 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:12:54 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:12:54 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n0015/11/13 18:12:54 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:12:59 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:12:59 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:12:59 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:13:04 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:13:04 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:13:04 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:13:09 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:13:09 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:13:09 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:13:14 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:13:14 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:13:14 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:13:19 ERROR:CallProcessError.  Error Code is 1\r\n2015/11/13 18:13:19 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:13:19 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:13:24 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:13:24 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:13:24 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:13:29 ERROR:CalledProcessError.  rror Code is 1\r\n2015/11/13 18:13:29 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:13:29 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:13:34 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:13:34 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:13:34 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:13:39 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:13:39 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:13:39 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:13:40 Retrieved GoalState from Windows Azure Fabric.\r\n2015/11/13 18:13:40 ExpectedState: Started\r\n2015/11/13 18:13:40 ContainerId: 800df64c-14fe-4bca-a10c-0e9b95436e17\r\n2015/11/13 18:13:40 RoleInstanceId: d4be9ea0-c75e-43cb-bac5-da8962115687._xplatvm\r\n2015/11/13 18:13:40 Public cert with thumbprint: 1CFC1AB82C3A82A7CF23F392FCC9EF49F2607B0C was retrieved.\r\n2015/11/13 18:13:40 Posted Role Properties. CertificateThumbprint=c15422fbcd7368460ad00476b6ab39a9\r\n2015/11/13 18:13:43 Finished processing ExtensionsConfig.xml\r\n2015/11/13 18:13:45 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:13:45 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:13:45 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:13:50 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:13:50 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:13:50 ERROR:CalledProcessError.  Command result was \r\n\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000", { 'content-length': '5120',
  'last-modified': 'Fri, 13 Nov 2015 18:13:53 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D2EC56300B39E8"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'cb891c63-0001-003a-673f-1e42a4000000',
  'x-ms-version': '2015-02-21',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'PageBlob',
  'x-ms-blob-sequence-number': '0',
  date: 'Fri, 13 Nov 2015 18:14:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplatteststorage18061.blob.core.windows.net:443')
  .get('/bootdiagnostics-xplatvm-cf0be4d0-c36a-4810-a76e-4d5ca81c61fd/xplatvm.cf0be4d0-c36a-4810-a76e-4d5ca81c61fd.serialconsole.log')
  .reply(200, "2015/11/13 18:11:03 ERROR:CalledProcessError.  Error Code ss 1\r\n2015/11/13 18:11:03 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:11:03 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:11:08 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:11:08 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:11:08 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:11:13 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:11:13 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:11:13 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:11:18 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:11:18 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:11:18 ERROR:CalledProcessError.  Command result ws \r\n2015/11/13 18:11:23 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:11:23 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:11:23 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:11:28 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:11:28 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:11:28 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:11:33 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:11:33 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:11:33 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:11:38 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:11:38 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:1:38 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:11:43 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:11:43 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:11:43 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:12:54 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:12:54 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n0015/11/13 18:12:54 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:12:59 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:12:59 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:12:59 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:13:04 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:13:04 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:13:04 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:13:09 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:13:09 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:13:09 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:13:14 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:13:14 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:13:14 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:13:19 ERROR:CallProcessError.  Error Code is 1\r\n2015/11/13 18:13:19 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:13:19 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:13:24 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:13:24 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:13:24 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:13:29 ERROR:CalledProcessError.  rror Code is 1\r\n2015/11/13 18:13:29 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:13:29 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:13:34 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:13:34 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:13:34 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:13:39 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:13:39 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:13:39 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:13:40 Retrieved GoalState from Windows Azure Fabric.\r\n2015/11/13 18:13:40 ExpectedState: Started\r\n2015/11/13 18:13:40 ContainerId: 800df64c-14fe-4bca-a10c-0e9b95436e17\r\n2015/11/13 18:13:40 RoleInstanceId: d4be9ea0-c75e-43cb-bac5-da8962115687._xplatvm\r\n2015/11/13 18:13:40 Public cert with thumbprint: 1CFC1AB82C3A82A7CF23F392FCC9EF49F2607B0C was retrieved.\r\n2015/11/13 18:13:40 Posted Role Properties. CertificateThumbprint=c15422fbcd7368460ad00476b6ab39a9\r\n2015/11/13 18:13:43 Finished processing ExtensionsConfig.xml\r\n2015/11/13 18:13:45 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:13:45 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:13:45 ERROR:CalledProcessError.  Command result was \r\n2015/11/13 18:13:50 ERROR:CalledProcessError.  Error Code is 1\r\n2015/11/13 18:13:50 ERROR:CalledProcessError.  Command string was pidof  dhclient\r\n2015/11/13 18:13:50 ERROR:CalledProcessError.  Command result was \r\n\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000", { 'content-length': '5120',
  'last-modified': 'Fri, 13 Nov 2015 18:13:53 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D2EC56300B39E8"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'cb891c63-0001-003a-673f-1e42a4000000',
  'x-ms-version': '2015-02-21',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'PageBlob',
  'x-ms-blob-sequence-number': '0',
  date: 'Fri, 13 Nov 2015 18:14:06 GMT',
  connection: 'close' });
 return result; }]];