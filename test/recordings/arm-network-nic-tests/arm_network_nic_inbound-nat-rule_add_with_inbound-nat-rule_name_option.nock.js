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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestNic\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic\",\r\n  \"etag\": \"W/\\\"2f1bd7ed-ee68-4a7c-ac0c-582b623a2bc9\\\"\",\r\n  \"type\": \"Microsoft.Network/networkInterfaces\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"high\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"05de5c55-dc4c-4f40-8a75-852dc33c3d0a\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"Nic-IP-config\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/Nic-IP-config\",\r\n        \"etag\": \"W/\\\"2f1bd7ed-ee68-4a7c-ac0c-582b623a2bc9\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n          },\r\n          \"primary\": true,\r\n          \"loadBalancerBackendAddressPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\"\r\n            }\r\n          ],\r\n          \"loadBalancerInboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internlDnsN\",\r\n      \"internalFqdn\": \"internlDnsN.bad1d1dc0heelicjfy5v1vt3xd.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": false,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkSecurityGroups/xplatTestNSGNic\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2325',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"2f1bd7ed-ee68-4a7c-ac0c-582b623a2bc9"',
  'x-ms-request-id': '036ec541-b57b-4a28-b6c3-cb1f2f8c8da3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14905',
  'x-ms-correlation-request-id': 'a038cc16-34a6-47e3-9abd-abdf28a6c82b',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T140627Z:a038cc16-34a6-47e3-9abd-abdf28a6c82b',
  date: 'Tue, 29 Dec 2015 14:06:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestNic\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic\",\r\n  \"etag\": \"W/\\\"2f1bd7ed-ee68-4a7c-ac0c-582b623a2bc9\\\"\",\r\n  \"type\": \"Microsoft.Network/networkInterfaces\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"high\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"05de5c55-dc4c-4f40-8a75-852dc33c3d0a\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"Nic-IP-config\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/Nic-IP-config\",\r\n        \"etag\": \"W/\\\"2f1bd7ed-ee68-4a7c-ac0c-582b623a2bc9\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n          },\r\n          \"primary\": true,\r\n          \"loadBalancerBackendAddressPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\"\r\n            }\r\n          ],\r\n          \"loadBalancerInboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internlDnsN\",\r\n      \"internalFqdn\": \"internlDnsN.bad1d1dc0heelicjfy5v1vt3xd.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": false,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkSecurityGroups/xplatTestNSGNic\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2325',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"2f1bd7ed-ee68-4a7c-ac0c-582b623a2bc9"',
  'x-ms-request-id': '036ec541-b57b-4a28-b6c3-cb1f2f8c8da3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14905',
  'x-ms-correlation-request-id': 'a038cc16-34a6-47e3-9abd-abdf28a6c82b',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T140627Z:a038cc16-34a6-47e3-9abd-abdf28a6c82b',
  date: 'Tue, 29 Dec 2015 14:06:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplattestlbnic\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic\",\r\n  \"etag\": \"W/\\\"7d75ebf3-304a-4061-9ad2-569376fde949\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9d9e3231-27f4-468d-a034-d1059ba4b5bf\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpnic\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/frontendIPConfigurations/xplattestFrontendIpnic\",\r\n        \"etag\": \"W/\\\"7d75ebf3-304a-4061-9ad2-569376fde949\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/publicIPAddresses/xplatTestIpNic\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            },\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/LBNicAddInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"LBAddPollnic\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\",\r\n        \"etag\": \"W/\\\"7d75ebf3-304a-4061-9ad2-569376fde949\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendIPConfigurations\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/Nic-IP-config\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"LBNicAddPollnic\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBNicAddPollnic\",\r\n        \"etag\": \"W/\\\"7d75ebf3-304a-4061-9ad2-569376fde949\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\"\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"xplattestInboundnic\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\",\r\n        \"etag\": \"W/\\\"7d75ebf3-304a-4061-9ad2-569376fde949\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/frontendIPConfigurations/xplattestFrontendIpnic\"\r\n          },\r\n          \"frontendPort\": 3380,\r\n          \"backendPort\": 3380,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Tcp\",\r\n          \"backendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/Nic-IP-config\"\r\n          }\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"LBNicAddInboundnic\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/LBNicAddInboundnic\",\r\n        \"etag\": \"W/\\\"7d75ebf3-304a-4061-9ad2-569376fde949\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/frontendIPConfigurations/xplattestFrontendIpnic\"\r\n          },\r\n          \"frontendPort\": 3383,\r\n          \"backendPort\": 3383,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Tcp\"\r\n        }\r\n      }\r\n    ],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4871',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7d75ebf3-304a-4061-9ad2-569376fde949"',
  'x-ms-request-id': '40fdb6b1-df06-4ab2-bd81-303a37e5652c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14883',
  'x-ms-correlation-request-id': 'c927984c-3ead-46fc-8d90-f4ea51471cb0',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T140629Z:c927984c-3ead-46fc-8d90-f4ea51471cb0',
  date: 'Tue, 29 Dec 2015 14:06:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplattestlbnic\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic\",\r\n  \"etag\": \"W/\\\"7d75ebf3-304a-4061-9ad2-569376fde949\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9d9e3231-27f4-468d-a034-d1059ba4b5bf\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpnic\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/frontendIPConfigurations/xplattestFrontendIpnic\",\r\n        \"etag\": \"W/\\\"7d75ebf3-304a-4061-9ad2-569376fde949\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/publicIPAddresses/xplatTestIpNic\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            },\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/LBNicAddInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"LBAddPollnic\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\",\r\n        \"etag\": \"W/\\\"7d75ebf3-304a-4061-9ad2-569376fde949\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendIPConfigurations\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/Nic-IP-config\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"LBNicAddPollnic\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBNicAddPollnic\",\r\n        \"etag\": \"W/\\\"7d75ebf3-304a-4061-9ad2-569376fde949\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\"\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"xplattestInboundnic\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\",\r\n        \"etag\": \"W/\\\"7d75ebf3-304a-4061-9ad2-569376fde949\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/frontendIPConfigurations/xplattestFrontendIpnic\"\r\n          },\r\n          \"frontendPort\": 3380,\r\n          \"backendPort\": 3380,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Tcp\",\r\n          \"backendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/Nic-IP-config\"\r\n          }\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"LBNicAddInboundnic\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/LBNicAddInboundnic\",\r\n        \"etag\": \"W/\\\"7d75ebf3-304a-4061-9ad2-569376fde949\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/frontendIPConfigurations/xplattestFrontendIpnic\"\r\n          },\r\n          \"frontendPort\": 3383,\r\n          \"backendPort\": 3383,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Tcp\"\r\n        }\r\n      }\r\n    ],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4871',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7d75ebf3-304a-4061-9ad2-569376fde949"',
  'x-ms-request-id': '40fdb6b1-df06-4ab2-bd81-303a37e5652c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14883',
  'x-ms-correlation-request-id': 'c927984c-3ead-46fc-8d90-f4ea51471cb0',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T140629Z:c927984c-3ead-46fc-8d90-f4ea51471cb0',
  date: 'Tue, 29 Dec 2015 14:06:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestNic\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic\",\r\n  \"etag\": \"W/\\\"46c3f996-d59a-4031-b2aa-4190a3697cd6\\\"\",\r\n  \"type\": \"Microsoft.Network/networkInterfaces\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"high\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"05de5c55-dc4c-4f40-8a75-852dc33c3d0a\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"Nic-IP-config\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/Nic-IP-config\",\r\n        \"etag\": \"W/\\\"46c3f996-d59a-4031-b2aa-4190a3697cd6\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n          },\r\n          \"primary\": true,\r\n          \"loadBalancerBackendAddressPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\"\r\n            }\r\n          ],\r\n          \"loadBalancerInboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            },\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/LBNicAddInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internlDnsN\",\r\n      \"internalFqdn\": \"internlDnsN.bad1d1dc0heelicjfy5v1vt3xd.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": false,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkSecurityGroups/xplatTestNSGNic\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2560',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '85f12369-f010-421a-a589-bfafd432b038',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/85f12369-f010-421a-a589-bfafd432b038?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1158',
  'x-ms-correlation-request-id': 'a3e3b096-29d5-4937-b9e6-91c892a7365b',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T140631Z:a3e3b096-29d5-4937-b9e6-91c892a7365b',
  date: 'Tue, 29 Dec 2015 14:06:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestNic\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic\",\r\n  \"etag\": \"W/\\\"46c3f996-d59a-4031-b2aa-4190a3697cd6\\\"\",\r\n  \"type\": \"Microsoft.Network/networkInterfaces\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"high\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"05de5c55-dc4c-4f40-8a75-852dc33c3d0a\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"Nic-IP-config\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/Nic-IP-config\",\r\n        \"etag\": \"W/\\\"46c3f996-d59a-4031-b2aa-4190a3697cd6\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n          },\r\n          \"primary\": true,\r\n          \"loadBalancerBackendAddressPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\"\r\n            }\r\n          ],\r\n          \"loadBalancerInboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            },\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/LBNicAddInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internlDnsN\",\r\n      \"internalFqdn\": \"internlDnsN.bad1d1dc0heelicjfy5v1vt3xd.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": false,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkSecurityGroups/xplatTestNSGNic\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2560',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '85f12369-f010-421a-a589-bfafd432b038',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/85f12369-f010-421a-a589-bfafd432b038?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1158',
  'x-ms-correlation-request-id': 'a3e3b096-29d5-4937-b9e6-91c892a7365b',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T140631Z:a3e3b096-29d5-4937-b9e6-91c892a7365b',
  date: 'Tue, 29 Dec 2015 14:06:31 GMT',
  connection: 'close' });
 return result; }]];