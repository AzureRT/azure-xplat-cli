// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'fb2c25dc-6bab-45c4-8cc9-cece7c42a95a',
    name: 'antps14',
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
  .get('/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg19641/providers/Microsoft.Web/sites/webappclitests4194?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg19641/providers/Microsoft.Web/sites/webappclitests4194\",\"name\":\"webappclitests4194\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"webappclitests4194\",\"state\":\"Running\",\"hostNames\":[\"webappclitests4194.azurewebsites.net\"],\"webSpace\":\"testrg19641-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-041.api.azurewebsites.windows.net:454/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/webspaces/testrg19641-WestUSwebspace/sites/webappclitests4194\",\"repositorySiteName\":\"webappclitests4194\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"webappclitests4194.azurewebsites.net\",\"webappclitests4194.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"webappclitests4194.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"webappclitests4194.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":null,\"serverFarmId\":\"/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg19641/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests2742\",\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-08-31T21:30:14.8\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"webappclitests4194\",\"trafficManagerHostNames\":null,\"sku\":\"Standard\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"40.112.143.127,40.112.139.230,40.112.138.193,40.112.141.127\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-041\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":null,\"resourceGroup\":\"testrg19641\",\"defaultHostName\":\"webappclitests4194.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2465',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D203CEDCB28900"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e71dddc9-409b-4641-a9cd-4056352dde0c',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14879',
  'x-ms-correlation-request-id': '30ae0ce9-5f85-43d5-bfe7-dd58649f4d2a',
  'x-ms-routing-request-id': 'CENTRALUS:20160831T213017Z:30ae0ce9-5f85-43d5-bfe7-dd58649f4d2a',
  date: 'Wed, 31 Aug 2016 21:30:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg19641/providers/Microsoft.Web/sites/webappclitests4194?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg19641/providers/Microsoft.Web/sites/webappclitests4194\",\"name\":\"webappclitests4194\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"webappclitests4194\",\"state\":\"Running\",\"hostNames\":[\"webappclitests4194.azurewebsites.net\"],\"webSpace\":\"testrg19641-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-041.api.azurewebsites.windows.net:454/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/webspaces/testrg19641-WestUSwebspace/sites/webappclitests4194\",\"repositorySiteName\":\"webappclitests4194\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"webappclitests4194.azurewebsites.net\",\"webappclitests4194.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"webappclitests4194.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"webappclitests4194.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":null,\"serverFarmId\":\"/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg19641/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests2742\",\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-08-31T21:30:14.8\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"webappclitests4194\",\"trafficManagerHostNames\":null,\"sku\":\"Standard\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"40.112.143.127,40.112.139.230,40.112.138.193,40.112.141.127\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-041\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":null,\"resourceGroup\":\"testrg19641\",\"defaultHostName\":\"webappclitests4194.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2465',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D203CEDCB28900"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e71dddc9-409b-4641-a9cd-4056352dde0c',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14879',
  'x-ms-correlation-request-id': '30ae0ce9-5f85-43d5-bfe7-dd58649f4d2a',
  'x-ms-routing-request-id': 'CENTRALUS:20160831T213017Z:30ae0ce9-5f85-43d5-bfe7-dd58649f4d2a',
  date: 'Wed, 31 Aug 2016 21:30:17 GMT',
  connection: 'close' });
 return result; }]];