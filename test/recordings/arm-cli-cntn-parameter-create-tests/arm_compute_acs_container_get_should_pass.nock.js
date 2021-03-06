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
    _eventsCount: '1',
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
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate4756/providers/Microsoft.ContainerService/containerServices/xplatContainer9457?api-version=2016-09-30')
  .reply(200, "{\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate4756/providers/Microsoft.ContainerService/containerServices/xplatContainer9457\",\r\n  \"name\": \"xplatContainer9457\",\r\n  \"type\": \"Microsoft.ContainerService/ContainerServices\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {},\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"orchestratorProfile\": {\r\n      \"orchestratorType\": \"DCOS\"\r\n    },\r\n    \"masterProfile\": {\r\n      \"count\": 1,\r\n      \"dnsPrefix\": \"xplatContainer9457master\",\r\n      \"fqdn\": \"xplatcontainer9457master.eastus.cloudapp.azure.com\"\r\n    },\r\n    \"agentPoolProfiles\": [\r\n      {\r\n        \"name\": \"xplatContainer9457a1\",\r\n        \"count\": 2,\r\n        \"vmSize\": \"Standard_A1\",\r\n        \"dnsPrefix\": \"xplatContainer9457a2\",\r\n        \"fqdn\": \"xplatcontainer9457a2.eastus.cloudapp.azure.com\",\r\n        \"osType\": \"Linux\"\r\n      }\r\n    ],\r\n    \"linuxProfile\": {\r\n      \"ssh\": {\r\n        \"publicKeys\": [\r\n          {\r\n            \"keyData\": \"ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAQEA1J/ZLar7bMxCr0eN1yAkMM8B7Z6eQP2P0LG5W/ATM/c7r5voER2N/xJ2JMyKRM73zX83nyTroGRynFsLTaizSQ2hNCAs15oxwspnFrlBZVsNhNs6DvPUDosJ81/ud5Emle8VYAWCwtAl0BVx+fWCygqKTXcYznuHTwnxYyk5hgPno3YD7/mk2j53EN6iY+ua0FNnxPQAHIXxwREOWSTr4zp40vEpfbww2GuabdACh5gg7rxtjCb2NAIKBmn8Bm0fpKzwtaPA6ihFfUwpBvhihdn7OIpss7G50VplX+h3xdyx31TFJ7rcqlsSrwXI1SNic0WWjnU1j/6Ely4Z1HnCYQ==\"\r\n          }\r\n        ]\r\n      },\r\n      \"adminUsername\": \"azureuser\"\r\n    },\r\n    \"diagnosticsProfile\": {\r\n      \"vmDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://eabkurw4fju5sdiag0.blob.core.windows.net/\"\r\n      }\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1639',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'ef6d7439-e988-468f-a569-fd46bcc95faa_131260614325152837',
  'x-ms-request-id': 'c079578d-4329-469b-9d27-2ea32106ff0e',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '871feab3-262e-4361-89d6-553166484ce4',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T094218Z:871feab3-262e-4361-89d6-553166484ce4',
  date: 'Sun, 29 Jan 2017 09:42:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate4756/providers/Microsoft.ContainerService/containerServices/xplatContainer9457?api-version=2016-09-30')
  .reply(200, "{\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate4756/providers/Microsoft.ContainerService/containerServices/xplatContainer9457\",\r\n  \"name\": \"xplatContainer9457\",\r\n  \"type\": \"Microsoft.ContainerService/ContainerServices\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {},\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"orchestratorProfile\": {\r\n      \"orchestratorType\": \"DCOS\"\r\n    },\r\n    \"masterProfile\": {\r\n      \"count\": 1,\r\n      \"dnsPrefix\": \"xplatContainer9457master\",\r\n      \"fqdn\": \"xplatcontainer9457master.eastus.cloudapp.azure.com\"\r\n    },\r\n    \"agentPoolProfiles\": [\r\n      {\r\n        \"name\": \"xplatContainer9457a1\",\r\n        \"count\": 2,\r\n        \"vmSize\": \"Standard_A1\",\r\n        \"dnsPrefix\": \"xplatContainer9457a2\",\r\n        \"fqdn\": \"xplatcontainer9457a2.eastus.cloudapp.azure.com\",\r\n        \"osType\": \"Linux\"\r\n      }\r\n    ],\r\n    \"linuxProfile\": {\r\n      \"ssh\": {\r\n        \"publicKeys\": [\r\n          {\r\n            \"keyData\": \"ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAQEA1J/ZLar7bMxCr0eN1yAkMM8B7Z6eQP2P0LG5W/ATM/c7r5voER2N/xJ2JMyKRM73zX83nyTroGRynFsLTaizSQ2hNCAs15oxwspnFrlBZVsNhNs6DvPUDosJ81/ud5Emle8VYAWCwtAl0BVx+fWCygqKTXcYznuHTwnxYyk5hgPno3YD7/mk2j53EN6iY+ua0FNnxPQAHIXxwREOWSTr4zp40vEpfbww2GuabdACh5gg7rxtjCb2NAIKBmn8Bm0fpKzwtaPA6ihFfUwpBvhihdn7OIpss7G50VplX+h3xdyx31TFJ7rcqlsSrwXI1SNic0WWjnU1j/6Ely4Z1HnCYQ==\"\r\n          }\r\n        ]\r\n      },\r\n      \"adminUsername\": \"azureuser\"\r\n    },\r\n    \"diagnosticsProfile\": {\r\n      \"vmDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://eabkurw4fju5sdiag0.blob.core.windows.net/\"\r\n      }\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1639',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'ef6d7439-e988-468f-a569-fd46bcc95faa_131260614325152837',
  'x-ms-request-id': 'c079578d-4329-469b-9d27-2ea32106ff0e',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '871feab3-262e-4361-89d6-553166484ce4',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T094218Z:871feab3-262e-4361-89d6-553166484ce4',
  date: 'Sun, 29 Jan 2017 09:42:17 GMT',
  connection: 'close' });
 return result; }]];