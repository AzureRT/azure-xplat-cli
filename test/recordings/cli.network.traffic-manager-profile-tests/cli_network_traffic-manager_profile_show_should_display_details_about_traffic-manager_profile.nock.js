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
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/WATM/profiles/CliTesttmp')
  .reply(200, "<Profile xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><DomainName>CliTestdom.trafficmanager.net</DomainName><Name>CliTesttmp</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile>", { 'cache-control': 'no-cache',
  'content-length': '383',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '64c8eddb08a8b8028071df8a981f9b61',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 08 Jul 2015 13:24:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/WATM/profiles/CliTesttmp')
  .reply(200, "<Profile xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><DomainName>CliTestdom.trafficmanager.net</DomainName><Name>CliTesttmp</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile>", { 'cache-control': 'no-cache',
  'content-length': '383',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '64c8eddb08a8b8028071df8a981f9b61',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 08 Jul 2015 13:24:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/WATM/profiles/CliTesttmp/definitions/1')
  .reply(200, "<Definition xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><DnsOptions><TimeToLiveInSeconds>250</TimeToLiveInSeconds></DnsOptions><Status>Enabled</Status><Version>1</Version><Monitors><Monitor><IntervalInSeconds>30</IntervalInSeconds><TimeoutInSeconds>10</TimeoutInSeconds><ToleratedNumberOfFailures>3</ToleratedNumberOfFailures><Protocol>HTTPS</Protocol><Port>15</Port><HttpOptions><Verb>GET</Verb><RelativePath>/healthy.aspx</RelativePath><ExpectedStatusCode>200</ExpectedStatusCode></HttpOptions></Monitor></Monitors><Policy><LoadBalancingMethod>RoundRobin</LoadBalancingMethod><Endpoints/><MonitorStatus>Inactive</MonitorStatus></Policy></Definition>", { 'cache-control': 'no-cache',
  'content-length': '709',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'abd108bd1c2ebf6e9778c5bf1c7c19fe',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 08 Jul 2015 13:24:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/WATM/profiles/CliTesttmp/definitions/1')
  .reply(200, "<Definition xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><DnsOptions><TimeToLiveInSeconds>250</TimeToLiveInSeconds></DnsOptions><Status>Enabled</Status><Version>1</Version><Monitors><Monitor><IntervalInSeconds>30</IntervalInSeconds><TimeoutInSeconds>10</TimeoutInSeconds><ToleratedNumberOfFailures>3</ToleratedNumberOfFailures><Protocol>HTTPS</Protocol><Port>15</Port><HttpOptions><Verb>GET</Verb><RelativePath>/healthy.aspx</RelativePath><ExpectedStatusCode>200</ExpectedStatusCode></HttpOptions></Monitor></Monitors><Policy><LoadBalancingMethod>RoundRobin</LoadBalancingMethod><Endpoints/><MonitorStatus>Inactive</MonitorStatus></Policy></Definition>", { 'cache-control': 'no-cache',
  'content-length': '709',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'abd108bd1c2ebf6e9778c5bf1c7c19fe',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 08 Jul 2015 13:24:46 GMT',
  connection: 'close' });
 return result; }]];
