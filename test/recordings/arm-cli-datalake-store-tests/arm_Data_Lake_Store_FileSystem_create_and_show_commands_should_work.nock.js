// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46153750-fa3b-4140-bf57-8beb7d5c971a',
    name: 'KonaMDI3_697842',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls3181.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder01?op=MKDIRS&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2ee7186e-fa00-4ab1-b1ef-020f79fe05e6',
  'set-cookie': [ 'UserPrincipalSession=082c63d4-96c1-4488-a15d-0e4d7fd490ef; path=/; secure; HttpOnly' ],
  'server-perf': '[2ee7186efa004ab1b1ef020f79fe05e6][ AuthTime::1818.5823013278::PostAuthTime::34011.1672586754 ][HdfsMkdirs :: 00:00:062 ms]%0a[MKDIRS :: 00:00:076 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:11 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3181.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder01?op=MKDIRS&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2ee7186e-fa00-4ab1-b1ef-020f79fe05e6',
  'set-cookie': [ 'UserPrincipalSession=082c63d4-96c1-4488-a15d-0e4d7fd490ef; path=/; secure; HttpOnly' ],
  'server-perf': '[2ee7186efa004ab1b1ef020f79fe05e6][ AuthTime::1818.5823013278::PostAuthTime::34011.1672586754 ][HdfsMkdirs :: 00:00:062 ms]%0a[MKDIRS :: 00:00:076 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:11 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3181.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":268435456,\"accessTime\":1447970831157,\"modificationTime\":1447970831157,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3e1f135a-234c-4201-9c7c-bbbfe991b410',
  'set-cookie': [ 'UserPrincipalSession=9e235641-bb6b-4ad1-8bf6-dbb18a1b6a98; path=/; secure; HttpOnly' ],
  'server-perf': '[3e1f135a234c42019c7cbbbfe991b410][ AuthTime::1796.74498752629::PostAuthTime::1454765.5228545 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:078 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:078 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:12 GMT',
  connection: 'close',
  'content-length': '227' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3181.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":268435456,\"accessTime\":1447970831157,\"modificationTime\":1447970831157,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3e1f135a-234c-4201-9c7c-bbbfe991b410',
  'set-cookie': [ 'UserPrincipalSession=9e235641-bb6b-4ad1-8bf6-dbb18a1b6a98; path=/; secure; HttpOnly' ],
  'server-perf': '[3e1f135a234c42019c7cbbbfe991b410][ AuthTime::1796.74498752629::PostAuthTime::1454765.5228545 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:078 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:078 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:12 GMT',
  connection: 'close',
  'content-length': '227' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3181.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder01%2Femptyfile.txt?op=CREATE&overwrite=false&write=true&api-version=2015-10-01-preview')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls3181.azuredatalakestore.net/webhdfs/v1/adlsclifolder01/emptyfile.txt?op=CREATE&overwrite=false&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': '9bcbcc69-73e3-4fc6-b62d-8340753e92d6',
  'set-cookie': [ 'UserPrincipalSession=5e9c1165-c068-42ca-a769-595415d4eb16; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[9bcbcc6973e34fc6b62d8340753e92d6][ AuthTime::1817.27121906865::PostAuthTime::1635869.99988452 ][FsOpenStream :: 00:00:131 ms]%0a[Open :: 00:00:131 ms]%0a[Write :: 00:00:000 ms]%0a[FsAppendStream :: 00:00:019 ms]%0a[FlushWrite :: 00:00:019 ms]%0a[CREATE :: 00:00:153 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:15 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3181.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder01%2Femptyfile.txt?op=CREATE&overwrite=false&write=true&api-version=2015-10-01-preview')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls3181.azuredatalakestore.net/webhdfs/v1/adlsclifolder01/emptyfile.txt?op=CREATE&overwrite=false&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': '9bcbcc69-73e3-4fc6-b62d-8340753e92d6',
  'set-cookie': [ 'UserPrincipalSession=5e9c1165-c068-42ca-a769-595415d4eb16; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[9bcbcc6973e34fc6b62d8340753e92d6][ AuthTime::1817.27121906865::PostAuthTime::1635869.99988452 ][FsOpenStream :: 00:00:131 ms]%0a[Open :: 00:00:131 ms]%0a[Write :: 00:00:000 ms]%0a[FsAppendStream :: 00:00:019 ms]%0a[FlushWrite :: 00:00:019 ms]%0a[CREATE :: 00:00:153 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:15 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3181.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Femptyfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1447970835387,\"modificationTime\":1447970835387,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f8d45bb8-8249-4030-bd15-975a8ce14456',
  'set-cookie': [ 'UserPrincipalSession=f8904a92-d761-4119-bba9-4a8e45d9b749; path=/; secure; HttpOnly' ],
  'server-perf': '[f8d45bb882494030bd15975a8ce14456][ AuthTime::1824.54513610739::PostAuthTime::1137938.34953512 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:111 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:112 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:16 GMT',
  connection: 'close',
  'content-length': '222' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3181.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Femptyfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1447970835387,\"modificationTime\":1447970835387,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f8d45bb8-8249-4030-bd15-975a8ce14456',
  'set-cookie': [ 'UserPrincipalSession=f8904a92-d761-4119-bba9-4a8e45d9b749; path=/; secure; HttpOnly' ],
  'server-perf': '[f8d45bb882494030bd15975a8ce14456][ AuthTime::1824.54513610739::PostAuthTime::1137938.34953512 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:111 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:112 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:16 GMT',
  connection: 'close',
  'content-length': '222' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3181.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlsclifolder01%2Fcontentfile.txt?op=CREATE&overwrite=false&write=true&api-version=2015-10-01-preview', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls3181.azuredatalakestore.net/webhdfs/v1/adlsclifolder01/contentfile.txt?op=CREATE&overwrite=false&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': '7ae293fe-c37d-44e0-a7bc-9aacd7330abe',
  'set-cookie': [ 'UserPrincipalSession=70f2552b-9cdd-43ee-84c8-2e2a4d1a99e3; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[7ae293fec37d44e0a7bc9aacd7330abe][ AuthTime::1835.66362533301::PostAuthTime::1395321.19622654 ][FsOpenStream :: 00:00:118 ms]%0a[Open :: 00:00:118 ms]%0a[FsAppendStream :: 00:00:297 ms]%0a[Write :: 00:00:297 ms]%0a[FsAppendStream :: 00:00:002 ms]%0a[FlushWrite :: 00:00:002 ms]%0a[CREATE :: 00:00:421 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:19 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3181.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlsclifolder01%2Fcontentfile.txt?op=CREATE&overwrite=false&write=true&api-version=2015-10-01-preview', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls3181.azuredatalakestore.net/webhdfs/v1/adlsclifolder01/contentfile.txt?op=CREATE&overwrite=false&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': '7ae293fe-c37d-44e0-a7bc-9aacd7330abe',
  'set-cookie': [ 'UserPrincipalSession=70f2552b-9cdd-43ee-84c8-2e2a4d1a99e3; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[7ae293fec37d44e0a7bc9aacd7330abe][ AuthTime::1835.66362533301::PostAuthTime::1395321.19622654 ][FsOpenStream :: 00:00:118 ms]%0a[Open :: 00:00:118 ms]%0a[FsAppendStream :: 00:00:297 ms]%0a[Write :: 00:00:297 ms]%0a[FsAppendStream :: 00:00:002 ms]%0a[FlushWrite :: 00:00:002 ms]%0a[CREATE :: 00:00:421 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:19 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3181.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fcontentfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1447970839273,\"modificationTime\":1447970839625,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0a08f784-e66d-4559-9d62-53242b0f500a',
  'set-cookie': [ 'UserPrincipalSession=b53a8969-5e78-4467-8b0b-e54132869a4d; path=/; secure; HttpOnly' ],
  'server-perf': '[0a08f784e66d45599d6253242b0f500a][ AuthTime::1758.68092087818::PostAuthTime::1169354.30064206 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:231 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:232 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:21 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3181.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fcontentfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1447970839273,\"modificationTime\":1447970839625,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0a08f784-e66d-4559-9d62-53242b0f500a',
  'set-cookie': [ 'UserPrincipalSession=b53a8969-5e78-4467-8b0b-e54132869a4d; path=/; secure; HttpOnly' ],
  'server-perf': '[0a08f784e66d45599d6253242b0f500a][ AuthTime::1758.68092087818::PostAuthTime::1169354.30064206 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:231 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:232 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:21 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3181.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01?op=LISTSTATUS&$top=100&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":22,\"pathSuffix\":\"contentfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1447970839273,\"modificationTime\":1447970839625,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"},{\"length\":0,\"pathSuffix\":\"emptyfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1447970835387,\"modificationTime\":1447970835387,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '208ed8f2-f734-4da0-9a43-cacc11fce182',
  'set-cookie': [ 'UserPrincipalSession=989e0283-52b8-4045-ab94-ce900c146f47; path=/; secure; HttpOnly' ],
  'server-perf': '[208ed8f2f7344da09a43cacc11fce182][ AuthTime::1734.7314972666::PostAuthTime::34165.1433591348 ][FsEnumerateDirectory :: 00:00:123 ms]%0a[FsEnumerateDirectory :: 00:00:123 ms]%0a[ListDirectory :: 00:00:123 ms]%0a[LISTSTATUS :: 00:00:123 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:21 GMT',
  connection: 'close',
  'content-length': '478' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3181.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01?op=LISTSTATUS&$top=100&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":22,\"pathSuffix\":\"contentfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1447970839273,\"modificationTime\":1447970839625,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"},{\"length\":0,\"pathSuffix\":\"emptyfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1447970835387,\"modificationTime\":1447970835387,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '208ed8f2-f734-4da0-9a43-cacc11fce182',
  'set-cookie': [ 'UserPrincipalSession=989e0283-52b8-4045-ab94-ce900c146f47; path=/; secure; HttpOnly' ],
  'server-perf': '[208ed8f2f7344da09a43cacc11fce182][ AuthTime::1734.7314972666::PostAuthTime::34165.1433591348 ][FsEnumerateDirectory :: 00:00:123 ms]%0a[FsEnumerateDirectory :: 00:00:123 ms]%0a[ListDirectory :: 00:00:123 ms]%0a[LISTSTATUS :: 00:00:123 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:21 GMT',
  connection: 'close',
  'content-length': '478' });
 return result; }]];
