'use strict';

describe('Service: nestoriaService', function () {

  // load the service's module
  beforeEach(module('thenHomeApp'));

  // instantiate service
  var nestoriaService;
  beforeEach(inject(function (_nestoriaService_) {
    nestoriaService = _nestoriaService_;
  }));

  it('should do something', function () {
    expect(!!nestoriaService).toBe(true);
  });

});
