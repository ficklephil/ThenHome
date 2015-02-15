/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Postcode = require('./postcode.model');

exports.register = function(socket) {
  Postcode.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Postcode.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('postcode:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('postcode:remove', doc);
}