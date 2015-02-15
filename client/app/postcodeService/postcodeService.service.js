'use strict';

/**
 * For the Postcode Service we are current using http://postcodes.io/postcodes/
 * and not using Node as a proxy for the request.
 */
angular.module('thenHomeApp')
  .service('PostcodeService', function ($q, $http, $log) {

    return {
      getPostcodeData: function(postcode){

        var deferred = $q.defer();

        $http.get('/api/postcodes/' + postcode)
          .success(function(data){
            deferred.resolve(data);
          }).error(function(err){
            deferred.reject(err);
          });

        return deferred.promise;
      }
    }
  });
