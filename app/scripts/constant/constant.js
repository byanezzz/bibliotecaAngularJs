'use strict';

/**
 * @ngdoc service
 * @name bibliotecaJsApp.constant
 * @description
 * # constant
 * Constant in the bibliotecaJsApp.
 */
angular.module('bibliotecaJsApp')
    .constant('END_POINT', {
        getBook: 'https://www.googleapis.com/books/v1/volumes?q='
    });

