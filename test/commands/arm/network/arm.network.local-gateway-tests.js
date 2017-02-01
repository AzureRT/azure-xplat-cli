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
var utils = require('../../../../lib/util/utils');
var NetworkTestUtil = require('../../../util/networkTestUtil');
var networkUtil = new NetworkTestUtil();
var tagUtils = require('../../../../lib/commands/arm/tag/tagUtils');
var testPrefix = 'arm-network-autogen-localnetworkgateways-tests1',
  groupName = 'xplat-test-local-gateway',
  location;

var localNetworkGateways = {
  addressPrefixes: '10.0.0.0/8',
  addressPrefixesNew: '192.168.0.0/16',
  gatewayIpAddress: '10.0.0.42',
  gatewayIpAddressNew: '10.0.0.24',
  asn: '125',
  asnNew: '142',
  bgpPeeringAddress: '11.0.0.11',
  bgpPeeringAddressNew: '11.0.0.12',
  peerWeight: '15',
  peerWeightNew: '25',
  location: 'westus',

  name: 'localNetworkGatewaysName'
};
var invalidPrefixes = {
  addressPrefixes: '192.168.0.0',
  gatewayIpAddress: '10.0.0.12',
  location: 'westus',
  name: 'invalidPrefixesName',
  group: groupName
};
var invalidIPAddress = {
  gatewayIpAddress: '10.0.0.257',
  location: 'westus',
  name: 'invalidIPAddressName',
  group: groupName
};
var invalidBgpPeeringAddress = {
  asn: '1',
  bgpPeeringAddress: '11.0.0.257',
  gatewayIpAddress: '10.0.0.12',
  location: 'westus',
  name: 'invalidBgpPeeringAddressName',
  group: groupName
};
var zeroAsn = {
  asn: '0',
  gatewayIpAddress: '10.0.0.12',
  location: 'westus',
  name: 'zeroASNName',
  group: groupName
};


var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;

    before(function (done) {
      suite = new CLITest(this, testPrefix, requiredEnvironment);
      suite.setupSuite(function () {
        location = localNetworkGateways.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        localNetworkGateways.location = location;
        localNetworkGateways.group = groupName;
        localNetworkGateways.name = suite.isMocked ? localNetworkGateways.name : suite.generateId(localNetworkGateways.name, null);
        if (suite.isPlayback()) {
          done();
        } else {
          networkUtil.createGroup(groupName, location, suite, function () {
            done();
          });
        }
      });
    });
    after(function (done) {
      this.timeout(hour);
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

    describe('local network gateways', function () {
      this.timeout(hour);
      it('create should create local network gateways', function (done) {
        var cmd = util.format('network local-gateway create -g {group} -n {name} --address-space {addressPrefixes} --ip-address {gatewayIpAddress} ' +
          '--asn {asn} --bgp-peering-address {bgpPeeringAddress} --peer-weight {peerWeight} --location {location} --json')
            .formatArgs(localNetworkGateways);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(localNetworkGateways.name);
          localNetworkGateways.addressPrefixes.split(',').forEach(function(item) { output.localNetworkAddressSpace.addressPrefixes.should.containEql(item) });
          output.gatewayIpAddress.toLowerCase().should.equal(localNetworkGateways.gatewayIpAddress.toLowerCase());
          output.bgpSettings.asn.should.equal(parseInt(localNetworkGateways.asn, 10));
          output.bgpSettings.bgpPeeringAddress.toLowerCase().should.equal(localNetworkGateways.bgpPeeringAddress.toLowerCase());
          output.bgpSettings.peerWeight.should.equal(parseInt(localNetworkGateways.peerWeight, 10));
          done();
        });
      });
      it('show should display local network gateways details', function (done) {
        var cmd = 'network local-gateway show -g {group} -n {name} --json'.formatArgs(localNetworkGateways);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(localNetworkGateways.name);
          localNetworkGateways.addressPrefixes.split(',').forEach(function(item) { output.localNetworkAddressSpace.addressPrefixes.should.containEql(item) });
          output.gatewayIpAddress.toLowerCase().should.equal(localNetworkGateways.gatewayIpAddress.toLowerCase());
          output.bgpSettings.asn.should.equal(parseInt(localNetworkGateways.asn, 10));
          output.bgpSettings.bgpPeeringAddress.toLowerCase().should.equal(localNetworkGateways.bgpPeeringAddress.toLowerCase());
          output.bgpSettings.peerWeight.should.equal(parseInt(localNetworkGateways.peerWeight, 10));
          done();
        });
      });
      it('set should update local network gateways', function (done) {
        var cmd = util.format('network local-gateway set -g {group} -n {name} --address-space {addressPrefixesNew} --ip-address {gatewayIpAddressNew} ' +
          '--asn {asnNew} --bgp-peering-address {bgpPeeringAddressNew} --peer-weight {peerWeightNew} --json')
            .formatArgs(localNetworkGateways);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(localNetworkGateways.name);
          localNetworkGateways.addressPrefixesNew.split(',').forEach(function(item) { output.localNetworkAddressSpace.addressPrefixes.should.containEql(item) });
          output.gatewayIpAddress.toLowerCase().should.equal(localNetworkGateways.gatewayIpAddressNew.toLowerCase());
          output.bgpSettings.asn.should.equal(parseInt(localNetworkGateways.asnNew, 10));
          output.bgpSettings.bgpPeeringAddress.toLowerCase().should.equal(localNetworkGateways.bgpPeeringAddressNew.toLowerCase());
          output.bgpSettings.peerWeight.should.equal(parseInt(localNetworkGateways.peerWeightNew, 10));
          done();
        });
      });
      it('list should display all local network gateways in resource group', function (done) {
        var cmd = 'network local-gateway list -g {group} --json'.formatArgs(localNetworkGateways);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var outputs = JSON.parse(result.text);
          _.some(outputs, function (output) {
            return output.name === localNetworkGateways.name;
          }).should.be.true;
          done();
        });
      });
      it('delete should delete local network gateways', function (done) {
        var cmd = 'network local-gateway delete -g {group} -n {name} --quiet --json'.formatArgs(localNetworkGateways);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network local-gateway show -g {group} -n {name} --json'.formatArgs(localNetworkGateways);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);
            output.should.be.empty;
            done();
          });
        });
      });

      it('create should fail for invalid prefixes', function (done) {
        var cmd = util.format('network local-gateway create -g {group} -n {name} --address-space {addressPrefixes} --ip-address {gatewayIpAddress} ' +
          '--location {location}  --json').formatArgs(invalidPrefixes);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for invalid ip address', function (done) {
        var cmd = 'network local-gateway create -g {group} -n {name} --ip-address {gatewayIpAddress} --location {location}  --json'
          .formatArgs(invalidIPAddress);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for invalid bgp peering address', function (done) {
        var cmd = util.format('network local-gateway create -g {group} -n {name} --asn {asn} --bgp-peering-address {bgpPeeringAddress} ' +
          '--ip-address {gatewayIpAddress} --location {location}  --json').formatArgs(invalidBgpPeeringAddress);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for zero asn', function (done) {
        var cmd = 'network local-gateway create -g {group} -n {name} --asn {asn} --ip-address {gatewayIpAddress} --location {location}  --json'
          .formatArgs(zeroAsn);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
    });
  });
});