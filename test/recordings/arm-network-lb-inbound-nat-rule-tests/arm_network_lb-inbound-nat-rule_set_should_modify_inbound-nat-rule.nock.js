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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbI\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI\",\r\n  \"etag\": \"W/\\\"160d0485-770a-4e5a-908e-9695ba78ab3b\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"4399effe-0861-4975-b9f4-37a586324a4b\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"160d0485-770a-4e5a-908e-9695ba78ab3b\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbNat\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInboundNat\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplattestSecndFrontendIp\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestSecndFrontendIp\",\r\n        \"etag\": \"W/\\\"160d0485-770a-4e5a-908e-9695ba78ab3b\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/publicIPAddresses/xplatTestSecndIpLbNat\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestSecndInboundNat\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"xplattestInboundNat\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInboundNat\",\r\n        \"etag\": \"W/\\\"160d0485-770a-4e5a-908e-9695ba78ab3b\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\"\r\n          },\r\n          \"frontendPort\": 3380,\r\n          \"backendPort\": 3380,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Tcp\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplattestSecndInboundNat\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestSecndInboundNat\",\r\n        \"etag\": \"W/\\\"160d0485-770a-4e5a-908e-9695ba78ab3b\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestSecndFrontendIp\"\r\n          },\r\n          \"frontendPort\": 3383,\r\n          \"backendPort\": 3383,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Tcp\"\r\n        }\r\n      }\r\n    ],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4303',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"160d0485-770a-4e5a-908e-9695ba78ab3b"',
  'x-ms-request-id': '71414a8f-71ab-409e-88cf-304f014b4dbf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14913',
  'x-ms-correlation-request-id': '9b9a7484-bf6c-4fd5-bfb8-c03bf0820ff0',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T135034Z:9b9a7484-bf6c-4fd5-bfb8-c03bf0820ff0',
  date: 'Tue, 29 Dec 2015 13:50:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbI\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI\",\r\n  \"etag\": \"W/\\\"160d0485-770a-4e5a-908e-9695ba78ab3b\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"4399effe-0861-4975-b9f4-37a586324a4b\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"160d0485-770a-4e5a-908e-9695ba78ab3b\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbNat\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInboundNat\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplattestSecndFrontendIp\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestSecndFrontendIp\",\r\n        \"etag\": \"W/\\\"160d0485-770a-4e5a-908e-9695ba78ab3b\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/publicIPAddresses/xplatTestSecndIpLbNat\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestSecndInboundNat\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"xplattestInboundNat\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInboundNat\",\r\n        \"etag\": \"W/\\\"160d0485-770a-4e5a-908e-9695ba78ab3b\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\"\r\n          },\r\n          \"frontendPort\": 3380,\r\n          \"backendPort\": 3380,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Tcp\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplattestSecndInboundNat\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestSecndInboundNat\",\r\n        \"etag\": \"W/\\\"160d0485-770a-4e5a-908e-9695ba78ab3b\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestSecndFrontendIp\"\r\n          },\r\n          \"frontendPort\": 3383,\r\n          \"backendPort\": 3383,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Tcp\"\r\n        }\r\n      }\r\n    ],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4303',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"160d0485-770a-4e5a-908e-9695ba78ab3b"',
  'x-ms-request-id': '71414a8f-71ab-409e-88cf-304f014b4dbf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14913',
  'x-ms-correlation-request-id': '9b9a7484-bf6c-4fd5-bfb8-c03bf0820ff0',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T135034Z:9b9a7484-bf6c-4fd5-bfb8-c03bf0820ff0',
  date: 'Tue, 29 Dec 2015 13:50:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbI\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI\",\r\n  \"etag\": \"W/\\\"00cb24ae-8be5-4f75-8e93-0dd205cac3a7\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"4399effe-0861-4975-b9f4-37a586324a4b\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"00cb24ae-8be5-4f75-8e93-0dd205cac3a7\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbNat\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInboundNat\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplattestSecndFrontendIp\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestSecndFrontendIp\",\r\n        \"etag\": \"W/\\\"00cb24ae-8be5-4f75-8e93-0dd205cac3a7\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/publicIPAddresses/xplatTestSecndIpLbNat\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestSecndInboundNat\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"xplattestInboundNat\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInboundNat\",\r\n        \"etag\": \"W/\\\"00cb24ae-8be5-4f75-8e93-0dd205cac3a7\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\"\r\n          },\r\n          \"frontendPort\": 3381,\r\n          \"backendPort\": 3381,\r\n          \"enableFloatingIP\": false,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Udp\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplattestSecndInboundNat\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestSecndInboundNat\",\r\n        \"etag\": \"W/\\\"00cb24ae-8be5-4f75-8e93-0dd205cac3a7\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestSecndFrontendIp\"\r\n          },\r\n          \"frontendPort\": 3383,\r\n          \"backendPort\": 3383,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Tcp\"\r\n        }\r\n      }\r\n    ],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4304',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ca623736-1947-4dee-ab53-c0a9fcedca4b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/ca623736-1947-4dee-ab53-c0a9fcedca4b?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1164',
  'x-ms-correlation-request-id': '080de7f4-bdca-4b8d-a705-fa4f596bed48',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T135035Z:080de7f4-bdca-4b8d-a705-fa4f596bed48',
  date: 'Tue, 29 Dec 2015 13:50:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbI\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI\",\r\n  \"etag\": \"W/\\\"00cb24ae-8be5-4f75-8e93-0dd205cac3a7\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"4399effe-0861-4975-b9f4-37a586324a4b\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"00cb24ae-8be5-4f75-8e93-0dd205cac3a7\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbNat\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInboundNat\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplattestSecndFrontendIp\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestSecndFrontendIp\",\r\n        \"etag\": \"W/\\\"00cb24ae-8be5-4f75-8e93-0dd205cac3a7\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/publicIPAddresses/xplatTestSecndIpLbNat\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestSecndInboundNat\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"xplattestInboundNat\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInboundNat\",\r\n        \"etag\": \"W/\\\"00cb24ae-8be5-4f75-8e93-0dd205cac3a7\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\"\r\n          },\r\n          \"frontendPort\": 3381,\r\n          \"backendPort\": 3381,\r\n          \"enableFloatingIP\": false,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Udp\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplattestSecndInboundNat\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestSecndInboundNat\",\r\n        \"etag\": \"W/\\\"00cb24ae-8be5-4f75-8e93-0dd205cac3a7\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestSecndFrontendIp\"\r\n          },\r\n          \"frontendPort\": 3383,\r\n          \"backendPort\": 3383,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Tcp\"\r\n        }\r\n      }\r\n    ],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4304',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ca623736-1947-4dee-ab53-c0a9fcedca4b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/ca623736-1947-4dee-ab53-c0a9fcedca4b?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1164',
  'x-ms-correlation-request-id': '080de7f4-bdca-4b8d-a705-fa4f596bed48',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T135035Z:080de7f4-bdca-4b8d-a705-fa4f596bed48',
  date: 'Tue, 29 Dec 2015 13:50:35 GMT',
  connection: 'close' });
 return result; }]];
