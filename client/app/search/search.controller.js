'use strict';

angular.module('thenHomeApp')
    .controller('SearchCtrl', function ($scope, uiGmapGoogleMapApi, HomeService, NestoriaService, $log, $location) {

        $scope.placeName = '';

        $scope.goBtnHandler = function(){

            NestoriaService.search($scope.placeName).then(function(data){

                setMapCenterPosition(data);
                setMapMarkers(data);

            },function(reason){

            },function(update){

            });
        };

        function setMapCenterPosition(data){

            $scope.map = { center: { latitude: data.response.locations[0].center_lat,
                            longitude: data.response.locations[0].center_long }, zoom: 13 };
        }

        function setMapMarkers(data){

            var markers = [];
            var listings = data.response.listings;

            for(var index in listings){

                $log.debug(Number(listings[index].latitude));
                $log.debug(Number(listings[index].longitude));

                var marker = {
                    latitude: Number(listings[index].latitude),
                    longitude: Number(listings[index].longitude),
                    id: listings[index].guid
                };
                markers.push(marker);
            }

            $scope.markers = markers;
        }

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

        /**
         * Get Private sale listings
         */
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
