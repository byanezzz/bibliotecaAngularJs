(function() {
    'use strict';

    angular
        .module('bibliotecaJsApp')
        .service('CollectionService', CollectionService);

    CollectionService.$inject = ['CollectionFactory'];

    function CollectionService(CollectionFactory) {
        var service = this;
        ////////////////
        service.CollectionFactory = CollectionFactory;
        service.collections = []

    }

    CollectionService.prototype.addBock = function(book) {
        var service = this;
        service.collections.push(book);
    };

    CollectionService.prototype.removeBook = function(index) {
        var service = this;
        _.remove(service.collections, function(value) {
            return value.id === index;
        });
    };



})();