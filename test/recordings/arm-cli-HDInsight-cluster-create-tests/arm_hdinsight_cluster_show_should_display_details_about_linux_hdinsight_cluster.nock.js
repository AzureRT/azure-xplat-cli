// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2843db96-7d25-4cf5-8e67-71baed52dfb7',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'BDHadoopHumboldtCRP1_695484',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'eastus';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2843db96-7d25-4cf5-8e67-71baed52dfb7/resourceGroups/xplatTestRgHDInsightClusterCreate2402/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7671?api-version=2015-03-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/2843db96-7d25-4cf5-8e67-71baed52dfb7/resourceGroups/xplatTestRgHDInsightClusterCreate2402/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7671\",\"name\":\"xplatTestHDInsightClusterCreate7671\",\"type\":\"Microsoft.HDInsight/clusters\",\"location\":\"East US\",\"etag\":\"dbaccfbf-f576-4512-a022-a3c584e81e58\",\"tags\":null,\"properties\":{\"clusterVersion\":\"3.2.1000.0\",\"osType\":\"Linux\",\"clusterDefinition\":{\"blueprint\":\"https://blueprints.azurehdinsight.net/hadoop-3.2.1000.0.6183632.json\",\"kind\":\"Hadoop\"},\"computeProfile\":{\"roles\":[{\"name\":\"headnode\",\"targetInstanceCount\":2,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"workernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"zookeepernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Small\"}}]},\"provisioningState\":\"Succeeded\",\"clusterState\":\"Running\",\"createdDate\":\"2015-12-01T19:53:05.06\",\"quotaInfo\":{\"coresUsed\":20},\"connectivityEndpoints\":[{\"name\":\"SSH\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate7671-ssh.azurehdinsight.net\",\"port\":22},{\"name\":\"HTTPS\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate7671.azurehdinsight.net\",\"port\":443}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1202',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bb925f67-c389-4bba-afaa-0f9a828741e0',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'b471204e-aabd-41ca-b214-8b9226722062',
  'x-ms-routing-request-id': 'WESTUS:20151201T204934Z:b471204e-aabd-41ca-b214-8b9226722062',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 01 Dec 2015 20:49:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2843db96-7d25-4cf5-8e67-71baed52dfb7/resourceGroups/xplatTestRgHDInsightClusterCreate2402/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7671?api-version=2015-03-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/2843db96-7d25-4cf5-8e67-71baed52dfb7/resourceGroups/xplatTestRgHDInsightClusterCreate2402/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7671\",\"name\":\"xplatTestHDInsightClusterCreate7671\",\"type\":\"Microsoft.HDInsight/clusters\",\"location\":\"East US\",\"etag\":\"dbaccfbf-f576-4512-a022-a3c584e81e58\",\"tags\":null,\"properties\":{\"clusterVersion\":\"3.2.1000.0\",\"osType\":\"Linux\",\"clusterDefinition\":{\"blueprint\":\"https://blueprints.azurehdinsight.net/hadoop-3.2.1000.0.6183632.json\",\"kind\":\"Hadoop\"},\"computeProfile\":{\"roles\":[{\"name\":\"headnode\",\"targetInstanceCount\":2,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"workernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"zookeepernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Small\"}}]},\"provisioningState\":\"Succeeded\",\"clusterState\":\"Running\",\"createdDate\":\"2015-12-01T19:53:05.06\",\"quotaInfo\":{\"coresUsed\":20},\"connectivityEndpoints\":[{\"name\":\"SSH\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate7671-ssh.azurehdinsight.net\",\"port\":22},{\"name\":\"HTTPS\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate7671.azurehdinsight.net\",\"port\":443}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1202',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bb925f67-c389-4bba-afaa-0f9a828741e0',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'b471204e-aabd-41ca-b214-8b9226722062',
  'x-ms-routing-request-id': 'WESTUS:20151201T204934Z:b471204e-aabd-41ca-b214-8b9226722062',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 01 Dec 2015 20:49:33 GMT',
  connection: 'close' });
 return result; }]];
