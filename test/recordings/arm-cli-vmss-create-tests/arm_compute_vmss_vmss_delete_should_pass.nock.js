// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

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
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate9292/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/0990fe57-b481-472b-8f7d-aa45b1d049c8?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/0990fe57-b481-472b-8f7d-aa45b1d049c8?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': '0990fe57-b481-472b-8f7d-aa45b1d049c8',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1186',
  'x-ms-correlation-request-id': '8321c69a-a025-47a7-9591-db22efc21031',
  'x-ms-routing-request-id': 'WESTUS:20151113T184158Z:8321c69a-a025-47a7-9591-db22efc21031',
  date: 'Fri, 13 Nov 2015 18:41:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate9292/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/0990fe57-b481-472b-8f7d-aa45b1d049c8?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/0990fe57-b481-472b-8f7d-aa45b1d049c8?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': '0990fe57-b481-472b-8f7d-aa45b1d049c8',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1186',
  'x-ms-correlation-request-id': '8321c69a-a025-47a7-9591-db22efc21031',
  'x-ms-routing-request-id': 'WESTUS:20151113T184158Z:8321c69a-a025-47a7-9591-db22efc21031',
  date: 'Fri, 13 Nov 2015 18:41:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/0990fe57-b481-472b-8f7d-aa45b1d049c8?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"0990fe57-b481-472b-8f7d-aa45b1d049c8\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-11-13T18:41:58.5573995+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': 'a5f1ceb8-e1ce-4be2-b164-daae9382d649',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '0c02e49e-dd49-45f1-a995-48235930ee72',
  'x-ms-routing-request-id': 'WESTUS:20151113T184229Z:0c02e49e-dd49-45f1-a995-48235930ee72',
  date: 'Fri, 13 Nov 2015 18:42:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/0990fe57-b481-472b-8f7d-aa45b1d049c8?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"0990fe57-b481-472b-8f7d-aa45b1d049c8\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-11-13T18:41:58.5573995+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': 'a5f1ceb8-e1ce-4be2-b164-daae9382d649',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '0c02e49e-dd49-45f1-a995-48235930ee72',
  'x-ms-routing-request-id': 'WESTUS:20151113T184229Z:0c02e49e-dd49-45f1-a995-48235930ee72',
  date: 'Fri, 13 Nov 2015 18:42:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/0990fe57-b481-472b-8f7d-aa45b1d049c8?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"0990fe57-b481-472b-8f7d-aa45b1d049c8\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-11-13T18:41:58.5573995+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': '24f8c419-993f-4acf-a00c-f6959b9b48eb',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': 'b72c08ec-0da1-4565-b856-2e7f9cc2e4f1',
  'x-ms-routing-request-id': 'WESTUS:20151113T184300Z:b72c08ec-0da1-4565-b856-2e7f9cc2e4f1',
  date: 'Fri, 13 Nov 2015 18:42:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/0990fe57-b481-472b-8f7d-aa45b1d049c8?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"0990fe57-b481-472b-8f7d-aa45b1d049c8\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-11-13T18:41:58.5573995+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': '24f8c419-993f-4acf-a00c-f6959b9b48eb',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': 'b72c08ec-0da1-4565-b856-2e7f9cc2e4f1',
  'x-ms-routing-request-id': 'WESTUS:20151113T184300Z:b72c08ec-0da1-4565-b856-2e7f9cc2e4f1',
  date: 'Fri, 13 Nov 2015 18:42:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/0990fe57-b481-472b-8f7d-aa45b1d049c8?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"0990fe57-b481-472b-8f7d-aa45b1d049c8\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-11-13T18:41:58.5573995+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': 'c5e1cb40-2c44-4a4c-ab91-c542737e4c33',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14967',
  'x-ms-correlation-request-id': '4953d172-da15-4f18-a2f3-945905513eb5',
  'x-ms-routing-request-id': 'WESTUS:20151113T184331Z:4953d172-da15-4f18-a2f3-945905513eb5',
  date: 'Fri, 13 Nov 2015 18:43:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/0990fe57-b481-472b-8f7d-aa45b1d049c8?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"0990fe57-b481-472b-8f7d-aa45b1d049c8\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-11-13T18:41:58.5573995+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': 'c5e1cb40-2c44-4a4c-ab91-c542737e4c33',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14967',
  'x-ms-correlation-request-id': '4953d172-da15-4f18-a2f3-945905513eb5',
  'x-ms-routing-request-id': 'WESTUS:20151113T184331Z:4953d172-da15-4f18-a2f3-945905513eb5',
  date: 'Fri, 13 Nov 2015 18:43:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/0990fe57-b481-472b-8f7d-aa45b1d049c8?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"0990fe57-b481-472b-8f7d-aa45b1d049c8\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-11-13T18:41:58.5573995+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': '2d3a62ed-3fbc-4375-8983-90b9d3b9a670',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '555cd179-b351-4aeb-8aa8-4d3fa5acb5fb',
  'x-ms-routing-request-id': 'WESTUS:20151113T184402Z:555cd179-b351-4aeb-8aa8-4d3fa5acb5fb',
  date: 'Fri, 13 Nov 2015 18:44:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/0990fe57-b481-472b-8f7d-aa45b1d049c8?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"0990fe57-b481-472b-8f7d-aa45b1d049c8\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-11-13T18:41:58.5573995+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': '2d3a62ed-3fbc-4375-8983-90b9d3b9a670',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '555cd179-b351-4aeb-8aa8-4d3fa5acb5fb',
  'x-ms-routing-request-id': 'WESTUS:20151113T184402Z:555cd179-b351-4aeb-8aa8-4d3fa5acb5fb',
  date: 'Fri, 13 Nov 2015 18:44:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token?api-version=1.0', '*')
  .reply(400, "{\"error\":\"invalid_request\",\"error_description\":\"AADSTS90014: The request body must contain the following parameter: 'refresh_token'.\\r\\nTrace ID: ee9b5fdb-400b-4c8d-b4ac-7e4d678b788b\\r\\nCorrelation ID: cde9696d-dfc6-4d39-898d-07866f7a5fb9\\r\\nTimestamp: 2015-11-13 18:44:32Z\",\"error_codes\":[90014],\"timestamp\":\"2015-11-13 18:44:32Z\",\"trace_id\":\"ee9b5fdb-400b-4c8d-b4ac-7e4d678b788b\",\"correlation_id\":\"cde9696d-dfc6-4d39-898d-07866f7a5fb9\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'ee9b5fdb-400b-4c8d-b4ac-7e4d678b788b',
  'client-request-id': 'cde9696d-dfc6-4d39-898d-07866f7a5fb9',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_69',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 13 Nov 2015 18:44:31 GMT',
  connection: 'close',
  'content-length': '438' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token?api-version=1.0', '*')
  .reply(400, "{\"error\":\"invalid_request\",\"error_description\":\"AADSTS90014: The request body must contain the following parameter: 'refresh_token'.\\r\\nTrace ID: ee9b5fdb-400b-4c8d-b4ac-7e4d678b788b\\r\\nCorrelation ID: cde9696d-dfc6-4d39-898d-07866f7a5fb9\\r\\nTimestamp: 2015-11-13 18:44:32Z\",\"error_codes\":[90014],\"timestamp\":\"2015-11-13 18:44:32Z\",\"trace_id\":\"ee9b5fdb-400b-4c8d-b4ac-7e4d678b788b\",\"correlation_id\":\"cde9696d-dfc6-4d39-898d-07866f7a5fb9\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'ee9b5fdb-400b-4c8d-b4ac-7e4d678b788b',
  'client-request-id': 'cde9696d-dfc6-4d39-898d-07866f7a5fb9',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_69',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 13 Nov 2015 18:44:31 GMT',
  connection: 'close',
  'content-length': '438' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1447443873\",\"not_before\":\"1447439973\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDQ3NDM5OTczLCJuYmYiOjE0NDc0Mzk5NzMsImV4cCI6MTQ0NzQ0Mzg3MywiYXBwaWQiOiIzNGIzYjgxYy1hOGFkLTQ4YzEtODY3MC04Yjk2ZjUzYmVmODkiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwib2lkIjoiMmY5YTc0MGYtNzllMi00MjVlLThmN2MtZTRmYWVkNzBiNWE4Iiwic3ViIjoiMmY5YTc0MGYtNzllMi00MjVlLThmN2MtZTRmYWVkNzBiNWE4IiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwidmVyIjoiMS4wIn0.UfmyKUu7xPbruMVf6anMn-uSvJo6GiOuu8-2OJazfF0yBXdLtMYAdGRAADTSPbcm7cfJqvvnu2r-ZsIsjpoqKzXQ-Q7eGDekjxzAqHXIIwwqNCLuFvhQ-zz0NhLiim5g2Voe-8p1FN_MUJscSkI19LPGivIKPvCUiSntqBAMrjEoXLLLNK8hKnQ6WbJYAQ-xhl8WqVovxtwa2o16-uEKF3U8cT3v9kVy5GJnc6qxLJnRE7B1o7FqIURTKTV-mKPoB7Ywpu9bV7mNT6R_ArUFZFPSR0QpkSNv9YJ9SrEsHNKYIqyjDhRQ65av4ATJKFxs0TbvKpeVVIHvsMQsejsQzA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '62700f10-b106-4b44-95d5-33b8b197ebbb',
  'client-request-id': 'cde9696d-dfc6-4d39-898d-07866f7a5fb9',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_436',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 13 Nov 2015 18:44:31 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1447443873\",\"not_before\":\"1447439973\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDQ3NDM5OTczLCJuYmYiOjE0NDc0Mzk5NzMsImV4cCI6MTQ0NzQ0Mzg3MywiYXBwaWQiOiIzNGIzYjgxYy1hOGFkLTQ4YzEtODY3MC04Yjk2ZjUzYmVmODkiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwib2lkIjoiMmY5YTc0MGYtNzllMi00MjVlLThmN2MtZTRmYWVkNzBiNWE4Iiwic3ViIjoiMmY5YTc0MGYtNzllMi00MjVlLThmN2MtZTRmYWVkNzBiNWE4IiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwidmVyIjoiMS4wIn0.UfmyKUu7xPbruMVf6anMn-uSvJo6GiOuu8-2OJazfF0yBXdLtMYAdGRAADTSPbcm7cfJqvvnu2r-ZsIsjpoqKzXQ-Q7eGDekjxzAqHXIIwwqNCLuFvhQ-zz0NhLiim5g2Voe-8p1FN_MUJscSkI19LPGivIKPvCUiSntqBAMrjEoXLLLNK8hKnQ6WbJYAQ-xhl8WqVovxtwa2o16-uEKF3U8cT3v9kVy5GJnc6qxLJnRE7B1o7FqIURTKTV-mKPoB7Ywpu9bV7mNT6R_ArUFZFPSR0QpkSNv9YJ9SrEsHNKYIqyjDhRQ65av4ATJKFxs0TbvKpeVVIHvsMQsejsQzA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '62700f10-b106-4b44-95d5-33b8b197ebbb',
  'client-request-id': 'cde9696d-dfc6-4d39-898d-07866f7a5fb9',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_436',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 13 Nov 2015 18:44:31 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/0990fe57-b481-472b-8f7d-aa45b1d049c8?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"0990fe57-b481-472b-8f7d-aa45b1d049c8\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2015-11-13T18:41:58.5573995+00:00\",\r\n  \"endTime\": \"2015-11-13T18:44:31.9326275+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': 'b58171df-fa35-4735-8377-a2173b83fec8',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'x-ms-correlation-request-id': '935ac6d0-2abb-426d-ba80-a5403b50de91',
  'x-ms-routing-request-id': 'WESTUS:20151113T184433Z:935ac6d0-2abb-426d-ba80-a5403b50de91',
  date: 'Fri, 13 Nov 2015 18:44:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/0990fe57-b481-472b-8f7d-aa45b1d049c8?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"0990fe57-b481-472b-8f7d-aa45b1d049c8\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2015-11-13T18:41:58.5573995+00:00\",\r\n  \"endTime\": \"2015-11-13T18:44:31.9326275+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': 'b58171df-fa35-4735-8377-a2173b83fec8',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'x-ms-correlation-request-id': '935ac6d0-2abb-426d-ba80-a5403b50de91',
  'x-ms-routing-request-id': 'WESTUS:20151113T184433Z:935ac6d0-2abb-426d-ba80-a5403b50de91',
  date: 'Fri, 13 Nov 2015 18:44:33 GMT',
  connection: 'close' });
 return result; }]];