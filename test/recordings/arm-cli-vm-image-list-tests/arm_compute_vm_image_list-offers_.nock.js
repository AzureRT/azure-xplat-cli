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
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/centralus/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers?api-version=2015-06-15')
  .reply(200, "[\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2008R2SP3-WS2008R2SP1\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2008R2SP3-WS2012\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2012\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2012SP2-WS2012\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP2-WS2012\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2012SP2-WS2012R2\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP2-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2014-WS2012R2\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2014-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2014SP1-WS2012R2\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2014SP1-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2016CTP2.1-WS2012R2\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016CTP2.1-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2016CTP2.2-WS2012R2\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016CTP2.2-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2016CTP2.3-WS2012R2\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016CTP2.3-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2016CTP2.4-WS2012R2\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016CTP2.4-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2016CTP3-WS2012R2\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016CTP3-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2016CTP3.1-WS2012R2\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016CTP3.1-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2016CTP3.2-WS2012R2\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016CTP3.2-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2016CTP3.3-WS2012R2\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016CTP3.3-WS2012R2\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3813',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '7bc7a6ee-24a0-4f5d-b81f-e145c14dc612',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': 'fec96fc3-7f19-401a-9d5b-46cfeb60987e',
  'x-ms-routing-request-id': 'CENTRALUS:20160205T081646Z:fec96fc3-7f19-401a-9d5b-46cfeb60987e',
  date: 'Fri, 05 Feb 2016 08:16:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/centralus/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers?api-version=2015-06-15')
  .reply(200, "[\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2008R2SP3-WS2008R2SP1\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2008R2SP3-WS2012\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2012\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2012SP2-WS2012\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP2-WS2012\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2012SP2-WS2012R2\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP2-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2014-WS2012R2\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2014-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2014SP1-WS2012R2\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2014SP1-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2016CTP2.1-WS2012R2\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016CTP2.1-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2016CTP2.2-WS2012R2\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016CTP2.2-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2016CTP2.3-WS2012R2\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016CTP2.3-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2016CTP2.4-WS2012R2\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016CTP2.4-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2016CTP3-WS2012R2\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016CTP3-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2016CTP3.1-WS2012R2\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016CTP3.1-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2016CTP3.2-WS2012R2\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016CTP3.2-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"centralus\",\r\n    \"name\": \"SQL2016CTP3.3-WS2012R2\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/centralus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016CTP3.3-WS2012R2\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3813',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '7bc7a6ee-24a0-4f5d-b81f-e145c14dc612',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': 'fec96fc3-7f19-401a-9d5b-46cfeb60987e',
  'x-ms-routing-request-id': 'CENTRALUS:20160205T081646Z:fec96fc3-7f19-401a-9d5b-46cfeb60987e',
  date: 'Fri, 05 Feb 2016 08:16:45 GMT',
  connection: 'close' });
 return result; }]];