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
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode6624/scheduler/jobs')
  .reply(200, "[{\"id\":\"b4b5aa77-1df4-4d6a-8bca-e6dcc77bab07\",\"appName\":\"clitestnode6624\",\"name\":\"foobar\",\"status\":\"disabled\",\"intervalUnit\":\"minute\",\"intervalPeriod\":15,\"startTime\":\"2015-04-08T01:13:35.62Z\"}]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '193',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '46ddf18aa26e8db5a4b33ab4eccf27ed',
  date: 'Wed, 08 Apr 2015 01:13:53 GMT' });
 return result; }]];
