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
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/CliGtTestVnet8230/gateway')
  .reply(200, "<Gateway xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><GatewayType>DynamicRouting</GatewayType><LastEvent><Id>23002</Id><Message>Successfully created a gateway for the following virtual network: CliGtTestVnet8230</Message><Timestamp>2015-06-26T06:42:42.5470206Z</Timestamp></LastEvent><State>Provisioned</State><VIPAddress>191.236.122.61</VIPAddress><DefaultSites/><GatewaySize>Default</GatewaySize><GatewayId>7ab28cbc-729d-43a8-8ecb-a29a140ef919</GatewayId></Gateway>", { 'cache-control': 'no-cache',
  'content-length': '525',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': 'e018edbf1661b9f09605c7eef0563ef5',
  date: 'Fri, 26 Jun 2015 06:47:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/CliGtTestVnet8230/gateway')
  .reply(200, "<Gateway xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><GatewayType>DynamicRouting</GatewayType><LastEvent><Id>23002</Id><Message>Successfully created a gateway for the following virtual network: CliGtTestVnet8230</Message><Timestamp>2015-06-26T06:42:42.5470206Z</Timestamp></LastEvent><State>Provisioned</State><VIPAddress>191.236.122.61</VIPAddress><DefaultSites/><GatewaySize>Default</GatewaySize><GatewayId>7ab28cbc-729d-43a8-8ecb-a29a140ef919</GatewayId></Gateway>", { 'cache-control': 'no-cache',
  'content-length': '525',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': 'e018edbf1661b9f09605c7eef0563ef5',
  date: 'Fri, 26 Jun 2015 06:47:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .delete('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/CliGtTestVnet8230/gateway')
  .reply(202, "<GatewayOperationAsyncResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>25a695a0-3b53-4540-8ec1-b22abdc4d0dc</ID></GatewayOperationAsyncResponse>", { 'cache-control': 'no-cache',
  'content-length': '210',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '339e3aa0deabb8169bb8d1e1f856618b',
  date: 'Fri, 26 Jun 2015 06:47:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/CliGtTestVnet8230/gateway')
  .reply(202, "<GatewayOperationAsyncResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>25a695a0-3b53-4540-8ec1-b22abdc4d0dc</ID></GatewayOperationAsyncResponse>", { 'cache-control': 'no-cache',
  'content-length': '210',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '339e3aa0deabb8169bb8d1e1f856618b',
  date: 'Fri, 26 Jun 2015 06:47:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/operation/25a695a0-3b53-4540-8ec1-b22abdc4d0dc')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><ID>25a695a0-3b53-4540-8ec1-b22abdc4d0dc</ID><OperationName>DeleteGateway</OperationName><OperationStartedTime>2015-06-26T06:47:57.1765133</OperationStartedTime><Status>InProgress</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '334',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '8af10da30a98b03d8772a9c2651b3d2a',
  date: 'Fri, 26 Jun 2015 06:48:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/operation/25a695a0-3b53-4540-8ec1-b22abdc4d0dc')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><ID>25a695a0-3b53-4540-8ec1-b22abdc4d0dc</ID><OperationName>DeleteGateway</OperationName><OperationStartedTime>2015-06-26T06:47:57.1765133</OperationStartedTime><Status>InProgress</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '334',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '8af10da30a98b03d8772a9c2651b3d2a',
  date: 'Fri, 26 Jun 2015 06:48:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/operation/25a695a0-3b53-4540-8ec1-b22abdc4d0dc')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><ID>25a695a0-3b53-4540-8ec1-b22abdc4d0dc</ID><OperationName>DeleteGateway</OperationName><OperationStartedTime>2015-06-26T06:47:57.1765133</OperationStartedTime><Status>InProgress</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '334',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '03f458910aefb600a8cda4dc32e729c9',
  date: 'Fri, 26 Jun 2015 06:49:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/operation/25a695a0-3b53-4540-8ec1-b22abdc4d0dc')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><ID>25a695a0-3b53-4540-8ec1-b22abdc4d0dc</ID><OperationName>DeleteGateway</OperationName><OperationStartedTime>2015-06-26T06:47:57.1765133</OperationStartedTime><Status>InProgress</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '334',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '03f458910aefb600a8cda4dc32e729c9',
  date: 'Fri, 26 Jun 2015 06:49:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/operation/25a695a0-3b53-4540-8ec1-b22abdc4d0dc')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HttpStatusCode>OK</HttpStatusCode><ID>25a695a0-3b53-4540-8ec1-b22abdc4d0dc</ID><OperationCompletedTime>2015-06-26T06:49:24.9049606</OperationCompletedTime><OperationName>DeleteGateway</OperationName><OperationStartedTime>2015-06-26T06:47:57.1765133</OperationStartedTime><Status>Successful</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '445',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': 'b21eb1b77a15b3ee97b3586b0490ab00',
  date: 'Fri, 26 Jun 2015 06:49:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/operation/25a695a0-3b53-4540-8ec1-b22abdc4d0dc')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HttpStatusCode>OK</HttpStatusCode><ID>25a695a0-3b53-4540-8ec1-b22abdc4d0dc</ID><OperationCompletedTime>2015-06-26T06:49:24.9049606</OperationCompletedTime><OperationName>DeleteGateway</OperationName><OperationStartedTime>2015-06-26T06:47:57.1765133</OperationStartedTime><Status>Successful</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '445',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': 'b21eb1b77a15b3ee97b3586b0490ab00',
  date: 'Fri, 26 Jun 2015 06:49:36 GMT',
  connection: 'close' });
 return result; }]];
