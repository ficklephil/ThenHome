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

    //console.log('body');
    //console.log(error);
    //console.log(response);
    //console.log(body);
	//
    //console.log('response');
    //console.log(response.statusCode);
	//
    //console.log('error');
    //console.log(error);

    //if(!error && response.statusCode == 200){
    //  //console.log('Success');
    //  //console.log(body);
    //  res.json(JSON.parse(body));
    //}else{
    //  //console.log('Error' + error);
    //  res.json(error);
    //}
    //console.log(body);
    //console.log(response.statusCode);

    //If we have postcode not found, we need to send back a 404
    //to the front end
    //and also the error

    if(!error && response.statusCode == 200){
      res.send(200,JSON.parse(body));
    }else{
      res.send(response.statusCode, JSON.parse(body));
    }

    //res.send(JSON.parse(body));

    //if(response.statusCode == 404){
	//
    //  res.send(404, 'Postcode not found');
	//
    //}else{
    //  res.json(JSON.parse(body));
    //}



  });
};

function handleError(res, err) {
  return res.send(500, err);
}
