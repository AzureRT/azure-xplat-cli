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
  .post('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps/register?api-version=2015-11-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove\"},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Registering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '9b64bb1d-40a7-4b86-bba1-ce859fe8c5a5',
  'x-ms-correlation-request-id': '9b64bb1d-40a7-4b86-bba1-ce859fe8c5a5',
  'x-ms-routing-request-id': 'WESTUS:20160130T015530Z:9b64bb1d-40a7-4b86-bba1-ce859fe8c5a5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 01:55:29 GMT',
  connection: 'close',
  'content-length': '591' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps/register?api-version=2015-11-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove\"},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Registering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '9b64bb1d-40a7-4b86-bba1-ce859fe8c5a5',
  'x-ms-correlation-request-id': '9b64bb1d-40a7-4b86-bba1-ce859fe8c5a5',
  'x-ms-routing-request-id': 'WESTUS:20160130T015530Z:9b64bb1d-40a7-4b86-bba1-ce859fe8c5a5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 01:55:29 GMT',
  connection: 'close',
  'content-length': '591' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps?api-version=2015-11-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove\"},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Registering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '15dd5d2b-ac8f-4d07-9098-e662b6151267',
  'x-ms-correlation-request-id': '15dd5d2b-ac8f-4d07-9098-e662b6151267',
  'x-ms-routing-request-id': 'WESTUS:20160130T015530Z:15dd5d2b-ac8f-4d07-9098-e662b6151267',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 01:55:30 GMT',
  connection: 'close',
  'content-length': '591' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps?api-version=2015-11-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove\"},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Registering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '15dd5d2b-ac8f-4d07-9098-e662b6151267',
  'x-ms-correlation-request-id': '15dd5d2b-ac8f-4d07-9098-e662b6151267',
  'x-ms-routing-request-id': 'WESTUS:20160130T015530Z:15dd5d2b-ac8f-4d07-9098-e662b6151267',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 01:55:30 GMT',
  connection: 'close',
  'content-length': '591' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps?api-version=2015-11-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove\"},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Registered\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '5d61a558-f272-4fcd-9d1f-a13862ebcb6c',
  'x-ms-correlation-request-id': '5d61a558-f272-4fcd-9d1f-a13862ebcb6c',
  'x-ms-routing-request-id': 'WESTUS:20160130T015541Z:5d61a558-f272-4fcd-9d1f-a13862ebcb6c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 01:55:40 GMT',
  connection: 'close',
  'content-length': '590' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps?api-version=2015-11-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove\"},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Registered\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '5d61a558-f272-4fcd-9d1f-a13862ebcb6c',
  'x-ms-correlation-request-id': '5d61a558-f272-4fcd-9d1f-a13862ebcb6c',
  'x-ms-routing-request-id': 'WESTUS:20160130T015541Z:5d61a558-f272-4fcd-9d1f-a13862ebcb6c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 01:55:40 GMT',
  connection: 'close',
  'content-length': '590' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps?api-version=2015-11-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove\"},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Registered\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '616ce56f-0dc3-405f-a0be-7f07617a7685',
  'x-ms-correlation-request-id': '616ce56f-0dc3-405f-a0be-7f07617a7685',
  'x-ms-routing-request-id': 'WESTUS:20160130T015541Z:616ce56f-0dc3-405f-a0be-7f07617a7685',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 01:55:40 GMT',
  connection: 'close',
  'content-length': '590' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps?api-version=2015-11-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove\"},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Registered\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '616ce56f-0dc3-405f-a0be-7f07617a7685',
  'x-ms-correlation-request-id': '616ce56f-0dc3-405f-a0be-7f07617a7685',
  'x-ms-routing-request-id': 'WESTUS:20160130T015541Z:616ce56f-0dc3-405f-a0be-7f07617a7685',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 01:55:40 GMT',
  connection: 'close',
  'content-length': '590' });
 return result; }]];
