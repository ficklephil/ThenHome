'use strict';

angular.module('thenHomeApp')
  .controller('AddhomeCtrl', function ($scope, Home, $log) {
    $scope.message = 'Hello';

    $scope.home = {
      name:'Philip'
    };

    $scope.addButtonHandler = function(){
      $log.debug('add Btn Handler');

      Home.addHome($scope.home);
    };


    //take the data from the page and pass it to the API via the service


  });
