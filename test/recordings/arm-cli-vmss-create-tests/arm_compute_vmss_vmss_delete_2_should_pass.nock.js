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
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate9801/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ccd61d74-02ca-4ccd-9a13-6469477c1696?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ccd61d74-02ca-4ccd-9a13-6469477c1696?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': 'ccd61d74-02ca-4ccd-9a13-6469477c1696',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '0a29e42c-946e-4eaa-af7e-5f30024f276a',
  'x-ms-routing-request-id': 'WESTUS:20151204T001920Z:0a29e42c-946e-4eaa-af7e-5f30024f276a',
  date: 'Fri, 04 Dec 2015 00:19:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate9801/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ccd61d74-02ca-4ccd-9a13-6469477c1696?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ccd61d74-02ca-4ccd-9a13-6469477c1696?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': 'ccd61d74-02ca-4ccd-9a13-6469477c1696',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '0a29e42c-946e-4eaa-af7e-5f30024f276a',
  'x-ms-routing-request-id': 'WESTUS:20151204T001920Z:0a29e42c-946e-4eaa-af7e-5f30024f276a',
  date: 'Fri, 04 Dec 2015 00:19:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ccd61d74-02ca-4ccd-9a13-6469477c1696?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"ccd61d74-02ca-4ccd-9a13-6469477c1696\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-04T00:19:21.3030108+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': '03c0b373-c211-4af4-ad3f-171976a62126',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14954',
  'x-ms-correlation-request-id': '60aad728-76e7-4f41-af2b-cbf1e071f3fa',
  'x-ms-routing-request-id': 'WESTUS:20151204T001951Z:60aad728-76e7-4f41-af2b-cbf1e071f3fa',
  date: 'Fri, 04 Dec 2015 00:19:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ccd61d74-02ca-4ccd-9a13-6469477c1696?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"ccd61d74-02ca-4ccd-9a13-6469477c1696\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-04T00:19:21.3030108+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': '03c0b373-c211-4af4-ad3f-171976a62126',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14954',
  'x-ms-correlation-request-id': '60aad728-76e7-4f41-af2b-cbf1e071f3fa',
  'x-ms-routing-request-id': 'WESTUS:20151204T001951Z:60aad728-76e7-4f41-af2b-cbf1e071f3fa',
  date: 'Fri, 04 Dec 2015 00:19:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ccd61d74-02ca-4ccd-9a13-6469477c1696?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"ccd61d74-02ca-4ccd-9a13-6469477c1696\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-04T00:19:21.3030108+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': '6d96364e-90da-49c5-93db-01ece9240edd',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14957',
  'x-ms-correlation-request-id': '176c0406-d677-4390-96e7-de9b31986480',
  'x-ms-routing-request-id': 'WESTUS:20151204T002022Z:176c0406-d677-4390-96e7-de9b31986480',
  date: 'Fri, 04 Dec 2015 00:20:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ccd61d74-02ca-4ccd-9a13-6469477c1696?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"ccd61d74-02ca-4ccd-9a13-6469477c1696\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-04T00:19:21.3030108+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': '6d96364e-90da-49c5-93db-01ece9240edd',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14957',
  'x-ms-correlation-request-id': '176c0406-d677-4390-96e7-de9b31986480',
  'x-ms-routing-request-id': 'WESTUS:20151204T002022Z:176c0406-d677-4390-96e7-de9b31986480',
  date: 'Fri, 04 Dec 2015 00:20:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ccd61d74-02ca-4ccd-9a13-6469477c1696?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"ccd61d74-02ca-4ccd-9a13-6469477c1696\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-04T00:19:21.3030108+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': '76245e4c-6ad7-4b86-828f-ce78c45f8fe2',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': 'cd582fe2-d523-40ec-a268-f9c9d72649b5',
  'x-ms-routing-request-id': 'WESTUS:20151204T002053Z:cd582fe2-d523-40ec-a268-f9c9d72649b5',
  date: 'Fri, 04 Dec 2015 00:20:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ccd61d74-02ca-4ccd-9a13-6469477c1696?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"ccd61d74-02ca-4ccd-9a13-6469477c1696\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-04T00:19:21.3030108+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': '76245e4c-6ad7-4b86-828f-ce78c45f8fe2',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': 'cd582fe2-d523-40ec-a268-f9c9d72649b5',
  'x-ms-routing-request-id': 'WESTUS:20151204T002053Z:cd582fe2-d523-40ec-a268-f9c9d72649b5',
  date: 'Fri, 04 Dec 2015 00:20:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ccd61d74-02ca-4ccd-9a13-6469477c1696?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"ccd61d74-02ca-4ccd-9a13-6469477c1696\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2015-12-04T00:19:21.3030108+00:00\",\r\n  \"endTime\": \"2015-12-04T00:21:04.8791474+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': 'f6f8eb0c-833a-4df7-bcbd-f3b9d6eb2be6',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '98c362d9-7753-4a40-9477-65d4b9f08c12',
  'x-ms-routing-request-id': 'WESTUS:20151204T002124Z:98c362d9-7753-4a40-9477-65d4b9f08c12',
  date: 'Fri, 04 Dec 2015 00:21:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ccd61d74-02ca-4ccd-9a13-6469477c1696?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"ccd61d74-02ca-4ccd-9a13-6469477c1696\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2015-12-04T00:19:21.3030108+00:00\",\r\n  \"endTime\": \"2015-12-04T00:21:04.8791474+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': 'f6f8eb0c-833a-4df7-bcbd-f3b9d6eb2be6',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '98c362d9-7753-4a40-9477-65d4b9f08c12',
  'x-ms-routing-request-id': 'WESTUS:20151204T002124Z:98c362d9-7753-4a40-9477-65d4b9f08c12',
  date: 'Fri, 04 Dec 2015 00:21:23 GMT',
  connection: 'close' });
 return result; }]];