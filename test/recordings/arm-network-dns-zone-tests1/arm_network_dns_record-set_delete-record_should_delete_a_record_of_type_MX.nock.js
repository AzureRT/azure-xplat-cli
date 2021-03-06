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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set6852/providers/Microsoft.Network/dnszones/exampledns.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set6852\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-0218-3cf34e6ad201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-07.azure-dns.com.\",\"ns2-07.azure-dns.net.\",\"ns3-07.azure-dns.org.\",\"ns4-07.azure-dns.info.\"],\"numberOfRecordSets\":4}}", { 'cache-control': 'private',
  'content-length': '512',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-0218-3cf34e6ad201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '414d5534-3cf5-49fe-a540-8cbfacec7bc6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11995',
  'x-ms-correlation-request-id': 'fc12d9f0-c310-4c18-96ae-1ddd358dfc69',
  'x-ms-routing-request-id': 'CANADAEAST:20170109T080500Z:fc12d9f0-c310-4c18-96ae-1ddd358dfc69',
  date: 'Mon, 09 Jan 2017 08:04:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set6852/providers/Microsoft.Network/dnszones/exampledns.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set6852\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-0218-3cf34e6ad201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-07.azure-dns.com.\",\"ns2-07.azure-dns.net.\",\"ns3-07.azure-dns.org.\",\"ns4-07.azure-dns.info.\"],\"numberOfRecordSets\":4}}", { 'cache-control': 'private',
  'content-length': '512',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-0218-3cf34e6ad201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '414d5534-3cf5-49fe-a540-8cbfacec7bc6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11995',
  'x-ms-correlation-request-id': 'fc12d9f0-c310-4c18-96ae-1ddd358dfc69',
  'x-ms-routing-request-id': 'CANADAEAST:20170109T080500Z:fc12d9f0-c310-4c18-96ae-1ddd358dfc69',
  date: 'Mon, 09 Jan 2017 08:04:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set6852/providers/Microsoft.Network/dnszones/exampledns.com/MX/set-mx?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set6852\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/MX\\/set-mx\",\"name\":\"set-mx\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"148de51e-955d-4e3e-b35a-f7935b0a6813\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-mx.exampledns.com.\",\"TTL\":3600,\"MXRecords\":[{\"exchange\":\"mail.test.com\",\"preference\":100}]}}", { 'cache-control': 'private',
  'content-length': '442',
  'content-type': 'application/json; charset=utf-8',
  etag: '148de51e-955d-4e3e-b35a-f7935b0a6813',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c03d1b2e-c53e-451f-a073-107a7bc6ee63',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '143b53e5-310c-4986-b4dc-b95a93e1a103',
  'x-ms-routing-request-id': 'CANADAEAST:20170109T080500Z:143b53e5-310c-4986-b4dc-b95a93e1a103',
  date: 'Mon, 09 Jan 2017 08:05:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set6852/providers/Microsoft.Network/dnszones/exampledns.com/MX/set-mx?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set6852\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/MX\\/set-mx\",\"name\":\"set-mx\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"148de51e-955d-4e3e-b35a-f7935b0a6813\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-mx.exampledns.com.\",\"TTL\":3600,\"MXRecords\":[{\"exchange\":\"mail.test.com\",\"preference\":100}]}}", { 'cache-control': 'private',
  'content-length': '442',
  'content-type': 'application/json; charset=utf-8',
  etag: '148de51e-955d-4e3e-b35a-f7935b0a6813',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c03d1b2e-c53e-451f-a073-107a7bc6ee63',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '143b53e5-310c-4986-b4dc-b95a93e1a103',
  'x-ms-routing-request-id': 'CANADAEAST:20170109T080500Z:143b53e5-310c-4986-b4dc-b95a93e1a103',
  date: 'Mon, 09 Jan 2017 08:05:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set6852/providers/Microsoft.Network/dnszones/exampledns.com/MX/set-mx?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set6852\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/MX\\/set-mx\",\"name\":\"set-mx\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"cd2c918b-bbdc-4102-b470-587161af23ae\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-mx.exampledns.com.\",\"TTL\":3600,\"MXRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '397',
  'content-type': 'application/json; charset=utf-8',
  etag: 'cd2c918b-bbdc-4102-b470-587161af23ae',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '17179c6e-95c0-4a2f-a44a-6bb2dcac346d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '51b96acb-1591-40ae-900c-fb50a645a629',
  'x-ms-routing-request-id': 'CANADAEAST:20170109T080502Z:51b96acb-1591-40ae-900c-fb50a645a629',
  date: 'Mon, 09 Jan 2017 08:05:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set6852/providers/Microsoft.Network/dnszones/exampledns.com/MX/set-mx?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set6852\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/MX\\/set-mx\",\"name\":\"set-mx\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"cd2c918b-bbdc-4102-b470-587161af23ae\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-mx.exampledns.com.\",\"TTL\":3600,\"MXRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '397',
  'content-type': 'application/json; charset=utf-8',
  etag: 'cd2c918b-bbdc-4102-b470-587161af23ae',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '17179c6e-95c0-4a2f-a44a-6bb2dcac346d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '51b96acb-1591-40ae-900c-fb50a645a629',
  'x-ms-routing-request-id': 'CANADAEAST:20170109T080502Z:51b96acb-1591-40ae-900c-fb50a645a629',
  date: 'Mon, 09 Jan 2017 08:05:01 GMT',
  connection: 'close' });
 return result; }]];