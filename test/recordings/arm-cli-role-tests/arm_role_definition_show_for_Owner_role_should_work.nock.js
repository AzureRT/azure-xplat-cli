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
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions?$filter=roleName%20eq%20%27Owner%27&api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"properties\":{\"roleName\":\"Owner\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage everything, including access to resources.\",\"assignableScopes\":[\"/\"],\"permissions\":[{\"actions\":[\"*\"],\"notActions\":[]}],\"createdOn\":\"0001-01-01T08:00:00.0000000Z\",\"updatedOn\":\"2016-01-14T00:47:07.5953617Z\",\"createdBy\":null,\"updatedBy\":null},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/8e3af657-a8ff-443c-a75c-2fe8c4bcb635\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"8e3af657-a8ff-443c-a75c-2fe8c4bcb635\"}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '595',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '140f38ed-3f21-4baa-b2e0-efd50d440470',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '3fb7a793-4e38-48a4-a24a-a933eb6c1281',
  'x-ms-routing-request-id': 'WESTUS:20160311T033759Z:3fb7a793-4e38-48a4-a24a-a933eb6c1281',
  date: 'Fri, 11 Mar 2016 03:37:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions?$filter=roleName%20eq%20%27Owner%27&api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"properties\":{\"roleName\":\"Owner\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage everything, including access to resources.\",\"assignableScopes\":[\"/\"],\"permissions\":[{\"actions\":[\"*\"],\"notActions\":[]}],\"createdOn\":\"0001-01-01T08:00:00.0000000Z\",\"updatedOn\":\"2016-01-14T00:47:07.5953617Z\",\"createdBy\":null,\"updatedBy\":null},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/8e3af657-a8ff-443c-a75c-2fe8c4bcb635\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"8e3af657-a8ff-443c-a75c-2fe8c4bcb635\"}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '595',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '140f38ed-3f21-4baa-b2e0-efd50d440470',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '3fb7a793-4e38-48a4-a24a-a933eb6c1281',
  'x-ms-routing-request-id': 'WESTUS:20160311T033759Z:3fb7a793-4e38-48a4-a24a-a933eb6c1281',
  date: 'Fri, 11 Mar 2016 03:37:58 GMT',
  connection: 'close' });
 return result; }]];
