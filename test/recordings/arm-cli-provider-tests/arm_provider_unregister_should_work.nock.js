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
  .post('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps/unregister?api-version=2015-11-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove\"},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Unregistering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'afed577b-55a7-47d9-93bb-e460a40f6377',
  'x-ms-correlation-request-id': 'afed577b-55a7-47d9-93bb-e460a40f6377',
  'x-ms-routing-request-id': 'WESTUS:20160130T015543Z:afed577b-55a7-47d9-93bb-e460a40f6377',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 01:55:43 GMT',
  connection: 'close',
  'content-length': '593' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps/unregister?api-version=2015-11-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove\"},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Unregistering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'afed577b-55a7-47d9-93bb-e460a40f6377',
  'x-ms-correlation-request-id': 'afed577b-55a7-47d9-93bb-e460a40f6377',
  'x-ms-routing-request-id': 'WESTUS:20160130T015543Z:afed577b-55a7-47d9-93bb-e460a40f6377',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 01:55:43 GMT',
  connection: 'close',
  'content-length': '593' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps?api-version=2015-11-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove\"},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Unregistering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '80f7cb40-8ffe-41d6-b18d-d2f5d3c5e407',
  'x-ms-correlation-request-id': '80f7cb40-8ffe-41d6-b18d-d2f5d3c5e407',
  'x-ms-routing-request-id': 'WESTUS:20160130T015544Z:80f7cb40-8ffe-41d6-b18d-d2f5d3c5e407',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 01:55:44 GMT',
  connection: 'close',
  'content-length': '593' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps?api-version=2015-11-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove\"},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Unregistering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '80f7cb40-8ffe-41d6-b18d-d2f5d3c5e407',
  'x-ms-correlation-request-id': '80f7cb40-8ffe-41d6-b18d-d2f5d3c5e407',
  'x-ms-routing-request-id': 'WESTUS:20160130T015544Z:80f7cb40-8ffe-41d6-b18d-d2f5d3c5e407',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 01:55:44 GMT',
  connection: 'close',
  'content-length': '593' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps?api-version=2015-11-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove\"},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Unregistered\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '1e9593fb-b283-412e-a157-53aca0338ecc',
  'x-ms-correlation-request-id': '1e9593fb-b283-412e-a157-53aca0338ecc',
  'x-ms-routing-request-id': 'WESTUS:20160130T015554Z:1e9593fb-b283-412e-a157-53aca0338ecc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 01:55:53 GMT',
  connection: 'close',
  'content-length': '592' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps?api-version=2015-11-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove\"},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Unregistered\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '1e9593fb-b283-412e-a157-53aca0338ecc',
  'x-ms-correlation-request-id': '1e9593fb-b283-412e-a157-53aca0338ecc',
  'x-ms-routing-request-id': 'WESTUS:20160130T015554Z:1e9593fb-b283-412e-a157-53aca0338ecc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 01:55:53 GMT',
  connection: 'close',
  'content-length': '592' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps?api-version=2015-11-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove\"},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Unregistered\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '1c488376-8265-4568-9ed1-8f4c521f72ba',
  'x-ms-correlation-request-id': '1c488376-8265-4568-9ed1-8f4c521f72ba',
  'x-ms-routing-request-id': 'WESTUS:20160130T015554Z:1c488376-8265-4568-9ed1-8f4c521f72ba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 01:55:54 GMT',
  connection: 'close',
  'content-length': '592' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps?api-version=2015-11-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove\"},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Unregistered\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '1c488376-8265-4568-9ed1-8f4c521f72ba',
  'x-ms-correlation-request-id': '1c488376-8265-4568-9ed1-8f4c521f72ba',
  'x-ms-routing-request-id': 'WESTUS:20160130T015554Z:1c488376-8265-4568-9ed1-8f4c521f72ba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 01:55:54 GMT',
  connection: 'close',
  'content-length': '592' });
 return result; }]];