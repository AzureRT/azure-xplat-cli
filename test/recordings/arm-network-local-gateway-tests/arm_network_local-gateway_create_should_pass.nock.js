// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
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
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGrpLocalNetwork?api-version=2015-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGrpLocalNetwork' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14915',
  'x-ms-request-id': '0b3d6d0c-62e1-418c-a0c8-87e29b2d0a22',
  'x-ms-correlation-request-id': '0b3d6d0c-62e1-418c-a0c8-87e29b2d0a22',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113349Z:0b3d6d0c-62e1-418c-a0c8-87e29b2d0a22',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:33:48 GMT',
  connection: 'close',
  'content-length': '116' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGrpLocalNetwork?api-version=2015-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGrpLocalNetwork' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14915',
  'x-ms-request-id': '0b3d6d0c-62e1-418c-a0c8-87e29b2d0a22',
  'x-ms-correlation-request-id': '0b3d6d0c-62e1-418c-a0c8-87e29b2d0a22',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113349Z:0b3d6d0c-62e1-418c-a0c8-87e29b2d0a22',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:33:48 GMT',
  connection: 'close',
  'content-length': '116' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGrpLocalNetwork?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork\",\"name\":\"xplatTestGrpLocalNetwork\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '211',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1161',
  'x-ms-request-id': '573ea3e2-389d-49aa-b931-b760e30eec14',
  'x-ms-correlation-request-id': '573ea3e2-389d-49aa-b931-b760e30eec14',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113352Z:573ea3e2-389d-49aa-b931-b760e30eec14',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:33:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGrpLocalNetwork?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork\",\"name\":\"xplatTestGrpLocalNetwork\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '211',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1161',
  'x-ms-request-id': '573ea3e2-389d-49aa-b931-b760e30eec14',
  'x-ms-correlation-request-id': '573ea3e2-389d-49aa-b931-b760e30eec14',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113352Z:573ea3e2-389d-49aa-b931-b760e30eec14',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:33:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork/providers/Microsoft.Network/localNetworkGateways/xplatTestVnet?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/xplatTestVnet' under resource group 'xplatTestGrpLocalNetwork' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '830e11e4-f2e6-4cf4-83d2-a04768187e8b',
  'x-ms-correlation-request-id': '830e11e4-f2e6-4cf4-83d2-a04768187e8b',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113353Z:830e11e4-f2e6-4cf4-83d2-a04768187e8b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:33:52 GMT',
  connection: 'close',
  'content-length': '180' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork/providers/Microsoft.Network/localNetworkGateways/xplatTestVnet?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/xplatTestVnet' under resource group 'xplatTestGrpLocalNetwork' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '830e11e4-f2e6-4cf4-83d2-a04768187e8b',
  'x-ms-correlation-request-id': '830e11e4-f2e6-4cf4-83d2-a04768187e8b',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113353Z:830e11e4-f2e6-4cf4-83d2-a04768187e8b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:33:52 GMT',
  connection: 'close',
  'content-length': '180' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork/providers/Microsoft.Network/localNetworkGateways/xplatTestVnet?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork/providers/Microsoft.Network/localNetworkGateways/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"e00b0b39-d5e9-49c7-9e38-09e701bbd0e1\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"94887fe9-eebd-4d8e-a967-db1b6d3aadc7\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/23\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.0\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '635',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'b0c54a58-e442-47de-93a2-d3ec0e13eea6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/b0c54a58-e442-47de-93a2-d3ec0e13eea6?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1164',
  'x-ms-correlation-request-id': '841d40cb-134b-4f4b-857a-2b9e61933346',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113359Z:841d40cb-134b-4f4b-857a-2b9e61933346',
  date: 'Tue, 29 Dec 2015 11:33:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork/providers/Microsoft.Network/localNetworkGateways/xplatTestVnet?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork/providers/Microsoft.Network/localNetworkGateways/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"e00b0b39-d5e9-49c7-9e38-09e701bbd0e1\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"94887fe9-eebd-4d8e-a967-db1b6d3aadc7\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/23\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.0\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '635',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'b0c54a58-e442-47de-93a2-d3ec0e13eea6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/b0c54a58-e442-47de-93a2-d3ec0e13eea6?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1164',
  'x-ms-correlation-request-id': '841d40cb-134b-4f4b-857a-2b9e61933346',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113359Z:841d40cb-134b-4f4b-857a-2b9e61933346',
  date: 'Tue, 29 Dec 2015 11:33:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/b0c54a58-e442-47de-93a2-d3ec0e13eea6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '84242276-781e-41b6-be54-c8e914d88497',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14902',
  'x-ms-correlation-request-id': '6e59b504-da08-4a4f-b36e-a887ca025161',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113411Z:6e59b504-da08-4a4f-b36e-a887ca025161',
  date: 'Tue, 29 Dec 2015 11:34:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/b0c54a58-e442-47de-93a2-d3ec0e13eea6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '84242276-781e-41b6-be54-c8e914d88497',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14902',
  'x-ms-correlation-request-id': '6e59b504-da08-4a4f-b36e-a887ca025161',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113411Z:6e59b504-da08-4a4f-b36e-a887ca025161',
  date: 'Tue, 29 Dec 2015 11:34:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork/providers/Microsoft.Network/localNetworkGateways/xplatTestVnet?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork/providers/Microsoft.Network/localNetworkGateways/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"c9794cc5-c535-4c32-bf35-ea5fa97db4af\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"94887fe9-eebd-4d8e-a967-db1b6d3aadc7\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/23\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.0\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '636',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c9794cc5-c535-4c32-bf35-ea5fa97db4af"',
  'x-ms-request-id': 'e8e1f2ae-3376-44fe-9c17-bfde44cb8a5b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14914',
  'x-ms-correlation-request-id': '92839202-2aff-451f-8c51-261713b6a118',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113413Z:92839202-2aff-451f-8c51-261713b6a118',
  date: 'Tue, 29 Dec 2015 11:34:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork/providers/Microsoft.Network/localNetworkGateways/xplatTestVnet?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork/providers/Microsoft.Network/localNetworkGateways/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"c9794cc5-c535-4c32-bf35-ea5fa97db4af\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"94887fe9-eebd-4d8e-a967-db1b6d3aadc7\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/23\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.0\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '636',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c9794cc5-c535-4c32-bf35-ea5fa97db4af"',
  'x-ms-request-id': 'e8e1f2ae-3376-44fe-9c17-bfde44cb8a5b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14914',
  'x-ms-correlation-request-id': '92839202-2aff-451f-8c51-261713b6a118',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113413Z:92839202-2aff-451f-8c51-261713b6a118',
  date: 'Tue, 29 Dec 2015 11:34:12 GMT',
  connection: 'close' });
 return result; }]];
