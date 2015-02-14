'use strict';

angular.module('thenHomeApp')
  .service('Home', function ($q, $log, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function


    //saves a result to the Database through Node

    return {

      addHome: function(home){

        $log.debug('home.name', home.name);

        var deferred = $q.defer();

        $http.post('/api/homes',{
          name: home.name
        }).success(function(data){
          deferred.resolve(data);
        }).error(function(err){
          deferred.reject(err);
        })
      }
    }
  });
