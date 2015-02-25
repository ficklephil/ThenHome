'use strict';

angular.module('thenHomeApp')
    .service('HomeService', function ($q, $log, $http) {

        return {
            addHome: function (home) {
                var deferred = $q.defer();

                $http.post('/api/homes', home).success(function (data) {
                    deferred.resolve(data);
                }).error(function (err) {
                    deferred.reject(err);
                });

                return deferred.promise;
            },
            getHome: function(id){
                var deferred = $q.defer();

                $http.get('/api/homes/'+id).success(function (data) {
                    $log.debug('data',data);
                    deferred.resolve(data);
                }).error(function (err) {
                    deferred.reject(err);
                });

                return deferred.promise;
            },
            getHomes: function(){
                var deferred = $q.defer();

                $http.get('/api/homes/').success(function (data) {
                    $log.debug('data',data);
                    deferred.resolve(data);
                }).error(function (err) {
                    deferred.reject(err);
                });

                return deferred.promise;
            }
        }
    });
