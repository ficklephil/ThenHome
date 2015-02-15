'use strict';

angular.module('thenHomeApp')
  .controller('AddhomeCtrl', function ($scope, HomeService, $log, uiGmapGoogleMapApi, PostcodeService) {
    $scope.message = 'Hello';

    uiGmapGoogleMapApi.then(function(maps){
      console.log('Google maps is ready');
      $scope.map = { center: { latitude: 51.4790383, longitude: -0.2271019 }, zoom: 11 };
    });

    $scope.home = {
      name:'Philip',
      postcode:'tw3 2hb',
      roadName:'Hello'
    };

    $scope.getAddress = function(postcode){

      PostcodeService.getPostcodeData(postcode).then(function(data){
          $log.debug('postcode data', data);
        }, function(reason){
          $log.debug('failing', reason);
        }, function(update){
          $log.debug('got notification');
        })
    };

    $scope.populateAddressBtnHandler = function(){
      $scope.getAddress($scope.home.postcode);
    };

    $scope.addBtnHandler = function(){
      HomeService.addHome($scope.home);
    };
  });
