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
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/recordsets?api-version=2015-05-04-preview')
  .reply(200, "{\"value\":[{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/NS\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/NS\",\"etag\":\"80b78d0f-6107-4a86-95de-fd7484c25227\",\"location\":\"global\",\"properties\":{\"fqdn\":\"example1.com.\",\"TTL\":172800,\"NSRecords\":[{\"nsdname\":\"ns1-03.azure-dns.com.\"},{\"nsdname\":\"ns2-03.azure-dns.net.\"},{\"nsdname\":\"ns3-03.azure-dns.org.\"},{\"nsdname\":\"ns4-03.azure-dns.info.\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/SOA\",\"etag\":\"6244a0ae-86df-4f28-a0a5-130f9f3657b5\",\"location\":\"global\",\"properties\":{\"fqdn\":\"example1.com.\",\"TTL\":3600,\"SOARecord\":{\"email\":\"msnhst.microsoft.com\",\"expireTime\":2419200,\"host\":\"ns1-03.azure-dns.com.\",\"minimumTTL\":300,\"refreshTime\":3600,\"retryTime\":300}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"2c500f9f-c5c1-4cad-bd4b-76d78f5b8639\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"properties\":{\"fqdn\":\"set-a.example1.com.\",\"TTL\":255,\"ARecords\":[]}}]}", { 'cache-control': 'private',
  'content-length': '1413',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '54cceb55-a31d-4bc4-ba86-de8c7304cabf',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '3fe4f85d-c9d6-4745-abec-9afc5f31c642',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104845Z:3fe4f85d-c9d6-4745-abec-9afc5f31c642',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:48:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/recordsets?api-version=2015-05-04-preview')
  .reply(200, "{\"value\":[{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/NS\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/NS\",\"etag\":\"80b78d0f-6107-4a86-95de-fd7484c25227\",\"location\":\"global\",\"properties\":{\"fqdn\":\"example1.com.\",\"TTL\":172800,\"NSRecords\":[{\"nsdname\":\"ns1-03.azure-dns.com.\"},{\"nsdname\":\"ns2-03.azure-dns.net.\"},{\"nsdname\":\"ns3-03.azure-dns.org.\"},{\"nsdname\":\"ns4-03.azure-dns.info.\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/SOA\",\"etag\":\"6244a0ae-86df-4f28-a0a5-130f9f3657b5\",\"location\":\"global\",\"properties\":{\"fqdn\":\"example1.com.\",\"TTL\":3600,\"SOARecord\":{\"email\":\"msnhst.microsoft.com\",\"expireTime\":2419200,\"host\":\"ns1-03.azure-dns.com.\",\"minimumTTL\":300,\"refreshTime\":3600,\"retryTime\":300}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"2c500f9f-c5c1-4cad-bd4b-76d78f5b8639\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"properties\":{\"fqdn\":\"set-a.example1.com.\",\"TTL\":255,\"ARecords\":[]}}]}", { 'cache-control': 'private',
  'content-length': '1413',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '54cceb55-a31d-4bc4-ba86-de8c7304cabf',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '3fe4f85d-c9d6-4745-abec-9afc5f31c642',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104845Z:3fe4f85d-c9d6-4745-abec-9afc5f31c642',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:48:45 GMT',
  connection: 'close' });
 return result; }]];
