/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var should = require('should');
var util = require('util');
var testUtils = require('../util/util');
var CLITest = require('../framework/cli-test');
var vmTestUtil = require('../util/asmVMTestUtil');
// A common VM used by multiple tests
var suite;
var vmPrefix = 'clitestvm';
var testPrefix = 'cli.vm.extension_set-chef';
var createdVms = [];

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'West US'
}];


describe('cli', function() {
  describe('vm', function() {
    var vmUtil = new vmTestUtil();
    var vmName,
      location,
      username = 'azureuser',
      password = 'PassW0rd$',
      retry = 5,
      clientconfig = 'test/data/set-chef-extension-client-config.rb',
      validationpem = 'test/data/set-chef-extension-validation.pem',
      clientpem = 'test/data/set-chef-extension-client.pem',
      sercretfilepath ='test/data/set-chef-extension-encrypted-databag-secret.txt',
      chefversion = '1210.*',
      timeout;
    testUtils.TIMEOUT_INTERVAL = 15000;

    before(function(done) {

      suite = new CLITest(this, testPrefix, requiredEnvironment);
      suite.setupSuite(function() {
        vmName = suite.generateId(vmPrefix, createdVms);
        location = process.env.AZURE_VM_TEST_LOCATION;
        timeout = suite.isPlayback() ? 0 : testUtils.TIMEOUT_INTERVAL;
        done();
      });
    });

    after(function(done) {
      if (!suite.isPlayback()) {
        vmUtil.deleteVM(vmName, timeout, suite, function() {
          suite.teardownSuite(done);
        });
      } else {
        suite.teardownSuite(done);
      }
    });

    beforeEach(function(done) {
      suite.setupTest(done);
    });

    afterEach(function(done) {
      setTimeout(function() {
        suite.teardownTest(done);
      }, timeout);
    });

    //Set extensions
    describe('extension:', function() {

      it('Set Chef extension should fail without client config and validation pem', function(done) {
        var cmd = util.format('vm extension set-chef %s -V %s --json', vmName, chefversion).split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
          result.errorText.should.containEql('error: Required --validation-pem or --client-pem and --client-config options');
          result.exitStatus.should.equal(1);
          done();
        });
      });

      it('Set Chef extension should pass', function(done) {
        vmUtil.createWindowsVM(vmName, username, password, location, timeout, suite, function() {
          var cmd = util.format('vm extension set-chef %s -V %s -c %s -O %s --json',
            vmName, chefversion, clientconfig, validationpem).split(' ');
          testUtils.executeCommand(suite, retry, cmd, function(result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });

      it('Set Chef extensions with json attributes', function(done) {
        var cmd = util.format('vm extension set-chef %s -V %s -c %s -O %s -j %s --json', vmName, chefversion, clientconfig, validationpem, '{"chef_node_name":"mynode"}').split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });

      it('Set Chef extensions with custom json attributes', function(done) {
        var cmd = util.format('vm extension set-chef %s -V %s -c %s -O %s --json-attributes %s --json', vmName, chefversion, clientconfig, validationpem, '{"chef_node_name":"mynode"}').split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });

      it('Set Chef extensions with client-pem option', function(done) {
        var cmd = util.format('vm extension set-chef %s -V %s -c %s -C %s --json', vmName, chefversion, clientconfig, clientpem).split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });

      it('Set Chef extensions with daemon option', function(done) {
        var cmd = util.format('vm extension set-chef %s -V %s -c %s -O %s --daemon %s --json', vmName, chefversion, clientconfig, validationpem, 'service').split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });

      it('Set Chef extensions with chef-service-interval option', function(done) {
        var cmd = util.format('vm extension set-chef %s -V %s -c %s -O %s --chef-service-interval %s --json', vmName, chefversion, clientconfig, validationpem, 30).split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });

      it('Set Chef extensions with secret option', function(done) {
        var cmd = util.format('vm extension set-chef %s -V %s -c %s -O %s --secret %s --json',
          vmName, chefversion, clientconfig, validationpem, 'YvlECGSCnWv0omVoCMQfSRKwSnqmktBc8i9yx+2TTXQJsNHoMwNJ1c9+stYfLcROXSBuz1736KKVOI9KFWn6OBIqs+TW+VT2DsKHkn7tYAz250NH2f6CVaWLAXQpH8HSZc9L2JeNuhaIa3zWHrhEAM0cbO8b39lz9yzH98nCRYn1tWF/cOTlk4X+lbJfXkWEvIpiB1+bOhCIWLBVMvhpJOqfE710F0KzcFlBOyJFJUqAnNXDn779/4SGfAGkfuVezn/1Pj2gM4dg2sQ7/iDt3LyGzeRcqvRJp+SrzSPbf1WXMAoYiBYkA7qzUE+VIWdBeCk7SHmA21f13lZVeA7OXwb/n4saSo06XQ5yiIY2g4QUDuDV34i50BSsMSGGEOIk0T5cIi24T0JyK+cfyQ904jSVGNge//ircCuR7Ek6lFmp6XATa6upngKl/OCSq8EWc0ucmunRoF58UjOjjXl21ABJYYFq/sD38TI68MX6nDvRJY/lJ5gYGasbedZNht7JwGGU=').split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });

      it('Set Chef extensions with secret-file option', function(done) {
        var cmd = util.format('vm extension set-chef %s -V %s -c %s -O %s --secret-file %s --json',
          vmName, chefversion, clientconfig, validationpem, sercretfilepath).split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });

      it('Set Chef extensions with bootstrap-version option', function(done) {
        var cmd = util.format('vm extension set-chef %s -V %s -c %s -O %s --bootstrap-version %s --json',
          vmName, chefversion, clientconfig, validationpem, '12.14.89').split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
    });
  });
});
