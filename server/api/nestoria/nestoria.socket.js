/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Nestoria = require('./nestoria.model');

exports.register = function(socket) {
  Nestoria.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Nestoria.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('nestoria:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('nestoria:remove', doc);
}