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
  process.env['AZURE_STORAGE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
  process.env['AZURE_RESOURCE_GROUP_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/armclistorageGroup3898/providers/Microsoft.Storage/storageAccounts/armclistorageaccount9155/listKeys?api-version=2015-06-15')
  .reply(200, "{\"key1\":\"WQ3fkA/t91742N95b8eukRFRxq3XsWHKZEXHg/k8X8gwChd4kfQtUX4sFzQRck1acL21+Eh5D3SO3Mb0dyH/iw==\",\"key2\":\"Zv+sOOt1iXZJM+iYJFmCaggpw5ka96Iv8GgNpf1//rdeMp3DRTlIPiW8bY9jTTy9bTHSv+5JkQ30L0FY5hdYBw==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '222351f7-3df3-4139-aa48-9bc19c8f085a',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '222351f7-3df3-4139-aa48-9bc19c8f085a',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T232526Z:222351f7-3df3-4139-aa48-9bc19c8f085a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 23:25:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/armclistorageGroup3898/providers/Microsoft.Storage/storageAccounts/armclistorageaccount9155/listKeys?api-version=2015-06-15')
  .reply(200, "{\"key1\":\"WQ3fkA/t91742N95b8eukRFRxq3XsWHKZEXHg/k8X8gwChd4kfQtUX4sFzQRck1acL21+Eh5D3SO3Mb0dyH/iw==\",\"key2\":\"Zv+sOOt1iXZJM+iYJFmCaggpw5ka96Iv8GgNpf1//rdeMp3DRTlIPiW8bY9jTTy9bTHSv+5JkQ30L0FY5hdYBw==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '222351f7-3df3-4139-aa48-9bc19c8f085a',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '222351f7-3df3-4139-aa48-9bc19c8f085a',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T232526Z:222351f7-3df3-4139-aa48-9bc19c8f085a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 23:25:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/armclistorageGroup3898/providers/Microsoft.Storage/storageAccounts/armclistorageaccount9155/regenerateKey?api-version=2015-06-15', '*')
  .reply(200, "{\"key1\":\"mkD1/veLu9KaldTV4mMyV41EpY09R9ofyahq/a4dM4wmSvie5XSJSinTAWmM/Fh2LQ0rQEEPfg1vMkBq+jcVIQ==\",\"key2\":\"Zv+sOOt1iXZJM+iYJFmCaggpw5ka96Iv8GgNpf1//rdeMp3DRTlIPiW8bY9jTTy9bTHSv+5JkQ30L0FY5hdYBw==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '45987991-f196-4080-afda-fccf826c11ab',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '45987991-f196-4080-afda-fccf826c11ab',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T232526Z:45987991-f196-4080-afda-fccf826c11ab',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 23:25:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/armclistorageGroup3898/providers/Microsoft.Storage/storageAccounts/armclistorageaccount9155/regenerateKey?api-version=2015-06-15', '*')
  .reply(200, "{\"key1\":\"mkD1/veLu9KaldTV4mMyV41EpY09R9ofyahq/a4dM4wmSvie5XSJSinTAWmM/Fh2LQ0rQEEPfg1vMkBq+jcVIQ==\",\"key2\":\"Zv+sOOt1iXZJM+iYJFmCaggpw5ka96Iv8GgNpf1//rdeMp3DRTlIPiW8bY9jTTy9bTHSv+5JkQ30L0FY5hdYBw==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '45987991-f196-4080-afda-fccf826c11ab',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '45987991-f196-4080-afda-fccf826c11ab',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T232526Z:45987991-f196-4080-afda-fccf826c11ab',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 23:25:26 GMT',
  connection: 'close' });
 return result; }]];
