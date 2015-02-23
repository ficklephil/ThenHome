'use strict';

angular.module('thenHomeApp')
  .controller('HomeCtrl', function ($scope, $stateParams, HomeService, $log, $window, GoogleStaticMapService) {

        //So we are saying that the getGoogleMapImage function is assigned to getGoogleMapImage, therefore
        //getGoogleMapImage takes all the same parameters
        $scope.getGoogleMapImage = GoogleStaticMapService.getGoogleMapImage;
        $scope.getGoogleMapStreetViewImage = GoogleStaticMapService.getGoogleMapStreetViewImage;

        $scope.backButton = function () {
            $window.history.back();
        };

        HomeService.getHome($stateParams.homeId).then(function(data){
            $scope.home = data;
        },function(reason){
            $log.debug(reason);
        },function(update){
            $log.debug(update);
        });

        $scope.message = 'Hello';
  });
