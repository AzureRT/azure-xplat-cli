// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
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
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/storageclitest?restype=container&comp=lease')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:45:29 GMT',
  etag: '"0x8D3C27C4006A94E"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd20d00a8-0001-0030-3d65-f4cc2d000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-id': '633e7d74-5522-49ae-9f9f-64a860dd00ab',
  date: 'Fri, 12 Aug 2016 06:45:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/storageclitest?restype=container&comp=lease')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:45:29 GMT',
  etag: '"0x8D3C27C4006A94E"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd20d00a8-0001-0030-3d65-f4cc2d000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-id': '633e7d74-5522-49ae-9f9f-64a860dd00ab',
  date: 'Fri, 12 Aug 2016 06:45:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storageclitest?restype=container')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:45:29 GMT',
  etag: '"0x8D3C27C4006A94E"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a66fb57c-0001-0044-3665-f44a6b000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-status': 'locked',
  'x-ms-lease-state': 'leased',
  'x-ms-lease-duration': 'infinite',
  date: 'Fri, 12 Aug 2016 06:45:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storageclitest?restype=container')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:45:29 GMT',
  etag: '"0x8D3C27C4006A94E"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a66fb57c-0001-0044-3665-f44a6b000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-status': 'locked',
  'x-ms-lease-state': 'leased',
  'x-ms-lease-duration': 'infinite',
  date: 'Fri, 12 Aug 2016 06:45:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>containerpolicy02</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>rl</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Fri, 12 Aug 2016 06:45:29 GMT',
  etag: '"0x8D3C27C4006A94E"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '487221e8-0001-0008-3065-f48d74000000',
  'x-ms-version': '2015-04-05',
  date: 'Fri, 12 Aug 2016 06:45:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>containerpolicy02</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>rl</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Fri, 12 Aug 2016 06:45:29 GMT',
  etag: '"0x8D3C27C4006A94E"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '487221e8-0001-0008-3065-f48d74000000',
  'x-ms-version': '2015-04-05',
  date: 'Fri, 12 Aug 2016 06:45:33 GMT',
  connection: 'close' });
 return result; }]];