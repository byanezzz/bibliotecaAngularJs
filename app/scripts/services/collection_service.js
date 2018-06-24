(function() {
    'use strict';

    angular
        .module('bibliotecaJsApp')
        .service('CollectionService', CollectionService);

    CollectionService.$inject = ['CollectionFactory', 'firebaseFactory', '$q'];

    function CollectionService(CollectionFactory, firebaseFactory, $q) {
        var service = this;
        ////////////////
        service.CollectionFactory = CollectionFactory;
        service.firebaseFactory = firebaseFactory;
        service.$q = $q;
        service.collections = [];

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
    CollectionService.prototype.getBooks = function(parm) {
        var service = this;
        var defered = service.$q.defer();

        service.CollectionFactory.getBook(parm).then(
            function(data) {
                defered.resolve(data);
            },
            function(err) {
                defered.reject(err);
            }
        )

        return defered.promise;
    }
    CollectionService.prototype.getFirebase = function() {
        var service = this;

        return service.firebaseFactory.firebaseFn();
    };

    CollectionService.prototype.getFirebaseObjSave = function(param) {
        var service = this;

        return service.firebaseFactory.firebaseObj(param);
    };


})();