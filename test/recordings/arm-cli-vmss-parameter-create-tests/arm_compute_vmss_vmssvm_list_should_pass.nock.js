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
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"instanceId\": \"0\",\r\n      \"sku\": {\r\n        \"name\": \"Standard_DS1\",\r\n        \"tier\": \"Standard\"\r\n      },\r\n      \"properties\": {\r\n        \"latestModelApplied\": false,\r\n        \"vmId\": \"c946f02f-33a3-417d-b9d4-872cb0374b74\",\r\n        \"storageProfile\": {\r\n          \"imageReference\": {\r\n            \"publisher\": \"MicrosoftWindowsServer\",\r\n            \"offer\": \"WindowsServer\",\r\n            \"sku\": \"2012-R2-Datacenter\",\r\n            \"version\": \"4.0.20160721\"\r\n          },\r\n          \"osDisk\": {\r\n            \"osType\": \"Windows\",\r\n            \"name\": \"test-os-0-82d46a3f562f42ada3badc4640fbef12\",\r\n            \"createOption\": \"FromImage\",\r\n            \"vhd\": {\r\n              \"uri\": \"https://xplatteststorage12453.blob.core.windows.net/xplatteststoragecnt12843/test-os-0-82d46a3f562f42ada3badc4640fbef12.vhd\"\r\n            },\r\n            \"caching\": \"None\"\r\n          }\r\n        },\r\n        \"osProfile\": {\r\n          \"computerName\": \"test000000\",\r\n          \"adminUsername\": \"azureuser\",\r\n          \"windowsConfiguration\": {\r\n            \"provisionVMAgent\": true,\r\n            \"enableAutomaticUpdates\": true\r\n          },\r\n          \"secrets\": []\r\n        },\r\n        \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/0/networkInterfaces/test\"}]},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"resources\": [\r\n        {\r\n          \"properties\": {\r\n            \"publisher\": \"Microsoft.Compute\",\r\n            \"type\": \"VMAccessAgent\",\r\n            \"typeHandlerVersion\": \"2.0\",\r\n            \"autoUpgradeMinorVersion\": true,\r\n            \"settings\": {},\r\n            \"provisioningState\": \"Succeeded\"\r\n          },\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTSTVMSSGCREATE5800/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_0/extensions/test\",\r\n          \"name\": \"test\",\r\n          \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n          \"location\": \"southeastasia\"\r\n        }\r\n      ],\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTSTVMSSGCREATE5800/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/0\",\r\n      \"name\": \"xplattestvmss5_0\",\r\n      \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n      \"location\": \"southeastasia\"\r\n    },\r\n    {\r\n      \"instanceId\": \"1\",\r\n      \"sku\": {\r\n        \"name\": \"Standard_DS1\",\r\n        \"tier\": \"Standard\"\r\n      },\r\n      \"properties\": {\r\n        \"latestModelApplied\": false,\r\n        \"vmId\": \"2e43f99e-7bf5-419a-8672-ff8ac78a1715\",\r\n        \"storageProfile\": {\r\n          \"imageReference\": {\r\n            \"publisher\": \"MicrosoftWindowsServer\",\r\n            \"offer\": \"WindowsServer\",\r\n            \"sku\": \"2012-R2-Datacenter\",\r\n            \"version\": \"4.0.20160721\"\r\n          },\r\n          \"osDisk\": {\r\n            \"osType\": \"Windows\",\r\n            \"name\": \"test-os-1-2f6629f2a5b2456d804ceb76d24ca086\",\r\n            \"createOption\": \"FromImage\",\r\n            \"vhd\": {\r\n              \"uri\": \"https://xplatteststorage29928.blob.core.windows.net/xplatteststoragecnt23595/test-os-1-2f6629f2a5b2456d804ceb76d24ca086.vhd\"\r\n            },\r\n            \"caching\": \"None\"\r\n          }\r\n        },\r\n        \"osProfile\": {\r\n          \"computerName\": \"test000001\",\r\n          \"adminUsername\": \"azureuser\",\r\n          \"windowsConfiguration\": {\r\n            \"provisionVMAgent\": true,\r\n            \"enableAutomaticUpdates\": true\r\n          },\r\n          \"secrets\": []\r\n        },\r\n        \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/1/networkInterfaces/test\"}]},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"resources\": [\r\n        {\r\n          \"properties\": {\r\n            \"publisher\": \"Microsoft.Compute\",\r\n            \"type\": \"VMAccessAgent\",\r\n            \"typeHandlerVersion\": \"2.0\",\r\n            \"autoUpgradeMinorVersion\": true,\r\n            \"settings\": {},\r\n            \"provisioningState\": \"Succeeded\"\r\n          },\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTSTVMSSGCREATE5800/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_1/extensions/test\",\r\n          \"name\": \"test\",\r\n          \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n          \"location\": \"southeastasia\"\r\n        }\r\n      ],\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTSTVMSSGCREATE5800/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/1\",\r\n      \"name\": \"xplattestvmss5_1\",\r\n      \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n      \"location\": \"southeastasia\"\r\n    },\r\n    {\r\n      \"instanceId\": \"2\",\r\n      \"sku\": {\r\n        \"name\": \"Standard_DS1\",\r\n        \"tier\": \"Standard\"\r\n      },\r\n      \"properties\": {\r\n        \"latestModelApplied\": false,\r\n        \"vmId\": \"0ef52bb6-ec30-49d1-b89a-6040d0f24ad6\",\r\n        \"storageProfile\": {\r\n          \"imageReference\": {\r\n            \"publisher\": \"MicrosoftWindowsServer\",\r\n            \"offer\": \"WindowsServer\",\r\n            \"sku\": \"2012-R2-Datacenter\",\r\n            \"version\": \"4.0.20160721\"\r\n          },\r\n          \"osDisk\": {\r\n            \"osType\": \"Windows\",\r\n            \"name\": \"test-os-2-0af247172a8f4222ad7de95a073f329a\",\r\n            \"createOption\": \"FromImage\",\r\n            \"vhd\": {\r\n              \"uri\": \"https://xplatteststorage32712.blob.core.windows.net/xplatteststoragecnt33133/test-os-2-0af247172a8f4222ad7de95a073f329a.vhd\"\r\n            },\r\n            \"caching\": \"None\"\r\n          }\r\n        },\r\n        \"osProfile\": {\r\n          \"computerName\": \"test000002\",\r\n          \"adminUsername\": \"azureuser\",\r\n          \"windowsConfiguration\": {\r\n            \"provisionVMAgent\": true,\r\n            \"enableAutomaticUpdates\": true\r\n          },\r\n          \"secrets\": []\r\n        },\r\n        \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/2/networkInterfaces/test\"}]},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"resources\": [\r\n        {\r\n          \"properties\": {\r\n            \"publisher\": \"Microsoft.Compute\",\r\n            \"type\": \"VMAccessAgent\",\r\n            \"typeHandlerVersion\": \"2.0\",\r\n            \"autoUpgradeMinorVersion\": true,\r\n            \"settings\": {},\r\n            \"provisioningState\": \"Succeeded\"\r\n          },\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTSTVMSSGCREATE5800/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_2/extensions/test\",\r\n          \"name\": \"test\",\r\n          \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n          \"location\": \"southeastasia\"\r\n        }\r\n      ],\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTSTVMSSGCREATE5800/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/2\",\r\n      \"name\": \"xplattestvmss5_2\",\r\n      \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n      \"location\": \"southeastasia\"\r\n    },\r\n    {\r\n      \"instanceId\": \"3\",\r\n      \"sku\": {\r\n        \"name\": \"Standard_DS1\",\r\n        \"tier\": \"Standard\"\r\n      },\r\n      \"properties\": {\r\n        \"latestModelApplied\": false,\r\n        \"vmId\": \"4f93f7b5-8651-44ec-97c2-218f0319eccb\",\r\n        \"storageProfile\": {\r\n          \"imageReference\": {\r\n            \"publisher\": \"MicrosoftWindowsServer\",\r\n            \"offer\": \"WindowsServer\",\r\n            \"sku\": \"2012-R2-Datacenter\",\r\n            \"version\": \"4.0.20160721\"\r\n          },\r\n          \"osDisk\": {\r\n            \"osType\": \"Windows\",\r\n            \"name\": \"test-os-3-48bab17e9a5244f3807a4f462cbb2680\",\r\n            \"createOption\": \"FromImage\",\r\n            \"vhd\": {\r\n              \"uri\": \"https://xplatteststorage12453.blob.core.windows.net/xplatteststoragecnt12843/test-os-3-48bab17e9a5244f3807a4f462cbb2680.vhd\"\r\n            },\r\n            \"caching\": \"None\"\r\n          }\r\n        },\r\n        \"osProfile\": {\r\n          \"computerName\": \"test000003\",\r\n          \"adminUsername\": \"azureuser\",\r\n          \"windowsConfiguration\": {\r\n            \"provisionVMAgent\": true,\r\n            \"enableAutomaticUpdates\": true\r\n          },\r\n          \"secrets\": []\r\n        },\r\n        \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/3/networkInterfaces/test\"}]},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"resources\": [\r\n        {\r\n          \"properties\": {\r\n            \"publisher\": \"Microsoft.Compute\",\r\n            \"type\": \"VMAccessAgent\",\r\n            \"typeHandlerVersion\": \"2.0\",\r\n            \"autoUpgradeMinorVersion\": true,\r\n            \"settings\": {},\r\n            \"provisioningState\": \"Succeeded\"\r\n          },\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTSTVMSSGCREATE5800/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_3/extensions/test\",\r\n          \"name\": \"test\",\r\n          \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n          \"location\": \"southeastasia\"\r\n        }\r\n      ],\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTSTVMSSGCREATE5800/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/3\",\r\n      \"name\": \"xplattestvmss5_3\",\r\n      \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n      \"location\": \"southeastasia\"\r\n    },\r\n    {\r\n      \"instanceId\": \"4\",\r\n      \"sku\": {\r\n        \"name\": \"Standard_DS1\",\r\n        \"tier\": \"Standard\"\r\n      },\r\n      \"properties\": {\r\n        \"latestModelApplied\": false,\r\n        \"vmId\": \"e4924e7c-63cc-434e-9bc4-963910daf5a6\",\r\n        \"storageProfile\": {\r\n          \"imageReference\": {\r\n            \"publisher\": \"MicrosoftWindowsServer\",\r\n            \"offer\": \"WindowsServer\",\r\n            \"sku\": \"2012-R2-Datacenter\",\r\n            \"version\": \"4.0.20160721\"\r\n          },\r\n          \"osDisk\": {\r\n            \"osType\": \"Windows\",\r\n            \"name\": \"test-os-4-9a35cf423a474e389e4599493222b4b5\",\r\n            \"createOption\": \"FromImage\",\r\n            \"vhd\": {\r\n              \"uri\": \"https://xplatteststorage29928.blob.core.windows.net/xplatteststoragecnt23595/test-os-4-9a35cf423a474e389e4599493222b4b5.vhd\"\r\n            },\r\n            \"caching\": \"None\"\r\n          }\r\n        },\r\n        \"osProfile\": {\r\n          \"computerName\": \"test000004\",\r\n          \"adminUsername\": \"azureuser\",\r\n          \"windowsConfiguration\": {\r\n            \"provisionVMAgent\": true,\r\n            \"enableAutomaticUpdates\": true\r\n          },\r\n          \"secrets\": []\r\n        },\r\n        \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/4/networkInterfaces/test\"}]},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"resources\": [\r\n        {\r\n          \"properties\": {\r\n            \"publisher\": \"Microsoft.Compute\",\r\n            \"type\": \"VMAccessAgent\",\r\n            \"typeHandlerVersion\": \"2.0\",\r\n            \"autoUpgradeMinorVersion\": true,\r\n            \"settings\": {},\r\n            \"provisioningState\": \"Succeeded\"\r\n          },\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTSTVMSSGCREATE5800/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_4/extensions/test\",\r\n          \"name\": \"test\",\r\n          \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n          \"location\": \"southeastasia\"\r\n        }\r\n      ],\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTSTVMSSGCREATE5800/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/4\",\r\n      \"name\": \"xplattestvmss5_4\",\r\n      \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n      \"location\": \"southeastasia\"\r\n    },\r\n    {\r\n      \"instanceId\": \"5\",\r\n      \"sku\": {\r\n        \"name\": \"Standard_DS1\",\r\n        \"tier\": \"Standard\"\r\n      },\r\n      \"properties\": {\r\n        \"latestModelApplied\": false,\r\n        \"vmId\": \"36244218-4cdc-42b8-9f78-5003dc90b43e\",\r\n        \"storageProfile\": {\r\n          \"imageReference\": {\r\n            \"publisher\": \"MicrosoftWindowsServer\",\r\n            \"offer\": \"WindowsServer\",\r\n            \"sku\": \"2012-R2-Datacenter\",\r\n            \"version\": \"4.0.20160721\"\r\n          },\r\n          \"osDisk\": {\r\n            \"osType\": \"Windows\",\r\n            \"name\": \"test-os-5-873c782e6c094fe982a2ee0f433ed039\",\r\n            \"createOption\": \"FromImage\",\r\n            \"vhd\": {\r\n              \"uri\": \"https://xplatteststorage32712.blob.core.windows.net/xplatteststoragecnt33133/test-os-5-873c782e6c094fe982a2ee0f433ed039.vhd\"\r\n            },\r\n            \"caching\": \"None\"\r\n          }\r\n        },\r\n        \"osProfile\": {\r\n          \"computerName\": \"test000005\",\r\n          \"adminUsername\": \"azureuser\",\r\n          \"windowsConfiguration\": {\r\n            \"provisionVMAgent\": true,\r\n            \"enableAutomaticUpdates\": true\r\n          },\r\n          \"secrets\": []\r\n        },\r\n        \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/5/networkInterfaces/test\"}]},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"resources\": [\r\n        {\r\n          \"properties\": {\r\n            \"publisher\": \"Microsoft.Compute\",\r\n            \"type\": \"VMAccessAgent\",\r\n            \"typeHandlerVersion\": \"2.0\",\r\n            \"autoUpgradeMinorVersion\": true,\r\n            \"settings\": {},\r\n            \"provisioningState\": \"Succeeded\"\r\n          },\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTSTVMSSGCREATE5800/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_5/extensions/test\",\r\n          \"name\": \"test\",\r\n          \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n          \"location\": \"southeastasia\"\r\n        }\r\n      ],\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTSTVMSSGCREATE5800/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/5\",\r\n      \"name\": \"xplattestvmss5_5\",\r\n      \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n      \"location\": \"southeastasia\"\r\n    },\r\n    {\r\n      \"instanceId\": \"6\",\r\n      \"sku\": {\r\n        \"name\": \"Standard_DS1\",\r\n        \"tier\": \"Standard\"\r\n      },\r\n      \"properties\": {\r\n        \"latestModelApplied\": false,\r\n        \"vmId\": \"c7ea48e8-238d-4436-991b-ff6ad9a53516\",\r\n        \"storageProfile\": {\r\n          \"imageReference\": {\r\n            \"publisher\": \"MicrosoftWindowsServer\",\r\n            \"offer\": \"WindowsServer\",\r\n            \"sku\": \"2012-R2-Datacenter\",\r\n            \"version\": \"4.0.20160721\"\r\n          },\r\n          \"osDisk\": {\r\n            \"osType\": \"Windows\",\r\n            \"name\": \"test-os-6-3bb14d910d254545a51ae2383c790bb6\",\r\n            \"createOption\": \"FromImage\",\r\n            \"vhd\": {\r\n              \"uri\": \"https://xplatteststorage12453.blob.core.windows.net/xplatteststoragecnt12843/test-os-6-3bb14d910d254545a51ae2383c790bb6.vhd\"\r\n            },\r\n            \"caching\": \"None\"\r\n          }\r\n        },\r\n        \"osProfile\": {\r\n          \"computerName\": \"test000006\",\r\n          \"adminUsername\": \"azureuser\",\r\n          \"windowsConfiguration\": {\r\n            \"provisionVMAgent\": true,\r\n            \"enableAutomaticUpdates\": true\r\n          },\r\n          \"secrets\": []\r\n        },\r\n        \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/6/networkInterfaces/test\"}]},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"resources\": [\r\n        {\r\n          \"properties\": {\r\n            \"publisher\": \"Microsoft.Compute\",\r\n            \"type\": \"VMAccessAgent\",\r\n            \"typeHandlerVersion\": \"2.0\",\r\n            \"autoUpgradeMinorVersion\": true,\r\n            \"settings\": {},\r\n            \"provisioningState\": \"Succeeded\"\r\n          },\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTSTVMSSGCREATE5800/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_6/extensions/test\",\r\n          \"name\": \"test\",\r\n          \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n          \"location\": \"southeastasia\"\r\n        }\r\n      ],\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTSTVMSSGCREATE5800/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/6\",\r\n      \"name\": \"xplattestvmss5_6\",\r\n      \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n      \"location\": \"southeastasia\"\r\n    },\r\n    {\r\n      \"instanceId\": \"7\",\r\n      \"sku\": {\r\n        \"name\": \"Standard_DS1\",\r\n        \"tier\": \"Standard\"\r\n      },\r\n      \"properties\": {\r\n        \"latestModelApplied\": false,\r\n        \"vmId\": \"ad0aa7ec-8dcb-4543-94b6-6c3a13ebc915\",\r\n        \"storageProfile\": {\r\n          \"imageReference\": {\r\n            \"publisher\": \"MicrosoftWindowsServer\",\r\n            \"offer\": \"WindowsServer\",\r\n            \"sku\": \"2012-R2-Datacenter\",\r\n            \"version\": \"4.0.20160721\"\r\n          },\r\n          \"osDisk\": {\r\n            \"osType\": \"Windows\",\r\n            \"name\": \"test-os-7-bf7c8ed363264cbf94f7e96edd72454a\",\r\n            \"createOption\": \"FromImage\",\r\n            \"vhd\": {\r\n              \"uri\": \"https://xplatteststorage29928.blob.core.windows.net/xplatteststoragecnt23595/test-os-7-bf7c8ed363264cbf94f7e96edd72454a.vhd\"\r\n            },\r\n            \"caching\": \"None\"\r\n          }\r\n        },\r\n        \"osProfile\": {\r\n          \"computerName\": \"test000007\",\r\n          \"adminUsername\": \"azureuser\",\r\n          \"windowsConfiguration\": {\r\n            \"provisionVMAgent\": true,\r\n            \"enableAutomaticUpdates\": true\r\n          },\r\n          \"secrets\": []\r\n        },\r\n        \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/7/networkInterfaces/test\"}]},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"resources\": [\r\n        {\r\n          \"properties\": {\r\n            \"publisher\": \"Microsoft.Compute\",\r\n            \"type\": \"VMAccessAgent\",\r\n            \"typeHandlerVersion\": \"2.0\",\r\n            \"autoUpgradeMinorVersion\": true,\r\n            \"settings\": {},\r\n            \"provisioningState\": \"Succeeded\"\r\n          },\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTSTVMSSGCREATE5800/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_7/extensions/test\",\r\n          \"name\": \"test\",\r\n          \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n          \"location\": \"southeastasia\"\r\n        }\r\n      ],\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTSTVMSSGCREATE5800/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/7\",\r\n      \"name\": \"xplattestvmss5_7\",\r\n      \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n      \"location\": \"southeastasia\"\r\n    },\r\n    {\r\n      \"instanceId\": \"8\",\r\n      \"sku\": {\r\n        \"name\": \"Standard_DS1\",\r\n        \"tier\": \"Standard\"\r\n      },\r\n      \"properties\": {\r\n        \"latestModelApplied\": false,\r\n        \"vmId\": \"55b2391c-f8d1-4ac1-9811-92c41caf1278\",\r\n        \"storageProfile\": {\r\n          \"imageReference\": {\r\n            \"publisher\": \"MicrosoftWindowsServer\",\r\n            \"offer\": \"WindowsServer\",\r\n            \"sku\": \"2012-R2-Datacenter\",\r\n            \"version\": \"4.0.20160721\"\r\n          },\r\n          \"osDisk\": {\r\n            \"osType\": \"Windows\",\r\n            \"name\": \"test-os-8-e104d810c8d740ceaac8bb0c7e8188d3\",\r\n            \"createOption\": \"FromImage\",\r\n            \"vhd\": {\r\n              \"uri\": \"https://xplatteststorage32712.blob.core.windows.net/xplatteststoragecnt33133/test-os-8-e104d810c8d740ceaac8bb0c7e8188d3.vhd\"\r\n            },\r\n            \"caching\": \"None\"\r\n          }\r\n        },\r\n        \"osProfile\": {\r\n          \"computerName\": \"test000008\",\r\n          \"adminUsername\": \"azureuser\",\r\n          \"windowsConfiguration\": {\r\n            \"provisionVMAgent\": true,\r\n            \"enableAutomaticUpdates\": true\r\n          },\r\n          \"secrets\": []\r\n        },\r\n        \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/8/networkInterfaces/test\"}]},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"resources\": [\r\n        {\r\n          \"properties\": {\r\n            \"publisher\": \"Microsoft.Compute\",\r\n            \"type\": \"VMAccessAgent\",\r\n            \"typeHandlerVersion\": \"2.0\",\r\n            \"autoUpgradeMinorVersion\": true,\r\n            \"settings\": {},\r\n            \"provisioningState\": \"Succeeded\"\r\n          },\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTSTVMSSGCREATE5800/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_8/extensions/test\",\r\n          \"name\": \"test\",\r\n          \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n          \"location\": \"southeastasia\"\r\n        }\r\n      ],\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTSTVMSSGCREATE5800/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/8\",\r\n      \"name\": \"xplattestvmss5_8\",\r\n      \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n      \"location\": \"southeastasia\"\r\n    },\r\n    {\r\n      \"instanceId\": \"9\",\r\n      \"sku\": {\r\n        \"name\": \"Standard_DS1\",\r\n        \"tier\": \"Standard\"\r\n      },\r\n      \"properties\": {\r\n        \"latestModelApplied\": false,\r\n        \"vmId\": \"547d2d10-72de-4335-8cb0-c11e76ec30c2\",\r\n        \"storageProfile\": {\r\n          \"imageReference\": {\r\n            \"publisher\": \"MicrosoftWindowsServer\",\r\n            \"offer\": \"WindowsServer\",\r\n            \"sku\": \"2012-R2-Datacenter\",\r\n            \"version\": \"4.0.20160721\"\r\n          },\r\n          \"osDisk\": {\r\n            \"osType\": \"Windows\",\r\n            \"name\": \"test-os-9-26175b245f7940b780cd3976f35c6285\",\r\n            \"createOption\": \"FromImage\",\r\n            \"vhd\": {\r\n              \"uri\": \"https://xplatteststorage12453.blob.core.windows.net/xplatteststoragecnt12843/test-os-9-26175b245f7940b780cd3976f35c6285.vhd\"\r\n            },\r\n            \"caching\": \"None\"\r\n          }\r\n        },\r\n        \"osProfile\": {\r\n          \"computerName\": \"test000009\",\r\n          \"adminUsername\": \"azureuser\",\r\n          \"windowsConfiguration\": {\r\n            \"provisionVMAgent\": true,\r\n            \"enableAutomaticUpdates\": true\r\n          },\r\n          \"secrets\": []\r\n        },\r\n        \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/9/networkInterfaces/test\"}]},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"resources\": [\r\n        {\r\n          \"properties\": {\r\n            \"publisher\": \"Microsoft.Compute\",\r\n            \"type\": \"VMAccessAgent\",\r\n            \"typeHandlerVersion\": \"2.0\",\r\n            \"autoUpgradeMinorVersion\": true,\r\n            \"settings\": {},\r\n            \"provisioningState\": \"Succeeded\"\r\n          },\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTSTVMSSGCREATE5800/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_9/extensions/test\",\r\n          \"name\": \"test\",\r\n          \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n          \"location\": \"southeastasia\"\r\n        }\r\n      ],\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTSTVMSSGCREATE5800/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/9\",\r\n      \"name\": \"xplattestvmss5_9\",\r\n      \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '24932',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131157682951232301',
  'x-ms-request-id': '11e5ad7c-e044-4495-bba4-b864a5e35dd9',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': 'a37eb271-f8a8-4969-a35f-9412d16661e5',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T085704Z:a37eb271-f8a8-4969-a35f-9412d16661e5',
  date: 'Tue, 16 Aug 2016 08:57:04 GMT' });
 return result; }]];
