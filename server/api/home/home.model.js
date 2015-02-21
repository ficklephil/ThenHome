'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var HomeSchema = new Schema({
  name: String,
  email: String,
  postcode: String,
  longitude: Number,
  latitude: Number,
  adminDistrict:String,
  region: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Home', HomeSchema);
