// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '00977cdb-163f-435f-9c32-39ec8ae61f4d',
    name: 'node',
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
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps?api-version=2016-02-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove\"},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Unregistered\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '248d5ea4-0b6a-45b7-b912-2e53a6a03a6c',
  'x-ms-correlation-request-id': '248d5ea4-0b6a-45b7-b912-2e53a6a03a6c',
  'x-ms-routing-request-id': 'WESTUS:20160130T015528Z:248d5ea4-0b6a-45b7-b912-2e53a6a03a6c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 01:55:28 GMT',
  connection: 'close',
  'content-length': '592' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps?api-version=2016-02-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove\"},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Unregistered\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '248d5ea4-0b6a-45b7-b912-2e53a6a03a6c',
  'x-ms-correlation-request-id': '248d5ea4-0b6a-45b7-b912-2e53a6a03a6c',
  'x-ms-routing-request-id': 'WESTUS:20160130T015528Z:248d5ea4-0b6a-45b7-b912-2e53a6a03a6c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 01:55:28 GMT',
  connection: 'close',
  'content-length': '592' });
 return result; }]];
