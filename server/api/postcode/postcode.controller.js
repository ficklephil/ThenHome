'use strict';

var _ = require('lodash');
var q = require('q');
var request = require('request');
var Postcode = require('./postcode.model');

// Get a single postcode
exports.show = function(req, res) {

  var deferred = q.d

  console.log('In Postcode Controller node');

  console.log(req.params.id);

  //TODO : Use a Promise here
  request('http://postcodes.io/postcodes/' + req.params.id, function(error,response,body){
    if(!error && response.statusCode == 200){
      console.log(body);
      res.json(JSON.parse(body));
    }
  });


  //Postcode.findById(req.params.id, function (err, postcode) {
  //  if(err) { return handleError(res, err); }
  //  if(!postcode) { return res.send(404); }
  //  return res.json(postcode);
  //});
};

function handleError(res, err) {
  return res.send(500, err);
}
