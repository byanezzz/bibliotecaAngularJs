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
        'ngTouch'
    ])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .state('collection', {
                url: "/collection",
                templateUrl: 'views/collection.html',
                controller: 'CollectionController',
                controllerAs: 'collection'
            });
    });