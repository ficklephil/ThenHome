'use strict';

describe('Service: postcodeService', function () {

  // load the service's module
  beforeEach(module('thenHomeApp'));

  // instantiate service
  var postcodeService;
  beforeEach(inject(function (_postcodeService_) {
    postcodeService = _postcodeService_;
  }));

  //TODO : Test using $httpBackend?
  it('should return a JSON response from the service', function () {
    expect(!!postcodeService).toBe(true);
  });

});
