'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostcodeSchema = new Schema({
  postcode: String
});

module.exports = mongoose.model('Postcode', PostcodeSchema);
