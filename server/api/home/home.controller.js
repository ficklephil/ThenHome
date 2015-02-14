'use strict';

var _ = require('lodash');
var Home = require('./home.model');

// Get list of homes
exports.index = function(req, res) {
  Home.find(function (err, homes) {
    if(err) { return handleError(res, err); }
    return res.json(200, homes);
  });
};

// Get a single home
exports.show = function(req, res) {
  Home.findById(req.params.id, function (err, home) {
    if(err) { return handleError(res, err); }
    if(!home) { return res.send(404); }
    return res.json(home);
  });
};

// Creates a new home in the DB.
exports.create = function(req, res) {

  console.log('Create Home');
  console.log(req.body);

  Home.create(req.body, function(err, home) {
    if(err) { return handleError(res, err); }
    return res.json(201, home);
  });
};

// Updates an existing home in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Home.findById(req.params.id, function (err, home) {
    if (err) { return handleError(res, err); }
    if(!home) { return res.send(404); }
    var updated = _.merge(home, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, home);
    });
  });
};

// Deletes a home from the DB.
exports.destroy = function(req, res) {
  Home.findById(req.params.id, function (err, home) {
    if(err) { return handleError(res, err); }
    if(!home) { return res.send(404); }
    home.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
