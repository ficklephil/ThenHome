'use strict';

angular.module('thenHomeApp')
    .controller('SearchCtrl', function ($scope, uiGmapGoogleMapApi, HomeService, $log) {
        $scope.message = 'Hello';

        uiGmapGoogleMapApi.then(function (maps) {
            console.log('Google maps is ready');
            $scope.map = { center: { latitude: 51.4790383, longitude: -0.2271019 }, zoom: 11 };
//            $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
        });

//        $scope.marker = {
//            id: 0,
//            coords: {
//                latitude: 40.1451,
//                longitude: -99.6680
//            },
//            options: { draggable: true }
//        };


        HomeService.getHomes().then(function(data){
//
//            var homeCoordinates = {};
            var homes = [];

            //Definetly make this easier ie. don't even have the homeCoordinates Object
            for(var index in data){

                $log.debug(Number(data[index].latitude));
                $log.debug(Number(data[index].longitude));

                $scope.marker = {
                    id: 0,
                    coords: {
                        latitude: Number(data[index].latitude),
                        longitude: Number(data[index].longitude)
                    }
                };


//                homeCoordinates = {
//                    latitude: data[index].latitude,
//                    longitude: data[index].longitude,
//                    title:'yo',
//                    _id: data[index]._id
//                };
//
//                homes.push(homeCoordinates['dfdfd']);
            }

            $log.debug($scope.marker);
//            $scope.mapHomes = homes;

            //run through each marker?? or

        },function(reason){

        },function(update){

        });

//        we need to get all the homes ???? and then display them? for now yeah...
//        just run through them and add their ID's and Lat, Lng to the map

        //Click through on them should show their details page.
    });
