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
  .head('/storage-cli-blob-test/blockblobname962628554157')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/xml',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 16 Nov 2016 01:40:40 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D40DC19291CCFA"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '45321db2-0001-0030-0aaa-3fcc2d000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'BlockBlob',
  'x-ms-server-encrypted': 'false',
  date: 'Wed, 16 Nov 2016 01:40:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname962628554157')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/xml',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 16 Nov 2016 01:40:40 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D40DC19291CCFA"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '45321db2-0001-0030-0aaa-3fcc2d000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'BlockBlob',
  'x-ms-server-encrypted': 'false',
  date: 'Wed, 16 Nov 2016 01:40:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .get('/storage-cli-blob-test/blockblobname962628554157')
  .reply(200, "HelloWorld", { 'content-length': '10',
  'content-type': 'text/xml',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 16 Nov 2016 01:40:40 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D40DC19291CCFA"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2de17065-0001-0011-4daa-3fa11c000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'BlockBlob',
  'x-ms-server-encrypted': 'false',
  date: 'Wed, 16 Nov 2016 01:40:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/storage-cli-blob-test/blockblobname962628554157')
  .reply(200, "HelloWorld", { 'content-length': '10',
  'content-type': 'text/xml',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 16 Nov 2016 01:40:40 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D40DC19291CCFA"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2de17065-0001-0011-4daa-3fa11c000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'BlockBlob',
  'x-ms-server-encrypted': 'false',
  date: 'Wed, 16 Nov 2016 01:40:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname962628554157')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/xml',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 16 Nov 2016 01:40:40 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D40DC19291CCFA"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '1476c1de-0001-002e-2daa-3f16c0000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'BlockBlob',
  'x-ms-server-encrypted': 'false',
  date: 'Wed, 16 Nov 2016 01:40:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname962628554157')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/xml',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 16 Nov 2016 01:40:40 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D40DC19291CCFA"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '1476c1de-0001-002e-2daa-3f16c0000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'BlockBlob',
  'x-ms-server-encrypted': 'false',
  date: 'Wed, 16 Nov 2016 01:40:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname962628554157')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/xml',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 16 Nov 2016 01:40:40 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D40DC19291CCFA"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ffb71554-0001-0037-33aa-3f3aa8000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'BlockBlob',
  'x-ms-server-encrypted': 'false',
  date: 'Wed, 16 Nov 2016 01:40:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname962628554157')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/xml',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 16 Nov 2016 01:40:40 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D40DC19291CCFA"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ffb71554-0001-0037-33aa-3f3aa8000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'BlockBlob',
  'x-ms-server-encrypted': 'false',
  date: 'Wed, 16 Nov 2016 01:40:44 GMT',
  connection: 'close' });
 return result; }]];