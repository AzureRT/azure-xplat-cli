// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'centralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/centralus/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2008R2SP3-WS2008R2SP1/skus?api-version=2015-06-15')
  .reply(200, "[\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"Enterprise\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Enterprise\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"Standard\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Standard\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"Web\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Web\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '828',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '7893aef9-a773-411f-bb45-467facda036d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': 'a5ded557-28a3-4698-84c5-7b6c21c43ac8',
  'x-ms-routing-request-id': 'CENTRALUS:20160205T081647Z:a5ded557-28a3-4698-84c5-7b6c21c43ac8',
  date: 'Fri, 05 Feb 2016 08:16:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/centralus/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2008R2SP3-WS2008R2SP1/skus?api-version=2015-06-15')
  .reply(200, "[\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"Enterprise\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Enterprise\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"Standard\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Standard\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"Web\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Web\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '828',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '7893aef9-a773-411f-bb45-467facda036d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': 'a5ded557-28a3-4698-84c5-7b6c21c43ac8',
  'x-ms-routing-request-id': 'CENTRALUS:20160205T081647Z:a5ded557-28a3-4698-84c5-7b6c21c43ac8',
  date: 'Fri, 05 Feb 2016 08:16:47 GMT',
  connection: 'close' });
 return result; }]];