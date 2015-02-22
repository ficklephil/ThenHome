'use strict';

angular.module('thenHomeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home/:homeId',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      });
  });