// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=http;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>true</Write><Delete>false</Delete><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>true</IncludeAPIs><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /><DefaultServiceVersion>2013-08-15</DefaultServiceVersion></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c75d0fbe-0001-0024-15ab-9e0f49000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:23 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'aa02f426-0001-004c-32ab-9e5118000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:24 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>true</Write><Delete>false</Delete><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>true</IncludeAPIs><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>500</MaxAgeInSeconds></CorsRule></Cors><DefaultServiceVersion>2013-08-15</DefaultServiceVersion></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'efbddad3-0001-0038-6bab-9ed75e000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:24 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>false</Write><Delete>true</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>false</IncludeAPIs><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b7437817-0002-000f-74ab-9e7bf1000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:24 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2e0de409-0002-0037-38ab-9e3aa8000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:25 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>false</Write><Delete>true</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>false</IncludeAPIs><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>500</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>501</MaxAgeInSeconds></CorsRule></Cors></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  vary: 'Origin',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2287750e-0002-004b-15ab-9ea79d000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:26 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.queue.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>true</Write><Delete>true</Delete><RetentionPolicy><Enabled>true</Enabled><Days>5</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '89b7975d-0003-0023-05ab-9ef9cc000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:26 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.queue.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '84e334ec-0003-004a-4aab-9ea660000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.queue.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>true</Write><Delete>true</Delete><RetentionPolicy><Enabled>true</Enabled><Days>5</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></MinuteMetrics><Cors><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>500</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>501</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>502</MaxAgeInSeconds></CorsRule></Cors></StorageServiceProperties>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  vary: 'Origin',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '71aae192-0003-0022-0bab-9ef831000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '97b892c1-001a-0036-1bab-9e3b55000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c3060655-001a-000e-34ab-9e7a0c000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Cors><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>500</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>501</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>502</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>503</MaxAgeInSeconds></CorsRule></Cors></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  vary: 'Origin',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a5dadd3f-001a-000d-65ab-9e790b000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:31 GMT' });
 return result; }]];