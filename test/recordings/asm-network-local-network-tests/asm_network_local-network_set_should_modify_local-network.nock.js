// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    registeredProviders: [],
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
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/media')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<NetworkConfiguration xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://schemas.microsoft.com/ServiceHosting/2011/07/NetworkConfiguration\">\r\n  <VirtualNetworkConfiguration>\r\n    <Dns />\r\n    <LocalNetworkSites>\r\n      <LocalNetworkSite name=\"CliTestlocNet2543\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.1.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>100.100.100.100</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"CliTestlocNet7759\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/19</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>20.20.20.20</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"LocalNetwork\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.16.0.45/29</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>191.236.86.5</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"vnet1lnet\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.1.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>100.100.100.100</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"vnet2lnet\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.2.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>200.200.200.200</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"Vpn\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.16.0.0/27</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>10.32.0.0</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n    </LocalNetworkSites>\r\n    <VirtualNetworkSites>\r\n      <VirtualNetworkSite name=\"CliTestLocVnet9436\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.2.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.2.0.0/19</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.2.32.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"CliTestVnett9964\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"Group armresgrpeastustest1 TestArmVMList\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/24</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"mynetwork\" AffinityGroup=\"affinity1\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.4.0.0/16</AddressPrefix>\r\n          <AddressPrefix>10.1.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.4.2.0/19</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.4.32.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"ne@@wvnet$$%10\" AffinityGroup=\"NewAffinityGroup01\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.8.7/24</AddressPrefix>\r\n        </AddressSpace>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"newvnet$$%10\" AffinityGroup=\"NewAffinityGroup01\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.8.7/24</AddressPrefix>\r\n        </AddressSpace>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"testy\" AffinityGroup=\"affinity1\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.11/8</AddressPrefix>\r\n          <AddressPrefix>172.16.77.0/12</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.32.0.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"Vnet\" AffinityGroup=\"EastAsia\">\r\n        <AddressSpace>\r\n          <AddressPrefix>172.16.0.0/28</AddressPrefix>\r\n          <AddressPrefix>192.168.29.0/24</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>172.16.0.0/29</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>172.16.0.8/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"vnet1\" AffinityGroup=\"AG-CLI-2ad0a8d6c97f0a8f\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"vnet2\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.2.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"subnet-1\">\r\n            <AddressPrefix>10.2.0.0/19</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"Subnet-2\">\r\n            <AddressPrefix>10.2.32.8/29</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.2.32.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"Vnet28\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.16.0.32/27</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.16.0.32/29</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.16.0.40/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n    </VirtualNetworkSites>\r\n  </VirtualNetworkConfiguration>\r\n</NetworkConfiguration>", { 'cache-control': 'no-cache',
  'content-length': '6519',
  'content-type': 'text/plain',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '34ebde09d0f4b6b283f094400c9fe797',
  date: 'Thu, 25 Jun 2015 13:34:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/media')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<NetworkConfiguration xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://schemas.microsoft.com/ServiceHosting/2011/07/NetworkConfiguration\">\r\n  <VirtualNetworkConfiguration>\r\n    <Dns />\r\n    <LocalNetworkSites>\r\n      <LocalNetworkSite name=\"CliTestlocNet2543\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.1.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>100.100.100.100</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"CliTestlocNet7759\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/19</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>20.20.20.20</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"LocalNetwork\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.16.0.45/29</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>191.236.86.5</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"vnet1lnet\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.1.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>100.100.100.100</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"vnet2lnet\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.2.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>200.200.200.200</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"Vpn\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.16.0.0/27</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>10.32.0.0</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n    </LocalNetworkSites>\r\n    <VirtualNetworkSites>\r\n      <VirtualNetworkSite name=\"CliTestLocVnet9436\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.2.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.2.0.0/19</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.2.32.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"CliTestVnett9964\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"Group armresgrpeastustest1 TestArmVMList\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/24</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"mynetwork\" AffinityGroup=\"affinity1\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.4.0.0/16</AddressPrefix>\r\n          <AddressPrefix>10.1.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.4.2.0/19</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.4.32.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"ne@@wvnet$$%10\" AffinityGroup=\"NewAffinityGroup01\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.8.7/24</AddressPrefix>\r\n        </AddressSpace>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"newvnet$$%10\" AffinityGroup=\"NewAffinityGroup01\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.8.7/24</AddressPrefix>\r\n        </AddressSpace>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"testy\" AffinityGroup=\"affinity1\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.11/8</AddressPrefix>\r\n          <AddressPrefix>172.16.77.0/12</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.32.0.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"Vnet\" AffinityGroup=\"EastAsia\">\r\n        <AddressSpace>\r\n          <AddressPrefix>172.16.0.0/28</AddressPrefix>\r\n          <AddressPrefix>192.168.29.0/24</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>172.16.0.0/29</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>172.16.0.8/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"vnet1\" AffinityGroup=\"AG-CLI-2ad0a8d6c97f0a8f\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"vnet2\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.2.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"subnet-1\">\r\n            <AddressPrefix>10.2.0.0/19</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"Subnet-2\">\r\n            <AddressPrefix>10.2.32.8/29</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.2.32.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"Vnet28\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.16.0.32/27</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.16.0.32/29</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.16.0.40/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n    </VirtualNetworkSites>\r\n  </VirtualNetworkConfiguration>\r\n</NetworkConfiguration>", { 'cache-control': 'no-cache',
  'content-length': '6519',
  'content-type': 'text/plain',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '34ebde09d0f4b6b283f094400c9fe797',
  date: 'Thu, 25 Jun 2015 13:34:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/media', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '28a401d5c717b4fbb41369ab7813a8dd',
  date: 'Thu, 25 Jun 2015 13:34:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/media', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '28a401d5c717b4fbb41369ab7813a8dd',
  date: 'Thu, 25 Jun 2015 13:34:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/operations/28a401d5c717b4fbb41369ab7813a8dd')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>28a401d5-c717-b4fb-b413-69ab7813a8dd</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '58648ed4f871ba07aa3b8844dc0107f5',
  date: 'Thu, 25 Jun 2015 13:34:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/operations/28a401d5c717b4fbb41369ab7813a8dd')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>28a401d5-c717-b4fb-b413-69ab7813a8dd</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '58648ed4f871ba07aa3b8844dc0107f5',
  date: 'Thu, 25 Jun 2015 13:34:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/media')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<NetworkConfiguration xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://schemas.microsoft.com/ServiceHosting/2011/07/NetworkConfiguration\">\r\n  <VirtualNetworkConfiguration>\r\n    <Dns />\r\n    <LocalNetworkSites>\r\n      <LocalNetworkSite name=\"CliTestlocNet2543\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/19</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>20.20.20.20</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"CliTestlocNet7759\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/19</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>20.20.20.20</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"LocalNetwork\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.16.0.45/29</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>191.236.86.5</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"vnet1lnet\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.1.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>100.100.100.100</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"vnet2lnet\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.2.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>200.200.200.200</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"Vpn\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.16.0.0/27</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>10.32.0.0</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n    </LocalNetworkSites>\r\n    <VirtualNetworkSites>\r\n      <VirtualNetworkSite name=\"CliTestLocVnet9436\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.2.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.2.0.0/19</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.2.32.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"CliTestVnett9964\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"Group armresgrpeastustest1 TestArmVMList\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/24</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"mynetwork\" AffinityGroup=\"affinity1\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.4.0.0/16</AddressPrefix>\r\n          <AddressPrefix>10.1.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.4.2.0/19</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.4.32.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"ne@@wvnet$$%10\" AffinityGroup=\"NewAffinityGroup01\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.8.7/24</AddressPrefix>\r\n        </AddressSpace>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"newvnet$$%10\" AffinityGroup=\"NewAffinityGroup01\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.8.7/24</AddressPrefix>\r\n        </AddressSpace>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"testy\" AffinityGroup=\"affinity1\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.11/8</AddressPrefix>\r\n          <AddressPrefix>172.16.77.0/12</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.32.0.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"Vnet\" AffinityGroup=\"EastAsia\">\r\n        <AddressSpace>\r\n          <AddressPrefix>172.16.0.0/28</AddressPrefix>\r\n          <AddressPrefix>192.168.29.0/24</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>172.16.0.0/29</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>172.16.0.8/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"vnet1\" AffinityGroup=\"AG-CLI-2ad0a8d6c97f0a8f\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"vnet2\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.2.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"subnet-1\">\r\n            <AddressPrefix>10.2.0.0/19</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"Subnet-2\">\r\n            <AddressPrefix>10.2.32.8/29</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.2.32.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"Vnet28\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.16.0.32/27</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.16.0.32/29</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.16.0.40/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n    </VirtualNetworkSites>\r\n  </VirtualNetworkConfiguration>\r\n</NetworkConfiguration>", { 'cache-control': 'no-cache',
  'content-length': '6515',
  'content-type': 'text/plain',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '9c96744572d3b207b5f106c008c84b5e',
  date: 'Thu, 25 Jun 2015 13:34:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/media')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<NetworkConfiguration xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://schemas.microsoft.com/ServiceHosting/2011/07/NetworkConfiguration\">\r\n  <VirtualNetworkConfiguration>\r\n    <Dns />\r\n    <LocalNetworkSites>\r\n      <LocalNetworkSite name=\"CliTestlocNet2543\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/19</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>20.20.20.20</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"CliTestlocNet7759\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/19</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>20.20.20.20</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"LocalNetwork\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.16.0.45/29</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>191.236.86.5</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"vnet1lnet\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.1.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>100.100.100.100</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"vnet2lnet\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.2.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>200.200.200.200</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"Vpn\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.16.0.0/27</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>10.32.0.0</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n    </LocalNetworkSites>\r\n    <VirtualNetworkSites>\r\n      <VirtualNetworkSite name=\"CliTestLocVnet9436\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.2.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.2.0.0/19</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.2.32.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"CliTestVnett9964\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"Group armresgrpeastustest1 TestArmVMList\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/24</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"mynetwork\" AffinityGroup=\"affinity1\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.4.0.0/16</AddressPrefix>\r\n          <AddressPrefix>10.1.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.4.2.0/19</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.4.32.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"ne@@wvnet$$%10\" AffinityGroup=\"NewAffinityGroup01\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.8.7/24</AddressPrefix>\r\n        </AddressSpace>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"newvnet$$%10\" AffinityGroup=\"NewAffinityGroup01\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.8.7/24</AddressPrefix>\r\n        </AddressSpace>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"testy\" AffinityGroup=\"affinity1\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.11/8</AddressPrefix>\r\n          <AddressPrefix>172.16.77.0/12</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.32.0.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"Vnet\" AffinityGroup=\"EastAsia\">\r\n        <AddressSpace>\r\n          <AddressPrefix>172.16.0.0/28</AddressPrefix>\r\n          <AddressPrefix>192.168.29.0/24</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>172.16.0.0/29</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>172.16.0.8/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"vnet1\" AffinityGroup=\"AG-CLI-2ad0a8d6c97f0a8f\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"vnet2\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.2.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"subnet-1\">\r\n            <AddressPrefix>10.2.0.0/19</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"Subnet-2\">\r\n            <AddressPrefix>10.2.32.8/29</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.2.32.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"Vnet28\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.16.0.32/27</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.16.0.32/29</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.16.0.40/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n    </VirtualNetworkSites>\r\n  </VirtualNetworkConfiguration>\r\n</NetworkConfiguration>", { 'cache-control': 'no-cache',
  'content-length': '6515',
  'content-type': 'text/plain',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '9c96744572d3b207b5f106c008c84b5e',
  date: 'Thu, 25 Jun 2015 13:34:39 GMT',
  connection: 'close' });
 return result; }]];
