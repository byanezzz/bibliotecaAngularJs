(function() {
    'use strict';

    angular
        .module('bibliotecaJsApp')
        .factory('firebaseFactory', firebaseFactory);

    firebaseFactory.$inject = ['$firebaseArray', '$firebaseObject'];

    function firebaseFactory($firebaseArray, $firebaseObject) {
        var factory = this;

        var service = {
            firebaseFn,
            firebaseObj
        };


        return service;


        function firebaseFn() {
            var factory = this;
            var ref = firebase.database().ref();

            return factory.$firebaseArray(ref);
        }

        function firebaseObj(params) {
            var factory = this;
            var ref = firebase.database().ref();

            return $firebaseObject(refChilds(ref, params))
        }

        function refChilds(ref, params) {
            var newRef = ref;
            angular.forEach(params, function(pr) {
                newRef = newRef.child(pr);
            })
            return newRef;
        }
    }


})();