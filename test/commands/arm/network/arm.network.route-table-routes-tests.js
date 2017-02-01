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

var testPrefix = 'arm-network-route-table-routes-tests',
  groupName = 'xplat-test-route-table-routes',
  location;

var routeProp = {
  name: 'test-route',
  addressPrefix: '10.0.0.0/24',
  newAddressPrefix: '12.0.0.0/8',
  nextHopType: 'VirtualNetworkGateway',
  newNextHopType: 'VirtualAppliance',
  nextHopIpAddress: '10.0.0.7',
  // Negative test values
  invalidPrefixes: '10.11.12.13/8',
  nextHopTypeOutOfRange: 'NextHop'
};

var tableName = 'test-route-table',
  RoutePrefix = 'ArmRoute',
  AddressPrefix = '10.0.0.0/23',
  AddressPrefixN = '10.0.1.0/23',
  NextHopType = 'VirtualNetworkGateway',
  NextHopTypeN = 'VNETLocal';

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var networkUtil = new NetworkTestUtil();

    before(function (done) {
      suite = new CLITest(this, testPrefix, requiredEnvironment);
      suite.setupSuite(function () {
        location = process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        tableName = suite.isMocked ? tableName : suite.generateId(tableName, null);

        routeProp.group = groupName;
        routeProp.tableName = tableName;
        routeProp.name = suite.isMocked ? routeProp.name : suite.generateId(routeProp.name, null);

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

    describe('route-table route', function () {
      it('create should create route in route table', function (done) {
        networkUtil.createGroup(groupName, location, suite, function () {
          networkUtil.createRouteTable(groupName, tableName, location, suite, function () {
            var cmd = util.format('network route-table route create -g {group} -r {tableName} -n {name} -a {addressPrefix} ' +
              '-y {nextHopType} --json').formatArgs(routeProp);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              var route = JSON.parse(result.text);
              route.name.should.equal(routeProp.name);
              route.addressPrefix.should.equal(routeProp.addressPrefix);
              route.nextHopType.should.equal(routeProp.nextHopType);
              networkUtil.shouldBeSucceeded(route);
              done();
            });
          });
        });
      });
      it('show should display details about route', function (done) {
        var cmd = 'network route-table route show -g {group} -r {tableName} -n {name} --json'.formatArgs(routeProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var route = JSON.parse(result.text);
          route.name.should.equal(routeProp.name);
          route.addressPrefix.should.equal(routeProp.addressPrefix);
          route.nextHopType.should.equal(routeProp.nextHopType);
          networkUtil.shouldBeSucceeded(route);
          done();
        });
      });
      it('set should modify route in route table', function (done) {
        var cmd = util.format('network route-table route set -g {group} -r {tableName} -n {name} -a {newAddressPrefix} ' +
          '-y {newNextHopType} -p {nextHopIpAddress} --json').formatArgs(routeProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var route = JSON.parse(result.text);
          route.name.should.equal(routeProp.name);
          route.addressPrefix.should.equal(routeProp.newAddressPrefix);
          route.nextHopType.should.equal(routeProp.newNextHopType);
          route.nextHopIpAddress.should.equal(routeProp.nextHopIpAddress);
          networkUtil.shouldBeSucceeded(route);
          done();
        });
      });
      it('list should display all routes in a route table', function (done) {
        var cmd = 'network route-table route list -g {group} -r {tableName} --json'.formatArgs(routeProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var routes = JSON.parse(result.text);
          _.some(routes, function (route) {
            return route.name === routeProp.name;
          }).should.be.true;
          done();
        });
      });
      it('delete should delete route in route table', function (done) {
        var cmd = 'network route-table route delete -g {group} -r {tableName} -n {name} --quiet --json'.formatArgs(routeProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network route-table route show -g {group} -r {tableName} -n {name} --json'.formatArgs(routeProp);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var route = JSON.parse(result.text);
            route.should.be.empty;
            done();
          });
        });
      });
      it('create should fail for invalid prefixes', function (done) {
        var cmd = 'network route-table route create -g {group} -n {name} --address-prefix {invalidPrefixes} --next-hop-type {nextHopType} --route-table-name {tableName}  --json'.formatArgs(routeProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for next hop type out of range', function (done) {
        var cmd = 'network route-table route create -g {group} -n {name} --next-hop-type {nextHopTypeOutOfRange} --address-prefix {addressPrefix} --route-table-name {tableName} --json'.formatArgs(routeProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should pass for update next hop type from virtual appliance to any', function (done) {
        var cmd = 'network route-table route create -g {group} -n {name} --next-hop-type {newNextHopType} --address-prefix {addressPrefix} --next-hop-ip-address {nextHopIpAddress} --route-table-name {tableName} --json'.formatArgs(routeProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(routeProp.name);
          output.nextHopType.toLowerCase().should.equal(routeProp.newNextHopType.toLowerCase());
          output.addressPrefix.toLowerCase().should.equal(routeProp.addressPrefix.toLowerCase());
          output.nextHopIpAddress.toLowerCase().should.equal(routeProp.nextHopIpAddress.toLowerCase());
          var cmd = 'network route-table route set -g {group} -n {name} --next-hop-type {nextHopType} --route-table-name {tableName} --json'.formatArgs(routeProp);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);
            output.name.should.equal(routeProp.name);
            output.nextHopType.toLowerCase().should.equal(routeProp.nextHopType.toLowerCase());
            should.not.exist(output.nextHopIpAddress); 
            var cmd = 'network route-table route delete -g {group} -n {name} --route-table-name {tableName} --json --quiet'.formatArgs(routeProp);
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