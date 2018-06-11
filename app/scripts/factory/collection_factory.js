(function() {
    'use strict';

    angular
        .module('bibliotecaJsApp')
        .factory('CollectionFactory', CollectionFactory);

    CollectionFactory.$inject = ['$http'];

    function CollectionFactory($http) {
        var service = {
            getBook: getBook
        };

        return service;

        ////////////////
        function getBook(parm) {
            return $http.get('https://www.googleapis.com/books/v1/volumes?q=' + parm);

        }
    }
})();