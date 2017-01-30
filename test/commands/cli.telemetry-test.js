//
// Copyright (c) Microsoft and contributors.  All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

var _ = require('underscore');
var should = require('should');
var sinon = require('sinon');
var util = require('util');
var applicationInsights = require('applicationinsights');
var fs = require('fs');

describe('cli', function() {
  describe('telemetry', function() {
    var sandbox = sinon.sandbox.create();
    var telemetry = require('../../lib/util/telemetry');
    var userAgentCore = require('../../lib/util/userAgentCore');

    var testInstrumentationKey = "1234";

    beforeEach(function (done) {
      var client = applicationInsights.setup(testInstrumentationKey).client;
            
      // stub AppInsights functions.
      sandbox.stub(applicationInsights, 'setup', function(ikey) {
        return applicationInsights;
      });

      sandbox.stub(applicationInsights, 'start', function() {
        return applicationInsights;
      });

      sandbox.stub(applicationInsights, 'setAutoCollectExceptions', function(enabled) {
        return applicationInsights;
      });

      sandbox.stub(applicationInsights, 'setAutoCollectPerformance', function(enabled) {
        return applicationInsights;
      });

      sandbox.stub(applicationInsights, 'setAutoCollectRequests', function(enabled) {
        return applicationInsights;
      });

      sandbox.stub(client, 'sendPendingData', function(callback) {
        if (typeof callback === 'function') {
          callback();
        }
      });

      done();
    });

    afterEach(function (done) {
      sandbox.restore();
      done();
    });

    it('should not send out event if data-collection is not enabled', function(done){
      var track = sandbox.spy(applicationInsights.client, 'track');

      telemetry.init(false)
      telemetry.start(['foo', 'bar', 'azure', 'login']);
      telemetry.currentCommand({
        fullName: function() {
          return 'azure login';
        }
      });
      telemetry.onFinish(function() {});

      (track.called).should.be.false;
      done();
    });

    it('should construct user agent info object with some data', function (done) {

      sandbox.stub(userAgentCore, 'getUserAgentData', function () {
        return {
          osType: 'WindowsNT',
          osVersion: '2.0',
          mode: 'baz'
        };
      });

      telemetry.init(true)
      telemetry.start(['foo', 'bar', 'azure', 'group', 'list']);
      telemetry.currentCommand({
        fullName: function () {
          return 'azure group list';
        }
      });

      telemetry.onFinish(function () { });

      var userAgentInfo = userAgentCore.getUserAgentData();
      should(userAgentInfo).have.property('osType', 'WindowsNT');
      should(userAgentInfo).have.property('osVersion', '2.0');
      should(userAgentInfo).have.property('mode', 'baz');

      sandbox.restore();
      done();
    });

    it('should construct user agent info object with some properties', function (done) {

      var command = 'azure group list';
      telemetry.init(true)
      telemetry.start(['foo', 'bar', 'azure', 'group', 'list']);
      telemetry.setMode('arm');

      telemetry.currentCommand({
        fullName: function () {
          return command;
        }
      });

      telemetry.onFinish(function () { });

      var userAgentInfo = userAgentCore.getUserAgentData();

      // assert properties
      should(userAgentInfo).have.property('osType').with.type('string');
      should(userAgentInfo).have.property('osVersion').with.type('string');
      should(userAgentInfo).have.property('nodeVersion').with.type('string');
      should(userAgentInfo).have.property('installationType').with.type('string');
      should(userAgentInfo).have.property('userId').with.type('string');
      should(userAgentInfo).have.property('subscriptionId').with.type('string');
      should(userAgentInfo).have.property('userType').with.type('string');

      // assert properties, with values.
      should(userAgentInfo).have.property('mode').with.type('string').be.equal('arm');

      done();
    });

    it('should construct user agent info object when telemetry is not enabled', function (done) {
      var track = sandbox.spy(applicationInsights.client, 'track');

      var givenCommand = 'azure group list';

      // disable telemetry
      telemetry.init(false)
      telemetry.start(['foo', 'bar', 'azure', 'group', 'list']);
      telemetry.setMode('arm');

      telemetry.currentCommand({
        fullName: function () {
          return givenCommand;
        }
      });

      telemetry.onFinish(function () { });

      // assert telemetry is not enabled.
      (track.called).should.be.false;

      // verify userAgent is properly constructed
      var userAgentInfo = userAgentCore.getUserAgentData();

      (userAgentInfo).should.be.ok;
      (userAgentInfo.osType).should.be.ok;
      (userAgentInfo.osVersion).should.be.ok;
      (userAgentInfo.nodeVersion).should.be.ok;
      (userAgentInfo.installationType).should.be.ok;
      (userAgentInfo.userId).should.be.ok;
      (userAgentInfo.subscriptionId).should.be.ok;
      (userAgentInfo.userType).should.be.ok;
      (userAgentInfo.mode).should.be.ok;

      // verify values
      (userAgentInfo.mode).should.be.equal('arm');

      done();
    });

    it('should encrypt user sensitive data', function(done) {
      var eventData;
      sandbox.stub(applicationInsights.client, 'track', function(data) {
        eventData = data;
      });

      telemetry.setAppInsights(applicationInsights);
      telemetry.init(true);
      telemetry.start(['foo', 'bar', 'azure', 'login', '-u', 'foo', '-p', 'bar']);
      telemetry.currentCommand({
        fullName: function() {
          return 'azure login';
        }
      });
      telemetry.onFinish(function() {});

      (eventData.baseData.properties.command === 'azure login -u *** -p ***').should.be.true;
      done();
    });

    it('should catch exception and encrypt exception data', function(done) {
      var eventData;
      sandbox.stub(applicationInsights.client, 'track', function(data) {
        eventData = data;
      });

      telemetry.setAppInsights(applicationInsights);
      telemetry.init(true)
      telemetry.start(['foo', 'bar', 'azure', 'login', '-u', 'foo', '-p', 'bar']);
      telemetry.currentCommand({
        fullName: function() {
          return 'azure login';
        }
      });
      var err = new Error('error');
      telemetry.onError(err, function() {});
      (eventData.baseData.properties.isSuccess).should.be.false;
      //(eventData.baseData.properties.stacktrace).should.be.true;
      (eventData.baseData.properties.command === 'azure login -u *** -p ***').should.be.true;
      done();
    });

    it('should filter username from the stacktrace', function(done) {
      var eventData;
      sandbox.stub(applicationInsights.client, 'track', function(data) {
        eventData = data;
      });

      telemetry.setAppInsights(applicationInsights);
      telemetry.init(true)
      telemetry.start(['foo', 'bar', 'azure', 'login', '-u', 'foo', '-p', 'bar']);
      telemetry.currentCommand({
        fullName: function() {
          return 'azure login';
        }
      });
      var err = new Error('error');
      err.stack = fs.readFileSync(__dirname + '/../data/error.txt', 'utf8');
      var filteredError = fs.readFileSync(__dirname + '/../data/filtered_error.txt', 'utf8');
      telemetry.onError(err, function() {});
      (eventData.baseData.properties.isSuccess).should.be.false;
      eventData.baseData.properties.stacktrace.should.equal(filteredError);
      (eventData.baseData.properties.command === 'azure login -u *** -p ***').should.be.true;
      done();
    });

    it('should classify cli internal errors as CLI_Error', function(done) {
      var eventData;
      sandbox.stub(applicationInsights.client, 'trackEvent', function (key, event) {
        eventData = event;
      });

      telemetry.setAppInsights(applicationInsights);
      telemetry.init(true)
      telemetry.start(['foo', 'bar', 'azure', 'login', '-u', 'foo', '-p', 'bar']);
      telemetry.currentCommand({
        fullName: function() {
          return 'azure login';
        }
      });
      var err = new Error('cli internal error');
      telemetry.onError(err, function () { });

      eventData.should.have.property('errorCategory').with.type('string');
      eventData.errorCategory.should.equal('CLI_Error');
      done();
    });

    it('should classify service errors by status code', function (done) {
      var eventData;
      sandbox.stub(applicationInsights.client, 'trackEvent', function (key, event) {
        eventData = event;
      });

      telemetry.setAppInsights(applicationInsights);
      telemetry.init(true)
      telemetry.start(['foo', 'bar', 'azure', 'login', '-u', 'foo', '-p', 'bar']);
      telemetry.currentCommand({
        fullName: function () {
          return 'azure login';
        }
      });
      var err = {
        statusCode: '404',
        message: 'could not find resource',
        request: 'abc',
        response: 'xyz',
        stack: 'at some location...'
      };
      telemetry.onError(err, function () { });

      eventData.should.have.property('errorCategory').with.type('string');
      eventData.errorCategory.should.equal('HTTP_Error_404');
      done();
    });
  })
});
