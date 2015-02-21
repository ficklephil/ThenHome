'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

/**
 * Error returned from the API if Postcode is not found
 *
 * @type {{status: number, error: string}}
 */
var notFoundPostcodeDetails = {
  status : 404,
  error : 'Postcode not found'
};

/**
 * Postcode Details back from the API should contain the following
 *
 * @type {{postcode: string, country: string, admin_district: string, longitude: number, latitude: number, region: string}}
 */
var actualPostcodeDetails = {
  postcode:'TW3 1RH',
  country:'England',
  admin_district:'Hounslow',
  longitude:-0.354703495417354,//TODO: Keep for a bit and then use a regex
  latitude:51.4703906916802,
  region:'London'
};

function expectPostcodeDetailsProperties(res){
  res.body.result.should.have.property('postcode',  actualPostcodeDetails.postcode);
  res.body.result.should.have.property('country',  actualPostcodeDetails.country);
  res.body.result.should.have.property('admin_district',  actualPostcodeDetails.admin_district);
  res.body.result.should.have.property('longitude',  actualPostcodeDetails.longitude);
  res.body.result.should.have.property('latitude',  actualPostcodeDetails.latitude);
  res.body.result.should.have.property('region',  actualPostcodeDetails.region);
}

describe('GET /api/postcodes', function() {

  it('should respond with 404 if the API cannot find the postcode : if the postcode is three digits', function(done) {
    request(app)
      .get('/api/postcodes/tw3')
      .expect(201)//TODO: For some reason this is passing when the status back is 404 issue around supertest perhaps?
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        res.body.should.have.property('error', notFoundPostcodeDetails.error);
        res.body.should.have.property('status', notFoundPostcodeDetails.status);
        done();
      });
  });

  it('should respond with postcode details', function(done) {
    request(app)
      .get('/api/postcodes/tw3 1rh')
      .expect(200)//TODO: For some reason this is passing when the status back is 404 issue around supertest perhaps?
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        expectPostcodeDetailsProperties(res);

        //TODO: Remove when Supertest is fixed.
        res.body.should.have.property('status', 200);
        done();
      });
  });

  it('should respond with postcode details if there is no space between the postcode ie. TW31RH', function(done) {
    request(app)
      .get('/api/postcodes/tw31rh')
      .expect(200)//TODO: For some reason this is passing when the status back is 404 issue around supertest perhaps?
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        expectPostcodeDetailsProperties(res);

        //TODO: Remove when Supertest is fixed.
        res.body.should.have.property('status', 200);
        done();
      });
  });
});
