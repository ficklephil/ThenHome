'use strict';

angular.module('thenHomeApp')
  .service('Home', function ($q, $log, $http) {

    return {
      addHome: function(home){
        var deferred = $q.defer();

        $http.post('/api/homes', home).success(function(data){
          deferred.resolve(data);
        }).error(function(err){
          deferred.reject(err);
        })
      }
    }
  });
