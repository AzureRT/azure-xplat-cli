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
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/supporteddevices')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><VpnDeviceList version=\"1.0\"><Vendor name=\"Cisco Systems, Inc.\"><Platform name=\"ASA 5500 Series Adaptive Security Appliances\"><OSFamily name=\"ASA Software 8.3\" /></Platform><Platform name=\"ASR 1000 Series Aggregation Services Routers\"><OSFamily name=\"IOS XE 15.1\" /></Platform><Platform name=\"ASR 1000 Series Aggregation Services Routers - Dynamic Routing\"><OSFamily name=\"IOS XE 15.2\" /></Platform><Platform name=\"ISR Series Integrated Services Routers\"><OSFamily name=\"IOS 15.0\" /></Platform><Platform name=\"ISR Series Integrated Services Routers - Dynamic Routing\"><OSFamily name=\"IOS 15.1\" /></Platform></Vendor><Vendor name=\"Juniper Networks, Inc.\"><Platform name=\"SRX Series Routers\"><OSFamily name=\"JunOS 10.2\" /></Platform><Platform name=\"SRX Series Routers - Dynamic Routing\"><OSFamily name=\"JunOS 11.4\" /></Platform><Platform name=\"J Series Routers\"><OSFamily name=\"JunOS 10.4\" /></Platform><Platform name=\"J Series Routers - Dynamic Routing\"><OSFamily name=\"JunOS 11.4\" /></Platform><Platform name=\"ISG Series Routers\"><OSFamily name=\"ScreenOS 6.3\" /></Platform><Platform name=\"ISG Series Routers - Dynamic Routing\"><OSFamily name=\"ScreenOS 6.3\" /></Platform><Platform name=\"SSG Series Routers\"><OSFamily name=\"ScreenOS 6.2\" /></Platform><Platform name=\"SSG Series Routers - Dynamic Routing\"><OSFamily name=\"ScreenOS 6.2\" /></Platform></Vendor><Vendor name=\"Microsoft Corporation\"><Platform name=\"RRAS\"><OSFamily name=\"Windows Server 2012\" /><OSFamily name=\"Windows Server 2012 R2\" /></Platform></Vendor></VpnDeviceList>", { 'cache-control': 'no-cache',
  'content-length': '1572',
  'content-type': 'application/octet-stream',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '4416ee3b33bfb159bb6f8b4b4cc68ac2',
  date: 'Fri, 26 Jun 2015 06:45:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/supporteddevices')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><VpnDeviceList version=\"1.0\"><Vendor name=\"Cisco Systems, Inc.\"><Platform name=\"ASA 5500 Series Adaptive Security Appliances\"><OSFamily name=\"ASA Software 8.3\" /></Platform><Platform name=\"ASR 1000 Series Aggregation Services Routers\"><OSFamily name=\"IOS XE 15.1\" /></Platform><Platform name=\"ASR 1000 Series Aggregation Services Routers - Dynamic Routing\"><OSFamily name=\"IOS XE 15.2\" /></Platform><Platform name=\"ISR Series Integrated Services Routers\"><OSFamily name=\"IOS 15.0\" /></Platform><Platform name=\"ISR Series Integrated Services Routers - Dynamic Routing\"><OSFamily name=\"IOS 15.1\" /></Platform></Vendor><Vendor name=\"Juniper Networks, Inc.\"><Platform name=\"SRX Series Routers\"><OSFamily name=\"JunOS 10.2\" /></Platform><Platform name=\"SRX Series Routers - Dynamic Routing\"><OSFamily name=\"JunOS 11.4\" /></Platform><Platform name=\"J Series Routers\"><OSFamily name=\"JunOS 10.4\" /></Platform><Platform name=\"J Series Routers - Dynamic Routing\"><OSFamily name=\"JunOS 11.4\" /></Platform><Platform name=\"ISG Series Routers\"><OSFamily name=\"ScreenOS 6.3\" /></Platform><Platform name=\"ISG Series Routers - Dynamic Routing\"><OSFamily name=\"ScreenOS 6.3\" /></Platform><Platform name=\"SSG Series Routers\"><OSFamily name=\"ScreenOS 6.2\" /></Platform><Platform name=\"SSG Series Routers - Dynamic Routing\"><OSFamily name=\"ScreenOS 6.2\" /></Platform></Vendor><Vendor name=\"Microsoft Corporation\"><Platform name=\"RRAS\"><OSFamily name=\"Windows Server 2012\" /><OSFamily name=\"Windows Server 2012 R2\" /></Platform></Vendor></VpnDeviceList>", { 'cache-control': 'no-cache',
  'content-length': '1572',
  'content-type': 'application/octet-stream',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '4416ee3b33bfb159bb6f8b4b4cc68ac2',
  date: 'Fri, 26 Jun 2015 06:45:45 GMT',
  connection: 'close' });
 return result; }]];
