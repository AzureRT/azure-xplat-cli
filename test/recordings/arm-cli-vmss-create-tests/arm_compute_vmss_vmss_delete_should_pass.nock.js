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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus2';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate1634/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/f74305ee-4e93-401d-971e-e0d6732124a6?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/f74305ee-4e93-401d-971e-e0d6732124a6?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': 'f74305ee-4e93-401d-971e-e0d6732124a6',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '168d70c0-d224-4eb4-ab98-feb4d3c0c394',
  'x-ms-routing-request-id': 'CENTRALUS:20160125T073630Z:168d70c0-d224-4eb4-ab98-feb4d3c0c394',
  date: 'Mon, 25 Jan 2016 07:36:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate1634/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/f74305ee-4e93-401d-971e-e0d6732124a6?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/f74305ee-4e93-401d-971e-e0d6732124a6?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': 'f74305ee-4e93-401d-971e-e0d6732124a6',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '168d70c0-d224-4eb4-ab98-feb4d3c0c394',
  'x-ms-routing-request-id': 'CENTRALUS:20160125T073630Z:168d70c0-d224-4eb4-ab98-feb4d3c0c394',
  date: 'Mon, 25 Jan 2016 07:36:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/f74305ee-4e93-401d-971e-e0d6732124a6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"f74305ee-4e93-401d-971e-e0d6732124a6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-25T07:36:29.9148381+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': 'dcd5b893-c757-4dd7-af6c-60c56e0de66b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'd28f06c4-5bb0-431b-b018-ef3b44ebe15c',
  'x-ms-routing-request-id': 'CENTRALUS:20160125T073700Z:d28f06c4-5bb0-431b-b018-ef3b44ebe15c',
  date: 'Mon, 25 Jan 2016 07:37:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/f74305ee-4e93-401d-971e-e0d6732124a6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"f74305ee-4e93-401d-971e-e0d6732124a6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-25T07:36:29.9148381+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': 'dcd5b893-c757-4dd7-af6c-60c56e0de66b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'd28f06c4-5bb0-431b-b018-ef3b44ebe15c',
  'x-ms-routing-request-id': 'CENTRALUS:20160125T073700Z:d28f06c4-5bb0-431b-b018-ef3b44ebe15c',
  date: 'Mon, 25 Jan 2016 07:37:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/f74305ee-4e93-401d-971e-e0d6732124a6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"f74305ee-4e93-401d-971e-e0d6732124a6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-25T07:36:29.9148381+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': '69f5993c-ebde-427a-b67a-ce39d71d8635',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'c7d824aa-e233-479d-8dff-883fce52791f',
  'x-ms-routing-request-id': 'WESTUS:20160125T073731Z:c7d824aa-e233-479d-8dff-883fce52791f',
  date: 'Mon, 25 Jan 2016 07:37:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/f74305ee-4e93-401d-971e-e0d6732124a6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"f74305ee-4e93-401d-971e-e0d6732124a6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-25T07:36:29.9148381+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': '69f5993c-ebde-427a-b67a-ce39d71d8635',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'c7d824aa-e233-479d-8dff-883fce52791f',
  'x-ms-routing-request-id': 'WESTUS:20160125T073731Z:c7d824aa-e233-479d-8dff-883fce52791f',
  date: 'Mon, 25 Jan 2016 07:37:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/f74305ee-4e93-401d-971e-e0d6732124a6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"f74305ee-4e93-401d-971e-e0d6732124a6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-25T07:36:29.9148381+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': '39142020-090d-45b0-b42c-e2e8f9a78ef9',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'f1f2fcc7-4cbe-4982-9ee8-ce7932ddf6f8',
  'x-ms-routing-request-id': 'WESTUS:20160125T073801Z:f1f2fcc7-4cbe-4982-9ee8-ce7932ddf6f8',
  date: 'Mon, 25 Jan 2016 07:38:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/f74305ee-4e93-401d-971e-e0d6732124a6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"f74305ee-4e93-401d-971e-e0d6732124a6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-25T07:36:29.9148381+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': '39142020-090d-45b0-b42c-e2e8f9a78ef9',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'f1f2fcc7-4cbe-4982-9ee8-ce7932ddf6f8',
  'x-ms-routing-request-id': 'WESTUS:20160125T073801Z:f1f2fcc7-4cbe-4982-9ee8-ce7932ddf6f8',
  date: 'Mon, 25 Jan 2016 07:38:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/f74305ee-4e93-401d-971e-e0d6732124a6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"f74305ee-4e93-401d-971e-e0d6732124a6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-25T07:36:29.9148381+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': '2e8b3b67-f320-49cc-a40f-3e43359206c1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '2e875880-6b35-405c-b26c-b12b7d05212c',
  'x-ms-routing-request-id': 'WESTUS:20160125T073832Z:2e875880-6b35-405c-b26c-b12b7d05212c',
  date: 'Mon, 25 Jan 2016 07:38:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/f74305ee-4e93-401d-971e-e0d6732124a6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"f74305ee-4e93-401d-971e-e0d6732124a6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-25T07:36:29.9148381+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': '2e8b3b67-f320-49cc-a40f-3e43359206c1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '2e875880-6b35-405c-b26c-b12b7d05212c',
  'x-ms-routing-request-id': 'WESTUS:20160125T073832Z:2e875880-6b35-405c-b26c-b12b7d05212c',
  date: 'Mon, 25 Jan 2016 07:38:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/f74305ee-4e93-401d-971e-e0d6732124a6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"f74305ee-4e93-401d-971e-e0d6732124a6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-25T07:36:29.9148381+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': 'e4d35a77-374d-4a15-8233-5e8deca58085',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '01aaa97b-51e7-42d4-ac81-70cf9529525e',
  'x-ms-routing-request-id': 'WESTUS:20160125T073902Z:01aaa97b-51e7-42d4-ac81-70cf9529525e',
  date: 'Mon, 25 Jan 2016 07:39:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/f74305ee-4e93-401d-971e-e0d6732124a6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"f74305ee-4e93-401d-971e-e0d6732124a6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-25T07:36:29.9148381+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': 'e4d35a77-374d-4a15-8233-5e8deca58085',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '01aaa97b-51e7-42d4-ac81-70cf9529525e',
  'x-ms-routing-request-id': 'WESTUS:20160125T073902Z:01aaa97b-51e7-42d4-ac81-70cf9529525e',
  date: 'Mon, 25 Jan 2016 07:39:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/f74305ee-4e93-401d-971e-e0d6732124a6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"f74305ee-4e93-401d-971e-e0d6732124a6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-25T07:36:29.9148381+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': '9ba2a282-f5cb-435f-92a1-cd0932b4decd',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '17fdad72-78dc-440a-ac84-41639e55bc8c',
  'x-ms-routing-request-id': 'WESTUS:20160125T073933Z:17fdad72-78dc-440a-ac84-41639e55bc8c',
  date: 'Mon, 25 Jan 2016 07:39:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/f74305ee-4e93-401d-971e-e0d6732124a6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"f74305ee-4e93-401d-971e-e0d6732124a6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-25T07:36:29.9148381+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': '9ba2a282-f5cb-435f-92a1-cd0932b4decd',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '17fdad72-78dc-440a-ac84-41639e55bc8c',
  'x-ms-routing-request-id': 'WESTUS:20160125T073933Z:17fdad72-78dc-440a-ac84-41639e55bc8c',
  date: 'Mon, 25 Jan 2016 07:39:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/f74305ee-4e93-401d-971e-e0d6732124a6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"f74305ee-4e93-401d-971e-e0d6732124a6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-25T07:36:29.9148381+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': 'f21a48a6-528c-46cd-b3f2-cfa18d911536',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '777a9aa5-4f8c-4638-b2d4-1470ffed4c51',
  'x-ms-routing-request-id': 'WESTUS:20160125T074003Z:777a9aa5-4f8c-4638-b2d4-1470ffed4c51',
  date: 'Mon, 25 Jan 2016 07:40:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/f74305ee-4e93-401d-971e-e0d6732124a6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"f74305ee-4e93-401d-971e-e0d6732124a6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-25T07:36:29.9148381+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': 'f21a48a6-528c-46cd-b3f2-cfa18d911536',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '777a9aa5-4f8c-4638-b2d4-1470ffed4c51',
  'x-ms-routing-request-id': 'WESTUS:20160125T074003Z:777a9aa5-4f8c-4638-b2d4-1470ffed4c51',
  date: 'Mon, 25 Jan 2016 07:40:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/f74305ee-4e93-401d-971e-e0d6732124a6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"f74305ee-4e93-401d-971e-e0d6732124a6\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-01-25T07:36:29.9148381+00:00\",\r\n  \"endTime\": \"2016-01-25T07:40:04.1540983+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': '828b8dd6-3f46-45cf-b772-4f3348de3cc9',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'be52c3ea-73be-42f7-b2dd-ca775a450cd7',
  'x-ms-routing-request-id': 'WESTUS:20160125T074034Z:be52c3ea-73be-42f7-b2dd-ca775a450cd7',
  date: 'Mon, 25 Jan 2016 07:40:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/f74305ee-4e93-401d-971e-e0d6732124a6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"f74305ee-4e93-401d-971e-e0d6732124a6\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-01-25T07:36:29.9148381+00:00\",\r\n  \"endTime\": \"2016-01-25T07:40:04.1540983+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': '828b8dd6-3f46-45cf-b772-4f3348de3cc9',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'be52c3ea-73be-42f7-b2dd-ca775a450cd7',
  'x-ms-routing-request-id': 'WESTUS:20160125T074034Z:be52c3ea-73be-42f7-b2dd-ca775a450cd7',
  date: 'Mon, 25 Jan 2016 07:40:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate1634/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/e2500f76-cb53-460a-9a0a-9a0956a4d706?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/e2500f76-cb53-460a-9a0a-9a0956a4d706?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': 'e2500f76-cb53-460a-9a0a-9a0956a4d706',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'e6a2a11a-6106-4d44-bbfc-af8db8a2537c',
  'x-ms-routing-request-id': 'WESTUS:20160125T074035Z:e6a2a11a-6106-4d44-bbfc-af8db8a2537c',
  date: 'Mon, 25 Jan 2016 07:40:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate1634/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/e2500f76-cb53-460a-9a0a-9a0956a4d706?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/e2500f76-cb53-460a-9a0a-9a0956a4d706?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': 'e2500f76-cb53-460a-9a0a-9a0956a4d706',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'e6a2a11a-6106-4d44-bbfc-af8db8a2537c',
  'x-ms-routing-request-id': 'WESTUS:20160125T074035Z:e6a2a11a-6106-4d44-bbfc-af8db8a2537c',
  date: 'Mon, 25 Jan 2016 07:40:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/e2500f76-cb53-460a-9a0a-9a0956a4d706?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"e2500f76-cb53-460a-9a0a-9a0956a4d706\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-25T07:40:35.2172957+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': '45616fdd-956b-4ae6-b6ee-429fa35862bc',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'da0f78fd-4261-4c1a-b028-0c8241447a01',
  'x-ms-routing-request-id': 'WESTUS:20160125T074106Z:da0f78fd-4261-4c1a-b028-0c8241447a01',
  date: 'Mon, 25 Jan 2016 07:41:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/e2500f76-cb53-460a-9a0a-9a0956a4d706?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"e2500f76-cb53-460a-9a0a-9a0956a4d706\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-25T07:40:35.2172957+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': '45616fdd-956b-4ae6-b6ee-429fa35862bc',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'da0f78fd-4261-4c1a-b028-0c8241447a01',
  'x-ms-routing-request-id': 'WESTUS:20160125T074106Z:da0f78fd-4261-4c1a-b028-0c8241447a01',
  date: 'Mon, 25 Jan 2016 07:41:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/e2500f76-cb53-460a-9a0a-9a0956a4d706?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"e2500f76-cb53-460a-9a0a-9a0956a4d706\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-25T07:40:35.2172957+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': '4e605e02-365c-475f-8e5b-74e2f90ec8ff',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '7b7ac677-1025-4771-a426-0006f944d534',
  'x-ms-routing-request-id': 'WESTUS:20160125T074136Z:7b7ac677-1025-4771-a426-0006f944d534',
  date: 'Mon, 25 Jan 2016 07:41:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/e2500f76-cb53-460a-9a0a-9a0956a4d706?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"e2500f76-cb53-460a-9a0a-9a0956a4d706\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-25T07:40:35.2172957+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': '4e605e02-365c-475f-8e5b-74e2f90ec8ff',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '7b7ac677-1025-4771-a426-0006f944d534',
  'x-ms-routing-request-id': 'WESTUS:20160125T074136Z:7b7ac677-1025-4771-a426-0006f944d534',
  date: 'Mon, 25 Jan 2016 07:41:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/e2500f76-cb53-460a-9a0a-9a0956a4d706?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"e2500f76-cb53-460a-9a0a-9a0956a4d706\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-25T07:40:35.2172957+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': 'b018705b-b50c-4863-8dec-f555e3493773',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'bb4c4c0e-2dbf-4eb0-b53e-58d641977aad',
  'x-ms-routing-request-id': 'WESTUS:20160125T074207Z:bb4c4c0e-2dbf-4eb0-b53e-58d641977aad',
  date: 'Mon, 25 Jan 2016 07:42:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/e2500f76-cb53-460a-9a0a-9a0956a4d706?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"e2500f76-cb53-460a-9a0a-9a0956a4d706\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-25T07:40:35.2172957+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': 'b018705b-b50c-4863-8dec-f555e3493773',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'bb4c4c0e-2dbf-4eb0-b53e-58d641977aad',
  'x-ms-routing-request-id': 'WESTUS:20160125T074207Z:bb4c4c0e-2dbf-4eb0-b53e-58d641977aad',
  date: 'Mon, 25 Jan 2016 07:42:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/e2500f76-cb53-460a-9a0a-9a0956a4d706?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"e2500f76-cb53-460a-9a0a-9a0956a4d706\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-01-25T07:40:35.2172957+00:00\",\r\n  \"endTime\": \"2016-01-25T07:42:18.1412242+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': 'd94a4f78-3b0b-464f-a3f2-448645c2af5d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'ac048a36-8b76-4a1c-b13f-6a028b1beba1',
  'x-ms-routing-request-id': 'WESTUS:20160125T074237Z:ac048a36-8b76-4a1c-b13f-6a028b1beba1',
  date: 'Mon, 25 Jan 2016 07:42:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus2/operations/e2500f76-cb53-460a-9a0a-9a0956a4d706?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"e2500f76-cb53-460a-9a0a-9a0956a4d706\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-01-25T07:40:35.2172957+00:00\",\r\n  \"endTime\": \"2016-01-25T07:42:18.1412242+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '4756065c-8012-416b-9896-0720bb1f81cb_130981797105419088',
  'x-ms-request-id': 'd94a4f78-3b0b-464f-a3f2-448645c2af5d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'ac048a36-8b76-4a1c-b13f-6a028b1beba1',
  'x-ms-routing-request-id': 'WESTUS:20160125T074237Z:ac048a36-8b76-4a1c-b13f-6a028b1beba1',
  date: 'Mon, 25 Jan 2016 07:42:37 GMT',
  connection: 'close' });
 return result; }]];