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
            $log.debug('data', data);
            deferred.resolve(data);
          }).error(function(err){
            $log.debug('err', err);
            deferred.reject(err);
          })
      }
    }
  });
