// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-lb-fip?api-version=2015-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-lb-fip' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-request-id': '5da077ca-65f1-4316-abbc-4680e6347417',
  'x-ms-correlation-request-id': '5da077ca-65f1-4316-abbc-4680e6347417',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105413Z:5da077ca-65f1-4316-abbc-4680e6347417',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 11 Feb 2016 10:54:12 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-lb-fip?api-version=2015-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-lb-fip' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-request-id': '5da077ca-65f1-4316-abbc-4680e6347417',
  'x-ms-correlation-request-id': '5da077ca-65f1-4316-abbc-4680e6347417',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105413Z:5da077ca-65f1-4316-abbc-4680e6347417',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 11 Feb 2016 10:54:12 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-lb-fip?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip\",\"name\":\"xplat-test-lb-fip\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': '30a659d7-d359-4c2e-9a70-18884ce039dc',
  'x-ms-correlation-request-id': '30a659d7-d359-4c2e-9a70-18884ce039dc',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105415Z:30a659d7-d359-4c2e-9a70-18884ce039dc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 11 Feb 2016 10:54:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-lb-fip?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip\",\"name\":\"xplat-test-lb-fip\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': '30a659d7-d359-4c2e-9a70-18884ce039dc',
  'x-ms-correlation-request-id': '30a659d7-d359-4c2e-9a70-18884ce039dc',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105415Z:30a659d7-d359-4c2e-9a70-18884ce039dc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 11 Feb 2016 10:54:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/loadBalancers/test-lb' under resource group 'xplat-test-lb-fip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'dfc1c1af-dfb8-4aca-a9e8-85274aceaa45',
  'x-ms-correlation-request-id': 'dfc1c1af-dfb8-4aca-a9e8-85274aceaa45',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105416Z:dfc1c1af-dfb8-4aca-a9e8-85274aceaa45',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 11 Feb 2016 10:54:15 GMT',
  connection: 'close',
  'content-length': '160' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/loadBalancers/test-lb' under resource group 'xplat-test-lb-fip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'dfc1c1af-dfb8-4aca-a9e8-85274aceaa45',
  'x-ms-correlation-request-id': 'dfc1c1af-dfb8-4aca-a9e8-85274aceaa45',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105416Z:dfc1c1af-dfb8-4aca-a9e8-85274aceaa45',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 11 Feb 2016 10:54:15 GMT',
  connection: 'close',
  'content-length': '160' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"341c7b3d-e58d-4268-a1da-a3b42ecc04c7\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7f3f3abe-e357-4fc0-8c8a-aa87b591197a\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '628',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c190999c-279d-4e7f-830d-fbc6ed146d9a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/c190999c-279d-4e7f-830d-fbc6ed146d9a?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'db1782d6-fd01-4d9f-88de-93b2bb5c7169',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105419Z:db1782d6-fd01-4d9f-88de-93b2bb5c7169',
  date: 'Thu, 11 Feb 2016 10:54:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"341c7b3d-e58d-4268-a1da-a3b42ecc04c7\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7f3f3abe-e357-4fc0-8c8a-aa87b591197a\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '628',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c190999c-279d-4e7f-830d-fbc6ed146d9a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/c190999c-279d-4e7f-830d-fbc6ed146d9a?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'db1782d6-fd01-4d9f-88de-93b2bb5c7169',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105419Z:db1782d6-fd01-4d9f-88de-93b2bb5c7169',
  date: 'Thu, 11 Feb 2016 10:54:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/publicIPAddresses/test-ip?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/test-ip' under resource group 'xplat-test-lb-fip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '011f555a-175b-4a78-99c4-ace6d3697754',
  'x-ms-correlation-request-id': '011f555a-175b-4a78-99c4-ace6d3697754',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105420Z:011f555a-175b-4a78-99c4-ace6d3697754',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 11 Feb 2016 10:54:20 GMT',
  connection: 'close',
  'content-length': '164' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/publicIPAddresses/test-ip?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/test-ip' under resource group 'xplat-test-lb-fip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '011f555a-175b-4a78-99c4-ace6d3697754',
  'x-ms-correlation-request-id': '011f555a-175b-4a78-99c4-ace6d3697754',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105420Z:011f555a-175b-4a78-99c4-ace6d3697754',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 11 Feb 2016 10:54:20 GMT',
  connection: 'close',
  'content-length': '164' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/publicIPAddresses/test-ip?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"test-ip\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/publicIPAddresses/test-ip\",\r\n  \"etag\": \"W/\\\"1e42f187-d9cc-43e8-8292-6d25cfe63e4a\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"1ce457f4-5205-47ce-a0a5-84e4805241b4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '507',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd7b33e95-23f0-4cdb-9eab-9068d1f90c6f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/d7b33e95-23f0-4cdb-9eab-9068d1f90c6f?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': 'ad9d5bf9-8d51-4918-8672-b128e887ff3b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105424Z:ad9d5bf9-8d51-4918-8672-b128e887ff3b',
  date: 'Thu, 11 Feb 2016 10:54:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/publicIPAddresses/test-ip?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"test-ip\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/publicIPAddresses/test-ip\",\r\n  \"etag\": \"W/\\\"1e42f187-d9cc-43e8-8292-6d25cfe63e4a\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"1ce457f4-5205-47ce-a0a5-84e4805241b4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '507',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd7b33e95-23f0-4cdb-9eab-9068d1f90c6f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/d7b33e95-23f0-4cdb-9eab-9068d1f90c6f?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': 'ad9d5bf9-8d51-4918-8672-b128e887ff3b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105424Z:ad9d5bf9-8d51-4918-8672-b128e887ff3b',
  date: 'Thu, 11 Feb 2016 10:54:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/d7b33e95-23f0-4cdb-9eab-9068d1f90c6f?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ac0506a8-cd55-4daf-b624-5da90938eb39',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'b04e7828-ffc1-4f28-bde5-e51a344969af',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105455Z:b04e7828-ffc1-4f28-bde5-e51a344969af',
  date: 'Thu, 11 Feb 2016 10:54:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/d7b33e95-23f0-4cdb-9eab-9068d1f90c6f?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ac0506a8-cd55-4daf-b624-5da90938eb39',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'b04e7828-ffc1-4f28-bde5-e51a344969af',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105455Z:b04e7828-ffc1-4f28-bde5-e51a344969af',
  date: 'Thu, 11 Feb 2016 10:54:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/publicIPAddresses/test-ip?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-ip\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/publicIPAddresses/test-ip\",\r\n  \"etag\": \"W/\\\"cf30ad3f-4851-4394-b859-90746766b853\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"1ce457f4-5205-47ce-a0a5-84e4805241b4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '508',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"cf30ad3f-4851-4394-b859-90746766b853"',
  'x-ms-request-id': 'c70f19bb-d455-459b-975e-64ac7220ee5a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'd1da9a8f-109e-4bc4-bcb7-0997406acdde',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105455Z:d1da9a8f-109e-4bc4-bcb7-0997406acdde',
  date: 'Thu, 11 Feb 2016 10:54:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/publicIPAddresses/test-ip?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-ip\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/publicIPAddresses/test-ip\",\r\n  \"etag\": \"W/\\\"cf30ad3f-4851-4394-b859-90746766b853\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"1ce457f4-5205-47ce-a0a5-84e4805241b4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '508',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"cf30ad3f-4851-4394-b859-90746766b853"',
  'x-ms-request-id': 'c70f19bb-d455-459b-975e-64ac7220ee5a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'd1da9a8f-109e-4bc4-bcb7-0997406acdde',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105455Z:d1da9a8f-109e-4bc4-bcb7-0997406acdde',
  date: 'Thu, 11 Feb 2016 10:54:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"341c7b3d-e58d-4268-a1da-a3b42ecc04c7\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7f3f3abe-e357-4fc0-8c8a-aa87b591197a\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '628',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"341c7b3d-e58d-4268-a1da-a3b42ecc04c7"',
  'x-ms-request-id': 'c31df9fc-0195-4b5d-9fe4-37995135712b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '542c9f28-e49f-4e03-b4df-122295edf2c0',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105457Z:542c9f28-e49f-4e03-b4df-122295edf2c0',
  date: 'Thu, 11 Feb 2016 10:54:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"341c7b3d-e58d-4268-a1da-a3b42ecc04c7\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7f3f3abe-e357-4fc0-8c8a-aa87b591197a\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '628',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"341c7b3d-e58d-4268-a1da-a3b42ecc04c7"',
  'x-ms-request-id': 'c31df9fc-0195-4b5d-9fe4-37995135712b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '542c9f28-e49f-4e03-b4df-122295edf2c0',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105457Z:542c9f28-e49f-4e03-b4df-122295edf2c0',
  date: 'Thu, 11 Feb 2016 10:54:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"59113b8f-54b3-4f7f-b035-fbdd1637ba63\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7f3f3abe-e357-4fc0-8c8a-aa87b591197a\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"59113b8f-54b3-4f7f-b035-fbdd1637ba63\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1268',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5230b988-5150-41ad-b16c-d1bf4c08c866',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/5230b988-5150-41ad-b16c-d1bf4c08c866?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '7cb129f1-9a2f-417f-a645-dcfd3b7ee299',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105458Z:7cb129f1-9a2f-417f-a645-dcfd3b7ee299',
  date: 'Thu, 11 Feb 2016 10:54:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"59113b8f-54b3-4f7f-b035-fbdd1637ba63\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7f3f3abe-e357-4fc0-8c8a-aa87b591197a\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"59113b8f-54b3-4f7f-b035-fbdd1637ba63\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1268',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5230b988-5150-41ad-b16c-d1bf4c08c866',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/5230b988-5150-41ad-b16c-d1bf4c08c866?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '7cb129f1-9a2f-417f-a645-dcfd3b7ee299',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105458Z:7cb129f1-9a2f-417f-a645-dcfd3b7ee299',
  date: 'Thu, 11 Feb 2016 10:54:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"59113b8f-54b3-4f7f-b035-fbdd1637ba63\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7f3f3abe-e357-4fc0-8c8a-aa87b591197a\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"59113b8f-54b3-4f7f-b035-fbdd1637ba63\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1268',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"59113b8f-54b3-4f7f-b035-fbdd1637ba63"',
  'x-ms-request-id': '96445d49-b7cb-4b05-a1cf-6b2db8606a07',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '2664f2c0-f0ba-48f3-846c-3960cc76319b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105500Z:2664f2c0-f0ba-48f3-846c-3960cc76319b',
  date: 'Thu, 11 Feb 2016 10:55:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"59113b8f-54b3-4f7f-b035-fbdd1637ba63\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7f3f3abe-e357-4fc0-8c8a-aa87b591197a\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"59113b8f-54b3-4f7f-b035-fbdd1637ba63\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1268',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"59113b8f-54b3-4f7f-b035-fbdd1637ba63"',
  'x-ms-request-id': '96445d49-b7cb-4b05-a1cf-6b2db8606a07',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '2664f2c0-f0ba-48f3-846c-3960cc76319b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105500Z:2664f2c0-f0ba-48f3-846c-3960cc76319b',
  date: 'Thu, 11 Feb 2016 10:55:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operationResults/a004193d-393d-4817-920a-4733cf70e3f0?api-version=2015-06-15',
  'retry-after': '10',
  'x-ms-request-id': 'a004193d-393d-4817-920a-4733cf70e3f0',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/a004193d-393d-4817-920a-4733cf70e3f0?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': 'b31e9346-eaca-4055-9751-c39d4be82c6f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105502Z:b31e9346-eaca-4055-9751-c39d4be82c6f',
  date: 'Thu, 11 Feb 2016 10:55:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operationResults/a004193d-393d-4817-920a-4733cf70e3f0?api-version=2015-06-15',
  'retry-after': '10',
  'x-ms-request-id': 'a004193d-393d-4817-920a-4733cf70e3f0',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/a004193d-393d-4817-920a-4733cf70e3f0?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': 'b31e9346-eaca-4055-9751-c39d4be82c6f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105502Z:b31e9346-eaca-4055-9751-c39d4be82c6f',
  date: 'Thu, 11 Feb 2016 10:55:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/a004193d-393d-4817-920a-4733cf70e3f0?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '571e0d97-0575-4729-884e-eb9f26f39fe8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '36905ff8-e0e6-4857-8f7d-53cde7f389c5',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105532Z:36905ff8-e0e6-4857-8f7d-53cde7f389c5',
  date: 'Thu, 11 Feb 2016 10:55:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/a004193d-393d-4817-920a-4733cf70e3f0?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '571e0d97-0575-4729-884e-eb9f26f39fe8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '36905ff8-e0e6-4857-8f7d-53cde7f389c5',
  'x-ms-routing-request-id': 'WESTEUROPE:20160211T105532Z:36905ff8-e0e6-4857-8f7d-53cde7f389c5',
  date: 'Thu, 11 Feb 2016 10:55:32 GMT',
  connection: 'close' });
 return result; }]];
