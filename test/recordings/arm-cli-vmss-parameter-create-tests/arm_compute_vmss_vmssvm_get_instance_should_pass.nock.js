// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addEnvironment(new profile.Environment({
    name: 'BrazilUSCloud',
    portalUrl: 'http://go.microsoft.com/fwlink/?LinkId=254433',
    publishingProfileUrl: 'http://go.microsoft.com/fwlink/?LinkId=254432',
    managementEndpointUrl: 'https://management.core.windows.net',
    resourceManagerEndpointUrl: 'https://brazilus.management.azure.com/',
    sqlManagementEndpointUrl: 'https://management.core.windows.net:8443/',
    hostNameSuffix: 'undefined',
    sqlServerHostNameSuffix: '.database.windows.net',
    activeDirectoryEndpointUrl: 'https://login.microsoftonline.com',
    commonTenantName: 'undefined',
    storageEndpoint: 'undefined',
    galleryEndpointUrl: 'https://gallery.azure.com/'
  }));

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['BrazilUSCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://brazilus.management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate8014/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/0/instanceView?api-version=2016-03-30')
  .reply(200, "{\r\n  \"platformUpdateDomain\": 3,\r\n  \"platformFaultDomain\": 2,\r\n  \"vmAgent\": {\r\n    \"vmAgentVersion\": \"2.7.1198.735\",\r\n    \"statuses\": [\r\n      {\r\n        \"code\": \"ProvisioningState/succeeded\",\r\n        \"level\": \"Info\",\r\n        \"displayStatus\": \"Ready\",\r\n        \"message\": \"GuestAgent is running and accepting new configurations.\",\r\n        \"time\": \"2016-04-09T17:05:56+00:00\"\r\n      }\r\n    ],\r\n    \"extensionHandlers\": [\r\n      {\r\n        \"type\": \"Microsoft.Compute.BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"status\": {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Ready\",\r\n          \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n        }\r\n      },\r\n      {\r\n        \"type\": \"Microsoft.Compute.VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.0.2\",\r\n        \"status\": {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Ready\"\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"disks\": [\r\n    {\r\n      \"name\": \"test-os-0-50a7599c48004aa89ff62ba8ed83c8c4\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"time\": \"2016-04-09T17:04:52.7916993+00:00\"\r\n        }\r\n      ]\r\n    }\r\n  ],\r\n  \"extensions\": [\r\n    {\r\n      \"name\": \"test\",\r\n      \"type\": \"Microsoft.Compute.VMAccessAgent\",\r\n      \"typeHandlerVersion\": \"2.0.2\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Succesfully updated build-in Admin account and enabled Remote Desktop connection to the machine\"\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      \"name\": \"test1\",\r\n      \"type\": \"Microsoft.Compute.BGInfo\",\r\n      \"typeHandlerVersion\": \"2.1\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n        }\r\n      ]\r\n    }\r\n  ],\r\n  \"statuses\": [\r\n    {\r\n      \"code\": \"ProvisioningState/succeeded\",\r\n      \"level\": \"Info\",\r\n      \"displayStatus\": \"Provisioning succeeded\",\r\n      \"time\": \"2016-04-09T17:05:33.557403+00:00\"\r\n    },\r\n    {\r\n      \"code\": \"PowerState/running\",\r\n      \"level\": \"Info\",\r\n      \"displayStatus\": \"VM running\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2525',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '7dba11b2-8bcb-443b-83f9-9a64f3d89ad8',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '520d7706-3f86-465f-a457-bcaa5f988a13',
  'x-ms-routing-request-id': 'BRAZILUS:20160409T170602Z:520d7706-3f86-465f-a457-bcaa5f988a13',
  date: 'Sat, 09 Apr 2016 17:06:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://brazilus.management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate8014/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/0/instanceView?api-version=2016-03-30')
  .reply(200, "{\r\n  \"platformUpdateDomain\": 3,\r\n  \"platformFaultDomain\": 2,\r\n  \"vmAgent\": {\r\n    \"vmAgentVersion\": \"2.7.1198.735\",\r\n    \"statuses\": [\r\n      {\r\n        \"code\": \"ProvisioningState/succeeded\",\r\n        \"level\": \"Info\",\r\n        \"displayStatus\": \"Ready\",\r\n        \"message\": \"GuestAgent is running and accepting new configurations.\",\r\n        \"time\": \"2016-04-09T17:05:56+00:00\"\r\n      }\r\n    ],\r\n    \"extensionHandlers\": [\r\n      {\r\n        \"type\": \"Microsoft.Compute.BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"status\": {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Ready\",\r\n          \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n        }\r\n      },\r\n      {\r\n        \"type\": \"Microsoft.Compute.VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.0.2\",\r\n        \"status\": {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Ready\"\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"disks\": [\r\n    {\r\n      \"name\": \"test-os-0-50a7599c48004aa89ff62ba8ed83c8c4\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"time\": \"2016-04-09T17:04:52.7916993+00:00\"\r\n        }\r\n      ]\r\n    }\r\n  ],\r\n  \"extensions\": [\r\n    {\r\n      \"name\": \"test\",\r\n      \"type\": \"Microsoft.Compute.VMAccessAgent\",\r\n      \"typeHandlerVersion\": \"2.0.2\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Succesfully updated build-in Admin account and enabled Remote Desktop connection to the machine\"\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      \"name\": \"test1\",\r\n      \"type\": \"Microsoft.Compute.BGInfo\",\r\n      \"typeHandlerVersion\": \"2.1\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n        }\r\n      ]\r\n    }\r\n  ],\r\n  \"statuses\": [\r\n    {\r\n      \"code\": \"ProvisioningState/succeeded\",\r\n      \"level\": \"Info\",\r\n      \"displayStatus\": \"Provisioning succeeded\",\r\n      \"time\": \"2016-04-09T17:05:33.557403+00:00\"\r\n    },\r\n    {\r\n      \"code\": \"PowerState/running\",\r\n      \"level\": \"Info\",\r\n      \"displayStatus\": \"VM running\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2525',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '7dba11b2-8bcb-443b-83f9-9a64f3d89ad8',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '520d7706-3f86-465f-a457-bcaa5f988a13',
  'x-ms-routing-request-id': 'BRAZILUS:20160409T170602Z:520d7706-3f86-465f-a457-bcaa5f988a13',
  date: 'Sat, 09 Apr 2016 17:06:02 GMT',
  connection: 'close' });
 return result; }]];