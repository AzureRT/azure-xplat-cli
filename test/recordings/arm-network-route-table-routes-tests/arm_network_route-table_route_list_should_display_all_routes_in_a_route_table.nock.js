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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"c5cdc358-d9fa-43e4-83fa-132c6b1b4dca\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"5d7f8ac8-9ab7-4216-8706-87a8f547ae23\",\r\n    \"routes\": [\r\n      {\r\n        \"name\": \"test-route\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n        \"etag\": \"W/\\\"c5cdc358-d9fa-43e4-83fa-132c6b1b4dca\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"addressPrefix\": \"12.0.0.0/8\",\r\n          \"nextHopType\": \"VirtualAppliance\",\r\n          \"nextHopIpAddress\": \"10.0.0.7\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '988',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c5cdc358-d9fa-43e4-83fa-132c6b1b4dca"',
  'x-ms-request-id': '44904a23-50c7-4be9-9ac6-378bf0cdd082',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '5e5e5c5d-36b2-4fc1-a624-b236a0eaa545',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T091025Z:5e5e5c5d-36b2-4fc1-a624-b236a0eaa545',
  date: 'Tue, 16 Feb 2016 09:10:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"c5cdc358-d9fa-43e4-83fa-132c6b1b4dca\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"5d7f8ac8-9ab7-4216-8706-87a8f547ae23\",\r\n    \"routes\": [\r\n      {\r\n        \"name\": \"test-route\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n        \"etag\": \"W/\\\"c5cdc358-d9fa-43e4-83fa-132c6b1b4dca\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"addressPrefix\": \"12.0.0.0/8\",\r\n          \"nextHopType\": \"VirtualAppliance\",\r\n          \"nextHopIpAddress\": \"10.0.0.7\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '988',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c5cdc358-d9fa-43e4-83fa-132c6b1b4dca"',
  'x-ms-request-id': '44904a23-50c7-4be9-9ac6-378bf0cdd082',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '5e5e5c5d-36b2-4fc1-a624-b236a0eaa545',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T091025Z:5e5e5c5d-36b2-4fc1-a624-b236a0eaa545',
  date: 'Tue, 16 Feb 2016 09:10:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes?api-version=2015-06-15')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-route\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n      \"etag\": \"W/\\\"c5cdc358-d9fa-43e4-83fa-132c6b1b4dca\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"addressPrefix\": \"12.0.0.0/8\",\r\n        \"nextHopType\": \"VirtualAppliance\",\r\n        \"nextHopIpAddress\": \"10.0.0.7\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '514',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e42187c7-5bd4-4a0f-8b8b-075b69d5a9a1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '1212f95c-c42e-43fa-abd6-8c0c18455649',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T091026Z:1212f95c-c42e-43fa-abd6-8c0c18455649',
  date: 'Tue, 16 Feb 2016 09:10:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes?api-version=2015-06-15')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-route\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n      \"etag\": \"W/\\\"c5cdc358-d9fa-43e4-83fa-132c6b1b4dca\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"addressPrefix\": \"12.0.0.0/8\",\r\n        \"nextHopType\": \"VirtualAppliance\",\r\n        \"nextHopIpAddress\": \"10.0.0.7\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '514',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e42187c7-5bd4-4a0f-8b8b-075b69d5a9a1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '1212f95c-c42e-43fa-abd6-8c0c18455649',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T091026Z:1212f95c-c42e-43fa-abd6-8c0c18455649',
  date: 'Tue, 16 Feb 2016 09:10:26 GMT',
  connection: 'close' });
 return result; }]];
