// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4d368445-cbb1-42a7-97a6-6850ab99f48e',
    name: 'Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_CLOUD_SERVICE_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/4d368445-cbb1-42a7-97a6-6850ab99f48e/services/hostedservices/clitestcert9491/certificates/sha1-8824022CB382CADD9E19290449B893A839140962')
  .reply(200, "<Certificate xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data>MIIFmzCCBIOgAwIBAgIIDuMhEzmbbcEwDQYJKoZIhvcNAQEFBQAwgZYxCzAJBgNVBAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMSwwKgYDVQQLDCNBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkwHhcNMTUwNjI5MTg0NTIyWhcNMTYwNjI4MTg0NTIyWjCBmjErMCkGCgmSJomT8ixkAQEMG2NvbS5taWNyb3NvZnQuenVtby5wdXNoY2VydDFJMEcGA1UEAwxAQXBwbGUgRGV2ZWxvcG1lbnQgSU9TIFB1c2ggU2VydmljZXM6IGNvbS5taWNyb3NvZnQuenVtby5wdXNoY2VydDETMBEGA1UECwwKVUJGOFQzNDZHOTELMAkGA1UEBhMCVVMwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDIX1QRJOOBoqxRWtvEAI9M8G9JPtdGiVESZO5OjlXU5aEudsabybivzhPwPO4PsJkj0yOGWcR0agTRj7kPdtTrS1vLYpSMNACaBmfmwSZIDc6DQRzCpZ8lY4Xz8bPtSyv0ALXXd/zkUw2VBFhvX3wACJQfobXBBkvQggYoY3IFOmTD4zQMjnasAvACq7dTnL/ZvwHdf+ZPGwXE5UKY5z8jZBwVPPiCKIX4EPxDchNfbfZbzyjF79wO8gBC/aHpOfQrBuKKl+ngFOH11ByoU1E6fhsZ/eeL3eaf29qj6U2g2oW1MzsruxQXJv5Mv7dz1U16Z6LRbi7AJ/WLB+s008SVAgMBAAGjggHlMIIB4TAdBgNVHQ4EFgQUB8i5ZsjkUQmkWBVh2IUmaPO2Nz0wCQYDVR0TBAIwADAfBgNVHSMEGDAWgBSIJxcJqbYYYIvs67r2R1nFUlSjtzCCAQ8GA1UdIASCAQYwggECMIH/BgkqhkiG92NkBQEwgfEwgcMGCCsGAQUFBwICMIG2DIGzUmVsaWFuY2Ugb24gdGhpcyBjZXJ0aWZpY2F0ZSBieSBhbnkgcGFydHkgYXNzdW1lcyBhY2NlcHRhbmNlIG9mIHRoZSB0aGVuIGFwcGxpY2FibGUgc3RhbmRhcmQgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdXNlLCBjZXJ0aWZpY2F0ZSBwb2xpY3kgYW5kIGNlcnRpZmljYXRpb24gcHJhY3RpY2Ugc3RhdGVtZW50cy4wKQYIKwYBBQUHAgEWHWh0dHA6Ly93d3cuYXBwbGUuY29tL2FwcGxlY2EvME0GA1UdHwRGMEQwQqBAoD6GPGh0dHA6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2NlcnRpZmljYXRpb25hdXRob3JpdHkvd3dkcmNhLmNybDALBgNVHQ8EBAMCB4AwEwYDVR0lBAwwCgYIKwYBBQUHAwIwEAYKKoZIhvdjZAYDAQQCBQAwDQYJKoZIhvcNAQEFBQADggEBAEaLhcbjschi8rMClNX/W0y7GTE6eZkjPZ2X+otuY3znhkuRsPMMF77w7wIJzn6c3/hKA4WDCqXeuAxG0zIo2cMkWlZwbXML2QgrAk5TsykNlw90dtSd6SdLbDBQguE4nkk2/4+NK6SXXWBkDfb4NKRRaDkpEsWFi4wOeLAvnYlXY2c1xaUYIDaM9IhA3RlKMlVKf2sA0S6w5alWqcrMfbPkqwW/qfj0EQxnzf4slU4Ksaf2xhW+We7PbqY/ty60azdGAdAJlhaj14X/0UHcyws+63xG7Oe81xSIYLme13ljNRzsYerDpYfoGNaFWtLq4LNPsU1mOuA4iveVa1e8RHc=</Data></Certificate>", { 'cache-control': 'no-cache',
  'content-length': '2062',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.287 (rd_rdfe_stable.151030-2057) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'fd9cdfdd006831d4a2cff0af06378541',
  date: 'Tue, 10 Nov 2015 02:13:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/4d368445-cbb1-42a7-97a6-6850ab99f48e/services/hostedservices/clitestcert9491/certificates/sha1-8824022CB382CADD9E19290449B893A839140962')
  .reply(200, "<Certificate xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data>MIIFmzCCBIOgAwIBAgIIDuMhEzmbbcEwDQYJKoZIhvcNAQEFBQAwgZYxCzAJBgNVBAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMSwwKgYDVQQLDCNBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkwHhcNMTUwNjI5MTg0NTIyWhcNMTYwNjI4MTg0NTIyWjCBmjErMCkGCgmSJomT8ixkAQEMG2NvbS5taWNyb3NvZnQuenVtby5wdXNoY2VydDFJMEcGA1UEAwxAQXBwbGUgRGV2ZWxvcG1lbnQgSU9TIFB1c2ggU2VydmljZXM6IGNvbS5taWNyb3NvZnQuenVtby5wdXNoY2VydDETMBEGA1UECwwKVUJGOFQzNDZHOTELMAkGA1UEBhMCVVMwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDIX1QRJOOBoqxRWtvEAI9M8G9JPtdGiVESZO5OjlXU5aEudsabybivzhPwPO4PsJkj0yOGWcR0agTRj7kPdtTrS1vLYpSMNACaBmfmwSZIDc6DQRzCpZ8lY4Xz8bPtSyv0ALXXd/zkUw2VBFhvX3wACJQfobXBBkvQggYoY3IFOmTD4zQMjnasAvACq7dTnL/ZvwHdf+ZPGwXE5UKY5z8jZBwVPPiCKIX4EPxDchNfbfZbzyjF79wO8gBC/aHpOfQrBuKKl+ngFOH11ByoU1E6fhsZ/eeL3eaf29qj6U2g2oW1MzsruxQXJv5Mv7dz1U16Z6LRbi7AJ/WLB+s008SVAgMBAAGjggHlMIIB4TAdBgNVHQ4EFgQUB8i5ZsjkUQmkWBVh2IUmaPO2Nz0wCQYDVR0TBAIwADAfBgNVHSMEGDAWgBSIJxcJqbYYYIvs67r2R1nFUlSjtzCCAQ8GA1UdIASCAQYwggECMIH/BgkqhkiG92NkBQEwgfEwgcMGCCsGAQUFBwICMIG2DIGzUmVsaWFuY2Ugb24gdGhpcyBjZXJ0aWZpY2F0ZSBieSBhbnkgcGFydHkgYXNzdW1lcyBhY2NlcHRhbmNlIG9mIHRoZSB0aGVuIGFwcGxpY2FibGUgc3RhbmRhcmQgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdXNlLCBjZXJ0aWZpY2F0ZSBwb2xpY3kgYW5kIGNlcnRpZmljYXRpb24gcHJhY3RpY2Ugc3RhdGVtZW50cy4wKQYIKwYBBQUHAgEWHWh0dHA6Ly93d3cuYXBwbGUuY29tL2FwcGxlY2EvME0GA1UdHwRGMEQwQqBAoD6GPGh0dHA6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2NlcnRpZmljYXRpb25hdXRob3JpdHkvd3dkcmNhLmNybDALBgNVHQ8EBAMCB4AwEwYDVR0lBAwwCgYIKwYBBQUHAwIwEAYKKoZIhvdjZAYDAQQCBQAwDQYJKoZIhvcNAQEFBQADggEBAEaLhcbjschi8rMClNX/W0y7GTE6eZkjPZ2X+otuY3znhkuRsPMMF77w7wIJzn6c3/hKA4WDCqXeuAxG0zIo2cMkWlZwbXML2QgrAk5TsykNlw90dtSd6SdLbDBQguE4nkk2/4+NK6SXXWBkDfb4NKRRaDkpEsWFi4wOeLAvnYlXY2c1xaUYIDaM9IhA3RlKMlVKf2sA0S6w5alWqcrMfbPkqwW/qfj0EQxnzf4slU4Ksaf2xhW+We7PbqY/ty60azdGAdAJlhaj14X/0UHcyws+63xG7Oe81xSIYLme13ljNRzsYerDpYfoGNaFWtLq4LNPsU1mOuA4iveVa1e8RHc=</Data></Certificate>", { 'cache-control': 'no-cache',
  'content-length': '2062',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.287 (rd_rdfe_stable.151030-2057) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'fd9cdfdd006831d4a2cff0af06378541',
  date: 'Tue, 10 Nov 2015 02:13:44 GMT',
  connection: 'close' });
 return result; }]];
