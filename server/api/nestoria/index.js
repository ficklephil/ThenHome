'use strict';

var express = require('express');
var controller = require('./nestoria.controller');

var router = express.Router();

router.get('/', controller.search);
router.get('/:placeName', controller.search);

module.exports = router;