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
  process.env['AZURE_ARM_TEST_SQL_RESOURCE_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_WEBSITES_RESOURCE_LOCATION'] = 'South Central US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource5630?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource5630' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '680146f4-0f6d-41ff-9845-867fd2f05023',
  'x-ms-correlation-request-id': '680146f4-0f6d-41ff-9845-867fd2f05023',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20160130T054815Z:680146f4-0f6d-41ff-9845-867fd2f05023',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 05:48:15 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource5630?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource5630' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '680146f4-0f6d-41ff-9845-867fd2f05023',
  'x-ms-correlation-request-id': '680146f4-0f6d-41ff-9845-867fd2f05023',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20160130T054815Z:680146f4-0f6d-41ff-9845-867fd2f05023',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 05:48:15 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource5630?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xTestResource5630\",\"name\":\"xTestResource5630\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'c68b9b51-b50e-49fb-a77a-06c3ec1b50ea',
  'x-ms-correlation-request-id': 'c68b9b51-b50e-49fb-a77a-06c3ec1b50ea',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20160130T054816Z:c68b9b51-b50e-49fb-a77a-06c3ec1b50ea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 05:48:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource5630?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xTestResource5630\",\"name\":\"xTestResource5630\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'c68b9b51-b50e-49fb-a77a-06c3ec1b50ea',
  'x-ms-correlation-request-id': 'c68b9b51-b50e-49fb-a77a-06c3ec1b50ea',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20160130T054816Z:c68b9b51-b50e-49fb-a77a-06c3ec1b50ea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 05:48:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource5630/providers/Microsoft.Web/sites/xTestGrpRes9582?api-version=2014-04-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Web/sites/xTestGrpRes9582' under resource group 'xTestResource5630' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '64ace121-106b-4282-b0d4-37436f98f85b',
  'x-ms-correlation-request-id': '64ace121-106b-4282-b0d4-37436f98f85b',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20160130T054817Z:64ace121-106b-4282-b0d4-37436f98f85b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 05:48:16 GMT',
  connection: 'close',
  'content-length': '156' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource5630/providers/Microsoft.Web/sites/xTestGrpRes9582?api-version=2014-04-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Web/sites/xTestGrpRes9582' under resource group 'xTestResource5630' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '64ace121-106b-4282-b0d4-37436f98f85b',
  'x-ms-correlation-request-id': '64ace121-106b-4282-b0d4-37436f98f85b',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20160130T054817Z:64ace121-106b-4282-b0d4-37436f98f85b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 05:48:16 GMT',
  connection: 'close',
  'content-length': '156' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource5630/providers/Microsoft.Web/sites/xTestGrpRes9582?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xTestResource5630/providers/Microsoft.Web/sites/xTestGrpRes9582\",\"name\":\"xTestGrpRes9582\",\"type\":\"Microsoft.Web/sites\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes9582\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres9582.azurewebsites.net\"],\"webSpace\":\"xTestResource5630-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-015.api.azurewebsites.windows.net:454/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/webspaces/xTestResource5630-SouthCentralUSwebspace/sites/xTestGrpRes9582\",\"repositorySiteName\":\"xTestGrpRes9582\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres9582.azurewebsites.net\",\"xtestgrpres9582.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres9582.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres9582.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"lastModifiedTimeUtc\":\"2016-01-30T05:48:23.063\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes9582\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"40.84.229.55,40.84.230.134,40.84.227.101,40.84.224.129\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2107',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c321aaa1-0c68-47ad-90c2-e82d7f4a2aa0',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'd891dad8-03f8-47a2-9bab-27840767464a',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20160130T054823Z:d891dad8-03f8-47a2-9bab-27840767464a',
  date: 'Sat, 30 Jan 2016 05:48:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource5630/providers/Microsoft.Web/sites/xTestGrpRes9582?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xTestResource5630/providers/Microsoft.Web/sites/xTestGrpRes9582\",\"name\":\"xTestGrpRes9582\",\"type\":\"Microsoft.Web/sites\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes9582\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres9582.azurewebsites.net\"],\"webSpace\":\"xTestResource5630-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-015.api.azurewebsites.windows.net:454/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/webspaces/xTestResource5630-SouthCentralUSwebspace/sites/xTestGrpRes9582\",\"repositorySiteName\":\"xTestGrpRes9582\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres9582.azurewebsites.net\",\"xtestgrpres9582.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres9582.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres9582.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"lastModifiedTimeUtc\":\"2016-01-30T05:48:23.063\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes9582\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"40.84.229.55,40.84.230.134,40.84.227.101,40.84.224.129\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2107',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c321aaa1-0c68-47ad-90c2-e82d7f4a2aa0',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'd891dad8-03f8-47a2-9bab-27840767464a',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20160130T054823Z:d891dad8-03f8-47a2-9bab-27840767464a',
  date: 'Sat, 30 Jan 2016 05:48:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource5630/providers/Microsoft.Web/sites/xTestGrpRes9582?api-version=2014-04-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xTestResource5630/providers/Microsoft.Web/sites/xTestGrpRes9582\",\"name\":\"xTestGrpRes9582\",\"type\":\"Microsoft.Web/sites\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes9582\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres9582.azurewebsites.net\"],\"webSpace\":\"xTestResource5630-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-015.api.azurewebsites.windows.net:454/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/webspaces/xTestResource5630-SouthCentralUSwebspace/sites/xTestGrpRes9582\",\"repositorySiteName\":\"xTestGrpRes9582\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres9582.azurewebsites.net\",\"xtestgrpres9582.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres9582.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres9582.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"lastModifiedTimeUtc\":\"2016-01-30T05:48:23.21\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes9582\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"40.84.229.55,40.84.230.134,40.84.227.101,40.84.224.129\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2106',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D15B21D4C3B8A0"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e246e6dd-22b5-4ebe-9716-eaeeeaeabad1',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '9af166ae-9b20-4221-acbd-7dbb089713c2',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20160130T054824Z:9af166ae-9b20-4221-acbd-7dbb089713c2',
  date: 'Sat, 30 Jan 2016 05:48:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource5630/providers/Microsoft.Web/sites/xTestGrpRes9582?api-version=2014-04-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xTestResource5630/providers/Microsoft.Web/sites/xTestGrpRes9582\",\"name\":\"xTestGrpRes9582\",\"type\":\"Microsoft.Web/sites\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes9582\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres9582.azurewebsites.net\"],\"webSpace\":\"xTestResource5630-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-015.api.azurewebsites.windows.net:454/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/webspaces/xTestResource5630-SouthCentralUSwebspace/sites/xTestGrpRes9582\",\"repositorySiteName\":\"xTestGrpRes9582\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres9582.azurewebsites.net\",\"xtestgrpres9582.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres9582.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres9582.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"lastModifiedTimeUtc\":\"2016-01-30T05:48:23.21\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes9582\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"40.84.229.55,40.84.230.134,40.84.227.101,40.84.224.129\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2106',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D15B21D4C3B8A0"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e246e6dd-22b5-4ebe-9716-eaeeeaeabad1',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '9af166ae-9b20-4221-acbd-7dbb089713c2',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20160130T054824Z:9af166ae-9b20-4221-acbd-7dbb089713c2',
  date: 'Sat, 30 Jan 2016 05:48:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource5630/providers/Microsoft.Web//sites/xTestGrpRes9582/providers/Microsoft.Authorization/permissions?api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"actions\":[\"*\"],\"notActions\":[]}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '61',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bd1ff597-513e-4676-bf3d-645cfa95cd8f',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '1c4fc7fc-3207-45f7-97f1-00f968ae8efd',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20160130T054825Z:1c4fc7fc-3207-45f7-97f1-00f968ae8efd',
  date: 'Sat, 30 Jan 2016 05:48:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource5630/providers/Microsoft.Web//sites/xTestGrpRes9582/providers/Microsoft.Authorization/permissions?api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"actions\":[\"*\"],\"notActions\":[]}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '61',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bd1ff597-513e-4676-bf3d-645cfa95cd8f',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '1c4fc7fc-3207-45f7-97f1-00f968ae8efd',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20160130T054825Z:1c4fc7fc-3207-45f7-97f1-00f968ae8efd',
  date: 'Sat, 30 Jan 2016 05:48:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource5630?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTYzMC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'd12f8d82-13f1-44da-8d11-9f10086da826',
  'x-ms-correlation-request-id': 'd12f8d82-13f1-44da-8d11-9f10086da826',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20160130T054827Z:d12f8d82-13f1-44da-8d11-9f10086da826',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 05:48:27 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource5630?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTYzMC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'd12f8d82-13f1-44da-8d11-9f10086da826',
  'x-ms-correlation-request-id': 'd12f8d82-13f1-44da-8d11-9f10086da826',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20160130T054827Z:d12f8d82-13f1-44da-8d11-9f10086da826',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 05:48:27 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTYzMC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTYzMC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '6c60593d-5bb7-4ca7-bbd5-f9d191f78064',
  'x-ms-correlation-request-id': '6c60593d-5bb7-4ca7-bbd5-f9d191f78064',
  'x-ms-routing-request-id': 'WESTUS:20160130T054857Z:6c60593d-5bb7-4ca7-bbd5-f9d191f78064',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 05:48:57 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTYzMC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTYzMC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '6c60593d-5bb7-4ca7-bbd5-f9d191f78064',
  'x-ms-correlation-request-id': '6c60593d-5bb7-4ca7-bbd5-f9d191f78064',
  'x-ms-routing-request-id': 'WESTUS:20160130T054857Z:6c60593d-5bb7-4ca7-bbd5-f9d191f78064',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 05:48:57 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTYzMC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTYzMC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': 'e8cbc095-6d8a-41fe-b420-ce9224fd57b8',
  'x-ms-correlation-request-id': 'e8cbc095-6d8a-41fe-b420-ce9224fd57b8',
  'x-ms-routing-request-id': 'WESTUS:20160130T054928Z:e8cbc095-6d8a-41fe-b420-ce9224fd57b8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 05:49:27 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTYzMC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTYzMC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': 'e8cbc095-6d8a-41fe-b420-ce9224fd57b8',
  'x-ms-correlation-request-id': 'e8cbc095-6d8a-41fe-b420-ce9224fd57b8',
  'x-ms-routing-request-id': 'WESTUS:20160130T054928Z:e8cbc095-6d8a-41fe-b420-ce9224fd57b8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 05:49:27 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTYzMC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '175d401d-78bf-4fc8-bfef-726284a70168',
  'x-ms-correlation-request-id': '175d401d-78bf-4fc8-bfef-726284a70168',
  'x-ms-routing-request-id': 'WESTUS:20160130T054958Z:175d401d-78bf-4fc8-bfef-726284a70168',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 05:49:58 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTYzMC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '175d401d-78bf-4fc8-bfef-726284a70168',
  'x-ms-correlation-request-id': '175d401d-78bf-4fc8-bfef-726284a70168',
  'x-ms-routing-request-id': 'WESTUS:20160130T054958Z:175d401d-78bf-4fc8-bfef-726284a70168',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 05:49:58 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xTestResource5630','xTestGrpRes9582'];};
