'use strict';

var should = require('chai').should();
var P2P = require('../../');
var builder = P2P.Messages.builder;
var xazabcore = require('@xazabevo/xazabcore-lib');

describe('Messages Builder', function() {

  describe('@constructor', function() {

    it('should return commands based on default', function() {
      // instantiate
      var b = builder();
      should.exist(b);
    });

    it('should return commands with customizations', function() {
      // instantiate
      var b = builder({
        network: xazabcore.Networks.testnet,
        Block: xazabcore.Block,
        Transaction: xazabcore.Transaction
      });
      should.exist(b);
    });

  });

});
