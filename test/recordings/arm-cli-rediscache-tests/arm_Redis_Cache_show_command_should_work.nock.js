// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '67db6ec8-1e63-4a12-a263-eb3b69b7588f',
    name: 'CacheTeam - Alfan TP',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplatTestCacheRG';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/67db6ec8-1e63-4a12-a263-eb3b69b7588f/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache1358?api-version=2016-04-01')
  .reply(200, "{\"id\":\"/subscriptions/67db6ec8-1e63-4a12-a263-eb3b69b7588f/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache1358\",\"location\":\"West US\",\"name\":\"xplatTestCache1358\",\"type\":\"Microsoft.Cache/Redis\",\"tags\":{},\"properties\":{\"provisioningState\":\"Creating\",\"redisVersion\":\"3.2\",\"sku\":{\"name\":\"Standard\",\"family\":\"C\",\"capacity\":1},\"enableNonSslPort\":false,\"redisConfiguration\":{\"maxclients\":\"1000\",\"maxmemory-reserved\":\"50\",\"maxmemory-delta\":\"50\"},\"accessKeys\":null,\"hostName\":\"xplatTestCache1358.redis.cache.windows.net\",\"port\":6379,\"sslPort\":6380}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '570',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1190defe-ec30-4dcc-aecd-f68839492f58',
  'x-rp-server-mvid': '0fb53dd9-9afd-4774-b601-7b895c3c6671',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': '859cea2a-fc11-4e9e-8f6b-e08682f9dabd',
  'x-ms-routing-request-id': 'CENTRALUS:20170106T000506Z:859cea2a-fc11-4e9e-8f6b-e08682f9dabd',
  date: 'Fri, 06 Jan 2017 00:05:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/67db6ec8-1e63-4a12-a263-eb3b69b7588f/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache1358?api-version=2016-04-01')
  .reply(200, "{\"id\":\"/subscriptions/67db6ec8-1e63-4a12-a263-eb3b69b7588f/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache1358\",\"location\":\"West US\",\"name\":\"xplatTestCache1358\",\"type\":\"Microsoft.Cache/Redis\",\"tags\":{},\"properties\":{\"provisioningState\":\"Creating\",\"redisVersion\":\"3.2\",\"sku\":{\"name\":\"Standard\",\"family\":\"C\",\"capacity\":1},\"enableNonSslPort\":false,\"redisConfiguration\":{\"maxclients\":\"1000\",\"maxmemory-reserved\":\"50\",\"maxmemory-delta\":\"50\"},\"accessKeys\":null,\"hostName\":\"xplatTestCache1358.redis.cache.windows.net\",\"port\":6379,\"sslPort\":6380}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '570',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1190defe-ec30-4dcc-aecd-f68839492f58',
  'x-rp-server-mvid': '0fb53dd9-9afd-4774-b601-7b895c3c6671',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': '859cea2a-fc11-4e9e-8f6b-e08682f9dabd',
  'x-ms-routing-request-id': 'CENTRALUS:20170106T000506Z:859cea2a-fc11-4e9e-8f6b-e08682f9dabd',
  date: 'Fri, 06 Jan 2017 00:05:05 GMT',
  connection: 'close' });
 return result; }]];