'use strict';

angular.module('thenHomeApp')
  .controller('SearchCtrl', function ($scope, uiGmapGoogleMapApi) {
    $scope.message = 'Hello';

    uiGmapGoogleMapApi.then(function(maps){
      console.log('Google maps is ready');
      $scope.map = { center: { latitude: 51.4790383, longitude: -0.2271019 }, zoom: 11 };
    });
  });
