'use strict';

angular.module('thenHomeApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $window) {

    //TODO: Remove when on prod
    $scope.user = {
      email: 'test@test.com',
      password: 'test'
    };
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to homeService
          $location.path('/');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
