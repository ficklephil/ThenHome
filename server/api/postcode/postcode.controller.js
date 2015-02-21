'use strict';

var _ = require('lodash');
var Q = require('q');
var request = require('request');
var Postcode = require('./postcode.model');

exports.show = function(req, res) {

  request('http://postcodes.io/postcodes/' + req.params.id, function(error,response,body){
    if(!error && response.statusCode == 200){
      res.send(JSON.parse(body));
    }else{
      res.send(response.statusCode, JSON.parse(body));
    }
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
