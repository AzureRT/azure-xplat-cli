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
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/providers/Microsoft.Authorization/providerOperations/Microsoft.OperationalInsights?api-version=2015-07-01&$expand=resourceTypes')
  .reply(200, "{\"displayName\":\"Microsoft Operational Insights\",\"operations\":[],\"resourceTypes\":[{\"name\":\"linkTargets\",\"displayName\":\"Unlinked Account\",\"operations\":[{\"name\":\"Microsoft.OperationalInsights/linkTargets/read\",\"displayName\":\"List Unlinked Accounts\",\"description\":\"Lists existing accounts that are not associated with an Azure subscription. To link this Azure subscription to a workspace, use a customer id returned by this operation in the customer id property of the Create Workspace operation.\",\"origin\":null,\"properties\":null}]},{\"name\":\"workspaces\",\"displayName\":\"Workspace\",\"operations\":[{\"name\":\"Microsoft.OperationalInsights/workspaces/write\",\"displayName\":\"Create Workspace\",\"description\":\"Creates a new workspace or links to an existing workspace by providing the customer id from the existing workspace.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.OperationalInsights/workspaces/read\",\"displayName\":\"Get Workspace\",\"description\":\"Gets an existing workspace\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.OperationalInsights/workspaces/delete\",\"displayName\":\"Delete Workspace\",\"description\":\"Deletes a workspace. If the workspace was linked to an existing workspace at creation time then the workspace it was linked to is not deleted.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.OperationalInsights/workspaces/generateregistrationcertificate/action\",\"displayName\":\"Generates Registration Certificate for Workspace.\",\"description\":\"Generates Registration Certificate for the workspace. This Certificate is used to connect Microsoft System Center Operation Manager to the workspace.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.OperationalInsights/workspaces/sharedKeys/action\",\"displayName\":\"List Workspace Shared Keys\",\"description\":\"Retrieves the shared keys for the workspace. These keys are used to connect Microsoft Operational Insights agents to the workspace.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.OperationalInsights/workspaces/search/action\",\"displayName\":\"Search Workspace Data\",\"description\":\"Executes a search query\",\"origin\":null,\"properties\":null}]},{\"name\":\"workspaces/managementGroups\",\"displayName\":\"Management Group\",\"operations\":[{\"name\":\"Microsoft.OperationalInsights/workspaces/managementGroups/read\",\"displayName\":\"Get Management Groups for Workspace\",\"description\":\"Gets the names and metadata for System Center Operations Manager management groups connected to this workspace.\",\"origin\":null,\"properties\":null}]},{\"name\":\"workspaces/schema\",\"displayName\":\"Search Schema\",\"operations\":[{\"name\":\"Microsoft.OperationalInsights/workspaces/schema/read\",\"displayName\":\"Get Search Schema\",\"description\":\"Gets the search schema for the workspace.  Search schema includes the exposed fields and their types.\",\"origin\":null,\"properties\":null}]},{\"name\":\"workspaces/usages\",\"displayName\":\"Usage Metric\",\"operations\":[{\"name\":\"Microsoft.OperationalInsights/workspaces/usages/read\",\"displayName\":\"Get Usage Data for Workspace\",\"description\":\"Gets usage data for a workspace including the amount of data read by the workspace.\",\"origin\":null,\"properties\":null}]},{\"name\":\"workspaces/intelligencepacks\",\"displayName\":\"Intelligence Packs\",\"operations\":[{\"name\":\"Microsoft.OperationalInsights/workspaces/intelligencepacks/read\",\"displayName\":\"List Intelligence Packs\",\"description\":\"Lists all intelligence packs that are visible for a given worksapce and also lists whether the pack is enabled or disabled for that workspace.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.OperationalInsights/workspaces/intelligencepacks/enable/action\",\"displayName\":\"Enable Intelligence Pack\",\"description\":\"Enables an intelligence pack for a given workspace.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.OperationalInsights/workspaces/intelligencepacks/disable/action\",\"displayName\":\"Disable Intelligence Pack\",\"description\":\"Disables an intelligence pack for a given workspace.\",\"origin\":null,\"properties\":null}]},{\"name\":\"workspaces/savedSearches\",\"displayName\":\"Saved Search\",\"operations\":[{\"name\":\"Microsoft.OperationalInsights/workspaces/savedSearches/read\",\"displayName\":\"Get Saved Search\",\"description\":\"Gets a saved search query\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.OperationalInsights/workspaces/savedSearches/write\",\"displayName\":\"Create Saved Search\",\"description\":\"Creates a saved search query\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.OperationalInsights/workspaces/savedSearches/delete\",\"displayName\":\"Delete Saved Search\",\"description\":\"Deletes a saved search query\",\"origin\":null,\"properties\":null}]},{\"name\":\"workspaces/storageinsightconfigs\",\"displayName\":\"Storage Insight Configuration\",\"operations\":[{\"name\":\"Microsoft.OperationalInsights/workspaces/storageinsightconfigs/write\",\"displayName\":\"Create Storage Configuration\",\"description\":\"Creates a new storage configuration. These configurations are used to pull data from a location in an existing storage account.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.OperationalInsights/workspaces/storageinsightconfigs/read\",\"displayName\":\"Get Storage Configuration\",\"description\":\"Gets a storage configuration.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.OperationalInsights/workspaces/storageinsightconfigs/delete\",\"displayName\":\"Delete Storage Configuration\",\"description\":\"Deletes a storage configuration. This will stop Microsoft Operational Insights from reading data from the storage account.\",\"origin\":null,\"properties\":null}]}],\"id\":\"/providers/Microsoft.Authorization/providerOperations/Microsoft.OperationalInsights\",\"type\":\"Microsoft.Authorization/providerOperations\",\"name\":\"Microsoft.OperationalInsights\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5688',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '99a11f52-5de3-49d6-83d4-d44238674b45',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-reads': '14999',
  'x-ms-correlation-request-id': '4a11f225-179a-409f-a9cb-ebdedeed4c07',
  'x-ms-routing-request-id': 'WESTUS:20160130T015559Z:4a11f225-179a-409f-a9cb-ebdedeed4c07',
  date: 'Sat, 30 Jan 2016 01:55:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/providers/Microsoft.Authorization/providerOperations/Microsoft.OperationalInsights?api-version=2015-07-01&$expand=resourceTypes')
  .reply(200, "{\"displayName\":\"Microsoft Operational Insights\",\"operations\":[],\"resourceTypes\":[{\"name\":\"linkTargets\",\"displayName\":\"Unlinked Account\",\"operations\":[{\"name\":\"Microsoft.OperationalInsights/linkTargets/read\",\"displayName\":\"List Unlinked Accounts\",\"description\":\"Lists existing accounts that are not associated with an Azure subscription. To link this Azure subscription to a workspace, use a customer id returned by this operation in the customer id property of the Create Workspace operation.\",\"origin\":null,\"properties\":null}]},{\"name\":\"workspaces\",\"displayName\":\"Workspace\",\"operations\":[{\"name\":\"Microsoft.OperationalInsights/workspaces/write\",\"displayName\":\"Create Workspace\",\"description\":\"Creates a new workspace or links to an existing workspace by providing the customer id from the existing workspace.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.OperationalInsights/workspaces/read\",\"displayName\":\"Get Workspace\",\"description\":\"Gets an existing workspace\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.OperationalInsights/workspaces/delete\",\"displayName\":\"Delete Workspace\",\"description\":\"Deletes a workspace. If the workspace was linked to an existing workspace at creation time then the workspace it was linked to is not deleted.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.OperationalInsights/workspaces/generateregistrationcertificate/action\",\"displayName\":\"Generates Registration Certificate for Workspace.\",\"description\":\"Generates Registration Certificate for the workspace. This Certificate is used to connect Microsoft System Center Operation Manager to the workspace.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.OperationalInsights/workspaces/sharedKeys/action\",\"displayName\":\"List Workspace Shared Keys\",\"description\":\"Retrieves the shared keys for the workspace. These keys are used to connect Microsoft Operational Insights agents to the workspace.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.OperationalInsights/workspaces/search/action\",\"displayName\":\"Search Workspace Data\",\"description\":\"Executes a search query\",\"origin\":null,\"properties\":null}]},{\"name\":\"workspaces/managementGroups\",\"displayName\":\"Management Group\",\"operations\":[{\"name\":\"Microsoft.OperationalInsights/workspaces/managementGroups/read\",\"displayName\":\"Get Management Groups for Workspace\",\"description\":\"Gets the names and metadata for System Center Operations Manager management groups connected to this workspace.\",\"origin\":null,\"properties\":null}]},{\"name\":\"workspaces/schema\",\"displayName\":\"Search Schema\",\"operations\":[{\"name\":\"Microsoft.OperationalInsights/workspaces/schema/read\",\"displayName\":\"Get Search Schema\",\"description\":\"Gets the search schema for the workspace.  Search schema includes the exposed fields and their types.\",\"origin\":null,\"properties\":null}]},{\"name\":\"workspaces/usages\",\"displayName\":\"Usage Metric\",\"operations\":[{\"name\":\"Microsoft.OperationalInsights/workspaces/usages/read\",\"displayName\":\"Get Usage Data for Workspace\",\"description\":\"Gets usage data for a workspace including the amount of data read by the workspace.\",\"origin\":null,\"properties\":null}]},{\"name\":\"workspaces/intelligencepacks\",\"displayName\":\"Intelligence Packs\",\"operations\":[{\"name\":\"Microsoft.OperationalInsights/workspaces/intelligencepacks/read\",\"displayName\":\"List Intelligence Packs\",\"description\":\"Lists all intelligence packs that are visible for a given worksapce and also lists whether the pack is enabled or disabled for that workspace.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.OperationalInsights/workspaces/intelligencepacks/enable/action\",\"displayName\":\"Enable Intelligence Pack\",\"description\":\"Enables an intelligence pack for a given workspace.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.OperationalInsights/workspaces/intelligencepacks/disable/action\",\"displayName\":\"Disable Intelligence Pack\",\"description\":\"Disables an intelligence pack for a given workspace.\",\"origin\":null,\"properties\":null}]},{\"name\":\"workspaces/savedSearches\",\"displayName\":\"Saved Search\",\"operations\":[{\"name\":\"Microsoft.OperationalInsights/workspaces/savedSearches/read\",\"displayName\":\"Get Saved Search\",\"description\":\"Gets a saved search query\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.OperationalInsights/workspaces/savedSearches/write\",\"displayName\":\"Create Saved Search\",\"description\":\"Creates a saved search query\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.OperationalInsights/workspaces/savedSearches/delete\",\"displayName\":\"Delete Saved Search\",\"description\":\"Deletes a saved search query\",\"origin\":null,\"properties\":null}]},{\"name\":\"workspaces/storageinsightconfigs\",\"displayName\":\"Storage Insight Configuration\",\"operations\":[{\"name\":\"Microsoft.OperationalInsights/workspaces/storageinsightconfigs/write\",\"displayName\":\"Create Storage Configuration\",\"description\":\"Creates a new storage configuration. These configurations are used to pull data from a location in an existing storage account.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.OperationalInsights/workspaces/storageinsightconfigs/read\",\"displayName\":\"Get Storage Configuration\",\"description\":\"Gets a storage configuration.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.OperationalInsights/workspaces/storageinsightconfigs/delete\",\"displayName\":\"Delete Storage Configuration\",\"description\":\"Deletes a storage configuration. This will stop Microsoft Operational Insights from reading data from the storage account.\",\"origin\":null,\"properties\":null}]}],\"id\":\"/providers/Microsoft.Authorization/providerOperations/Microsoft.OperationalInsights\",\"type\":\"Microsoft.Authorization/providerOperations\",\"name\":\"Microsoft.OperationalInsights\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5688',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '99a11f52-5de3-49d6-83d4-d44238674b45',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-reads': '14999',
  'x-ms-correlation-request-id': '4a11f225-179a-409f-a9cb-ebdedeed4c07',
  'x-ms-routing-request-id': 'WESTUS:20160130T015559Z:4a11f225-179a-409f-a9cb-ebdedeed4c07',
  date: 'Sat, 30 Jan 2016 01:55:58 GMT',
  connection: 'close' });
 return result; }]];
