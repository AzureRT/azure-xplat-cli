// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
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
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=http;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/Tables(%27storageclitesttable%27)')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\"?><entry xml:base=\"http://xplat.table.core.windows.net/\" xmlns=\"http://www.w3.org/2005/Atom\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns:georss=\"http://www.georss.org/georss\" xmlns:gml=\"http://www.opengis.net/gml\"><id>http://xplat.table.core.windows.net/Tables('storageclitesttable')</id><category term=\"xplat.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" /><link rel=\"edit\" title=\"Tables\" href=\"Tables('storageclitesttable')\" /><title /><updated>2015-04-28T03:21:21Z</updated><author><name /></author><content type=\"application/xml\"><m:properties><d:TableName>storageclitesttable</d:TableName></m:properties></content></entry>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=entry;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '87b49637-0002-0032-1e62-81ced7000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Tue, 28 Apr 2015 03:21:21 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/storageclitesttable?comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '43125bec-0002-0022-0b62-81f831000000',
  'x-ms-version': '2015-02-21',
  date: 'Tue, 28 Apr 2015 03:21:21 GMT' });
 return result; }]];
