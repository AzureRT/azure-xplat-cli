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
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-express-route-circuit-auth?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-express-route-circuit-auth' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14966',
  'x-ms-request-id': '7694cd88-4141-4d62-8c73-553f16a9158c',
  'x-ms-correlation-request-id': '7694cd88-4141-4d62-8c73-553f16a9158c',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T141137Z:7694cd88-4141-4d62-8c73-553f16a9158c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 14:11:37 GMT',
  'content-length': '129' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-express-route-circuit-auth?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth\",\"name\":\"xplat-test-express-route-circuit-auth\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '237',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1190',
  'x-ms-request-id': '8a757c2d-551c-465d-ac0d-285d763bf8d9',
  'x-ms-correlation-request-id': '8a757c2d-551c-465d-ac0d-285d763bf8d9',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T141139Z:8a757c2d-551c-465d-ac0d-285d763bf8d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 14:11:38 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/test-circuit' under resource group 'xplat-test-express-route-circuit-auth' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '61a584bf-190b-4069-a1c2-0af29fd937bc',
  'x-ms-correlation-request-id': '61a584bf-190b-4069-a1c2-0af29fd937bc',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T141140Z:61a584bf-190b-4069-a1c2-0af29fd937bc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 14:11:39 GMT',
  'content-length': '192' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-circuit\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit\",\r\n  \"etag\": \"W/\\\"8429703e-5811-413f-ab12-111a42329458\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"33f8043c-bb56-446c-845b-39e4c02ec0b1\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Disabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"serviceKey\": \"00000000-0000-0000-0000-000000000000\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1037',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'e55b271d-98c2-4663-8fba-609681c03044',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/e55b271d-98c2-4663-8fba-609681c03044?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': 'eae3e8e9-17ea-4b63-923d-aacfdd0baed9',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T141144Z:eae3e8e9-17ea-4b63-923d-aacfdd0baed9',
  date: 'Wed, 07 Dec 2016 14:11:43 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/e55b271d-98c2-4663-8fba-609681c03044?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '35ea25fc-842c-4c97-adef-5a7478ab2708',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': 'ee467583-7b7c-457a-909c-6c9f767d53f0',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T141215Z:ee467583-7b7c-457a-909c-6c9f767d53f0',
  date: 'Wed, 07 Dec 2016 14:12:14 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-circuit\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit\",\r\n  \"etag\": \"W/\\\"6c595506-f625-4d5a-b2a3-a5917381c142\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"33f8043c-bb56-446c-845b-39e4c02ec0b1\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"a7fa7aaf-b6ec-4bc4-9ddd-d04cea1f4cb9\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1068',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '01ed2495-bcf7-4c21-a32e-b1b233f8e148',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-correlation-request-id': '5d9cbf0f-c549-4b03-af46-f3f8e47ef111',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T141216Z:5d9cbf0f-c549-4b03-af46-f3f8e47ef111',
  date: 'Wed, 07 Dec 2016 14:12:15 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-circuit\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit\",\r\n  \"etag\": \"W/\\\"6c595506-f625-4d5a-b2a3-a5917381c142\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"33f8043c-bb56-446c-845b-39e4c02ec0b1\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"a7fa7aaf-b6ec-4bc4-9ddd-d04cea1f4cb9\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1068',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'abbb3274-30ed-4c82-8dcc-2a234ccfdb74',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': '20ee0460-c0bf-4ebe-a701-749e2fe45583',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T141217Z:20ee0460-c0bf-4ebe-a701-749e2fe45583',
  date: 'Wed, 07 Dec 2016 14:12:17 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth?api-version=2016-09-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '298',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e0732a90-5e0c-4f2f-88a0-2ffb06c5428c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14972',
  'x-ms-correlation-request-id': '4c591fe8-71c3-42aa-bbb3-5d1cc9e379a9',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T141218Z:4c591fe8-71c3-42aa-bbb3-5d1cc9e379a9',
  date: 'Wed, 07 Dec 2016 14:12:17 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-auth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n  \"etag\": \"W/\\\"ced5ac86-6ab9-4ded-9aa7-95107179a0d2\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"authorizationKey\": \"85885fca-0ee7-4934-a890-e829fdbd7362\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '459',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '151a9721-3fb8-413a-9b4b-ef857aac284b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/151a9721-3fb8-413a-9b4b-ef857aac284b?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '8f515161-9436-4479-8f4e-7e4b38b862b0',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T141219Z:8f515161-9436-4479-8f4e-7e4b38b862b0',
  date: 'Wed, 07 Dec 2016 14:12:18 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/151a9721-3fb8-413a-9b4b-ef857aac284b?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b3de928d-4994-4fc3-b4ba-e28dff6d2d77',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14965',
  'x-ms-correlation-request-id': 'f4ff70d9-d73b-4225-ba27-31397bde8262',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T141250Z:f4ff70d9-d73b-4225-ba27-31397bde8262',
  date: 'Wed, 07 Dec 2016 14:12:50 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-auth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n  \"etag\": \"W/\\\"730ec81f-9d89-4d37-b38d-dec3042a4cd7\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"85885fca-0ee7-4934-a890-e829fdbd7362\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '460',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8c5b44d9-ce14-439a-aa47-ae1498545086',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': '63b90828-dcc9-4b92-8a25-d3c9676ee1b7',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T141250Z:63b90828-dcc9-4b92-8a25-d3c9676ee1b7',
  date: 'Wed, 07 Dec 2016 14:12:50 GMT' });
 return result; }]];