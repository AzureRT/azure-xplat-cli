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
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/ApplicationGateways/CliTestAppGate/configuration?api-version=2015-04-01')
  .reply(200, "<ApplicationGatewayConfiguration xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><FrontendIPConfigurations><FrontendIPConfiguration><Name>fip1</Name><Type>Private</Type><StaticIPAddress>10.1.0.5</StaticIPAddress></FrontendIPConfiguration></FrontendIPConfigurations><FrontendPorts><FrontendPort><Name>fep1</Name><Port>80</Port></FrontendPort></FrontendPorts><BackendAddressPools><BackendAddressPool><Name>pool1</Name><IPAddresses><IPAddress>10.0.0.1</IPAddress></IPAddresses></BackendAddressPool><BackendAddressPool><Name>MyPool</Name><IPAddresses><IPAddress>10.0.0.2</IPAddress></IPAddresses></BackendAddressPool><BackendAddressPool><Name>clitestaddpool</Name><IPAddresses><IPAddress>10.0.0.10</IPAddress></IPAddresses></BackendAddressPool></BackendAddressPools><BackendHttpSettingsList><BackendHttpSettings><Name>setting1</Name><Port>80</Port><Protocol>Http</Protocol><CookieBasedAffinity>Enabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout></BackendHttpSettings><BackendHttpSettings><Name>MySettings</Name><Port>81</Port><Protocol>Http</Protocol><CookieBasedAffinity>Enabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout></BackendHttpSettings><BackendHttpSettings><Name>settings2</Name><Port>888</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout></BackendHttpSettings><BackendHttpSettings><Name>settings3</Name><Port>999</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout></BackendHttpSettings><BackendHttpSettings><Name>httpSetting</Name><Port>80</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout></BackendHttpSettings></BackendHttpSettingsList><HttpListeners><HttpListener><Name>listener1</Name><FrontendPort>fep1</FrontendPort><Protocol>Http</Protocol></HttpListener></HttpListeners><HttpLoadBalancingRules><HttpLoadBalancingRule><Name>rule1</Name><Type>Basic</Type><BackendHttpSettings>setting1</BackendHttpSettings><Listener>listener1</Listener><BackendAddressPool>pool1</BackendAddressPool></HttpLoadBalancingRule></HttpLoadBalancingRules></ApplicationGatewayConfiguration>", { 'cache-control': 'no-cache',
  'content-length': '2257',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.323 (rd_rdfe_stable.160224-0707) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '0e833847009972488dfd3a90e16eb7fe',
  date: 'Mon, 29 Feb 2016 11:49:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/ApplicationGateways/CliTestAppGate/configuration?api-version=2015-04-01')
  .reply(200, "<ApplicationGatewayConfiguration xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><FrontendIPConfigurations><FrontendIPConfiguration><Name>fip1</Name><Type>Private</Type><StaticIPAddress>10.1.0.5</StaticIPAddress></FrontendIPConfiguration></FrontendIPConfigurations><FrontendPorts><FrontendPort><Name>fep1</Name><Port>80</Port></FrontendPort></FrontendPorts><BackendAddressPools><BackendAddressPool><Name>pool1</Name><IPAddresses><IPAddress>10.0.0.1</IPAddress></IPAddresses></BackendAddressPool><BackendAddressPool><Name>MyPool</Name><IPAddresses><IPAddress>10.0.0.2</IPAddress></IPAddresses></BackendAddressPool><BackendAddressPool><Name>clitestaddpool</Name><IPAddresses><IPAddress>10.0.0.10</IPAddress></IPAddresses></BackendAddressPool></BackendAddressPools><BackendHttpSettingsList><BackendHttpSettings><Name>setting1</Name><Port>80</Port><Protocol>Http</Protocol><CookieBasedAffinity>Enabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout></BackendHttpSettings><BackendHttpSettings><Name>MySettings</Name><Port>81</Port><Protocol>Http</Protocol><CookieBasedAffinity>Enabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout></BackendHttpSettings><BackendHttpSettings><Name>settings2</Name><Port>888</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout></BackendHttpSettings><BackendHttpSettings><Name>settings3</Name><Port>999</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout></BackendHttpSettings><BackendHttpSettings><Name>httpSetting</Name><Port>80</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout></BackendHttpSettings></BackendHttpSettingsList><HttpListeners><HttpListener><Name>listener1</Name><FrontendPort>fep1</FrontendPort><Protocol>Http</Protocol></HttpListener></HttpListeners><HttpLoadBalancingRules><HttpLoadBalancingRule><Name>rule1</Name><Type>Basic</Type><BackendHttpSettings>setting1</BackendHttpSettings><Listener>listener1</Listener><BackendAddressPool>pool1</BackendAddressPool></HttpLoadBalancingRule></HttpLoadBalancingRules></ApplicationGatewayConfiguration>", { 'cache-control': 'no-cache',
  'content-length': '2257',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.323 (rd_rdfe_stable.160224-0707) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '0e833847009972488dfd3a90e16eb7fe',
  date: 'Mon, 29 Feb 2016 11:49:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/ApplicationGateways/CliTestAppGate/configuration?api-version=2015-04-01', '*')
  .reply(202, "<GatewayOperationAsyncResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>d449f19e-19d1-4a93-b0e4-24d8e6a048de</ID></GatewayOperationAsyncResponse>", { 'cache-control': 'no-cache',
  'content-length': '210',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.323 (rd_rdfe_stable.160224-0707) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'a7bfef3f401b703b889bee6a56b5f23b',
  date: 'Mon, 29 Feb 2016 11:49:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/ApplicationGateways/CliTestAppGate/configuration?api-version=2015-04-01', '*')
  .reply(202, "<GatewayOperationAsyncResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>d449f19e-19d1-4a93-b0e4-24d8e6a048de</ID></GatewayOperationAsyncResponse>", { 'cache-control': 'no-cache',
  'content-length': '210',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.323 (rd_rdfe_stable.160224-0707) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'a7bfef3f401b703b889bee6a56b5f23b',
  date: 'Mon, 29 Feb 2016 11:49:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/operation/d449f19e-19d1-4a93-b0e4-24d8e6a048de')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HealthStatus/><HttpStatusCode>OK</HttpStatusCode><ID>d449f19e-19d1-4a93-b0e4-24d8e6a048de</ID><OperationCompletedTime>2016-02-29T11:49:52.2700364</OperationCompletedTime><OperationStartedTime>2016-02-29T11:49:50.6502045</OperationStartedTime><Status>Successful</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '416',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.323 (rd_rdfe_stable.160224-0707) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd25ecf1d51a678cd93ff08837da80df1',
  date: 'Mon, 29 Feb 2016 11:50:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/operation/d449f19e-19d1-4a93-b0e4-24d8e6a048de')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HealthStatus/><HttpStatusCode>OK</HttpStatusCode><ID>d449f19e-19d1-4a93-b0e4-24d8e6a048de</ID><OperationCompletedTime>2016-02-29T11:49:52.2700364</OperationCompletedTime><OperationStartedTime>2016-02-29T11:49:50.6502045</OperationStartedTime><Status>Successful</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '416',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.323 (rd_rdfe_stable.160224-0707) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd25ecf1d51a678cd93ff08837da80df1',
  date: 'Mon, 29 Feb 2016 11:50:21 GMT',
  connection: 'close' });
 return result; }]];
