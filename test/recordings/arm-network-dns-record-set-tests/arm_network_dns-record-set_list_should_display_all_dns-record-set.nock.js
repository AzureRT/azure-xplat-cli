// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDR/providers/Microsoft.Network/dnszones/xplattestgcreatedr.xplattestdrs/recordsets?api-version=2015-05-04-preview')
  .reply(200, "{\"value\":[{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedr\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedr.xplattestdrs\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"9d18d9c4-fbee-4a06-a9cd-abd62f8b84a4\",\"location\":\"global\",\"properties\":{\"fqdn\":\"@.xplattestgcreatedr.xplattestdrs\",\"TTL\":3600,\"SOARecord\":{\"email\":\"msnhst.microsoft.com\",\"expireTime\":2419200,\"host\":\"ns1-07.azure-dns.com\",\"minimumTTL\":300,\"refreshTime\":3600,\"retryTime\":300}}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedr\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedr.xplattestdrs\\/NS\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"c598fd59-5028-41e4-9248-85e1c07a1724\",\"location\":\"global\",\"properties\":{\"fqdn\":\"@.xplattestgcreatedr.xplattestdrs\",\"TTL\":3600,\"NSRecords\":[{\"nsdname\":\"ns1-07.azure-dns.com\"},{\"nsdname\":\"ns2-07.azure-dns.net\"},{\"nsdname\":\"ns3-07.azure-dns.org\"},{\"nsdname\":\"ns4-07.azure-dns.info\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedr\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedr.xplattestdrs\\/A\\/xplattestdnsrecord\",\"name\":\"xplattestdnsrecord\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"824efe60-2355-4a5f-9d3a-e19dcc570417\",\"location\":\"global\",\"tags\":{},\"properties\":{\"fqdn\":\"xplattestdnsrecord.xplattestgcreatedr.xplattestdrs\",\"TTL\":4,\"ARecords\":[]}}]}", { 'cache-control': 'private',
  'content-length': '1475',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '938adf12-a3a1-4b26-9368-c09faf89acef',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14963',
  'x-ms-correlation-request-id': '27323799-0402-416f-a078-128cdfc02cee',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150824T093345Z:27323799-0402-416f-a078-128cdfc02cee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 24 Aug 2015 09:33:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDR/providers/Microsoft.Network/dnszones/xplattestgcreatedr.xplattestdrs/recordsets?api-version=2015-05-04-preview')
  .reply(200, "{\"value\":[{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedr\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedr.xplattestdrs\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"9d18d9c4-fbee-4a06-a9cd-abd62f8b84a4\",\"location\":\"global\",\"properties\":{\"fqdn\":\"@.xplattestgcreatedr.xplattestdrs\",\"TTL\":3600,\"SOARecord\":{\"email\":\"msnhst.microsoft.com\",\"expireTime\":2419200,\"host\":\"ns1-07.azure-dns.com\",\"minimumTTL\":300,\"refreshTime\":3600,\"retryTime\":300}}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedr\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedr.xplattestdrs\\/NS\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"c598fd59-5028-41e4-9248-85e1c07a1724\",\"location\":\"global\",\"properties\":{\"fqdn\":\"@.xplattestgcreatedr.xplattestdrs\",\"TTL\":3600,\"NSRecords\":[{\"nsdname\":\"ns1-07.azure-dns.com\"},{\"nsdname\":\"ns2-07.azure-dns.net\"},{\"nsdname\":\"ns3-07.azure-dns.org\"},{\"nsdname\":\"ns4-07.azure-dns.info\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedr\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedr.xplattestdrs\\/A\\/xplattestdnsrecord\",\"name\":\"xplattestdnsrecord\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"824efe60-2355-4a5f-9d3a-e19dcc570417\",\"location\":\"global\",\"tags\":{},\"properties\":{\"fqdn\":\"xplattestdnsrecord.xplattestgcreatedr.xplattestdrs\",\"TTL\":4,\"ARecords\":[]}}]}", { 'cache-control': 'private',
  'content-length': '1475',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '938adf12-a3a1-4b26-9368-c09faf89acef',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14963',
  'x-ms-correlation-request-id': '27323799-0402-416f-a078-128cdfc02cee',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150824T093345Z:27323799-0402-416f-a078-128cdfc02cee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 24 Aug 2015 09:33:45 GMT',
  connection: 'close' });
 return result; }]];
