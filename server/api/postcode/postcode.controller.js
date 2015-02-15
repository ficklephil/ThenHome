'use strict';

var _ = require('lodash');
var Q = require('q');
var request = require('request');
var Postcode = require('./postcode.model');

// Get a single postcode
exports.show = function(req, res) {

  //TODO : Use a Promise here
  //TODO : Get some error handling
  //TODO : Get some tests
  request('http://postcodes.io/postcodes/' + req.params.id, function(error,response,body){
    if(!error && response.statusCode == 200){
      res.json(JSON.parse(body));
    }else{
      res.json(error);
    }
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
