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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-traffic-manager-profile?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-traffic-manager-profile' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '9ab8e420-a289-4dd0-ab58-41017d029913',
  'x-ms-correlation-request-id': '9ab8e420-a289-4dd0-ab58-41017d029913',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093318Z:9ab8e420-a289-4dd0-ab58-41017d029913',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:33:17 GMT',
  connection: 'close',
  'content-length': '126' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-traffic-manager-profile?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-traffic-manager-profile' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '9ab8e420-a289-4dd0-ab58-41017d029913',
  'x-ms-correlation-request-id': '9ab8e420-a289-4dd0-ab58-41017d029913',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093318Z:9ab8e420-a289-4dd0-ab58-41017d029913',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:33:17 GMT',
  connection: 'close',
  'content-length': '126' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-traffic-manager-profile?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile\",\"name\":\"xplat-test-traffic-manager-profile\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '231',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '13c41884-e9c0-4c08-8075-d6216fe8712f',
  'x-ms-correlation-request-id': '13c41884-e9c0-4c08-8075-d6216fe8712f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093320Z:13c41884-e9c0-4c08-8075-d6216fe8712f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:33:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-traffic-manager-profile?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile\",\"name\":\"xplat-test-traffic-manager-profile\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '231',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '13c41884-e9c0-4c08-8075-d6216fe8712f',
  'x-ms-correlation-request-id': '13c41884-e9c0-4c08-8075-d6216fe8712f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093320Z:13c41884-e9c0-4c08-8075-d6216fe8712f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:33:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile?api-version=2015-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/trafficmanagerprofiles/test-profile' under resource group 'xplat-test-traffic-manager-profile' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'ac25fea2-fd23-4810-a70f-57f21eeb97f9',
  'x-ms-correlation-request-id': 'ac25fea2-fd23-4810-a70f-57f21eeb97f9',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093321Z:ac25fea2-fd23-4810-a70f-57f21eeb97f9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:33:21 GMT',
  connection: 'close',
  'content-length': '191' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile?api-version=2015-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/trafficmanagerprofiles/test-profile' under resource group 'xplat-test-traffic-manager-profile' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'ac25fea2-fd23-4810-a70f-57f21eeb97f9',
  'x-ms-correlation-request-id': 'ac25fea2-fd23-4810-a70f-57f21eeb97f9',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093321Z:ac25fea2-fd23-4810-a70f-57f21eeb97f9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:33:21 GMT',
  connection: 'close',
  'content-length': '191' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-traffic-manager-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\",\"name\":\"test-profile\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":\"Inactive\",\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/healthcheck.html\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '614',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'd7c64cb4-1911-4090-a0de-fd206f1edf0f',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10798',
  'x-ms-correlation-request-id': '6958bede-887b-4e6a-aa13-e3aff1f76d75',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093324Z:6958bede-887b-4e6a-aa13-e3aff1f76d75',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:33:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-traffic-manager-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\",\"name\":\"test-profile\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":\"Inactive\",\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/healthcheck.html\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '614',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'd7c64cb4-1911-4090-a0de-fd206f1edf0f',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10798',
  'x-ms-correlation-request-id': '6958bede-887b-4e6a-aa13-e3aff1f76d75',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093324Z:6958bede-887b-4e6a-aa13-e3aff1f76d75',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:33:24 GMT',
  connection: 'close' });
 return result; }]];
