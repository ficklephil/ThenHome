'use strict';

var _ = require('lodash');
var request = require('request');
var Nestoria = require('./nestoria.model');

// Get list of nestorias
//exports.index = function(req, res) {
//  Nestoria.find(function (err, nestorias) {
//    if(err) { return handleError(res, err); }
//    return res.json(200, nestorias);
//  });
//};

exports.search = function (req, res) {

    var placeName = req.params.placeName;

    request('http://api.nestoria.co.uk/api?encoding=json&country=uk&listing_type=buy&pretty=1&place_name=' + placeName +
        '&action=search_listings', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(JSON.parse(body));
        } else {
            res.send(response.statusCode, JSON.parse(body));
        }
    });
};

function handleError(res, err) {
    return res.send(500, err);
}