'use strict';

describe('Controller: AddhomeCtrl', function () {

  // load the controller's module
  beforeEach(module('thenHomeApp'));

  var AddhomeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddhomeCtrl = $controller('AddhomeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
