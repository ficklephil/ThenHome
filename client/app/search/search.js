'use strict';

angular.module('thenHomeApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('search', {
                url: '/search',
                templateUrl: 'app/search/search.html',
                controller: 'SearchCtrl'
            });
    })
    .config(function (uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            //    key: 'your api key',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });
    });
