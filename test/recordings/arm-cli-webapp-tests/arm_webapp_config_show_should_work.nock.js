// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '8d57ddbd-c779-40ea-b660-1015f4bf027d',
    name: 'Visual Studio Enterprise',
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
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18319/providers/Microsoft.Web/sites/webappclitests4175/config/web?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18319/providers/Microsoft.Web/sites/webappclitests4175/config/web\",\"name\":\"webappclitests4175\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"numberOfWorkers\":1,\"defaultDocuments\":[\"Default.htm\",\"Default.html\",\"Default.asp\",\"index.htm\",\"index.html\",\"iisstart.htm\",\"default.aspx\",\"index.php\",\"hostingstart.html\"],\"netFrameworkVersion\":\"v4.0\",\"phpVersion\":\"5.4\",\"pythonVersion\":\"\",\"nodeVersion\":\"\",\"requestTracingEnabled\":false,\"remoteDebuggingEnabled\":false,\"remoteDebuggingVersion\":null,\"httpLoggingEnabled\":false,\"logsDirectorySizeLimit\":35,\"detailedErrorLoggingEnabled\":false,\"publishingUsername\":\"$webappclitests4175\",\"publishingPassword\":null,\"appSettings\":null,\"metadata\":null,\"connectionStrings\":null,\"machineKey\":null,\"handlerMappings\":null,\"documentRoot\":null,\"scmType\":\"None\",\"use32BitWorkerProcess\":true,\"webSocketsEnabled\":false,\"alwaysOn\":false,\"javaVersion\":null,\"javaContainer\":null,\"javaContainerVersion\":null,\"appCommandLine\":\"\",\"managedPipelineMode\":0,\"virtualApplications\":[{\"virtualPath\":\"/\",\"physicalPath\":\"site\\\\wwwroot\",\"preloadEnabled\":false,\"virtualDirectories\":null}],\"winAuthAdminState\":0,\"winAuthTenantState\":0,\"customAppPoolIdentityAdminState\":false,\"customAppPoolIdentityTenantState\":false,\"runtimeADUser\":null,\"runtimeADUserPassword\":null,\"loadBalancing\":1,\"routingRules\":[],\"experiments\":{\"rampUpRules\":[]},\"limits\":null,\"autoHealEnabled\":false,\"autoHealRules\":null,\"tracingOptions\":null,\"vnetName\":\"\",\"siteAuthEnabled\":false,\"siteAuthSettings\":{\"enabled\":null,\"httpApiPrefixPath\":null,\"unauthenticatedClientAction\":null,\"tokenStoreEnabled\":null,\"allowedExternalRedirectUrls\":null,\"defaultProvider\":null,\"clientId\":null,\"clientSecret\":null,\"issuer\":null,\"allowedAudiences\":null,\"additionalLoginParams\":null,\"isAadAutoProvisioned\":false,\"googleClientId\":null,\"googleClientSecret\":null,\"googleOAuthScopes\":null,\"facebookAppId\":null,\"facebookAppSecret\":null,\"facebookOAuthScopes\":null,\"twitterConsumerKey\":null,\"twitterConsumerSecret\":null,\"microsoftAccountClientId\":null,\"microsoftAccountClientSecret\":null,\"microsoftAccountOAuthScopes\":null},\"cors\":null,\"push\":null,\"apiDefinition\":null,\"autoSwapSlotName\":null,\"localMySqlEnabled\":false,\"ipSecurityRestrictions\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2315',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'cd3e3c90-eee6-468b-ad5b-ff81d7ac1a54',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '8bce5730-64c5-4299-a15b-c4de0282e534',
  'x-ms-routing-request-id': 'CENTRALUS:20160921T175659Z:8bce5730-64c5-4299-a15b-c4de0282e534',
  date: 'Wed, 21 Sep 2016 17:56:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18319/providers/Microsoft.Web/sites/webappclitests4175/config/web?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18319/providers/Microsoft.Web/sites/webappclitests4175/config/web\",\"name\":\"webappclitests4175\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"numberOfWorkers\":1,\"defaultDocuments\":[\"Default.htm\",\"Default.html\",\"Default.asp\",\"index.htm\",\"index.html\",\"iisstart.htm\",\"default.aspx\",\"index.php\",\"hostingstart.html\"],\"netFrameworkVersion\":\"v4.0\",\"phpVersion\":\"5.4\",\"pythonVersion\":\"\",\"nodeVersion\":\"\",\"requestTracingEnabled\":false,\"remoteDebuggingEnabled\":false,\"remoteDebuggingVersion\":null,\"httpLoggingEnabled\":false,\"logsDirectorySizeLimit\":35,\"detailedErrorLoggingEnabled\":false,\"publishingUsername\":\"$webappclitests4175\",\"publishingPassword\":null,\"appSettings\":null,\"metadata\":null,\"connectionStrings\":null,\"machineKey\":null,\"handlerMappings\":null,\"documentRoot\":null,\"scmType\":\"None\",\"use32BitWorkerProcess\":true,\"webSocketsEnabled\":false,\"alwaysOn\":false,\"javaVersion\":null,\"javaContainer\":null,\"javaContainerVersion\":null,\"appCommandLine\":\"\",\"managedPipelineMode\":0,\"virtualApplications\":[{\"virtualPath\":\"/\",\"physicalPath\":\"site\\\\wwwroot\",\"preloadEnabled\":false,\"virtualDirectories\":null}],\"winAuthAdminState\":0,\"winAuthTenantState\":0,\"customAppPoolIdentityAdminState\":false,\"customAppPoolIdentityTenantState\":false,\"runtimeADUser\":null,\"runtimeADUserPassword\":null,\"loadBalancing\":1,\"routingRules\":[],\"experiments\":{\"rampUpRules\":[]},\"limits\":null,\"autoHealEnabled\":false,\"autoHealRules\":null,\"tracingOptions\":null,\"vnetName\":\"\",\"siteAuthEnabled\":false,\"siteAuthSettings\":{\"enabled\":null,\"httpApiPrefixPath\":null,\"unauthenticatedClientAction\":null,\"tokenStoreEnabled\":null,\"allowedExternalRedirectUrls\":null,\"defaultProvider\":null,\"clientId\":null,\"clientSecret\":null,\"issuer\":null,\"allowedAudiences\":null,\"additionalLoginParams\":null,\"isAadAutoProvisioned\":false,\"googleClientId\":null,\"googleClientSecret\":null,\"googleOAuthScopes\":null,\"facebookAppId\":null,\"facebookAppSecret\":null,\"facebookOAuthScopes\":null,\"twitterConsumerKey\":null,\"twitterConsumerSecret\":null,\"microsoftAccountClientId\":null,\"microsoftAccountClientSecret\":null,\"microsoftAccountOAuthScopes\":null},\"cors\":null,\"push\":null,\"apiDefinition\":null,\"autoSwapSlotName\":null,\"localMySqlEnabled\":false,\"ipSecurityRestrictions\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2315',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'cd3e3c90-eee6-468b-ad5b-ff81d7ac1a54',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '8bce5730-64c5-4299-a15b-c4de0282e534',
  'x-ms-routing-request-id': 'CENTRALUS:20160921T175659Z:8bce5730-64c5-4299-a15b-c4de0282e534',
  date: 'Wed, 21 Sep 2016 17:56:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18319/providers/Microsoft.Web/sites/webappclitests4175/config/publishingcredentials/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18319/providers/Microsoft.Web/sites/webappclitests4175/publishingcredentials/$webappclitests4175\",\"name\":\"webappclitests4175\",\"type\":\"Microsoft.Web/sites/publishingcredentials\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":null,\"publishingUserName\":\"$webappclitests4175\",\"publishingPassword\":\"kMHSQugghZieHq8oJu6GjSqsxsv2QJKpZKwcpkrpc8opmA8WSQXekTjTkPBH\",\"publishingPasswordHash\":null,\"publishingPasswordHashSalt\":null,\"metadata\":null,\"isDeleted\":false,\"scmUri\":\"https://$webappclitests4175:kMHSQugghZieHq8oJu6GjSqsxsv2QJKpZKwcpkrpc8opmA8WSQXekTjTkPBH@webappclitests4175.scm.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '683',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'efc1512f-ffd9-46c9-a4a7-9a851ebb9f7d',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '1a165994-a6ca-4d96-812f-314a7bfd4355',
  'x-ms-routing-request-id': 'CENTRALUS:20160921T175700Z:1a165994-a6ca-4d96-812f-314a7bfd4355',
  date: 'Wed, 21 Sep 2016 17:56:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18319/providers/Microsoft.Web/sites/webappclitests4175/config/publishingcredentials/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18319/providers/Microsoft.Web/sites/webappclitests4175/publishingcredentials/$webappclitests4175\",\"name\":\"webappclitests4175\",\"type\":\"Microsoft.Web/sites/publishingcredentials\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":null,\"publishingUserName\":\"$webappclitests4175\",\"publishingPassword\":\"kMHSQugghZieHq8oJu6GjSqsxsv2QJKpZKwcpkrpc8opmA8WSQXekTjTkPBH\",\"publishingPasswordHash\":null,\"publishingPasswordHashSalt\":null,\"metadata\":null,\"isDeleted\":false,\"scmUri\":\"https://$webappclitests4175:kMHSQugghZieHq8oJu6GjSqsxsv2QJKpZKwcpkrpc8opmA8WSQXekTjTkPBH@webappclitests4175.scm.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '683',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'efc1512f-ffd9-46c9-a4a7-9a851ebb9f7d',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '1a165994-a6ca-4d96-812f-314a7bfd4355',
  'x-ms-routing-request-id': 'CENTRALUS:20160921T175700Z:1a165994-a6ca-4d96-812f-314a7bfd4355',
  date: 'Wed, 21 Sep 2016 17:56:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18319/providers/Microsoft.Web/sites/webappclitests4175/config/appsettings/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18319/providers/Microsoft.Web/sites/webappclitests4175/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '299',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'bc944684-6f28-4416-ac5a-deb4f17aa1c4',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'a1e25af1-112a-4ff9-9754-b30ecddedf5b',
  'x-ms-routing-request-id': 'CENTRALUS:20160921T175700Z:a1e25af1-112a-4ff9-9754-b30ecddedf5b',
  date: 'Wed, 21 Sep 2016 17:57:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18319/providers/Microsoft.Web/sites/webappclitests4175/config/appsettings/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18319/providers/Microsoft.Web/sites/webappclitests4175/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '299',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'bc944684-6f28-4416-ac5a-deb4f17aa1c4',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'a1e25af1-112a-4ff9-9754-b30ecddedf5b',
  'x-ms-routing-request-id': 'CENTRALUS:20160921T175700Z:a1e25af1-112a-4ff9-9754-b30ecddedf5b',
  date: 'Wed, 21 Sep 2016 17:57:00 GMT',
  connection: 'close' });
 return result; }]];