'use strict';

angular.module('thenHomeApp')
  .controller('HomeCtrl', function ($scope, $stateParams, HomeService, $log) {

        console.log($stateParams.homeId);
        HomeService.getHome($stateParams.homeId).then(function(data){
            $log.debug(data)
        },function(reason){
            $log.debug(reason);
        },function(update){
            $log.debug(update);
        });

        $scope.message = 'Hello';
  });
