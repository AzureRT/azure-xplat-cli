// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGTMPEndpt?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGTMPEndpt' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14920',
  'x-ms-request-id': 'e79f8a4e-4214-498a-b153-067049b990ee',
  'x-ms-correlation-request-id': 'e79f8a4e-4214-498a-b153-067049b990ee',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T083137Z:e79f8a4e-4214-498a-b153-067049b990ee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:31:37 GMT',
  connection: 'close',
  'content-length': '110' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGTMPEndpt?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGTMPEndpt' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14920',
  'x-ms-request-id': 'e79f8a4e-4214-498a-b153-067049b990ee',
  'x-ms-correlation-request-id': 'e79f8a4e-4214-498a-b153-067049b990ee',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T083137Z:e79f8a4e-4214-498a-b153-067049b990ee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:31:37 GMT',
  connection: 'close',
  'content-length': '110' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGTMPEndpt?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt\",\"name\":\"xplatTestGTMPEndpt\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1177',
  'x-ms-request-id': '183e0bd0-a006-41cd-b409-22529bcbdc85',
  'x-ms-correlation-request-id': '183e0bd0-a006-41cd-b409-22529bcbdc85',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T083141Z:183e0bd0-a006-41cd-b409-22529bcbdc85',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:31:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGTMPEndpt?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt\",\"name\":\"xplatTestGTMPEndpt\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1177',
  'x-ms-request-id': '183e0bd0-a006-41cd-b409-22529bcbdc85',
  'x-ms-correlation-request-id': '183e0bd0-a006-41cd-b409-22529bcbdc85',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T083141Z:183e0bd0-a006-41cd-b409-22529bcbdc85',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:31:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '0564ce72-14b3-4d9a-b283-d339749660cf',
  'x-ms-correlation-request-id': '0564ce72-14b3-4d9a-b283-d339749660cf',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T083142Z:0564ce72-14b3-4d9a-b283-d339749660cf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:31:42 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '0564ce72-14b3-4d9a-b283-d339749660cf',
  'x-ms-correlation-request-id': '0564ce72-14b3-4d9a-b283-d339749660cf',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T083142Z:0564ce72-14b3-4d9a-b283-d339749660cf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:31:42 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns\",\"fqdn\":\"xplattmpendptdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"http\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '553',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '154d4b9f-4e56-48fb-94e6-b0711955436b',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '16540b5e-f072-4397-a34d-cba1a0ab4c5d',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T083150Z:16540b5e-f072-4397-a34d-cba1a0ab4c5d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:31:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns\",\"fqdn\":\"xplattmpendptdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"http\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '553',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '154d4b9f-4e56-48fb-94e6-b0711955436b',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '16540b5e-f072-4397-a34d-cba1a0ab4c5d',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T083150Z:16540b5e-f072-4397-a34d-cba1a0ab4c5d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:31:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns\",\"fqdn\":\"xplattmpendptdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '553',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'f49e1e72-3bdc-40e5-818d-dc100c9af038',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10798',
  'x-ms-correlation-request-id': 'c09b93b1-512c-4e21-868c-e6623140a024',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T083152Z:c09b93b1-512c-4e21-868c-e6623140a024',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:31:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns\",\"fqdn\":\"xplattmpendptdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '553',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'f49e1e72-3bdc-40e5-818d-dc100c9af038',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10798',
  'x-ms-correlation-request-id': 'c09b93b1-512c-4e21-868c-e6623140a024',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T083152Z:c09b93b1-512c-4e21-868c-e6623140a024',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:31:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns\",\"fqdn\":\"xplattmpendptdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '553',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'b2e695b9-148f-4113-8d33-0cc33538c72c',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '8c04a24c-b301-4c3a-adc3-5bcbb0d55ce2',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T083155Z:8c04a24c-b301-4c3a-adc3-5bcbb0d55ce2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:31:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns\",\"fqdn\":\"xplattmpendptdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '553',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'b2e695b9-148f-4113-8d33-0cc33538c72c',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '8c04a24c-b301-4c3a-adc3-5bcbb0d55ce2',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T083155Z:8c04a24c-b301-4c3a-adc3-5bcbb0d55ce2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:31:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{},\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns\",\"fqdn\":\"xplattmpendptdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\\/externalEndpoints\\/xplatTestTMPEndPoint\",\"name\":\"xplatTestTMPEndPoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":null,\"target\":\"xplattmpendptdns.azure.com\",\"weight\":100,\"priority\":322,\"endpointLocation\":null}}]}}", { 'cache-control': 'private',
  'content-length': '1032',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'de5b62be-4174-4e23-93e3-99fcc97aa57a',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10797',
  'x-ms-correlation-request-id': 'f2bb91cd-ec69-4b99-ac68-192e9bdca909',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T083159Z:f2bb91cd-ec69-4b99-ac68-192e9bdca909',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:31:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{},\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns\",\"fqdn\":\"xplattmpendptdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\\/externalEndpoints\\/xplatTestTMPEndPoint\",\"name\":\"xplatTestTMPEndPoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":null,\"target\":\"xplattmpendptdns.azure.com\",\"weight\":100,\"priority\":322,\"endpointLocation\":null}}]}}", { 'cache-control': 'private',
  'content-length': '1032',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'de5b62be-4174-4e23-93e3-99fcc97aa57a',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10797',
  'x-ms-correlation-request-id': 'f2bb91cd-ec69-4b99-ac68-192e9bdca909',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T083159Z:f2bb91cd-ec69-4b99-ac68-192e9bdca909',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:31:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{},\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns\",\"fqdn\":\"xplattmpendptdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\\/externalEndpoints\\/xplatTestTMPEndPoint\",\"name\":\"xplatTestTMPEndPoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":null,\"target\":\"xplattmpendptdns.azure.com\",\"weight\":100,\"priority\":322,\"endpointLocation\":null}}]}}", { 'cache-control': 'private',
  'content-length': '1032',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '403323eb-133d-427d-930c-87157225332d',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10798',
  'x-ms-correlation-request-id': '1b857873-9043-4de3-bcda-933976e4d3f4',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T083201Z:1b857873-9043-4de3-bcda-933976e4d3f4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:32:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{},\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns\",\"fqdn\":\"xplattmpendptdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\\/externalEndpoints\\/xplatTestTMPEndPoint\",\"name\":\"xplatTestTMPEndPoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":null,\"target\":\"xplattmpendptdns.azure.com\",\"weight\":100,\"priority\":322,\"endpointLocation\":null}}]}}", { 'cache-control': 'private',
  'content-length': '1032',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '403323eb-133d-427d-930c-87157225332d',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10798',
  'x-ms-correlation-request-id': '1b857873-9043-4de3-bcda-933976e4d3f4',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T083201Z:1b857873-9043-4de3-bcda-933976e4d3f4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:32:01 GMT',
  connection: 'close' });
 return result; }]];
