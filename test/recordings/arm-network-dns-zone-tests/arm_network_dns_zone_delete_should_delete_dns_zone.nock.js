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
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(202, "", { 'cache-control': 'private',
  'content-length': '0',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsOperationResults/delzone63608071193595754031725077?api-version=2016-04-01',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsOperationStatuses/delzone63608071193595754031725077?api-version=2016-04-01',
  'x-ms-request-id': '46d64a30-51db-4608-9492-f1fc62c08934',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '19265e78-fefd-411b-9f10-3c149e696f1d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T123955Z:19265e78-fefd-411b-9f10-3c149e696f1d',
  date: 'Mon, 29 Aug 2016 12:39:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(202, "", { 'cache-control': 'private',
  'content-length': '0',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsOperationResults/delzone63608071193595754031725077?api-version=2016-04-01',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsOperationStatuses/delzone63608071193595754031725077?api-version=2016-04-01',
  'x-ms-request-id': '46d64a30-51db-4608-9492-f1fc62c08934',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '19265e78-fefd-411b-9f10-3c149e696f1d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T123955Z:19265e78-fefd-411b-9f10-3c149e696f1d',
  date: 'Mon, 29 Aug 2016 12:39:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsOperationStatuses/delzone63608071193595754031725077?api-version=2016-04-01')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'private',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd630eb3c-89ac-4f62-9256-883d6edf9d3d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '069f08a4-cd23-4a73-98c9-c3d183cfb811',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124025Z:069f08a4-cd23-4a73-98c9-c3d183cfb811',
  date: 'Mon, 29 Aug 2016 12:40:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsOperationStatuses/delzone63608071193595754031725077?api-version=2016-04-01')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'private',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd630eb3c-89ac-4f62-9256-883d6edf9d3d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '069f08a4-cd23-4a73-98c9-c3d183cfb811',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124025Z:069f08a4-cd23-4a73-98c9-c3d183cfb811',
  date: 'Mon, 29 Aug 2016 12:40:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/dnszones/example1.com' under resource group 'xplat-test-dns-zone' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'c67f06c9-8358-438d-aec4-fe7baad3328d',
  'x-ms-correlation-request-id': 'c67f06c9-8358-438d-aec4-fe7baad3328d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124026Z:c67f06c9-8358-438d-aec4-fe7baad3328d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Aug 2016 12:40:26 GMT',
  connection: 'close',
  'content-length': '162' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/dnszones/example1.com' under resource group 'xplat-test-dns-zone' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'c67f06c9-8358-438d-aec4-fe7baad3328d',
  'x-ms-correlation-request-id': 'c67f06c9-8358-438d-aec4-fe7baad3328d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124026Z:c67f06c9-8358-438d-aec4-fe7baad3328d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Aug 2016 12:40:26 GMT',
  connection: 'close',
  'content-length': '162' });
 return result; }]];
