(function() {
    'use strict';

    angular
        .module('bibliotecaJsApp')
        .factory('CollectionFactory', CollectionFactory);

    CollectionFactory.$inject = ['$q'];

    function CollectionFactory($q) {
        var service = {
            exposedFn: exposedFn
        };

        return service;

        ////////////////
        function exposedFn() {}
    }
})();