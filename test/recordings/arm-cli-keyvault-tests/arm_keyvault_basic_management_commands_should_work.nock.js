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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplatTestVaultRG';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resources?$filter=resourceType%20eq%20%27Microsoft.KeyVault%2Fvaults%27&api-version=2015-11-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/testfoo/providers/Microsoft.KeyVault/vaults/xplatTestVault8440\",\"name\":\"xplatTestVault8440\",\"type\":\"Microsoft.KeyVault/vaults\",\"location\":\"westus\",\"tags\":{}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': 'ff51ad85-fb53-4ce8-ac27-5df6a7914ddf',
  'x-ms-correlation-request-id': 'ff51ad85-fb53-4ce8-ac27-5df6a7914ddf',
  'x-ms-routing-request-id': 'WESTUS:20160131T024102Z:ff51ad85-fb53-4ce8-ac27-5df6a7914ddf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 31 Jan 2016 02:41:02 GMT',
  connection: 'close',
  'content-length': '243' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resources?$filter=resourceType%20eq%20%27Microsoft.KeyVault%2Fvaults%27&api-version=2015-11-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/testfoo/providers/Microsoft.KeyVault/vaults/xplatTestVault8440\",\"name\":\"xplatTestVault8440\",\"type\":\"Microsoft.KeyVault/vaults\",\"location\":\"westus\",\"tags\":{}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': 'ff51ad85-fb53-4ce8-ac27-5df6a7914ddf',
  'x-ms-correlation-request-id': 'ff51ad85-fb53-4ce8-ac27-5df6a7914ddf',
  'x-ms-routing-request-id': 'WESTUS:20160131T024102Z:ff51ad85-fb53-4ce8-ac27-5df6a7914ddf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 31 Jan 2016 02:41:02 GMT',
  connection: 'close',
  'content-length': '243' });
 return result; },
function (nock) { 
var result = 
nock('http://graph.windows.net:443')
  .get('/72f988bf-86f1-41af-91ab-2d7cd011db47/users?$filter=signInName%20eq%20%27user%40domain.example%27&api-version=1.42-previewInternal')
  .reply(200, "{\"odata.metadata\":\"https://graph.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47/$metadata#directoryObjects/Microsoft.WindowsAzure.ActiveDirectory.User\",\"value\":[{\"odata.type\":\"Microsoft.WindowsAzure.ActiveDirectory.User\",\"objectType\":\"User\",\"objectId\":\"8d3eb738-13c6-4117-aa01-b8aa50beba40\",\"softDeletionTimestamp\":null,\"acceptedAs\":null,\"acceptedOn\":null,\"accountEnabled\":true,\"alternativeSecurityIds\":[],\"appMetadata\":null,\"assignedLicenses\":[],\"assignedPlans\":[],\"city\":null,\"country\":null,\"creationType\":null,\"department\":null,\"dirSyncEnabled\":null,\"displayName\":\"Test User\",\"extensionAttribute1\":null,\"extensionAttribute2\":null,\"extensionAttribute3\":null,\"extensionAttribute4\":null,\"extensionAttribute5\":null,\"extensionAttribute6\":null,\"extensionAttribute7\":null,\"extensionAttribute8\":null,\"extensionAttribute9\":null,\"extensionAttribute10\":null,\"extensionAttribute11\":null,\"extensionAttribute12\":null,\"extensionAttribute13\":null,\"extensionAttribute14\":null,\"extensionAttribute15\":null,\"facsimileTelephoneNumber\":null,\"givenName\":\"Test\",\"immutableId\":null,\"invitedOn\":null,\"inviteReplyUrl\":[],\"inviteResources\":[],\"inviteTicket\":[],\"isCompromised\":null,\"jobTitle\":null,\"jrnlAddress\":null,\"lastDirSyncTime\":null,\"logonIdentifiers\":[],\"mail\":null,\"mailNickname\":\"testuser\",\"mobile\":null,\"netId\":\"10033FFF933CA699\",\"onPremiseSecurityIdentifier\":null,\"otherMails\":[\"karlaug@microsoft.com\"],\"passwordPolicies\":\"None\",\"passwordProfile\":null,\"physicalDeliveryOfficeName\":null,\"postalCode\":null,\"preferredLanguage\":null,\"primarySMTPAddress\":null,\"provisionedPlans\":[],\"provisioningErrors\":[],\"proxyAddresses\":[],\"searchableDeviceKey\":[],\"selfServePasswordResetData\":null,\"signInName\":\"user@domain.example\",\"sipProxyAddress\":null,\"smtpAddresses\":[],\"state\":null,\"streetAddress\":null,\"surname\":\"User\",\"telephoneNumber\":null,\"usageLocation\":\"US\",\"userPrincipalName\":\"user@domain.example\",\"userState\":null,\"userStateChangedOn\":null,\"userType\":\"Member\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'ocp-aad-diagnostics-server-name': 'cRJF8/ZzzrFuJk5XwrSvY1CuWZMNVE2FMODLn0XeBkA=',
  'request-id': 'fd0d74b9-3f5c-4cb7-b0a4-62d6d75f08e9',
  'client-request-id': '07712882-0f96-481f-a222-b2bf56152e02',
  'x-ms-dirapi-data-contract-version': '1.42-previewInternal',
  'x-ms-gateway-rewrite': 'false',
  'ocp-aad-session-key': 'puUQLFHYo7xoyPc75xMnpvjHpn614BnxPstrue5bdGDnNlUY_rvSLoFjCGgxfASFtXiijhJKlAC9oZwr4wGB8Q8WEI2b7_LTGF4fqBztMRb_HlDTz-O6OCanIItAv0y4.JfV1Vn6pg0Xco1KwxOKGTaPD7xci2KFUG7nOyCdczr0',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0;',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'access-control-allow-origin': '*',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET, ASP.NET',
  duration: '1599426',
  date: 'Sun, 31 Jan 2016 02:41:02 GMT',
  connection: 'close',
  'content-length': '8980' });
 return result; },
function (nock) { 
var result = 
nock('https://graph.windows.net:443')
  .get('/72f988bf-86f1-41af-91ab-2d7cd011db47/users?$filter=signInName%20eq%20%27user%40domain.example%27&api-version=1.42-previewInternal')
  .reply(200, "{\"odata.metadata\":\"https://graph.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47/$metadata#directoryObjects/Microsoft.WindowsAzure.ActiveDirectory.User\",\"value\":[{\"odata.type\":\"Microsoft.WindowsAzure.ActiveDirectory.User\",\"objectType\":\"User\",\"objectId\":\"8d3eb738-13c6-4117-aa01-b8aa50beba40\",\"softDeletionTimestamp\":null,\"acceptedAs\":null,\"acceptedOn\":null,\"accountEnabled\":true,\"alternativeSecurityIds\":[],\"appMetadata\":null,\"assignedLicenses\":[],\"assignedPlans\":[],\"city\":null,\"country\":null,\"creationType\":null,\"department\":null,\"dirSyncEnabled\":null,\"displayName\":\"Test User\",\"extensionAttribute1\":null,\"extensionAttribute2\":null,\"extensionAttribute3\":null,\"extensionAttribute4\":null,\"extensionAttribute5\":null,\"extensionAttribute6\":null,\"extensionAttribute7\":null,\"extensionAttribute8\":null,\"extensionAttribute9\":null,\"extensionAttribute10\":null,\"extensionAttribute11\":null,\"extensionAttribute12\":null,\"extensionAttribute13\":null,\"extensionAttribute14\":null,\"extensionAttribute15\":null,\"facsimileTelephoneNumber\":null,\"givenName\":\"Test\",\"immutableId\":null,\"invitedOn\":null,\"inviteReplyUrl\":[],\"inviteResources\":[],\"inviteTicket\":[],\"isCompromised\":null,\"jobTitle\":null,\"jrnlAddress\":null,\"lastDirSyncTime\":null,\"logonIdentifiers\":[],\"mail\":null,\"mailNickname\":\"testuser\",\"mobile\":null,\"netId\":\"10033FFF933CA699\",\"onPremiseSecurityIdentifier\":null,\"otherMails\":[\"karlaug@microsoft.com\"],\"passwordPolicies\":\"None\",\"passwordProfile\":null,\"physicalDeliveryOfficeName\":null,\"postalCode\":null,\"preferredLanguage\":null,\"primarySMTPAddress\":null,\"provisionedPlans\":[],\"provisioningErrors\":[],\"proxyAddresses\":[],\"searchableDeviceKey\":[],\"selfServePasswordResetData\":null,\"signInName\":\"user@domain.example\",\"sipProxyAddress\":null,\"smtpAddresses\":[],\"state\":null,\"streetAddress\":null,\"surname\":\"User\",\"telephoneNumber\":null,\"usageLocation\":\"US\",\"userPrincipalName\":\"user@domain.example\",\"userState\":null,\"userStateChangedOn\":null,\"userType\":\"Member\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'ocp-aad-diagnostics-server-name': 'cRJF8/ZzzrFuJk5XwrSvY1CuWZMNVE2FMODLn0XeBkA=',
  'request-id': 'fd0d74b9-3f5c-4cb7-b0a4-62d6d75f08e9',
  'client-request-id': '07712882-0f96-481f-a222-b2bf56152e02',
  'x-ms-dirapi-data-contract-version': '1.42-previewInternal',
  'x-ms-gateway-rewrite': 'false',
  'ocp-aad-session-key': 'puUQLFHYo7xoyPc75xMnpvjHpn614BnxPstrue5bdGDnNlUY_rvSLoFjCGgxfASFtXiijhJKlAC9oZwr4wGB8Q8WEI2b7_LTGF4fqBztMRb_HlDTz-O6OCanIItAv0y4.JfV1Vn6pg0Xco1KwxOKGTaPD7xci2KFUG7nOyCdczr0',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0;',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'access-control-allow-origin': '*',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET, ASP.NET',
  duration: '1599426',
  date: 'Sun, 31 Jan 2016 02:41:02 GMT',
  connection: 'close',
  'content-length': '8980' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatTestVaultRG/providers/Microsoft.KeyVault/vaults/xplatTestVault1472?api-version=2015-06-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestVaultRG/providers/Microsoft.KeyVault/vaults/xplatTestVault1472\",\"name\":\"xplatTestVault1472\",\"type\":\"Microsoft.KeyVault/vaults\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"sku\":{\"family\":\"A\",\"name\":\"Standard\"},\"tenantId\":\"72f988bf-86f1-41af-91ab-2d7cd011db47\",\"accessPolicies\":[{\"tenantId\":\"72f988bf-86f1-41af-91ab-2d7cd011db47\",\"objectId\":\"1961eabf-2157-4c43-9441-a6d049d05cda\",\"permissions\":{\"keys\":[\"get\",\"create\",\"delete\",\"list\",\"update\",\"import\",\"backup\",\"restore\"],\"secrets\":[\"all\"]}}],\"enabledForDeployment\":false,\"vaultUri\":\"https://xplatTestVault1472.vault.azure.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '661',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '668f433a-43ee-46e7-a665-92ce50aeaa6d',
  'x-ms-correlation-request-id': '668f433a-43ee-46e7-a665-92ce50aeaa6d',
  'x-ms-routing-request-id': 'WESTUS:20160131T024105Z:668f433a-43ee-46e7-a665-92ce50aeaa6d',
  date: 'Sun, 31 Jan 2016 02:41:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatTestVaultRG/providers/Microsoft.KeyVault/vaults/xplatTestVault1472?api-version=2015-06-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestVaultRG/providers/Microsoft.KeyVault/vaults/xplatTestVault1472\",\"name\":\"xplatTestVault1472\",\"type\":\"Microsoft.KeyVault/vaults\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"sku\":{\"family\":\"A\",\"name\":\"Standard\"},\"tenantId\":\"72f988bf-86f1-41af-91ab-2d7cd011db47\",\"accessPolicies\":[{\"tenantId\":\"72f988bf-86f1-41af-91ab-2d7cd011db47\",\"objectId\":\"1961eabf-2157-4c43-9441-a6d049d05cda\",\"permissions\":{\"keys\":[\"get\",\"create\",\"delete\",\"list\",\"update\",\"import\",\"backup\",\"restore\"],\"secrets\":[\"all\"]}}],\"enabledForDeployment\":false,\"vaultUri\":\"https://xplatTestVault1472.vault.azure.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '661',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '668f433a-43ee-46e7-a665-92ce50aeaa6d',
  'x-ms-correlation-request-id': '668f433a-43ee-46e7-a665-92ce50aeaa6d',
  'x-ms-routing-request-id': 'WESTUS:20160131T024105Z:668f433a-43ee-46e7-a665-92ce50aeaa6d',
  date: 'Sun, 31 Jan 2016 02:41:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatTestVaultRG/providers/Microsoft.KeyVault/vaults/xplatTestVault1472?api-version=2015-06-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestVaultRG/providers/Microsoft.KeyVault/vaults/xplatTestVault1472\",\"name\":\"xplatTestVault1472\",\"type\":\"Microsoft.KeyVault/vaults\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"sku\":{\"family\":\"A\",\"name\":\"Standard\"},\"tenantId\":\"72f988bf-86f1-41af-91ab-2d7cd011db47\",\"accessPolicies\":[{\"tenantId\":\"72f988bf-86f1-41af-91ab-2d7cd011db47\",\"objectId\":\"1961eabf-2157-4c43-9441-a6d049d05cda\",\"permissions\":{\"keys\":[\"get\",\"create\",\"delete\",\"list\",\"update\",\"import\",\"backup\",\"restore\"],\"secrets\":[\"all\"]}}],\"enabledForDeployment\":false,\"vaultUri\":\"https://xplattestvault1472.vault.azure.net/\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '662',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': 'b22119da-e815-4a52-bcd3-84e38daad631',
  'x-ms-correlation-request-id': 'b22119da-e815-4a52-bcd3-84e38daad631',
  'x-ms-routing-request-id': 'WESTUS:20160131T024105Z:b22119da-e815-4a52-bcd3-84e38daad631',
  date: 'Sun, 31 Jan 2016 02:41:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatTestVaultRG/providers/Microsoft.KeyVault/vaults/xplatTestVault1472?api-version=2015-06-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestVaultRG/providers/Microsoft.KeyVault/vaults/xplatTestVault1472\",\"name\":\"xplatTestVault1472\",\"type\":\"Microsoft.KeyVault/vaults\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"sku\":{\"family\":\"A\",\"name\":\"Standard\"},\"tenantId\":\"72f988bf-86f1-41af-91ab-2d7cd011db47\",\"accessPolicies\":[{\"tenantId\":\"72f988bf-86f1-41af-91ab-2d7cd011db47\",\"objectId\":\"1961eabf-2157-4c43-9441-a6d049d05cda\",\"permissions\":{\"keys\":[\"get\",\"create\",\"delete\",\"list\",\"update\",\"import\",\"backup\",\"restore\"],\"secrets\":[\"all\"]}}],\"enabledForDeployment\":false,\"vaultUri\":\"https://xplattestvault1472.vault.azure.net/\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '662',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': 'b22119da-e815-4a52-bcd3-84e38daad631',
  'x-ms-correlation-request-id': 'b22119da-e815-4a52-bcd3-84e38daad631',
  'x-ms-routing-request-id': 'WESTUS:20160131T024105Z:b22119da-e815-4a52-bcd3-84e38daad631',
  date: 'Sun, 31 Jan 2016 02:41:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resources?$filter=resourceType%20eq%20%27Microsoft.KeyVault%2Fvaults%27&api-version=2015-11-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/testfoo/providers/Microsoft.KeyVault/vaults/xplatTestVault8440\",\"name\":\"xplatTestVault8440\",\"type\":\"Microsoft.KeyVault/vaults\",\"location\":\"westus\",\"tags\":{}},{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestVaultRG/providers/Microsoft.KeyVault/vaults/xplatTestVault1472\",\"name\":\"xplatTestVault1472\",\"type\":\"Microsoft.KeyVault/vaults\",\"location\":\"westus\",\"tags\":{}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '5aec385d-1afb-4e6b-8a58-0911d49bf667',
  'x-ms-correlation-request-id': '5aec385d-1afb-4e6b-8a58-0911d49bf667',
  'x-ms-routing-request-id': 'WESTUS:20160131T024105Z:5aec385d-1afb-4e6b-8a58-0911d49bf667',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 31 Jan 2016 02:41:05 GMT',
  connection: 'close',
  'content-length': '484' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resources?$filter=resourceType%20eq%20%27Microsoft.KeyVault%2Fvaults%27&api-version=2015-11-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/testfoo/providers/Microsoft.KeyVault/vaults/xplatTestVault8440\",\"name\":\"xplatTestVault8440\",\"type\":\"Microsoft.KeyVault/vaults\",\"location\":\"westus\",\"tags\":{}},{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestVaultRG/providers/Microsoft.KeyVault/vaults/xplatTestVault1472\",\"name\":\"xplatTestVault1472\",\"type\":\"Microsoft.KeyVault/vaults\",\"location\":\"westus\",\"tags\":{}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '5aec385d-1afb-4e6b-8a58-0911d49bf667',
  'x-ms-correlation-request-id': '5aec385d-1afb-4e6b-8a58-0911d49bf667',
  'x-ms-routing-request-id': 'WESTUS:20160131T024105Z:5aec385d-1afb-4e6b-8a58-0911d49bf667',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 31 Jan 2016 02:41:05 GMT',
  connection: 'close',
  'content-length': '484' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatTestVaultRG/providers/Microsoft.KeyVault/vaults/xplatTestVault1472?api-version=2015-06-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'f0f9b4e4-ad50-42ee-8192-19dd7d950236',
  'x-ms-correlation-request-id': 'f0f9b4e4-ad50-42ee-8192-19dd7d950236',
  'x-ms-routing-request-id': 'WESTUS:20160131T024107Z:f0f9b4e4-ad50-42ee-8192-19dd7d950236',
  date: 'Sun, 31 Jan 2016 02:41:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatTestVaultRG/providers/Microsoft.KeyVault/vaults/xplatTestVault1472?api-version=2015-06-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'f0f9b4e4-ad50-42ee-8192-19dd7d950236',
  'x-ms-correlation-request-id': 'f0f9b4e4-ad50-42ee-8192-19dd7d950236',
  'x-ms-routing-request-id': 'WESTUS:20160131T024107Z:f0f9b4e4-ad50-42ee-8192-19dd7d950236',
  date: 'Sun, 31 Jan 2016 02:41:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatTestVaultRG/providers/Microsoft.KeyVault/vaults/xplatTestVault1472?api-version=2015-06-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.KeyVault/vaults/xplatTestVault1472' under resource group 'xplatTestVaultRG' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'ac2f20e4-4e71-414b-afb4-05cac8c705aa',
  'x-ms-correlation-request-id': 'ac2f20e4-4e71-414b-afb4-05cac8c705aa',
  'x-ms-routing-request-id': 'WESTUS:20160131T024107Z:ac2f20e4-4e71-414b-afb4-05cac8c705aa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 31 Jan 2016 02:41:07 GMT',
  connection: 'close',
  'content-length': '164' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatTestVaultRG/providers/Microsoft.KeyVault/vaults/xplatTestVault1472?api-version=2015-06-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.KeyVault/vaults/xplatTestVault1472' under resource group 'xplatTestVaultRG' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'ac2f20e4-4e71-414b-afb4-05cac8c705aa',
  'x-ms-correlation-request-id': 'ac2f20e4-4e71-414b-afb4-05cac8c705aa',
  'x-ms-routing-request-id': 'WESTUS:20160131T024107Z:ac2f20e4-4e71-414b-afb4-05cac8c705aa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 31 Jan 2016 02:41:07 GMT',
  connection: 'close',
  'content-length': '164' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xplatTestVault1472'];};
