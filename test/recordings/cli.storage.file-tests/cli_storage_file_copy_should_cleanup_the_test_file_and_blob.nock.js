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
  .delete('/testfilecopysourceshare?restype=share')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '14095c44-001a-001a-1456-b54863000000',
  'x-ms-version': '2015-02-21',
  date: 'Fri, 03 Jul 2015 06:05:19 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.file.testrr1.xstore-test.windows-int.net:80')
  .delete('/testfilecopydestshare?restype=share')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4641d347-001a-0002-2156-b57fbd000000',
  'x-ms-version': '2015-02-21',
  date: 'Fri, 03 Jul 2015 06:04:59 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.blob.testrr1.xstore-test.windows-int.net:443')
  .delete('/testfilecopysourcecontainer?restype=container')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '95aac3e8-0001-0021-4b56-b5b874000000',
  'x-ms-version': '2015-02-21',
  date: 'Fri, 03 Jul 2015 06:05:26 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaxiatest.blob.testrr1.xstore-test.windows-int.net:443')
  .delete('/testfilecopysourcecontainer?restype=container')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '95aac3e8-0001-0021-4b56-b5b874000000',
  'x-ms-version': '2015-02-21',
  date: 'Fri, 03 Jul 2015 06:05:26 GMT' });
 return result; }]];
