'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var Home = require('./home.model');

var home = new Home({
  postcode : 'TW4'
});

describe('GET /api/homes', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/homes')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});

describe('POST /api/homes', function() {

  it('should be able to take a postcode', function(done) {
    request(app)
      .post('/api/homes')
      .send(home)
      .expect(201)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.have.property('postcode', home.postcode);
        done();
      });
  });
});
