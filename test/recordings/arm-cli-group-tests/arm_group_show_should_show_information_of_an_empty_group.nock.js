// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '00977cdb-163f-435f-9c32-39ec8ae61f4d',
    name: 'node',
    user: {
      name: 'user@domain.example',
      type: 'user'
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatTestGrpShow8440?api-version=2015-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGrpShow8440' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '4a96b5f8-6b9f-422a-84e4-d49919fb819b',
  'x-ms-correlation-request-id': '4a96b5f8-6b9f-422a-84e4-d49919fb819b',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T172156Z:4a96b5f8-6b9f-422a-84e4-d49919fb819b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 17:21:55 GMT',
  connection: 'close',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatTestGrpShow8440?api-version=2015-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGrpShow8440' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '4a96b5f8-6b9f-422a-84e4-d49919fb819b',
  'x-ms-correlation-request-id': '4a96b5f8-6b9f-422a-84e4-d49919fb819b',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T172156Z:4a96b5f8-6b9f-422a-84e4-d49919fb819b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 17:21:55 GMT',
  connection: 'close',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatTestGrpShow8440?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestGrpShow8440\",\"name\":\"xplatTestGrpShow8440\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '2733cd0d-e416-47a6-9d06-bbea279d1573',
  'x-ms-correlation-request-id': '2733cd0d-e416-47a6-9d06-bbea279d1573',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T172157Z:2733cd0d-e416-47a6-9d06-bbea279d1573',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 17:21:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatTestGrpShow8440?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestGrpShow8440\",\"name\":\"xplatTestGrpShow8440\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '2733cd0d-e416-47a6-9d06-bbea279d1573',
  'x-ms-correlation-request-id': '2733cd0d-e416-47a6-9d06-bbea279d1573',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T172157Z:2733cd0d-e416-47a6-9d06-bbea279d1573',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 17:21:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatTestGrpShow8440?api-version=2015-11-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestGrpShow8440\",\"name\":\"xplatTestGrpShow8440\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '4b29119f-66fb-437d-8896-f42f8478d44f',
  'x-ms-correlation-request-id': '4b29119f-66fb-437d-8896-f42f8478d44f',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T172158Z:4b29119f-66fb-437d-8896-f42f8478d44f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 17:21:57 GMT',
  connection: 'close',
  'content-length': '203' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatTestGrpShow8440?api-version=2015-11-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestGrpShow8440\",\"name\":\"xplatTestGrpShow8440\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '4b29119f-66fb-437d-8896-f42f8478d44f',
  'x-ms-correlation-request-id': '4b29119f-66fb-437d-8896-f42f8478d44f',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T172158Z:4b29119f-66fb-437d-8896-f42f8478d44f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 17:21:57 GMT',
  connection: 'close',
  'content-length': '203' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestGrpShow8440/resources?api-version=2015-11-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '03321424-f478-437f-88ef-4ce25f55ef8c',
  'x-ms-correlation-request-id': '03321424-f478-437f-88ef-4ce25f55ef8c',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T172158Z:03321424-f478-437f-88ef-4ce25f55ef8c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 17:21:57 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestGrpShow8440/resources?api-version=2015-11-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '03321424-f478-437f-88ef-4ce25f55ef8c',
  'x-ms-correlation-request-id': '03321424-f478-437f-88ef-4ce25f55ef8c',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T172158Z:03321424-f478-437f-88ef-4ce25f55ef8c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 17:21:57 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatTestGrpShow8440/providers/Microsoft.Authorization/permissions?api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"actions\":[\"*\"],\"notActions\":[]}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '61',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cb744295-dba1-44d4-8861-537243392a65',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'cdb28e3e-9bf2-4c25-beea-d8a620b406dc',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T172158Z:cdb28e3e-9bf2-4c25-beea-d8a620b406dc',
  date: 'Sat, 30 Jan 2016 17:21:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatTestGrpShow8440/providers/Microsoft.Authorization/permissions?api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"actions\":[\"*\"],\"notActions\":[]}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '61',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cb744295-dba1-44d4-8861-537243392a65',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'cdb28e3e-9bf2-4c25-beea-d8a620b406dc',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T172158Z:cdb28e3e-9bf2-4c25-beea-d8a620b406dc',
  date: 'Sat, 30 Jan 2016 17:21:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatTestGrpShow8440?api-version=2015-11-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHUlBTSE9XODQ0MC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '7fbed93e-73db-4e65-8f59-9292799ff98a',
  'x-ms-correlation-request-id': '7fbed93e-73db-4e65-8f59-9292799ff98a',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T172159Z:7fbed93e-73db-4e65-8f59-9292799ff98a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 17:21:59 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatTestGrpShow8440?api-version=2015-11-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHUlBTSE9XODQ0MC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '7fbed93e-73db-4e65-8f59-9292799ff98a',
  'x-ms-correlation-request-id': '7fbed93e-73db-4e65-8f59-9292799ff98a',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T172159Z:7fbed93e-73db-4e65-8f59-9292799ff98a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 17:21:59 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHUlBTSE9XODQ0MC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHUlBTSE9XODQ0MC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': 'd0893671-0b39-411f-a874-0c7ab20e69bc',
  'x-ms-correlation-request-id': 'd0893671-0b39-411f-a874-0c7ab20e69bc',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T172229Z:d0893671-0b39-411f-a874-0c7ab20e69bc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 17:22:29 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHUlBTSE9XODQ0MC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHUlBTSE9XODQ0MC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': 'd0893671-0b39-411f-a874-0c7ab20e69bc',
  'x-ms-correlation-request-id': 'd0893671-0b39-411f-a874-0c7ab20e69bc',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T172229Z:d0893671-0b39-411f-a874-0c7ab20e69bc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 17:22:29 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHUlBTSE9XODQ0MC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '28fdf5f1-3bf5-4aa0-993a-41bd7fad24ea',
  'x-ms-correlation-request-id': '28fdf5f1-3bf5-4aa0-993a-41bd7fad24ea',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T172300Z:28fdf5f1-3bf5-4aa0-993a-41bd7fad24ea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 17:23:00 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHUlBTSE9XODQ0MC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '28fdf5f1-3bf5-4aa0-993a-41bd7fad24ea',
  'x-ms-correlation-request-id': '28fdf5f1-3bf5-4aa0-993a-41bd7fad24ea',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T172300Z:28fdf5f1-3bf5-4aa0-993a-41bd7fad24ea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 17:23:00 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xplatTestGrpShow8440'];};
