'use strict';

angular.module('thenHomeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('addhome', {
        url: '/addhome',
        templateUrl: 'app/addhome/addhome.html',
        controller: 'AddhomeCtrl'
      });
  });