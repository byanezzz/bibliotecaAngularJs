'use strict';

/**
 * @ngdoc overview
 * @name bibliotecaJsApp
 * @description
 * # bibliotecaJsApp
 *
 * Main module of the application.
 */
angular
    .module('bibliotecaJsApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ui.router',
        'ngSanitize',
        'ngTouch',
        'ngMaterial'
    ])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: 'views/search.html',
                controller: 'SearchCtrl',
                controllerAs: 'search'
            })
            .state('collection', {
                url: "/collection",
                templateUrl: 'views/collection.html',
                controller: 'CollectionController',
                controllerAs: 'collection'
            });
    });