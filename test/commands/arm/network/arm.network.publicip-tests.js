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

'use strict';

var should = require('should');
var util = require('util');
var _ = require('underscore');

var testUtils = require('../../../util/util');
var CLITest = require('../../../framework/arm-cli-test');
var NetworkTestUtil = require('../../../util/networkTestUtil');
var networkUtil = new NetworkTestUtil();

var testPrefix = 'arm-network-publicip-tests',
  groupName = 'xplat-test-public-ip',
  location;

var publicIpProp = {
  name: 'test-ip',
  domainName: 'foo-domain',
  newDomainName: 'bar-domain',
  allocationMethod: 'Static',
  newAllocationMethod: 'Dynamic',
  ipVersion: 'IPv4',
  idleTimeout: 4,
  newIdleTimeout: 15,
  tags: networkUtil.tags,
  newTags: networkUtil.newTags,
  // Negative test values
  ipAllocationMethodOutOfRange: 'Any',
  ipVersionOutOfRange: 'IPv9',
  invalidSymbolsLable: 'l-a_b-1-e',
  idleTimeoutUnderRange: '3',
  idleTimeoutOverRange: '31'
};

var publicIPAddressDefaults = {
  location: 'westus',
  publicIPAllocationMethod: 'Dynamic',
  publicIPAddressVersion: 'IPv4',
  idleTimeoutInMinutes: '4',
  name: 'publicIPAddressDefaultsName',
  group: groupName
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;

    before(function (done) {
      suite = new CLITest(this, testPrefix, requiredEnvironment);
      suite.setupSuite(function () {
        location = process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);

        publicIpProp.location = location;
        publicIpProp.group = groupName;
        publicIpProp.name = suite.isMocked ? publicIpProp.name : suite.generateId(publicIpProp.name, null);
        publicIpProp.domainName = suite.generateId(publicIpProp.domainName, null);
        publicIpProp.newDomainName = suite.generateId(publicIpProp.newDomainName, null);

        done();
      });
    });
    after(function (done) {
      networkUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('publicip', function () {
      it('create should create publicip', function (done) {
        networkUtil.createGroup(groupName, location, suite, function () {
          networkUtil.createPublicIp(publicIpProp, suite, function (ip) {
            networkUtil.shouldBeSucceeded(ip);
            done();
          });
        });
      });
      it('show should display publicip details', function (done) {
        var cmd = 'network public-ip show -g {group} -n {name} --json'.formatArgs(publicIpProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var ip = JSON.parse(result.text);
          ip.name.should.equal(publicIpProp.name);
          ip.publicIPAllocationMethod.should.equal(publicIpProp.allocationMethod);
          // ip.publicIPAddressVersion.should.equal(publicIpProp.ipVersion);
          ip.idleTimeoutInMinutes.should.equal(publicIpProp.idleTimeout);
          ip.dnsSettings.domainNameLabel.should.equal(publicIpProp.domainName);
          networkUtil.shouldHaveTags(ip);
          done();
        });
      });
      it('set should modify publicip', function (done) {
        var cmd = 'network public-ip set -g {group} -n {name} -d {newDomainName} -a {newAllocationMethod} -i {newIdleTimeout} -t {newTags} --json'
          .formatArgs(publicIpProp);

        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var ip = JSON.parse(result.text);
          ip.name.should.equal(publicIpProp.name);
          ip.publicIPAllocationMethod.should.equal(publicIpProp.newAllocationMethod);
          ip.idleTimeoutInMinutes.should.equal(publicIpProp.newIdleTimeout);
          ip.dnsSettings.domainNameLabel.should.equal(publicIpProp.newDomainName);
          networkUtil.shouldAppendTags(ip);
          networkUtil.shouldBeSucceeded(ip);
          done();
        });
      });

      it('list should display all publicips in resource group', function (done) {
        var cmd = 'network public-ip list -g {group} --json'.formatArgs(publicIpProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var ips = JSON.parse(result.text);
          _.some(ips, function (ip) {
            return ip.name === publicIpProp.name;
          }).should.be.true;
          done();
        });
      });
      it('delete should delete publicip', function (done) {
        var cmd = 'network public-ip delete -g {group} -n {name} --quiet --json'.formatArgs(publicIpProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network public-ip show -g {group} -n {name} --json'.formatArgs(publicIpProp);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var ip = JSON.parse(result.text);
            ip.should.be.empty;
            done();
          });
        });
      });
      it('create with defaults should create public ip addresses with default values', function (done) {
        var cmd = 'network public-ip create -g {group} -n {name} --location {location} --json'.formatArgs(publicIPAddressDefaults);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(publicIPAddressDefaults.name);
          output.publicIPAllocationMethod.toLowerCase().should.equal(publicIPAddressDefaults.publicIPAllocationMethod.toLowerCase());;
          output.publicIPAddressVersion.toLowerCase().should.equal(publicIPAddressDefaults.publicIPAddressVersion.toLowerCase());;
          output.idleTimeoutInMinutes.should.equal(parseInt(publicIPAddressDefaults.idleTimeoutInMinutes, 10));
          var cmd = 'network public-ip delete -g {group} -n {name} --quiet --json'.formatArgs(publicIPAddressDefaults);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });
      it('create should fail for ip allocation method out of range', function (done) {
        var cmd = 'network public-ip create -g {group} -n {name} --allocation-method {ipAllocationMethodOutOfRange} --location {location} --json'.formatArgs(publicIpProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for ip version out of range', function (done) {
        var cmd = 'network public-ip create -g {group} -n {name} --ip-version {ipVersionOutOfRange} --location {location}  --json'.formatArgs(publicIpProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for invalid symbols in lable', function (done) {
        var cmd = 'network public-ip create -g {group} -n {name} --domain-name-label {invalidSymbolsLable} --location {location} --json'.formatArgs(publicIpProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for idle timeout under range', function (done) {
        var cmd = 'network public-ip create -g {group} -n {name} --idle-timeout {idleTimeoutUnderRange} --location {location}  --json'.formatArgs(publicIpProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for idle timeout over range', function (done) {
        var cmd = 'network public-ip create -g {group} -n {name} --idle-timeout {idleTimeoutOverRange} --location {location}  --json'.formatArgs(publicIpProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should pass for delete of domain name label', function (done) {
        var cmd = 'network public-ip create -g {group} -n {name} --domain-name-label {domainName} --location {location} --json'.formatArgs(publicIpProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(publicIpProp.name);
          output.dnsSettings.domainNameLabel.toLowerCase().should.equal(publicIpProp.domainName.toLowerCase());
          var cmd = 'network public-ip set -g {group} -n {name} --domain-name-label --json'.formatArgs(publicIpProp);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);
            output.name.should.equal(publicIpProp.name);
            should.not.exist(output.dnsSettings); 
            var cmd = 'network public-ip delete -g {group} -n {name} --json --quiet'.formatArgs(publicIpProp);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              done();
            });
          });
        });
      });
    });
  });
});