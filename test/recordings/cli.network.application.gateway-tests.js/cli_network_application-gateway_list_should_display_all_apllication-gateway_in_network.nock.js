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
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/ApplicationGateways?api-version=2015-04-01')
  .reply(200, "<ApplicationGateways xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ApplicationGateway><Description/><DnsName i:nil=\"true\"/><GatewaySize>Small</GatewaySize><InstanceCount>1</InstanceCount><Name>appgw01</Name><State>Stopped</State><Subnets><Subnet>Subnet-1</Subnet></Subnets><VirtualIPs i:nil=\"true\"/><VnetName>MyNetwork</VnetName></ApplicationGateway><ApplicationGateway><Description/><DnsName i:nil=\"true\"/><GatewaySize>Small</GatewaySize><InstanceCount>4</InstanceCount><Name>CliTestAppGate</Name><State>Stopped</State><Subnets><Subnet>CliTestSubnett</Subnet></Subnets><VirtualIPs i:nil=\"true\"/><VnetName>CliTestVnett</VnetName></ApplicationGateway><ApplicationGateway><Description/><DnsName i:nil=\"true\"/><GatewaySize>Small</GatewaySize><InstanceCount>1</InstanceCount><Name>test-app-gateway</Name><State>Stopped</State><Subnets><Subnet>Subnet-1</Subnet></Subnets><VirtualIPs i:nil=\"true\"/><VnetName>NetForGateway2</VnetName></ApplicationGateway></ApplicationGateways>", { 'cache-control': 'no-cache',
  'content-length': '1027',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.323 (rd_rdfe_stable.160224-0707) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'bda48a90dfc871c4859438f16a2294b6',
  date: 'Thu, 25 Feb 2016 08:32:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/ApplicationGateways?api-version=2015-04-01')
  .reply(200, "<ApplicationGateways xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ApplicationGateway><Description/><DnsName i:nil=\"true\"/><GatewaySize>Small</GatewaySize><InstanceCount>1</InstanceCount><Name>appgw01</Name><State>Stopped</State><Subnets><Subnet>Subnet-1</Subnet></Subnets><VirtualIPs i:nil=\"true\"/><VnetName>MyNetwork</VnetName></ApplicationGateway><ApplicationGateway><Description/><DnsName i:nil=\"true\"/><GatewaySize>Small</GatewaySize><InstanceCount>4</InstanceCount><Name>CliTestAppGate</Name><State>Stopped</State><Subnets><Subnet>CliTestSubnett</Subnet></Subnets><VirtualIPs i:nil=\"true\"/><VnetName>CliTestVnett</VnetName></ApplicationGateway><ApplicationGateway><Description/><DnsName i:nil=\"true\"/><GatewaySize>Small</GatewaySize><InstanceCount>1</InstanceCount><Name>test-app-gateway</Name><State>Stopped</State><Subnets><Subnet>Subnet-1</Subnet></Subnets><VirtualIPs i:nil=\"true\"/><VnetName>NetForGateway2</VnetName></ApplicationGateway></ApplicationGateways>", { 'cache-control': 'no-cache',
  'content-length': '1027',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.323 (rd_rdfe_stable.160224-0707) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'bda48a90dfc871c4859438f16a2294b6',
  date: 'Thu, 25 Feb 2016 08:32:16 GMT',
  connection: 'close' });
 return result; }]];
