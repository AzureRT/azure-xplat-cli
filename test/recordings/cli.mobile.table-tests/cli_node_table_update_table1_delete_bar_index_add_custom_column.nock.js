// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5e7d1bb6-4953-44fe-8a54-43fbdb53b989',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Mobilytics Test1',
    registeredProviders: ['website', 'mobileservice'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode1265/tables/table1/indexes/bar')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '5c1edbb5fcf58973b3654f16a1f8e80d',
  date: 'Wed, 08 Apr 2015 01:32:38 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode1265/tables/table1/columns/custom', '*')
  .reply(201, "{\"name\":\"custom\",\"type\":\"string\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/clitestnode1265\\/tables\\/table1\\/columns?columnName=custom\\/\",\"indexed\":false,\"zumoIndex\":false}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '282',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'b1aa4313973589fe927156051957b739',
  date: 'Wed, 08 Apr 2015 01:32:40 GMT' });
 return result; }]];
