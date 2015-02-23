'use strict';

angular.module('thenHomeApp')
    .controller('MainCtrl', function ($scope, $http, socket, uiGmapGoogleMapApi, GoogleStaticMapService) {
        $scope.awesomeThings = [];

        $http.get('/api/things').success(function (awesomeThings) {
            $scope.awesomeThings = awesomeThings;
            socket.syncUpdates('thing', $scope.awesomeThings);
        });

        $http.get('/api/homes').success(function (homes) {
            $scope.homes = homes;
        });

        $scope.getGoogleMapImage = GoogleStaticMapService.getGoogleMapImage;
        $scope.getGoogleMapStreetViewImage = GoogleStaticMapService.getGoogleMapStreetViewImage;
        $scope.addThing = function () {
            if ($scope.newThing === '') {
                return;
            }
            $http.post('/api/things', { name: $scope.newThing });
            $scope.newThing = '';
        };

        uiGmapGoogleMapApi.then(function (maps) {
            console.log('Google maps is ready');
            $scope.map = { center: { latitude: 51.4790383, longitude: -0.2271019 }, zoom: 11 };
        });

        $scope.deleteThing = function (thing) {
            $http.delete('/api/things/' + thing._id);
        };

        $scope.$on('$destroy', function () {
            socket.unsyncUpdates('thing');
        });
    });
