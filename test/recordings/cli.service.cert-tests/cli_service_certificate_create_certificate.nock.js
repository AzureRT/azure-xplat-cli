// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4d368445-cbb1-42a7-97a6-6850ab99f48e',
    name: 'Internal Consumption',
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
  process.env['AZURE_CLOUD_SERVICE_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/4d368445-cbb1-42a7-97a6-6850ab99f48e/services/hostedservices/clitestcert9491/certificates', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.287 (rd_rdfe_stable.151030-2057) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c9497e4cd96e34bf96ce59d84d982b97',
  date: 'Tue, 10 Nov 2015 02:13:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/4d368445-cbb1-42a7-97a6-6850ab99f48e/services/hostedservices/clitestcert9491/certificates', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.287 (rd_rdfe_stable.151030-2057) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c9497e4cd96e34bf96ce59d84d982b97',
  date: 'Tue, 10 Nov 2015 02:13:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/4d368445-cbb1-42a7-97a6-6850ab99f48e/operations/c9497e4cd96e34bf96ce59d84d982b97')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>c9497e4c-d96e-34bf-96ce-59d84d982b97</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.287 (rd_rdfe_stable.151030-2057) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c5a1b3269b8b305fae2461cdd2049d03',
  date: 'Tue, 10 Nov 2015 02:13:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/4d368445-cbb1-42a7-97a6-6850ab99f48e/operations/c9497e4cd96e34bf96ce59d84d982b97')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>c9497e4c-d96e-34bf-96ce-59d84d982b97</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.287 (rd_rdfe_stable.151030-2057) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c5a1b3269b8b305fae2461cdd2049d03',
  date: 'Tue, 10 Nov 2015 02:13:42 GMT',
  connection: 'close' });
 return result; }]];
