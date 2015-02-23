'use strict';

describe('Service: googleStaticMapService', function () {

  // load the service's module
  beforeEach(module('thenHomeApp'));

  // instantiate service
  var googleStaticMapService;
  beforeEach(inject(function (_googleStaticMapService_) {
    googleStaticMapService = _googleStaticMapService_;
  }));

  it('should do something', function () {
    expect(!!googleStaticMapService).toBe(true);
  });

});
