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
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/applications', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  etag: '30347e2b9b3a48d198d9f02adbb35ab0:0000',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'a8456747c768b8058c5c317a54b0a743',
  date: 'Mon, 29 Jun 2015 22:05:49 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/a8456747c768b8058c5c317a54b0a743')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>a8456747-c768-b805-8c5c-317a54b0a743</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '68d063153521bdbfa5102cfb8ab49527',
  date: 'Mon, 29 Jun 2015 22:05:50 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/a8456747c768b8058c5c317a54b0a743')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>a8456747-c768-b805-8c5c-317a54b0a743</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '632fd6293981bd0595239440b3ce3c51',
  date: 'Mon, 29 Jun 2015 22:05:56 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/a8456747c768b8058c5c317a54b0a743')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>a8456747-c768-b805-8c5c-317a54b0a743</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '8c51304fc177bb46b83d2b543ea5b0cd',
  date: 'Mon, 29 Jun 2015 22:06:01 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/a8456747c768b8058c5c317a54b0a743')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>a8456747-c768-b805-8c5c-317a54b0a743</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'd7ca8216a749b83caaa2c6992eee98dd',
  date: 'Mon, 29 Jun 2015 22:06:07 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/a8456747c768b8058c5c317a54b0a743')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>a8456747-c768-b805-8c5c-317a54b0a743</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '0f2aa6b4c12dbafe9731fb7833fb0217',
  date: 'Mon, 29 Jun 2015 22:06:12 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/a8456747c768b8058c5c317a54b0a743')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>a8456747-c768-b805-8c5c-317a54b0a743</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '8dfdc8e9ca49b06589708cfae23ae6c7',
  date: 'Mon, 29 Jun 2015 22:06:18 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/a8456747c768b8058c5c317a54b0a743')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>a8456747-c768-b805-8c5c-317a54b0a743</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '2e4aaacb47dfb00bb8462e4e22a83cf9',
  date: 'Mon, 29 Jun 2015 22:06:23 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/a8456747c768b8058c5c317a54b0a743')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>a8456747-c768-b805-8c5c-317a54b0a743</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '495e12fd669fb7e69b3d8530ec5ec697',
  date: 'Mon, 29 Jun 2015 22:06:29 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/a8456747c768b8058c5c317a54b0a743')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>a8456747-c768-b805-8c5c-317a54b0a743</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '51a1e57c377dbfa0ad3a18ed23dc0996',
  date: 'Mon, 29 Jun 2015 22:06:35 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/a8456747c768b8058c5c317a54b0a743')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>a8456747-c768-b805-8c5c-317a54b0a743</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '83a1ffdbcbb4b770a505aeb0fe3ae3ba',
  date: 'Mon, 29 Jun 2015 22:06:40 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/a8456747c768b8058c5c317a54b0a743')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>a8456747-c768-b805-8c5c-317a54b0a743</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '675fe9c59924b9e595c517660a8738dd',
  date: 'Mon, 29 Jun 2015 22:06:46 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/a8456747c768b8058c5c317a54b0a743')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>a8456747-c768-b805-8c5c-317a54b0a743</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'ff8b0ab59556b2788cc78a2d4c426bd0',
  date: 'Mon, 29 Jun 2015 22:06:51 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/a8456747c768b8058c5c317a54b0a743')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>a8456747-c768-b805-8c5c-317a54b0a743</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'fd1bf2ccbd03bcd1b0b77e130137674f',
  date: 'Mon, 29 Jun 2015 22:06:57 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/a8456747c768b8058c5c317a54b0a743')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>a8456747-c768-b805-8c5c-317a54b0a743</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'da9f0aa1cddebe7eb108d464a9134cf2',
  date: 'Mon, 29 Jun 2015 22:07:02 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/applications/clitestnode9673mobileservice')
  .reply(200, "<Application xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>clitestnode9673mobileservice</Name><Label>clitestnode9673</Label><Description>clitestnode9673</Description><Uri>https://management.core.windows.net/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/applications/clitestnode9673mobileservice</Uri><State>Healthy</State><InternalResources><InternalResource><LogicalName>ZumoMobileService</LogicalName><State>ProvisionConfigured</State><Type>Microsoft.WindowsAzure.MobileServices.MobileService</Type><Name>clitestnode9673</Name><SelfLinkUri>https://management.core.windows.net:8443/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/clitestnode9673</SelfLinkUri><FailureCode/></InternalResource><InternalResource><LogicalName>ZumoSqlDatabase_8b18dfbc4a0d43e8814d11128285ca2f</LogicalName><State>Provisioned</State><Type>Microsoft.WindowsAzure.SQLAzure.DataBase</Type><Name>clitestnode9673_db</Name><SelfLinkUri>https://management.core.windows.net:8443/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/sqlservers/servers/irjgjg7ly0/databases/clitestnode9673_db</SelfLinkUri><FailureCode/></InternalResource><InternalResource><LogicalName>ZumoSqlServer_9319af10f941443ca85150e23907dde7</LogicalName><State>ProvisionConfigured</State><Type>Microsoft.WindowsAzure.SQLAzure.Server</Type><Name>irjgjg7ly0</Name><SelfLinkUri>https://management.core.windows.net:8443/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/sqlservers/servers/irjgjg7ly0</SelfLinkUri><FailureCode/></InternalResource></InternalResources><ExternalResources/></Application>", { 'cache-control': 'no-cache',
  'content-length': '1596',
  'content-type': 'application/xml; charset=utf-8',
  etag: '30347e2b9b3a48d198d9f02adbb35ab0:0001',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'e5d8cb300ebcbef7a71d9d6e050c6e53',
  date: 'Mon, 29 Jun 2015 22:07:03 GMT' });
 return result; }]];
