'use strict';

angular.module('thenHomeApp')
    .service('NestoriaService', function ($q, $http, $log) {

        return{
            search: function (placeName) {
                var deferred = $q.defer();

//                $http.get('http://api.nestoria.co.uk/api?encoding=json&country=uk&listing_type=buy&pretty=1&place_name=soho&action=search_listings')
                $http.get('/api/nestoria/'+ placeName)
                    .success(function (data) {
                        deferred.resolve(data);
                    }).error(function (err) {
                        deferred.reject(err);
                    });

                return deferred.promise;
            }
        }
    });
