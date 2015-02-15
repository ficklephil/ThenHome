'use strict';

describe('Service: homeService', function () {

  // load the service's module
  beforeEach(module('thenHomeApp'));

  // instantiate service
  var home;
  beforeEach(inject(function (_home_) {
    home = _home_;
  }));

  //it('should do something', function () {
  //  expect(!!homeService).toBe(true);
  //});

});
