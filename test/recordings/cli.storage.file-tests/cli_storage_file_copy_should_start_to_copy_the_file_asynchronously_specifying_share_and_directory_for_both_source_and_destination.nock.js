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
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=http;TableEndpoint=http://yaxiatest.table.testrr1.xstore-test.windows-int.net/;QueueEndpoint=http://yaxiatest.queue.testrr1.xstore-test.windows-int.net/;FileEndpoint=http://yaxiatest.file.testrr1.xstore-test.windows-int.net/;BlobEndpoint=https://yaxiatest.blob.testrr1.xstore-test.windows-int.net/;AccountName=yaxiatest;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://yaxiatest.file.testrr1.xstore-test.windows-int.net:80')
  .get('/testfilecopysourceshare?restype=share&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Fri, 03 Jul 2015 06:05:04 GMT',
  etag: '"0x8D2836D572C5BFC"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6c23d53f-001a-000a-1b56-b53d25000000',
  'x-ms-version': '2015-02-21',
  date: 'Fri, 03 Jul 2015 06:04:52 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.file.testrr1.xstore-test.windows-int.net:80')
  .put('/testfilecopydestshare/testfilecopydestdir/toCopy')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 03 Jul 2015 06:04:58 GMT',
  etag: '"0x8D2836D533E62A5"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f89fc3b1-001a-0006-3b56-b55e71000000',
  'x-ms-version': '2015-02-21',
  'x-ms-copy-id': 'a031251b-051f-4ad6-88f6-e26534d39631',
  'x-ms-copy-status': 'success',
  date: 'Fri, 03 Jul 2015 06:05:08 GMT' });
 return result; }]];
