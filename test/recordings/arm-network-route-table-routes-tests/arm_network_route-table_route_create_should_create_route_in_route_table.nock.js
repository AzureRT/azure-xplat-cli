// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-route-table-routes?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-route-table-routes' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '5ffc7cf1-958b-466c-bd49-e873c915ea61',
  'x-ms-correlation-request-id': '5ffc7cf1-958b-466c-bd49-e873c915ea61',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T090830Z:5ffc7cf1-958b-466c-bd49-e873c915ea61',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 16 Feb 2016 09:08:30 GMT',
  connection: 'close',
  'content-length': '121' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-route-table-routes?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-route-table-routes' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '5ffc7cf1-958b-466c-bd49-e873c915ea61',
  'x-ms-correlation-request-id': '5ffc7cf1-958b-466c-bd49-e873c915ea61',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T090830Z:5ffc7cf1-958b-466c-bd49-e873c915ea61',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 16 Feb 2016 09:08:30 GMT',
  connection: 'close',
  'content-length': '121' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-route-table-routes?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes\",\"name\":\"xplat-test-route-table-routes\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '221',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '35baa8c7-99d4-43fa-96b2-746bcdd7a2e4',
  'x-ms-correlation-request-id': '35baa8c7-99d4-43fa-96b2-746bcdd7a2e4',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T090832Z:35baa8c7-99d4-43fa-96b2-746bcdd7a2e4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 16 Feb 2016 09:08:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-route-table-routes?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes\",\"name\":\"xplat-test-route-table-routes\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '221',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '35baa8c7-99d4-43fa-96b2-746bcdd7a2e4',
  'x-ms-correlation-request-id': '35baa8c7-99d4-43fa-96b2-746bcdd7a2e4',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T090832Z:35baa8c7-99d4-43fa-96b2-746bcdd7a2e4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 16 Feb 2016 09:08:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/test-route-table' under resource group 'xplat-test-route-table-routes' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '73238167-4db7-4295-a15c-acb1f63dd139',
  'x-ms-correlation-request-id': '73238167-4db7-4295-a15c-acb1f63dd139',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T090834Z:73238167-4db7-4295-a15c-acb1f63dd139',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 16 Feb 2016 09:08:34 GMT',
  connection: 'close',
  'content-length': '179' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/test-route-table' under resource group 'xplat-test-route-table-routes' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '73238167-4db7-4295-a15c-acb1f63dd139',
  'x-ms-correlation-request-id': '73238167-4db7-4295-a15c-acb1f63dd139',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T090834Z:73238167-4db7-4295-a15c-acb1f63dd139',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 16 Feb 2016 09:08:34 GMT',
  connection: 'close',
  'content-length': '179' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"e78b5699-fba0-4c0b-bf91-24fd271567ee\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"5d7f8ac8-9ab7-4216-8706-87a8f547ae23\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '468',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd64b40a2-7680-452a-a867-388aa0df998d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/d64b40a2-7680-452a-a867-388aa0df998d?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '91764020-78a0-4354-9afd-f4af56fcd0f2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T090839Z:91764020-78a0-4354-9afd-f4af56fcd0f2',
  date: 'Tue, 16 Feb 2016 09:08:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"e78b5699-fba0-4c0b-bf91-24fd271567ee\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"5d7f8ac8-9ab7-4216-8706-87a8f547ae23\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '468',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd64b40a2-7680-452a-a867-388aa0df998d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/d64b40a2-7680-452a-a867-388aa0df998d?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '91764020-78a0-4354-9afd-f4af56fcd0f2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T090839Z:91764020-78a0-4354-9afd-f4af56fcd0f2',
  date: 'Tue, 16 Feb 2016 09:08:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"scope\":\"user_impersonation\",\"expires_on\":\"1455617349\",\"not_before\":\"1455613449\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDU1NjEzNDQ5LCJuYmYiOjE0NTU2MTM0NDksImV4cCI6MTQ1NTYxNzM0OSwiYWNyIjoiMSIsImFtciI6WyJyc2EiLCJtZmEiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6Ikdyb21vdiIsImdpdmVuX25hbWUiOiJSb21hbiIsImdyb3VwcyI6WyI3YzhhY2I0Yy1kYTNlLTQ3OGUtYWE5Mi1lYzJmZDM1OGY5MmQiLCJjYzlmOGE2Yy1lOWMxLTRlMzQtOWVhMC0yYzE1MWRmYTYzZmIiLCJhMzQ2OWQ1ZC04NTNhLTQ5MmItOTY1Zi1mZWQ3YWMyODU5NWEiLCJkNzVlYzI2ZC0wZjNhLTQ1NDItYTk0MS1jNzI2N2ZlZTQ2M2QiLCI2Y2VkMmZkNS05MzEwLTQ3ZjctYjYwYy01MjdjZTliNzcxZWUiLCJiMGMyNDE0Mi04ZTVjLTQwZDYtYjUzYy1hMDIwYWIwZjUxODMiLCJkYzAzMWFlYS1lM2Q3LTQ1NTktYWQ5Yy0wMzdlYWE0Y2JiNjgiLCJiZThjYTM3OC1iYzc0LTQ2YzEtYjkyMi1lN2Y1NTI0ODZlZGUiLCI2NTA4ZWQ5Yy1kZTUxLTQ3ZmYtOGEwNy0zY2RhNzViY2Q0MDAiLCIzMzRiYzEzYy1mMGE4LTQ0NjItYWVhMy1mNTJiYTE0MjE4ODUiLCJhNzEwMjY4ZC01MWE5LTQ0NDctYmYyMC01YzQyOGZkNzA0N2MiLCI5MzI5ZDM4Yy01Mjk2LTRlY2ItYWZhNS0zZTc0ZjlhYmUwOWYiLCI2MmVkYmQ3Yi04ZDQ2LTRkMmMtYTVhMS1kYTViNzhiYTFkMzgiLCIzYzRmY2U0Ni01M2M5LTQ5ZjctOWJjYy1lOTk3ZGM1NjhjMDkiLCJmNDQ0NGRhZS00YmNlLTQwMmYtYjU0Yi1mMTI0NjFhMzZiYmMiLCJkN2QzOWZlNS1lN2ViLTQ3OTctYmQ0Yi1lODAyZThmYTI2Y2MiLCI5ZDUyOWQ1ZS1iODgyLTRmZmItYThlNi1jNDE0N2M2ODA3MzUiLCJlNzZhYjMxZS1kZDU4LTQwZTItYTdjMS0zZWJiMDI5MjEyMTEiLCIyY2MxODc1ZS1lM2ZiLTQxZWEtODM3Mi1iNTY5MGU4Yzk0MjEiLCIwMmNkNmYxZi0zMDI5LTQyMzgtOWZkYy1iMGYyOWI2ODRmNzUiLCIzYmM4YWE3ZC00OWM4LTRkN2QtOWY5Zi05MzcwZGZiZjdiNzgiLCI2MWQ5YmM2Yi1iYzlkLTRlOGQtOWRlNC1mMjE4ZDQxMjhiZTUiLCIyMDY1MTM1ZC01MTY1LTQxZDYtOTI3Ny04ZTE0OWZjMzNlZjgiLCJjODM1ZDVkMC1mMDQzLTRjYzAtOGNjZS02MDFhNjE5NjhmMWYiLCIwZDg2NDY3Ni03ZjU1LTQ2OTQtOTBmMi01Yjc1ZWI3N2IzNDIiLCJkY2MzMWIzOS1lN2ZlLTQwMGMtYWY4NC0zMWRkODU1ZGVmYTEiXSwiaW5fY29ycCI6InRydWUiLCJpcGFkZHIiOiIxNzguMjAuMTgzLjE5NCIsIm5hbWUiOiJSb21hbiBHcm9tb3YgKEFrdmVsb24pIiwib2lkIjoiZWFhMTY2NTQtMmU3Mi00MmFlLWJhMzktZTY4OWNmMWY1YTdmIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTIxNDY3NzMwODUtOTAzMzYzMjg1LTcxOTM0NDcwNy0xOTk0OTMxIiwicHVpZCI6IjEwMDM3RkZFOEVDRDlEMDIiLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiI0RlNjUmUwaTlETU4zcTNpUlNsSDF2ODRPR3NfWGM1bUUxWlJ6T1JVRFFvIiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwidW5pcXVlX25hbWUiOiJ2LXJvZ3JvbUBtaWNyb3NvZnQuY29tIiwidXBuIjoidi1yb2dyb21AbWljcm9zb2Z0LmNvbSIsInZlciI6IjEuMCJ9.DRyOa84_PYwbdn4qK59x1e17FStc94TV0EkKuukw8dsS7TRq80nT64vR4sQOXDibuQ6FElVLOuVzMnNyh0V1dtS-iiXHdh4vhIjziN8EY3HqrNi4raQ_UecfJaFJjuzXjS1ifOIyk5xJip40-t-bRQpkULVLMw21vZzzsJ2GM1GYnz-xfadr7SiGm6Pf1I5viSXmnlhHtq2Q1JeuBT7E1lntn-DBDzZoulbeFChjoTjtdA3K_ENadg87U25YOJ4etll0tK5D8lmOluKUUpS7OA3ViK3AmOY23jI7w5_xZ2CfhL2pI7qb9STfMw-Fj1-Wjpr0HpHIJQGvmOqMChV8Bw\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLUnT0sO0Q4-ROYDMiLJJ1vgie155dXYj5uz8z2EhRkufdStSqvb6yEigf7EVXMrzWkFIl4sqrWjxaDe1P-Flb_oM3MTcVqaENl-3aUC2qPdg0Odse348u2rG2e-w1Y2IqtbQWo3K6vDMBnLzM5YvjZO18AsvpEKVgWNa_IBkQ_NM6GixW3sqmmGsnl85-Jc6x5nCbYNJCHOAhwcsUNn-AGRur1yAC-M1tqty1JU-fQ8w0rLX7jKVT8RByTOaDiv8-wVG2l79Fxs8dkaTwrCGucjq7icjWtx2JKyeXzqFlE82D985WodmJRB1pvRbWgrZ5ZEo30BSmi1khBoWNWgXUSOjsyn5B9zsJGxM28hlLqMsYHIB8wbGZ28YYyS7Pp-Wwi6Ke_Rxr_-Vxqy4GsxejvRxe7MMHguY5Ss1OfAxF6CrN9uKe_DGildMXIzeEgXB5slwKQd-QgG8gbQyj9EFDQWsAOlTSlN76KbBUvokEDgnvOqRX5gGhjd-4EKCw76Dx2WzdvSFvudaSWMZ_QKP_DwORmN3vh4F_X5H0tLddGpENdyAhcq3dLhICzvdzrwclc_FxYjX6dQauk0HWppBZV0qS5fOycfZlcN-BHl6580OEJpAeuUX7BSq3tGeb87N2x-5b2KoCny7zjEFX8B03KNivG77s2ZFJ1_ft5xGV8LpzcQlt5ESIRcR-j_n1KqUACAA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'dd8107e3-ecad-479d-a702-31526a1939ac',
  'client-request-id': 'f45edd37-79c0-4860-aec7-d551175660a1',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_277',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 16 Feb 2016 09:09:08 GMT',
  connection: 'close',
  'content-length': '3747' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"scope\":\"user_impersonation\",\"expires_on\":\"1455617349\",\"not_before\":\"1455613449\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDU1NjEzNDQ5LCJuYmYiOjE0NTU2MTM0NDksImV4cCI6MTQ1NTYxNzM0OSwiYWNyIjoiMSIsImFtciI6WyJyc2EiLCJtZmEiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6Ikdyb21vdiIsImdpdmVuX25hbWUiOiJSb21hbiIsImdyb3VwcyI6WyI3YzhhY2I0Yy1kYTNlLTQ3OGUtYWE5Mi1lYzJmZDM1OGY5MmQiLCJjYzlmOGE2Yy1lOWMxLTRlMzQtOWVhMC0yYzE1MWRmYTYzZmIiLCJhMzQ2OWQ1ZC04NTNhLTQ5MmItOTY1Zi1mZWQ3YWMyODU5NWEiLCJkNzVlYzI2ZC0wZjNhLTQ1NDItYTk0MS1jNzI2N2ZlZTQ2M2QiLCI2Y2VkMmZkNS05MzEwLTQ3ZjctYjYwYy01MjdjZTliNzcxZWUiLCJiMGMyNDE0Mi04ZTVjLTQwZDYtYjUzYy1hMDIwYWIwZjUxODMiLCJkYzAzMWFlYS1lM2Q3LTQ1NTktYWQ5Yy0wMzdlYWE0Y2JiNjgiLCJiZThjYTM3OC1iYzc0LTQ2YzEtYjkyMi1lN2Y1NTI0ODZlZGUiLCI2NTA4ZWQ5Yy1kZTUxLTQ3ZmYtOGEwNy0zY2RhNzViY2Q0MDAiLCIzMzRiYzEzYy1mMGE4LTQ0NjItYWVhMy1mNTJiYTE0MjE4ODUiLCJhNzEwMjY4ZC01MWE5LTQ0NDctYmYyMC01YzQyOGZkNzA0N2MiLCI5MzI5ZDM4Yy01Mjk2LTRlY2ItYWZhNS0zZTc0ZjlhYmUwOWYiLCI2MmVkYmQ3Yi04ZDQ2LTRkMmMtYTVhMS1kYTViNzhiYTFkMzgiLCIzYzRmY2U0Ni01M2M5LTQ5ZjctOWJjYy1lOTk3ZGM1NjhjMDkiLCJmNDQ0NGRhZS00YmNlLTQwMmYtYjU0Yi1mMTI0NjFhMzZiYmMiLCJkN2QzOWZlNS1lN2ViLTQ3OTctYmQ0Yi1lODAyZThmYTI2Y2MiLCI5ZDUyOWQ1ZS1iODgyLTRmZmItYThlNi1jNDE0N2M2ODA3MzUiLCJlNzZhYjMxZS1kZDU4LTQwZTItYTdjMS0zZWJiMDI5MjEyMTEiLCIyY2MxODc1ZS1lM2ZiLTQxZWEtODM3Mi1iNTY5MGU4Yzk0MjEiLCIwMmNkNmYxZi0zMDI5LTQyMzgtOWZkYy1iMGYyOWI2ODRmNzUiLCIzYmM4YWE3ZC00OWM4LTRkN2QtOWY5Zi05MzcwZGZiZjdiNzgiLCI2MWQ5YmM2Yi1iYzlkLTRlOGQtOWRlNC1mMjE4ZDQxMjhiZTUiLCIyMDY1MTM1ZC01MTY1LTQxZDYtOTI3Ny04ZTE0OWZjMzNlZjgiLCJjODM1ZDVkMC1mMDQzLTRjYzAtOGNjZS02MDFhNjE5NjhmMWYiLCIwZDg2NDY3Ni03ZjU1LTQ2OTQtOTBmMi01Yjc1ZWI3N2IzNDIiLCJkY2MzMWIzOS1lN2ZlLTQwMGMtYWY4NC0zMWRkODU1ZGVmYTEiXSwiaW5fY29ycCI6InRydWUiLCJpcGFkZHIiOiIxNzguMjAuMTgzLjE5NCIsIm5hbWUiOiJSb21hbiBHcm9tb3YgKEFrdmVsb24pIiwib2lkIjoiZWFhMTY2NTQtMmU3Mi00MmFlLWJhMzktZTY4OWNmMWY1YTdmIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTIxNDY3NzMwODUtOTAzMzYzMjg1LTcxOTM0NDcwNy0xOTk0OTMxIiwicHVpZCI6IjEwMDM3RkZFOEVDRDlEMDIiLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiI0RlNjUmUwaTlETU4zcTNpUlNsSDF2ODRPR3NfWGM1bUUxWlJ6T1JVRFFvIiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwidW5pcXVlX25hbWUiOiJ2LXJvZ3JvbUBtaWNyb3NvZnQuY29tIiwidXBuIjoidi1yb2dyb21AbWljcm9zb2Z0LmNvbSIsInZlciI6IjEuMCJ9.DRyOa84_PYwbdn4qK59x1e17FStc94TV0EkKuukw8dsS7TRq80nT64vR4sQOXDibuQ6FElVLOuVzMnNyh0V1dtS-iiXHdh4vhIjziN8EY3HqrNi4raQ_UecfJaFJjuzXjS1ifOIyk5xJip40-t-bRQpkULVLMw21vZzzsJ2GM1GYnz-xfadr7SiGm6Pf1I5viSXmnlhHtq2Q1JeuBT7E1lntn-DBDzZoulbeFChjoTjtdA3K_ENadg87U25YOJ4etll0tK5D8lmOluKUUpS7OA3ViK3AmOY23jI7w5_xZ2CfhL2pI7qb9STfMw-Fj1-Wjpr0HpHIJQGvmOqMChV8Bw\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLUnT0sO0Q4-ROYDMiLJJ1vgie155dXYj5uz8z2EhRkufdStSqvb6yEigf7EVXMrzWkFIl4sqrWjxaDe1P-Flb_oM3MTcVqaENl-3aUC2qPdg0Odse348u2rG2e-w1Y2IqtbQWo3K6vDMBnLzM5YvjZO18AsvpEKVgWNa_IBkQ_NM6GixW3sqmmGsnl85-Jc6x5nCbYNJCHOAhwcsUNn-AGRur1yAC-M1tqty1JU-fQ8w0rLX7jKVT8RByTOaDiv8-wVG2l79Fxs8dkaTwrCGucjq7icjWtx2JKyeXzqFlE82D985WodmJRB1pvRbWgrZ5ZEo30BSmi1khBoWNWgXUSOjsyn5B9zsJGxM28hlLqMsYHIB8wbGZ28YYyS7Pp-Wwi6Ke_Rxr_-Vxqy4GsxejvRxe7MMHguY5Ss1OfAxF6CrN9uKe_DGildMXIzeEgXB5slwKQd-QgG8gbQyj9EFDQWsAOlTSlN76KbBUvokEDgnvOqRX5gGhjd-4EKCw76Dx2WzdvSFvudaSWMZ_QKP_DwORmN3vh4F_X5H0tLddGpENdyAhcq3dLhICzvdzrwclc_FxYjX6dQauk0HWppBZV0qS5fOycfZlcN-BHl6580OEJpAeuUX7BSq3tGeb87N2x-5b2KoCny7zjEFX8B03KNivG77s2ZFJ1_ft5xGV8LpzcQlt5ESIRcR-j_n1KqUACAA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'dd8107e3-ecad-479d-a702-31526a1939ac',
  'client-request-id': 'f45edd37-79c0-4860-aec7-d551175660a1',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_277',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 16 Feb 2016 09:09:08 GMT',
  connection: 'close',
  'content-length': '3747' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/d64b40a2-7680-452a-a867-388aa0df998d?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8dfa2682-4bf3-43da-b08a-d978e2b0cb84',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'c8c29409-5e52-48d7-b107-e497e33b9563',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T090911Z:c8c29409-5e52-48d7-b107-e497e33b9563',
  date: 'Tue, 16 Feb 2016 09:09:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/d64b40a2-7680-452a-a867-388aa0df998d?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8dfa2682-4bf3-43da-b08a-d978e2b0cb84',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'c8c29409-5e52-48d7-b107-e497e33b9563',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T090911Z:c8c29409-5e52-48d7-b107-e497e33b9563',
  date: 'Tue, 16 Feb 2016 09:09:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"396c614b-cff0-4ada-b442-b410b6e74de4\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"5d7f8ac8-9ab7-4216-8706-87a8f547ae23\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"396c614b-cff0-4ada-b442-b410b6e74de4"',
  'x-ms-request-id': '7e52d63a-7e63-4494-82be-a9869995c7f2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'cd0eb5bd-f156-4cf5-a0c1-e8610f242433',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T090912Z:cd0eb5bd-f156-4cf5-a0c1-e8610f242433',
  date: 'Tue, 16 Feb 2016 09:09:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"396c614b-cff0-4ada-b442-b410b6e74de4\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"5d7f8ac8-9ab7-4216-8706-87a8f547ae23\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"396c614b-cff0-4ada-b442-b410b6e74de4"',
  'x-ms-request-id': '7e52d63a-7e63-4494-82be-a9869995c7f2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'cd0eb5bd-f156-4cf5-a0c1-e8610f242433',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T090912Z:cd0eb5bd-f156-4cf5-a0c1-e8610f242433',
  date: 'Tue, 16 Feb 2016 09:09:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"396c614b-cff0-4ada-b442-b410b6e74de4\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"5d7f8ac8-9ab7-4216-8706-87a8f547ae23\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"396c614b-cff0-4ada-b442-b410b6e74de4"',
  'x-ms-request-id': 'c5f3d8d9-a402-4655-affb-0310d21db592',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'b17cd8bf-3885-4515-84a3-bfe6838f15f2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T090913Z:b17cd8bf-3885-4515-84a3-bfe6838f15f2',
  date: 'Tue, 16 Feb 2016 09:09:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"396c614b-cff0-4ada-b442-b410b6e74de4\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"5d7f8ac8-9ab7-4216-8706-87a8f547ae23\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"396c614b-cff0-4ada-b442-b410b6e74de4"',
  'x-ms-request-id': 'c5f3d8d9-a402-4655-affb-0310d21db592',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'b17cd8bf-3885-4515-84a3-bfe6838f15f2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T090913Z:b17cd8bf-3885-4515-84a3-bfe6838f15f2',
  date: 'Tue, 16 Feb 2016 09:09:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2015-06-15')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '278',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c39e3527-6d57-4cdc-9d9a-54ceb52f2fe7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '241f45dc-40d0-4f5f-ae3c-ed7fa0fd3156',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T090914Z:241f45dc-40d0-4f5f-ae3c-ed7fa0fd3156',
  date: 'Tue, 16 Feb 2016 09:09:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2015-06-15')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '278',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c39e3527-6d57-4cdc-9d9a-54ceb52f2fe7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '241f45dc-40d0-4f5f-ae3c-ed7fa0fd3156',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T090914Z:241f45dc-40d0-4f5f-ae3c-ed7fa0fd3156',
  date: 'Tue, 16 Feb 2016 09:09:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"test-route\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n  \"etag\": \"W/\\\"8e1cea32-066d-4347-97e7-fb611a6d1efb\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/24\",\r\n    \"nextHopType\": \"VirtualNetworkGateway\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '413',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '18ad870d-5f06-4ea6-9de0-0126f1efeaf8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/18ad870d-5f06-4ea6-9de0-0126f1efeaf8?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'a88f6fcd-9bb1-4bdb-88ab-40896548e111',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T090915Z:a88f6fcd-9bb1-4bdb-88ab-40896548e111',
  date: 'Tue, 16 Feb 2016 09:09:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"test-route\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n  \"etag\": \"W/\\\"8e1cea32-066d-4347-97e7-fb611a6d1efb\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/24\",\r\n    \"nextHopType\": \"VirtualNetworkGateway\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '413',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '18ad870d-5f06-4ea6-9de0-0126f1efeaf8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/18ad870d-5f06-4ea6-9de0-0126f1efeaf8?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'a88f6fcd-9bb1-4bdb-88ab-40896548e111',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T090915Z:a88f6fcd-9bb1-4bdb-88ab-40896548e111',
  date: 'Tue, 16 Feb 2016 09:09:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/18ad870d-5f06-4ea6-9de0-0126f1efeaf8?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e7432fbb-328c-47a4-83ca-558a8f35210e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '696a0b01-cccd-40a4-a2b4-e2ba70e24c39',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T090946Z:696a0b01-cccd-40a4-a2b4-e2ba70e24c39',
  date: 'Tue, 16 Feb 2016 09:09:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/18ad870d-5f06-4ea6-9de0-0126f1efeaf8?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e7432fbb-328c-47a4-83ca-558a8f35210e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '696a0b01-cccd-40a4-a2b4-e2ba70e24c39',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T090946Z:696a0b01-cccd-40a4-a2b4-e2ba70e24c39',
  date: 'Tue, 16 Feb 2016 09:09:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-route\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n  \"etag\": \"W/\\\"05ce85fb-70d9-46bd-b5f8-36cb045b4f4f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/24\",\r\n    \"nextHopType\": \"VirtualNetworkGateway\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '414',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"05ce85fb-70d9-46bd-b5f8-36cb045b4f4f"',
  'x-ms-request-id': 'b85535f8-00cb-4552-bd00-8b9e74549e16',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'd2ea284c-5fb9-4bcc-8c9d-b320e9bfd7c4',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T090947Z:d2ea284c-5fb9-4bcc-8c9d-b320e9bfd7c4',
  date: 'Tue, 16 Feb 2016 09:09:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-route\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n  \"etag\": \"W/\\\"05ce85fb-70d9-46bd-b5f8-36cb045b4f4f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/24\",\r\n    \"nextHopType\": \"VirtualNetworkGateway\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '414',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"05ce85fb-70d9-46bd-b5f8-36cb045b4f4f"',
  'x-ms-request-id': 'b85535f8-00cb-4552-bd00-8b9e74549e16',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'd2ea284c-5fb9-4bcc-8c9d-b320e9bfd7c4',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T090947Z:d2ea284c-5fb9-4bcc-8c9d-b320e9bfd7c4',
  date: 'Tue, 16 Feb 2016 09:09:47 GMT',
  connection: 'close' });
 return result; }]];
