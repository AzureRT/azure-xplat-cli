// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e0b81f36-36ba-44f7-b550-7c9344a35893',
    name: 'IOTHUB_PERF_1',
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
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestiothubrg';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259\",\"name\":\"xplattestiothub3259\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{\"t1\":\"v1\"},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABQ+wo=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub3259.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":50,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1614',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-request-id': 'f51b5556-10be-4901-8920-c3375fccffa1',
  'x-ms-correlation-request-id': 'f51b5556-10be-4901-8920-c3375fccffa1',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235705Z:f51b5556-10be-4901-8920-c3375fccffa1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:57:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259\",\"name\":\"xplattestiothub3259\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{\"t1\":\"v1\"},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABQ+wo=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub3259.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":50,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1614',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-request-id': 'f51b5556-10be-4901-8920-c3375fccffa1',
  'x-ms-correlation-request-id': 'f51b5556-10be-4901-8920-c3375fccffa1',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235705Z:f51b5556-10be-4901-8920-c3375fccffa1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:57:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/listkeys?api-version=2016-02-03')
  .reply(200, "{\"value\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"5ANtGn1Sko+9pMg6mFq04wLO6FRq+xRUKjOe77rLvg8=\",\"secondaryKey\":\"O1KvAst4fwbPt2IK8NfLkBdm4pNGhgF6zKxtKtVxxXE=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"Nsb/9tKpfE8ztKCeDqq7bL3uBVQd022H4aBk/phXeWo=\",\"secondaryKey\":\"lUZULVLjL51jBcoyTLbyCKWO92GIjmnIPre6UDr2R9U=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"Z1apjqy+/gTk2bB+VH3Z8eatXhZoUmdcHf7wyHGw4Rk=\",\"secondaryKey\":\"GLOWclfdRCWrbw9zZhHtvZ1XbOxOZVeDd7K06nhpz0U=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"HKEfrr7MQ8cwQS9vFVZUKOwUXfC01CJv9BX0TnzsZrM=\",\"secondaryKey\":\"8fU2imFmyhyxWlZ7dF//e7JscdHUQJ5bHHvXzskZ99I=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"dzBcYS8V5oMEzqZqAeYSQom+cpEr3hO6bvv1fanLZ10=\",\"secondaryKey\":\"ZXK3FcKjrzWpX+VzNjD7Eghdcs44xQejxvXMBFgyXU0=\",\"rights\":\"RegistryWrite\"},{\"keyName\":\"key1\",\"primaryKey\":\"S0SOuWarOV68luVtIxHbwEUpqcYSn61qksAbDAiS41Q=\",\"secondaryKey\":\"hpY6x31lcdqEMhVd17PiX0mkCLRpdPEOd2ikGuD9QO4=\",\"rights\":\"ServiceConnect\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1072',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-request-id': 'f9862d1d-13f2-4489-8c92-3ca2e061cab9',
  'x-ms-correlation-request-id': 'f9862d1d-13f2-4489-8c92-3ca2e061cab9',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235706Z:f9862d1d-13f2-4489-8c92-3ca2e061cab9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:57:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/listkeys?api-version=2016-02-03')
  .reply(200, "{\"value\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"5ANtGn1Sko+9pMg6mFq04wLO6FRq+xRUKjOe77rLvg8=\",\"secondaryKey\":\"O1KvAst4fwbPt2IK8NfLkBdm4pNGhgF6zKxtKtVxxXE=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"Nsb/9tKpfE8ztKCeDqq7bL3uBVQd022H4aBk/phXeWo=\",\"secondaryKey\":\"lUZULVLjL51jBcoyTLbyCKWO92GIjmnIPre6UDr2R9U=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"Z1apjqy+/gTk2bB+VH3Z8eatXhZoUmdcHf7wyHGw4Rk=\",\"secondaryKey\":\"GLOWclfdRCWrbw9zZhHtvZ1XbOxOZVeDd7K06nhpz0U=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"HKEfrr7MQ8cwQS9vFVZUKOwUXfC01CJv9BX0TnzsZrM=\",\"secondaryKey\":\"8fU2imFmyhyxWlZ7dF//e7JscdHUQJ5bHHvXzskZ99I=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"dzBcYS8V5oMEzqZqAeYSQom+cpEr3hO6bvv1fanLZ10=\",\"secondaryKey\":\"ZXK3FcKjrzWpX+VzNjD7Eghdcs44xQejxvXMBFgyXU0=\",\"rights\":\"RegistryWrite\"},{\"keyName\":\"key1\",\"primaryKey\":\"S0SOuWarOV68luVtIxHbwEUpqcYSn61qksAbDAiS41Q=\",\"secondaryKey\":\"hpY6x31lcdqEMhVd17PiX0mkCLRpdPEOd2ikGuD9QO4=\",\"rights\":\"ServiceConnect\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1072',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-request-id': 'f9862d1d-13f2-4489-8c92-3ca2e061cab9',
  'x-ms-correlation-request-id': 'f9862d1d-13f2-4489-8c92-3ca2e061cab9',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235706Z:f9862d1d-13f2-4489-8c92-3ca2e061cab9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:57:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259?api-version=2016-02-03', '*')
  .reply(201, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259\",\"name\":\"xplattestiothub3259\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{\"t1\":\"v1\"},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABQ+wo=\",\"properties\":{\"provisioningState\":\"Accepted\",\"authorizationPolicies\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"5ANtGn1Sko+9pMg6mFq04wLO6FRq+xRUKjOe77rLvg8=\",\"secondaryKey\":\"O1KvAst4fwbPt2IK8NfLkBdm4pNGhgF6zKxtKtVxxXE=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"Nsb/9tKpfE8ztKCeDqq7bL3uBVQd022H4aBk/phXeWo=\",\"secondaryKey\":\"lUZULVLjL51jBcoyTLbyCKWO92GIjmnIPre6UDr2R9U=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"Z1apjqy+/gTk2bB+VH3Z8eatXhZoUmdcHf7wyHGw4Rk=\",\"secondaryKey\":\"GLOWclfdRCWrbw9zZhHtvZ1XbOxOZVeDd7K06nhpz0U=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"HKEfrr7MQ8cwQS9vFVZUKOwUXfC01CJv9BX0TnzsZrM=\",\"secondaryKey\":\"8fU2imFmyhyxWlZ7dF//e7JscdHUQJ5bHHvXzskZ99I=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"dzBcYS8V5oMEzqZqAeYSQom+cpEr3hO6bvv1fanLZ10=\",\"secondaryKey\":\"ZXK3FcKjrzWpX+VzNjD7Eghdcs44xQejxvXMBFgyXU0=\",\"rights\":\"RegistryWrite\"}],\"hostName\":\"xplattestiothub3259.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":50,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2516',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/operationResults/ZTZlOTY5MWEtOGUwNS00MzNkLTliMWEtYjZmYWQ4OGM1MDdk?api-version=2016-02-03&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '4998',
  'x-ms-request-id': '78cfdad6-4d5d-41c8-8f6d-2e2de3e35ad6',
  'x-ms-correlation-request-id': '78cfdad6-4d5d-41c8-8f6d-2e2de3e35ad6',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235707Z:78cfdad6-4d5d-41c8-8f6d-2e2de3e35ad6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:57:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259?api-version=2016-02-03', '*')
  .reply(201, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259\",\"name\":\"xplattestiothub3259\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{\"t1\":\"v1\"},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABQ+wo=\",\"properties\":{\"provisioningState\":\"Accepted\",\"authorizationPolicies\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"5ANtGn1Sko+9pMg6mFq04wLO6FRq+xRUKjOe77rLvg8=\",\"secondaryKey\":\"O1KvAst4fwbPt2IK8NfLkBdm4pNGhgF6zKxtKtVxxXE=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"Nsb/9tKpfE8ztKCeDqq7bL3uBVQd022H4aBk/phXeWo=\",\"secondaryKey\":\"lUZULVLjL51jBcoyTLbyCKWO92GIjmnIPre6UDr2R9U=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"Z1apjqy+/gTk2bB+VH3Z8eatXhZoUmdcHf7wyHGw4Rk=\",\"secondaryKey\":\"GLOWclfdRCWrbw9zZhHtvZ1XbOxOZVeDd7K06nhpz0U=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"HKEfrr7MQ8cwQS9vFVZUKOwUXfC01CJv9BX0TnzsZrM=\",\"secondaryKey\":\"8fU2imFmyhyxWlZ7dF//e7JscdHUQJ5bHHvXzskZ99I=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"dzBcYS8V5oMEzqZqAeYSQom+cpEr3hO6bvv1fanLZ10=\",\"secondaryKey\":\"ZXK3FcKjrzWpX+VzNjD7Eghdcs44xQejxvXMBFgyXU0=\",\"rights\":\"RegistryWrite\"}],\"hostName\":\"xplattestiothub3259.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":50,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2516',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/operationResults/ZTZlOTY5MWEtOGUwNS00MzNkLTliMWEtYjZmYWQ4OGM1MDdk?api-version=2016-02-03&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '4998',
  'x-ms-request-id': '78cfdad6-4d5d-41c8-8f6d-2e2de3e35ad6',
  'x-ms-correlation-request-id': '78cfdad6-4d5d-41c8-8f6d-2e2de3e35ad6',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235707Z:78cfdad6-4d5d-41c8-8f6d-2e2de3e35ad6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:57:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/operationResults/ZTZlOTY5MWEtOGUwNS00MzNkLTliMWEtYjZmYWQ4OGM1MDdk?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-request-id': 'dd83abb9-bce6-4f36-99ff-2f01fc054ead',
  'x-ms-correlation-request-id': 'dd83abb9-bce6-4f36-99ff-2f01fc054ead',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235738Z:dd83abb9-bce6-4f36-99ff-2f01fc054ead',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:57:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/operationResults/ZTZlOTY5MWEtOGUwNS00MzNkLTliMWEtYjZmYWQ4OGM1MDdk?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-request-id': 'dd83abb9-bce6-4f36-99ff-2f01fc054ead',
  'x-ms-correlation-request-id': 'dd83abb9-bce6-4f36-99ff-2f01fc054ead',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235738Z:dd83abb9-bce6-4f36-99ff-2f01fc054ead',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:57:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259\",\"name\":\"xplattestiothub3259\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{\"t1\":\"v1\"},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABQ+xE=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub3259.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":50,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1614',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-request-id': 'a046edb2-0ca2-4c0d-9423-b7d477f87822',
  'x-ms-correlation-request-id': 'a046edb2-0ca2-4c0d-9423-b7d477f87822',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235738Z:a046edb2-0ca2-4c0d-9423-b7d477f87822',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:57:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259\",\"name\":\"xplattestiothub3259\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{\"t1\":\"v1\"},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABQ+xE=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub3259.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":50,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1614',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-request-id': 'a046edb2-0ca2-4c0d-9423-b7d477f87822',
  'x-ms-correlation-request-id': 'a046edb2-0ca2-4c0d-9423-b7d477f87822',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235738Z:a046edb2-0ca2-4c0d-9423-b7d477f87822',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:57:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/IotHubKeys/key1/listkeys?api-version=2016-02-03')
  .reply(404, "{\"Code\":\"KeyNameNotFound\",\"HttpStatusCode\":\"NotFound\",\"Message\":\"Key name not found: key1. If you contact a support representative please include this correlation identifier: c8436e1c-a453-4b62-aa35-9149a386066a, timestamp: 2016-08-09 23:57:36Z, errorcode: IH404001.\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '268',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '74903613-45b5-4e00-99b5-53f80358bda2',
  'x-ms-correlation-request-id': '74903613-45b5-4e00-99b5-53f80358bda2',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235739Z:74903613-45b5-4e00-99b5-53f80358bda2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:57:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/IotHubKeys/key1/listkeys?api-version=2016-02-03')
  .reply(404, "{\"Code\":\"KeyNameNotFound\",\"HttpStatusCode\":\"NotFound\",\"Message\":\"Key name not found: key1. If you contact a support representative please include this correlation identifier: c8436e1c-a453-4b62-aa35-9149a386066a, timestamp: 2016-08-09 23:57:36Z, errorcode: IH404001.\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '268',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '74903613-45b5-4e00-99b5-53f80358bda2',
  'x-ms-correlation-request-id': '74903613-45b5-4e00-99b5-53f80358bda2',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235739Z:74903613-45b5-4e00-99b5-53f80358bda2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:57:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/listkeys?api-version=2016-02-03')
  .reply(200, "{\"value\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"5ANtGn1Sko+9pMg6mFq04wLO6FRq+xRUKjOe77rLvg8=\",\"secondaryKey\":\"O1KvAst4fwbPt2IK8NfLkBdm4pNGhgF6zKxtKtVxxXE=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"Nsb/9tKpfE8ztKCeDqq7bL3uBVQd022H4aBk/phXeWo=\",\"secondaryKey\":\"lUZULVLjL51jBcoyTLbyCKWO92GIjmnIPre6UDr2R9U=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"Z1apjqy+/gTk2bB+VH3Z8eatXhZoUmdcHf7wyHGw4Rk=\",\"secondaryKey\":\"GLOWclfdRCWrbw9zZhHtvZ1XbOxOZVeDd7K06nhpz0U=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"HKEfrr7MQ8cwQS9vFVZUKOwUXfC01CJv9BX0TnzsZrM=\",\"secondaryKey\":\"8fU2imFmyhyxWlZ7dF//e7JscdHUQJ5bHHvXzskZ99I=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"dzBcYS8V5oMEzqZqAeYSQom+cpEr3hO6bvv1fanLZ10=\",\"secondaryKey\":\"ZXK3FcKjrzWpX+VzNjD7Eghdcs44xQejxvXMBFgyXU0=\",\"rights\":\"RegistryWrite\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '905',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': '918f49f6-237c-4a5d-9e7c-4c16427615d9',
  'x-ms-correlation-request-id': '918f49f6-237c-4a5d-9e7c-4c16427615d9',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235740Z:918f49f6-237c-4a5d-9e7c-4c16427615d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:57:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/listkeys?api-version=2016-02-03')
  .reply(200, "{\"value\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"5ANtGn1Sko+9pMg6mFq04wLO6FRq+xRUKjOe77rLvg8=\",\"secondaryKey\":\"O1KvAst4fwbPt2IK8NfLkBdm4pNGhgF6zKxtKtVxxXE=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"Nsb/9tKpfE8ztKCeDqq7bL3uBVQd022H4aBk/phXeWo=\",\"secondaryKey\":\"lUZULVLjL51jBcoyTLbyCKWO92GIjmnIPre6UDr2R9U=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"Z1apjqy+/gTk2bB+VH3Z8eatXhZoUmdcHf7wyHGw4Rk=\",\"secondaryKey\":\"GLOWclfdRCWrbw9zZhHtvZ1XbOxOZVeDd7K06nhpz0U=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"HKEfrr7MQ8cwQS9vFVZUKOwUXfC01CJv9BX0TnzsZrM=\",\"secondaryKey\":\"8fU2imFmyhyxWlZ7dF//e7JscdHUQJ5bHHvXzskZ99I=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"dzBcYS8V5oMEzqZqAeYSQom+cpEr3hO6bvv1fanLZ10=\",\"secondaryKey\":\"ZXK3FcKjrzWpX+VzNjD7Eghdcs44xQejxvXMBFgyXU0=\",\"rights\":\"RegistryWrite\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '905',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': '918f49f6-237c-4a5d-9e7c-4c16427615d9',
  'x-ms-correlation-request-id': '918f49f6-237c-4a5d-9e7c-4c16427615d9',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235740Z:918f49f6-237c-4a5d-9e7c-4c16427615d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:57:39 GMT',
  connection: 'close' });
 return result; }]];