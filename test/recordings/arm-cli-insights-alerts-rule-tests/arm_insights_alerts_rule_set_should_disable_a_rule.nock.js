// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'b67f7fec-69fc-4974-9099-a26bd6ffeda3',
    name: 'Monitoring vNext Test Environment Services 02',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    registeredResourceNamespaces: [],
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
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourcegroups/mytestrg005/providers/microsoft.insights/alertrules/chiricutin?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/mytestrg005/providers/microsoft.insights/alertrules/chiricutin\",\"name\":\"chiricutin\",\"type\":\"Microsoft.Insights/alertRules\",\"location\":\"East US\",\"tags\":{\"$type\":\"Microsoft.WindowsAzure.Management.Common.Storage.CasePreservedDictionary, Microsoft.WindowsAzure.Management.Common.Storage\",\"hidden-link:/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/mytestrg005/providers/Microsoft.Web/sites/mytestweb005\":\"Resource\"},\"properties\":{\"name\":\"chiricutin\",\"description\":\"Pura vida\",\"isEnabled\":true,\"condition\":{\"$type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition, Microsoft.WindowsAzure.Management.Mon.Client\",\"odata.type\":\"Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition\",\"dataSource\":{\"$type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource, Microsoft.WindowsAzure.Management.Mon.Client\",\"odata.type\":\"Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource\",\"resourceUri\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/mytestrg005/providers/Microsoft.Web/sites/mytestweb005\",\"metricName\":\"Requests\"},\"threshold\":2.0,\"windowSize\":\"PT5M\",\"timeAggregation\":\"Total\"},\"action\":{\"$type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction, Microsoft.WindowsAzure.Management.Mon.Client\",\"odata.type\":\"Microsoft.Azure.Management.Insights.Models.RuleEmailAction\",\"customEmails\":[]},\"lastUpdatedTime\":\"2015-04-16T21:30:11.5834628Z\",\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1587',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'ce9ed823-9658-4d5e-bca8-8a261d042522',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-writes': '1171',
  'x-ms-correlation-request-id': '589dec1c-0037-4fc5-997e-c47c6471afd4',
  'x-ms-routing-request-id': 'WESTUS:20150416T213011Z:589dec1c-0037-4fc5-997e-c47c6471afd4',
  date: 'Thu, 16 Apr 2015 21:30:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourcegroups/mytestrg005/providers/microsoft.insights/alertrules/chiricutin?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/mytestrg005/providers/microsoft.insights/alertrules/chiricutin\",\"name\":\"chiricutin\",\"type\":\"Microsoft.Insights/alertRules\",\"location\":\"East US\",\"tags\":{\"$type\":\"Microsoft.WindowsAzure.Management.Common.Storage.CasePreservedDictionary, Microsoft.WindowsAzure.Management.Common.Storage\",\"hidden-link:/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/mytestrg005/providers/Microsoft.Web/sites/mytestweb005\":\"Resource\"},\"properties\":{\"name\":\"chiricutin\",\"description\":\"Pura vida\",\"isEnabled\":true,\"condition\":{\"$type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition, Microsoft.WindowsAzure.Management.Mon.Client\",\"odata.type\":\"Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition\",\"dataSource\":{\"$type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource, Microsoft.WindowsAzure.Management.Mon.Client\",\"odata.type\":\"Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource\",\"resourceUri\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/mytestrg005/providers/Microsoft.Web/sites/mytestweb005\",\"metricName\":\"Requests\"},\"threshold\":2.0,\"windowSize\":\"PT5M\",\"timeAggregation\":\"Total\"},\"action\":{\"$type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction, Microsoft.WindowsAzure.Management.Mon.Client\",\"odata.type\":\"Microsoft.Azure.Management.Insights.Models.RuleEmailAction\",\"customEmails\":[]},\"lastUpdatedTime\":\"2015-04-16T21:30:11.5834628Z\",\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1587',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'ce9ed823-9658-4d5e-bca8-8a261d042522',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-writes': '1171',
  'x-ms-correlation-request-id': '589dec1c-0037-4fc5-997e-c47c6471afd4',
  'x-ms-routing-request-id': 'WESTUS:20150416T213011Z:589dec1c-0037-4fc5-997e-c47c6471afd4',
  date: 'Thu, 16 Apr 2015 21:30:11 GMT',
  connection: 'close' });
 return result; }]];
