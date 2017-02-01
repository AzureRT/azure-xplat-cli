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
var CLITest = require('../../../framework/arm-cli-test');
var profile = require('../../../../lib/util/profile');
var utils = require('../../../../lib/util/utils');

var testPrefix = 'arm-cli-appserviceplan-linux-tests';

var appservicename;
var createdAppServices = [];
var location = 'West US';
var createdGroups = [];
var createdResources = [];
var groupName;
var isLinux = "true";
var servicePlanSku = "B1";




describe('arm', function () {
  var suite;
  before(function (done) {
    suite = new CLITest(this, testPrefix);
    suite.setupSuite(function () {
      appservicename = suite.generateId('armappserviceplanlinuxtests', createdAppServices);
      groupName = suite.generateId('testrg1', createdGroups);
      if (!suite.isPlayback()) {
        suite.execute('group create %s --location %s --json', groupName, location, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      } else {
        done();
      }
      
    });
  });

  after(function (done) {
    suite.teardownSuite(function () {
      if (!suite.isPlayback()) {
        createdGroups.forEach(function (item) {
          suite.execute('group delete %s --quiet --json', item, function (result) {
            result.exitStatus.should.equal(0);
            done();
          })
        });
      } else {
        done();
      }
    });
  });

  beforeEach(function (done) {
    suite.setupTest(done);
  });

  afterEach(function (done) {
    suite.teardownTest(done);
  });

  describe('appserviceplan-linux', function () {
    it('create should work for linux', function (done) {
      suite.execute('appserviceplan create %s %s %s %s --islinux %s --json', groupName, appservicename, location, servicePlanSku, isLinux, function (result) {
        result.exitStatus.should.equal(0);
        done();
      });
    });

    it('delete should work for linux', function (done) {
      suite.execute('appserviceplan delete %s %s %s %s --quiet --json', groupName, appservicename, location, servicePlanSku, function (result) {
        result.exitStatus.should.equal(0);
        done();
      });
    });
  });
});