// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'c9cbd920-c00c-427c-852b-8aaf38badaeb',
    name: 'Azure SDK Powershell Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_SQL_TEST_LOCATION'] = 'West US';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '0b353a72b61870adaf9ab79a76bf868c',
  date: 'Fri, 13 Mar 2015 03:49:08 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers', '*')
  .reply(201, "<ServerName FullyQualifiedDomainName=\"x5lf7leypy.database.windows.net\" xmlns=\"http://schemas.microsoft.com/sqlazure/2010/12/\">x5lf7leypy</ServerName>", { 'cache-control': 'no-cache',
  'content-length': '149',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '4c7362b8222d7acaa9a902f2e64b32fc',
  date: 'Fri, 13 Mar 2015 03:49:11 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'e7dd612c74dc705797d2e90bc9beea08',
  date: 'Fri, 13 Mar 2015 03:49:11 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/x5lf7leypy/firewallrules', '*')
  .reply(201, "<ServiceResource xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>dbrule</Name><Type>Microsoft.SqlAzure.FirewallRule</Type><State>Normal</State><SelfLink>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/x5lf7leypy/firewallrules/dbrule</SelfLink><ParentLink>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/x5lf7leypy</ParentLink><StartIPAddress>0.0.0.0</StartIPAddress><EndIPAddress>255.255.255.255</EndIPAddress></ServiceResource>", { 'cache-control': 'no-store,no-cache',
  'content-length': '594',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'd7a80f1ba13a761699a703325ae7c77f',
  date: 'Fri, 13 Mar 2015 03:49:13 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://x5lf7leypy.database.windows.net:443')
  .get('/v1/ManagementService.svc/GetAccessToken')
  .reply(200, "<string xmlns=\"http://schemas.microsoft.com/2003/10/Serialization/\">hl7r+aYXDebY4cwWhH0hTFVTpB35XwZoJuiDOAWFd6A25jAt3cw6Lr9OWi3FvQZyajys002A/jqU2MG/maQcjzs1Djv+o8ezCK492yHyDRtHJMCIc3bH4XrC3ozI5/76vT9CwwZQt/tzVKm5LOUpqNRyF53iWFFyWF1l0RW0x4z1DslF/j3QhkqWxTbulVf0UFys/sOZg37plJbxZS7zlo4+C5vrMXHn76AxdMtAEZlbgsW/du0F9LfcwNM2MFebKqD1htVkGCA846KDbUkYk2aZ/O3zZX0ekBoi5So/S7WZZNXVtggqvQ3Ggfq3RSJ/GCJSnM7AaxaReJIarR0Ell0X8s30qYTvzXLu93HX/d8DzKTRZYocXMk3voMV+A+dd/U6jPL4NF2bHStIgbPy1OyhwlTwMIYRrbIFACoSeJ0K5HAiNjNWgO1mRDHW4kattun/h4+XrM4ocSYjiN2vv6NYReN58u3s9k5NodtG9rMeXQoBdQlOHuBwrxl/AokPZ9A4ywIjtNoMPWeQ9z3o3lyRSSq/Br46DLCjA4RNpWAKRtQHV2CEnOIfHt5MLF7h5r6WnJT0OsnNLHmeKIy4n/kMErHRzjlqtpv984m0/f1RmWFe1nMSb0lgCVIwVZEibrGBx1yOW4LwLijz9hPcV/s8lfYUnmLpLnsRYpTjk+0Rt6wp1BbZP8aLZUILGAYVYR1wrIoTkLLttO3zbxartVTWiYIGka7eDArC38otzLaxHqpyuEpDc/HYXKwVtfM0T+XKpYtIGnYOicifjCQSLA==</string>", { 'cache-control': 'no-store,no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml; charset=utf-8',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '31fd39d6-768f-2714-761e-4f9d0d2a540b',
  'set-cookie': [ '.SQLSERVERMANAGEMENT=JysncHnFRmkNirTEcfJfIw==; path=/v1/ManagementService.svc; expires=13-Mar-2015 08:49:18 GMT; domain=.database.windows.net; httponly; secure' ],
  'x-content-type-options': 'nosniff',
  date: 'Fri, 13 Mar 2015 03:49:17 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://x5lf7leypy.database.windows.net:443')
  .get('/v1/ManagementService.svc/Server2(%27x5lf7leypy%27)/Databases')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\"?><feed xml:base=\"https://x5lf7leypy.database.windows.net/v1/ManagementService.svc/Server2('x5lf7leypy')/\" xmlns=\"http://www.w3.org/2005/Atom\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><id>https://x5lf7leypy.database.windows.net/v1/ManagementService.svc/Server2('x5lf7leypy')/Databases</id><title type=\"text\">Databases</title><updated>2015-03-13T03:49:19Z</updated><link rel=\"self\" title=\"Databases\" href=\"Databases\" /><entry><id>https://x5lf7leypy.database.windows.net/v1/ManagementService.svc/Server2('x5lf7leypy')/Databases(1)</id><category term=\"Microsoft.SqlServer.Management.Server.Domain.Database\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" /><link rel=\"edit\" title=\"Database\" href=\"Databases(1)\" /><link rel=\"http://schemas.microsoft.com/ado/2007/08/dataservices/related/Server\" type=\"application/atom+xml;type=entry\" title=\"Server\" href=\"Databases(1)/Server\" /><link rel=\"http://schemas.microsoft.com/ado/2007/08/dataservices/related/ServiceObjective\" type=\"application/atom+xml;type=entry\" title=\"ServiceObjective\" href=\"Databases(1)/ServiceObjective\" /><link rel=\"http://schemas.microsoft.com/ado/2007/08/dataservices/related/DatabaseMetrics\" type=\"application/atom+xml;type=entry\" title=\"DatabaseMetrics\" href=\"Databases(1)/DatabaseMetrics\" /><link rel=\"http://schemas.microsoft.com/ado/2007/08/dataservices/related/DatabaseCopies\" type=\"application/atom+xml;type=feed\" title=\"DatabaseCopies\" href=\"Databases(1)/DatabaseCopies\" /><title /><updated>2015-03-13T03:49:19Z</updated><author><name /></author><content type=\"application/xml\"><m:properties><d:Id m:type=\"Edm.Int32\">1</d:Id><d:Name>master</d:Name><d:ServiceObjectiveId m:type=\"Edm.Guid\">26e021db-f1f9-4c98-84c6-92af8ef433d7</d:ServiceObjectiveId><d:AssignedServiceObjectiveId m:type=\"Edm.Guid\">26e021db-f1f9-4c98-84c6-92af8ef433d7</d:AssignedServiceObjectiveId><d:ServiceObjectiveAssignmentState m:type=\"Edm.Byte\">1</d:ServiceObjectiveAssignmentState><d:ServiceObjectiveAssignmentStateDescription>Complete</d:ServiceObjectiveAssignmentStateDescription><d:ServiceObjectiveAssignmentErrorCode m:type=\"Edm.Int32\">0</d:ServiceObjectiveAssignmentErrorCode><d:ServiceObjectiveAssignmentErrorDescription m:null=\"true\" /><d:ServiceObjectiveAssignmentSuccessDate m:type=\"Edm.DateTime\">2015-03-13T03:49:11.517</d:ServiceObjectiveAssignmentSuccessDate><d:Edition>System</d:Edition><d:MaxSizeGB m:type=\"Edm.Int32\">5</d:MaxSizeGB><d:MaxSizeBytes m:type=\"Edm.Int64\">5368709120</d:MaxSizeBytes><d:CollationName>SQL_Latin1_General_CP1_CI_AS</d:CollationName><d:CreationDate m:type=\"Edm.DateTime\">2015-03-13T03:49:10.203</d:CreationDate><d:RecoveryPeriodStartDate m:type=\"Edm.DateTime\" m:null=\"true\" /><d:IsSystemObject m:type=\"Edm.Boolean\">true</d:IsSystemObject><d:Status m:type=\"Edm.Int32\">1</d:Status><d:IsFederationRoot m:type=\"Edm.Boolean\">false</d:IsFederationRoot><d:SizeMB m:type=\"Edm.Decimal\">-1.00</d:SizeMB><d:IsRecursiveTriggersOn m:type=\"Edm.Boolean\">false</d:IsRecursiveTriggersOn><d:IsReadOnly m:type=\"Edm.Boolean\">false</d:IsReadOnly><d:IsFederationMember m:type=\"Edm.Boolean\">false</d:IsFederationMember><d:IsQueryStoreOn m:type=\"Edm.Boolean\">false</d:IsQueryStoreOn><d:IsQueryStoreReadOnly m:type=\"Edm.Boolean\" m:null=\"true\" /><d:QueryStoreMaxSizeMB m:type=\"Edm.Int32\" m:null=\"true\" /><d:QueryStoreFlushPeriodSeconds m:type=\"Edm.Int32\" m:null=\"true\" /><d:QueryStoreIntervalLengthMinutes m:type=\"Edm.Int32\" m:null=\"true\" /><d:QueryStoreClearAll m:type=\"Edm.Boolean\" m:null=\"true\" /><d:QueryStoreStaleQueryThresholdDays m:type=\"Edm.Int32\" m:null=\"true\" /><d:IsSuspended m:type=\"Edm.Boolean\">false</d:IsSuspended></m:properties></content></entry></feed>", { 'cache-control': 'no-store,no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=feed;charset=utf-8',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '31fd39d6-768f-2714-761e-4f9d0d2a540b',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '2.0;',
  date: 'Fri, 13 Mar 2015 03:49:19 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '06a4c7933eb477529a3c288327d5da24',
  date: 'Fri, 13 Mar 2015 03:49:18 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/x5lf7leypy')
  .reply(200, "", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '0139ce6055ab7bc8923fd3f69ae2497a',
  date: 'Fri, 13 Mar 2015 03:49:20 GMT' });
 return result; }]];