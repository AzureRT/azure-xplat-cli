// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4004a9fd-d58e-48dc-aeb2-4a4aec58606f',
    name: 'AAD_POLICY_ADMINISTRATION_SERVICE_TEST_CLI',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1273adef-00a3-4086-a51a-dbcce1857d36',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_AD_TEST_USER_PRINCIPAL_NAME'] = 'testUserAuto1@rbacCliTest.onmicrosoft.com';
  process.env['AZURE_AD_TEST_PASSWORD'] = 'Pa$$w0rd';
  process.env['AZURE_AD_TEST_GROUP_NAME'] = 'testgroupauto';
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_AD_TEST_SP_DISPLAY_NAME'] = 'mytestapprandomauto0012345';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/17540586-328c-4371-b1cf-b12eee28a1e7?api-version=2015-07-01', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_220b4f5e-7b01-48e0-bbd1-8397883627fc\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2016-03-11T03:38:11.4829069Z\",\"updatedOn\":\"2016-03-11T03:38:11.4829069Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/17540586-328c-4371-b1cf-b12eee28a1e7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"17540586-328c-4371-b1cf-b12eee28a1e7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'db3b92a0-f875-4ed8-ab63-5c79fe2f9476',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '49318ebe-05f3-4ad1-90ad-e3f98a60dd12',
  'x-ms-routing-request-id': 'WESTUS:20160311T033812Z:49318ebe-05f3-4ad1-90ad-e3f98a60dd12',
  date: 'Fri, 11 Mar 2016 03:38:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/17540586-328c-4371-b1cf-b12eee28a1e7?api-version=2015-07-01', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_220b4f5e-7b01-48e0-bbd1-8397883627fc\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2016-03-11T03:38:11.4829069Z\",\"updatedOn\":\"2016-03-11T03:38:11.4829069Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/17540586-328c-4371-b1cf-b12eee28a1e7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"17540586-328c-4371-b1cf-b12eee28a1e7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'db3b92a0-f875-4ed8-ab63-5c79fe2f9476',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '49318ebe-05f3-4ad1-90ad-e3f98a60dd12',
  'x-ms-routing-request-id': 'WESTUS:20160311T033812Z:49318ebe-05f3-4ad1-90ad-e3f98a60dd12',
  date: 'Fri, 11 Mar 2016 03:38:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/17540586-328c-4371-b1cf-b12eee28a1e7?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_220b4f5e-7b01-48e0-bbd1-8397883627fc\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2016-03-11T03:38:11.4829069Z\",\"updatedOn\":\"2016-03-11T03:38:11.4829069Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/17540586-328c-4371-b1cf-b12eee28a1e7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"17540586-328c-4371-b1cf-b12eee28a1e7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '15dbf189-8594-4374-8d38-5ce9a2744e32',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '3e029f59-780b-4854-a333-aee0658ebe26',
  'x-ms-routing-request-id': 'WESTUS:20160311T033812Z:3e029f59-780b-4854-a333-aee0658ebe26',
  date: 'Fri, 11 Mar 2016 03:38:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/17540586-328c-4371-b1cf-b12eee28a1e7?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_220b4f5e-7b01-48e0-bbd1-8397883627fc\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2016-03-11T03:38:11.4829069Z\",\"updatedOn\":\"2016-03-11T03:38:11.4829069Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/17540586-328c-4371-b1cf-b12eee28a1e7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"17540586-328c-4371-b1cf-b12eee28a1e7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '15dbf189-8594-4374-8d38-5ce9a2744e32',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '3e029f59-780b-4854-a333-aee0658ebe26',
  'x-ms-routing-request-id': 'WESTUS:20160311T033812Z:3e029f59-780b-4854-a333-aee0658ebe26',
  date: 'Fri, 11 Mar 2016 03:38:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/17540586-328c-4371-b1cf-b12eee28a1e7?api-version=2015-07-01', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"UpdatedRole_eb1e0578-7af5-4a1d-ba60-b12283bc4944\",\"type\":\"CustomRole\",\"description\":\"Updated Role Description\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2016-03-11T03:38:12.9331814Z\",\"updatedOn\":\"2016-03-11T03:38:12.9331814Z\",\"createdBy\":null,\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/17540586-328c-4371-b1cf-b12eee28a1e7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"17540586-328c-4371-b1cf-b12eee28a1e7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '710',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c16065c7-542c-4cac-9677-5701e3b6cf52',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '6c7543b4-718e-48b6-bdff-53967a17c805',
  'x-ms-routing-request-id': 'WESTUS:20160311T033813Z:6c7543b4-718e-48b6-bdff-53967a17c805',
  date: 'Fri, 11 Mar 2016 03:38:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/17540586-328c-4371-b1cf-b12eee28a1e7?api-version=2015-07-01', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"UpdatedRole_eb1e0578-7af5-4a1d-ba60-b12283bc4944\",\"type\":\"CustomRole\",\"description\":\"Updated Role Description\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2016-03-11T03:38:12.9331814Z\",\"updatedOn\":\"2016-03-11T03:38:12.9331814Z\",\"createdBy\":null,\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/17540586-328c-4371-b1cf-b12eee28a1e7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"17540586-328c-4371-b1cf-b12eee28a1e7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '710',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c16065c7-542c-4cac-9677-5701e3b6cf52',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '6c7543b4-718e-48b6-bdff-53967a17c805',
  'x-ms-routing-request-id': 'WESTUS:20160311T033813Z:6c7543b4-718e-48b6-bdff-53967a17c805',
  date: 'Fri, 11 Mar 2016 03:38:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/17540586-328c-4371-b1cf-b12eee28a1e7?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"UpdatedRole_eb1e0578-7af5-4a1d-ba60-b12283bc4944\",\"type\":\"CustomRole\",\"description\":\"Updated Role Description\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2016-03-11T03:38:11.4829069Z\",\"updatedOn\":\"2016-03-11T03:38:12.9331814Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/17540586-328c-4371-b1cf-b12eee28a1e7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"17540586-328c-4371-b1cf-b12eee28a1e7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '744',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3b8f59b9-6165-4b16-a413-1f1e9234b280',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '4b38c543-fa2e-4b1e-ba74-4ee0bd256453',
  'x-ms-routing-request-id': 'WESTUS:20160311T033815Z:4b38c543-fa2e-4b1e-ba74-4ee0bd256453',
  date: 'Fri, 11 Mar 2016 03:38:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/17540586-328c-4371-b1cf-b12eee28a1e7?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"UpdatedRole_eb1e0578-7af5-4a1d-ba60-b12283bc4944\",\"type\":\"CustomRole\",\"description\":\"Updated Role Description\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2016-03-11T03:38:11.4829069Z\",\"updatedOn\":\"2016-03-11T03:38:12.9331814Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/17540586-328c-4371-b1cf-b12eee28a1e7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"17540586-328c-4371-b1cf-b12eee28a1e7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '744',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3b8f59b9-6165-4b16-a413-1f1e9234b280',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '4b38c543-fa2e-4b1e-ba74-4ee0bd256453',
  'x-ms-routing-request-id': 'WESTUS:20160311T033815Z:4b38c543-fa2e-4b1e-ba74-4ee0bd256453',
  date: 'Fri, 11 Mar 2016 03:38:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/17540586-328c-4371-b1cf-b12eee28a1e7?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"UpdatedRole_eb1e0578-7af5-4a1d-ba60-b12283bc4944\",\"type\":\"CustomRole\",\"description\":\"Updated Role Description\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2016-03-11T03:38:11.4829069Z\",\"updatedOn\":\"2016-03-11T03:38:12.9331814Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/17540586-328c-4371-b1cf-b12eee28a1e7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"17540586-328c-4371-b1cf-b12eee28a1e7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '744',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '05432eb1-0b38-4678-97a4-86c74b4e6c00',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '6c67e6a0-c2af-43dd-81c2-37d89776aba7',
  'x-ms-routing-request-id': 'WESTUS:20160311T033815Z:6c67e6a0-c2af-43dd-81c2-37d89776aba7',
  date: 'Fri, 11 Mar 2016 03:38:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/17540586-328c-4371-b1cf-b12eee28a1e7?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"UpdatedRole_eb1e0578-7af5-4a1d-ba60-b12283bc4944\",\"type\":\"CustomRole\",\"description\":\"Updated Role Description\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2016-03-11T03:38:11.4829069Z\",\"updatedOn\":\"2016-03-11T03:38:12.9331814Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/17540586-328c-4371-b1cf-b12eee28a1e7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"17540586-328c-4371-b1cf-b12eee28a1e7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '744',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '05432eb1-0b38-4678-97a4-86c74b4e6c00',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '6c67e6a0-c2af-43dd-81c2-37d89776aba7',
  'x-ms-routing-request-id': 'WESTUS:20160311T033815Z:6c67e6a0-c2af-43dd-81c2-37d89776aba7',
  date: 'Fri, 11 Mar 2016 03:38:15 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['220b4f5e-7b01-48e0-bbd1-8397883627fc','17540586-328c-4371-b1cf-b12eee28a1e7','eb1e0578-7af5-4a1d-ba60-b12283bc4944'];};
