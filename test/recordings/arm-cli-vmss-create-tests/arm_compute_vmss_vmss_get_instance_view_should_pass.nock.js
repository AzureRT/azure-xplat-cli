// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addEnvironment(new profile.Environment({
    name: 'BrazilUSCloud',
    portalUrl: 'http://go.microsoft.com/fwlink/?LinkId=254433',
    publishingProfileUrl: 'http://go.microsoft.com/fwlink/?LinkId=254432',
    managementEndpointUrl: 'https://management.core.windows.net',
    resourceManagerEndpointUrl: 'https://brazilus.management.azure.com/',
    sqlManagementEndpointUrl: 'https://management.core.windows.net:8443/',
    hostNameSuffix: 'undefined',
    sqlServerHostNameSuffix: '.database.windows.net',
    activeDirectoryEndpointUrl: 'https://login.microsoftonline.com',
    commonTenantName: 'undefined',
    storageEndpoint: 'undefined',
    galleryEndpointUrl: 'https://gallery.azure.com/'
  }));

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
  }, newProfile.environments['BrazilUSCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://brazilus.management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate972/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2/instanceView?api-version=2016-03-30')
  .reply(200, "{\r\n  \"virtualMachine\": {\r\n    \"statusesSummary\": [\r\n      {\r\n        \"code\": \"ProvisioningState/succeeded\",\r\n        \"count\": 5\r\n      }\r\n    ]\r\n  },\r\n  \"statuses\": [\r\n    {\r\n      \"code\": \"ProvisioningState/succeeded\",\r\n      \"level\": \"Info\",\r\n      \"displayStatus\": \"Provisioning succeeded\",\r\n      \"time\": \"2016-04-09T18:04:34.9668275+00:00\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '359',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '8f12bdb9-b31e-4cee-8dab-f5dd7be572e1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14966',
  'x-ms-correlation-request-id': '62d0c449-3d13-43cf-8e82-5b7a0b925421',
  'x-ms-routing-request-id': 'BRAZILUS:20160409T180507Z:62d0c449-3d13-43cf-8e82-5b7a0b925421',
  date: 'Sat, 09 Apr 2016 18:05:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://brazilus.management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate972/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2/instanceView?api-version=2016-03-30')
  .reply(200, "{\r\n  \"virtualMachine\": {\r\n    \"statusesSummary\": [\r\n      {\r\n        \"code\": \"ProvisioningState/succeeded\",\r\n        \"count\": 5\r\n      }\r\n    ]\r\n  },\r\n  \"statuses\": [\r\n    {\r\n      \"code\": \"ProvisioningState/succeeded\",\r\n      \"level\": \"Info\",\r\n      \"displayStatus\": \"Provisioning succeeded\",\r\n      \"time\": \"2016-04-09T18:04:34.9668275+00:00\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '359',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '8f12bdb9-b31e-4cee-8dab-f5dd7be572e1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14966',
  'x-ms-correlation-request-id': '62d0c449-3d13-43cf-8e82-5b7a0b925421',
  'x-ms-routing-request-id': 'BRAZILUS:20160409T180507Z:62d0c449-3d13-43cf-8e82-5b7a0b925421',
  date: 'Sat, 09 Apr 2016 18:05:07 GMT',
  connection: 'close' });
 return result; }]];