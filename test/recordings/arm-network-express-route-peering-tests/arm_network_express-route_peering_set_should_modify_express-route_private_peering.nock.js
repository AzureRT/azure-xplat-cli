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
  process.env['AZURE_VM_TEST_LOCATION'] = 'brazilsouth';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit?api-version=2016-06-01')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRouteCircuit\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit\",\r\n  \"etag\": \"W/\\\"4aa8d457-019f-4e54-bcb2-ee7329540b3e\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Failed\",\r\n    \"resourceGuid\": \"02c5fc46-f577-4fc3-b806-dba6762a446e\",\r\n    \"peerings\": [\r\n      {\r\n        \"name\": \"AzurePrivatePeering\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering\",\r\n        \"etag\": \"W/\\\"4aa8d457-019f-4e54-bcb2-ee7329540b3e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Failed\",\r\n          \"peeringType\": \"AzurePrivatePeering\",\r\n          \"azureASN\": 12076,\r\n          \"peerASN\": 100,\r\n          \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n          \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n          \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n          \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n          \"state\": \"Enabled\",\r\n          \"vlanId\": 200\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AzurePublicPeering\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering\",\r\n        \"etag\": \"W/\\\"4aa8d457-019f-4e54-bcb2-ee7329540b3e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Failed\",\r\n          \"peeringType\": \"AzurePublicPeering\",\r\n          \"azureASN\": 12076,\r\n          \"peerASN\": 110,\r\n          \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n          \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n          \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n          \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n          \"state\": \"Enabled\",\r\n          \"vlanId\": 210\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"MicrosoftPeering\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/MicrosoftPeering\",\r\n        \"etag\": \"W/\\\"4aa8d457-019f-4e54-bcb2-ee7329540b3e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Failed\",\r\n          \"peeringType\": \"MicrosoftPeering\",\r\n          \"azureASN\": 0,\r\n          \"peerASN\": 120,\r\n          \"primaryPeerAddressPrefix\": \"123.0.0.0/30\",\r\n          \"secondaryPeerAddressPrefix\": \"123.0.0.4/30\",\r\n          \"state\": \"Disabled\",\r\n          \"vlanId\": 220,\r\n          \"microsoftPeeringConfig\": {\r\n            \"advertisedPublicPrefixes\": [\r\n              \"123.1.0.0/24\"\r\n            ],\r\n            \"advertisedPublicPrefixesState\": \"NotConfigured\",\r\n            \"customerASN\": 23,\r\n            \"routingRegistryName\": \"ARIN\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"serviceKey\": \"b4efa836-d31e-4e40-bf72-fac7d25b5fce\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Premium_MeteredData\",\r\n    \"tier\": \"Premium\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3633',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '981e1d6a-f80a-4e92-8da1-6d3cbea4032d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14938',
  'x-ms-correlation-request-id': '273fffb1-26b9-4e85-9d64-9e60ae83939a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160819T130201Z:273fffb1-26b9-4e85-9d64-9e60ae83939a',
  date: 'Fri, 19 Aug 2016 13:02:00 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering?api-version=2016-06-01')
  .reply(200, "{\r\n  \"name\": \"AzurePrivatePeering\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering\",\r\n  \"etag\": \"W/\\\"4aa8d457-019f-4e54-bcb2-ee7329540b3e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Failed\",\r\n    \"peeringType\": \"AzurePrivatePeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 100,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 200\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '711',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9256bf61-2eee-41a6-aed1-541f03fc8358',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14930',
  'x-ms-correlation-request-id': '2cff94bc-fb08-4c31-946b-16dc866c1182',
  'x-ms-routing-request-id': 'WESTEUROPE:20160819T130202Z:2cff94bc-fb08-4c31-946b-16dc866c1182',
  date: 'Fri, 19 Aug 2016 13:02:01 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering?api-version=2016-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"ParentResourceIsInFailedState\",\r\n    \"message\": \"PUT operation on child resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering is blocked because last operation (07b0b200-8b0b-417a-8d45-6da3a6a489b6) on parent resource failed leaving it in failed state. Run PUT operation on the parent, then retry operation on the child.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '528',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '681dbc23-35f9-48c3-ba62-bdbb2456486b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '866f30b6-eb37-4845-97d4-66bf70bbdf04',
  'x-ms-routing-request-id': 'WESTEUROPE:20160819T130205Z:866f30b6-eb37-4845-97d4-66bf70bbdf04',
  date: 'Fri, 19 Aug 2016 13:02:04 GMT' });
 return result; }]];