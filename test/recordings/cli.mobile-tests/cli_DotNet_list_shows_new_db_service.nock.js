// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5e7d1bb6-4953-44fe-8a54-43fbdb53b989',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Mobilytics Test1',
    registeredProviders: ['website', 'mobileservice'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices')
  .reply(200, "[{\"name\":\"clitestDotNet5570\",\"type\":\"ZumoApp\",\"state\":\"Ready\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/clitestDotNet5570\\/\",\"applicationUrl\":\"https:\\/\\/clitestdotnet5570.azure-mobile.net\\/\",\"applicationKey\":\"UdnTjUZWAhnuHaVWGzZFHLgRuAjVVt78\",\"masterKey\":\"WjWrYXPNCcLBEKBBzpvjrKijWvyILe12\",\"tables\":[],\"webspace\":\"WESTUSWEBSPACE\",\"region\":\"West US\",\"managementPortalLink\":\"https:\\/\\/manage.windowsazure.com\\/#Workspaces\\/MobileServicesExtension\\/apps\\/clitestDotNet5570\",\"sourceRepositoryUrl\":\"https:\\/\\/clitestdotnet5570.scm.azure-mobile.net\\/clitestDotNet5570.git\",\"deploymentTriggerUrl\":\"https:\\/\\/$mobile$clitestDotNet5570:Draw4da0nLwpeleGiiWvRBJ6LCXitHor8qxLo0Ebmt6sE1cYSGBsedtaXtkY@clitestdotnet5570.scm.azure-mobile.net\\/deploy\",\"platform\":\"dotNet\",\"backendVersion\":\"1.0.450\",\"enableExternalPushEntity\":true},{\"name\":\"crud\",\"type\":\"ZumoApp\",\"state\":\"Ready\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/crud\\/\",\"applicationUrl\":\"https:\\/\\/crud.azure-mobile.net\\/\",\"applicationKey\":\"wRpRRmpbtLDpTtQlXCCIGgyqetbZdy13\",\"masterKey\":\"eLouBRXcovypuRJCaRftHkwpsZNylq96\",\"tables\":[],\"webspace\":\"EASTUSWEBSPACE\",\"region\":\"East US\",\"managementPortalLink\":\"https:\\/\\/manage.windowsazure.com\\/#Workspaces\\/MobileServicesExtension\\/apps\\/crud\",\"sourceRepositoryUrl\":\"https:\\/\\/crud.scm.azure-mobile.net\\/crud.git\",\"deploymentTriggerUrl\":\"https:\\/\\/$mobile$crud:b9iZeaBzgYv3A7ZtYcmq6F7XCb2WNYBMtxsNNXJLvXeoCxDEDaQ4QRqAGdwu@crud.scm.azure-mobile.net\\/deploy\",\"platform\":\"dotNet\",\"backendVersion\":\"1.0.450\",\"enableExternalPushEntity\":true},{\"name\":\"mamaso-sdk\",\"type\":\"ZumoApp\",\"state\":\"Ready\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/mamaso-sdk\\/\",\"applicationUrl\":\"https:\\/\\/mamaso-sdk.azure-mobile.net\\/\",\"applicationKey\":\"YCsgdpljtXFIVCekSrvnlxFItqcKNz73\",\"masterKey\":\"UJlevEnjwToCHEhkZBEjfAdWERnAOX11\",\"tables\":[{\"name\":\"admin\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/mamaso-sdk\\/tables\\/admin\\/\"},{\"name\":\"application\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/mamaso-sdk\\/tables\\/application\\/\"},{\"name\":\"authenticated\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/mamaso-sdk\\/tables\\/authenticated\\/\"},{\"name\":\"blog_comments\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/mamaso-sdk\\/tables\\/blog_comments\\/\"},{\"name\":\"blog_posts\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/mamaso-sdk\\/tables\\/blog_posts\\/\"},{\"name\":\"dates\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/mamaso-sdk\\/tables\\/dates\\/\"},{\"name\":\"intIdMovies\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/mamaso-sdk\\/tables\\/intIdMovies\\/\"},{\"name\":\"intIdRoundTripTable\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/mamaso-sdk\\/tables\\/intIdRoundTripTable\\/\"},{\"name\":\"movies\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/mamaso-sdk\\/tables\\/movies\\/\"},{\"name\":\"ParamsTestTable\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/mamaso-sdk\\/tables\\/ParamsTestTable\\/\"},{\"name\":\"public\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/mamaso-sdk\\/tables\\/public\\/\"},{\"name\":\"roundTripTable\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/mamaso-sdk\\/tables\\/roundTripTable\\/\"},{\"name\":\"user\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/mamaso-sdk\\/tables\\/user\\/\"}],\"webspace\":\"WESTUSWEBSPACE\",\"region\":\"West US\",\"managementPortalLink\":\"https:\\/\\/manage.windowsazure.com\\/#Workspaces\\/MobileServicesExtension\\/apps\\/mamaso-sdk\",\"sourceRepositoryUrl\":\"https:\\/\\/mamaso-sdk.scm.azure-mobile.net\\/mamaso-sdk.git\",\"deploymentTriggerUrl\":\"https:\\/\\/$mobile$mamaso-sdk:v04Fi7YATDSwWY5Mthnp2qJpgnhxpmfmTRBJD9NeciNmJ6CRPpDZ4J9x2W4o@mamaso-sdk.scm.azure-mobile.net\\/deploy\",\"backendVersion\":\"Zumo.master.0.1.6.4197.Runtime\"},{\"name\":\"testmobilemamaso\",\"type\":\"ZumoApp\",\"state\":\"Ready\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/testmobilemamaso\\/\",\"applicationUrl\":\"https:\\/\\/testmobilemamaso.azure-mobile.net\\/\",\"applicationKey\":\"SgxRTGdSALeJyhmYTYmDcyEBxZHFml74\",\"masterKey\":\"rXGnTymqahBUZEsFJbKyFEdtCVuTZx65\",\"tables\":[],\"webspace\":\"WESTUSWEBSPACE\",\"region\":\"West US\",\"managementPortalLink\":\"https:\\/\\/manage.windowsazure.com\\/#Workspaces\\/MobileServicesExtension\\/apps\\/testmobilemamaso\",\"sourceRepositoryUrl\":\"https:\\/\\/testmobilemamaso.scm.azure-mobile.net\\/testmobilemamaso.git\",\"deploymentTriggerUrl\":\"https:\\/\\/$mobile$testmobilemamaso:iW7XNtDnoxnBv2giqYzKCJSnY7qAf0mjj4fcMP8JDg9dh5sySZjXswe1Lu5t@testmobilemamaso.scm.azure-mobile.net\\/deploy\",\"backendVersion\":\"Zumo.master.0.1.6.4262.Runtime\"}]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '6199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '56198c8b21dc8620ab5aa8f6fc20b31d',
  date: 'Wed, 08 Apr 2015 21:45:02 GMT' });
 return result; }]];
