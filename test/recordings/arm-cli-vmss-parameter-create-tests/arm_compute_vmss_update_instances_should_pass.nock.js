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
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate1878/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/manualupgrade?api-version=2015-06-15', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/191ba953-a8d3-46af-8087-d424a57d146c?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/191ba953-a8d3-46af-8087-d424a57d146c?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130979641115900750',
  'x-ms-request-id': '191ba953-a8d3-46af-8087-d424a57d146c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '1856d888-c2bd-45ad-81dd-3e23c4e0535c',
  'x-ms-routing-request-id': 'CENTRALUS:20160226T000828Z:1856d888-c2bd-45ad-81dd-3e23c4e0535c',
  date: 'Fri, 26 Feb 2016 00:08:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate1878/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/manualupgrade?api-version=2015-06-15', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/191ba953-a8d3-46af-8087-d424a57d146c?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/191ba953-a8d3-46af-8087-d424a57d146c?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130979641115900750',
  'x-ms-request-id': '191ba953-a8d3-46af-8087-d424a57d146c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '1856d888-c2bd-45ad-81dd-3e23c4e0535c',
  'x-ms-routing-request-id': 'CENTRALUS:20160226T000828Z:1856d888-c2bd-45ad-81dd-3e23c4e0535c',
  date: 'Fri, 26 Feb 2016 00:08:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/191ba953-a8d3-46af-8087-d424a57d146c?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"191ba953-a8d3-46af-8087-d424a57d146c\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-02-26T00:08:27.5827193+00:00\",\r\n  \"endTime\": \"2016-02-26T00:08:28.4264949+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130979641115900750',
  'x-ms-request-id': '3c988eb8-140a-428b-bbcc-598dc4fdb97f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'c464ea50-9091-4be7-9854-ec600aec68d9',
  'x-ms-routing-request-id': 'CENTRALUS:20160226T000859Z:c464ea50-9091-4be7-9854-ec600aec68d9',
  date: 'Fri, 26 Feb 2016 00:08:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/191ba953-a8d3-46af-8087-d424a57d146c?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"191ba953-a8d3-46af-8087-d424a57d146c\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-02-26T00:08:27.5827193+00:00\",\r\n  \"endTime\": \"2016-02-26T00:08:28.4264949+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130979641115900750',
  'x-ms-request-id': '3c988eb8-140a-428b-bbcc-598dc4fdb97f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'c464ea50-9091-4be7-9854-ec600aec68d9',
  'x-ms-routing-request-id': 'CENTRALUS:20160226T000859Z:c464ea50-9091-4be7-9854-ec600aec68d9',
  date: 'Fri, 26 Feb 2016 00:08:59 GMT',
  connection: 'close' });
 return result; }]];