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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-nsg?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-nsg' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14972',
  'x-ms-request-id': 'c3ffb9f9-95c5-49d3-a5d1-abac02adaf12',
  'x-ms-correlation-request-id': 'c3ffb9f9-95c5-49d3-a5d1-abac02adaf12',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T131014Z:c3ffb9f9-95c5-49d3-a5d1-abac02adaf12',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 13:10:13 GMT',
  'content-length': '106' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-nsg?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg\",\"name\":\"xplat-test-nsg\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': 'be070a5c-b774-49db-9135-4f57ecad113c',
  'x-ms-correlation-request-id': 'be070a5c-b774-49db-9135-4f57ecad113c',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T131016Z:be070a5c-b774-49db-9135-4f57ecad113c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 13:10:16 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkSecurityGroups/test-nsg' under resource group 'xplat-test-nsg' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'f9fa016b-d5d0-426a-9543-293cfbb9651e',
  'x-ms-correlation-request-id': 'f9fa016b-d5d0-426a-9543-293cfbb9651e',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T131017Z:f9fa016b-d5d0-426a-9543-293cfbb9651e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 13:10:16 GMT',
  'content-length': '166' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-nsg\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg\",\r\n  \"etag\": \"W/\\\"85637ba1-2f2e-4595-b794-61048929e59c\\\"\",\r\n  \"type\": \"Microsoft.Network/networkSecurityGroups\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"e8a39b9a-084f-474d-af4b-1f41a806d0f3\",\r\n    \"securityRules\": [],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowVnetInBound\",\r\n        \"etag\": \"W/\\\"85637ba1-2f2e-4595-b794-61048929e59c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"etag\": \"W/\\\"85637ba1-2f2e-4595-b794-61048929e59c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/DenyAllInBound\",\r\n        \"etag\": \"W/\\\"85637ba1-2f2e-4595-b794-61048929e59c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"etag\": \"W/\\\"85637ba1-2f2e-4595-b794-61048929e59c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"etag\": \"W/\\\"85637ba1-2f2e-4595-b794-61048929e59c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/DenyAllOutBound\",\r\n        \"etag\": \"W/\\\"85637ba1-2f2e-4595-b794-61048929e59c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5142',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'e1ab3b6d-b200-4ec2-8a32-a349415454e2',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/e1ab3b6d-b200-4ec2-8a32-a349415454e2?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '39c817ea-ad34-419a-8767-f08fb616db41',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T131021Z:39c817ea-ad34-419a-8767-f08fb616db41',
  date: 'Wed, 07 Dec 2016 13:10:21 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/e1ab3b6d-b200-4ec2-8a32-a349415454e2?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a272bf79-5691-4efa-8088-a967383c3ccf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14949',
  'x-ms-correlation-request-id': '0835b7f6-11d6-407b-a184-533285abf6fe',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T131052Z:0835b7f6-11d6-407b-a184-533285abf6fe',
  date: 'Wed, 07 Dec 2016 13:10:51 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-nsg\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg\",\r\n  \"etag\": \"W/\\\"bc7a1e88-bbc7-4416-8c11-ae4ba7a1267a\\\"\",\r\n  \"type\": \"Microsoft.Network/networkSecurityGroups\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e8a39b9a-084f-474d-af4b-1f41a806d0f3\",\r\n    \"securityRules\": [],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowVnetInBound\",\r\n        \"etag\": \"W/\\\"bc7a1e88-bbc7-4416-8c11-ae4ba7a1267a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"etag\": \"W/\\\"bc7a1e88-bbc7-4416-8c11-ae4ba7a1267a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/DenyAllInBound\",\r\n        \"etag\": \"W/\\\"bc7a1e88-bbc7-4416-8c11-ae4ba7a1267a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"etag\": \"W/\\\"bc7a1e88-bbc7-4416-8c11-ae4ba7a1267a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"etag\": \"W/\\\"bc7a1e88-bbc7-4416-8c11-ae4ba7a1267a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/DenyAllOutBound\",\r\n        \"etag\": \"W/\\\"bc7a1e88-bbc7-4416-8c11-ae4ba7a1267a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5149',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"bc7a1e88-bbc7-4416-8c11-ae4ba7a1267a"',
  'x-ms-request-id': 'c2019a6d-c977-4526-9b04-b8e0165e603d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': 'e0aeda1b-90df-43e1-aa20-3b3071bc84be',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T131053Z:e0aeda1b-90df-43e1-aa20-3b3071bc84be',
  date: 'Wed, 07 Dec 2016 13:10:52 GMT' });
 return result; }]];