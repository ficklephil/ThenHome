'use strict';

angular.module('thenHomeApp')
    .controller('SearchCtrl', function ($scope, uiGmapGoogleMapApi, HomeService, $log, $location) {
        $scope.message = 'Hello';

            uiGmapGoogleMapApi.then(function (maps) {
                console.log('Google maps is ready');
                $scope.map = { center: { latitude: 51.4790383, longitude: -0.2271019 }, zoom: 11 };
            });

        function addMarkerClickEvent(){
            $scope.markerEvents = {
                click: function (marker, eventName, home, args) {
                    $location.path('/home/'+home.id);
                }
            }
        }

        HomeService.getHomes().then(function(data){

            var markers = [];

            for(var index in data){
                var marker = {
                    latitude: Number(data[index].latitude),
                    longitude: Number(data[index].longitude),
                    id: data[index]._id
                };
                markers.push(marker);
            }

            $scope.markers = markers;

            addMarkerClickEvent();

        },function(reason){

        },function(update){

        });
    });
