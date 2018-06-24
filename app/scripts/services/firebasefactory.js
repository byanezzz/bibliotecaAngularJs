(function() {
    'use strict';

    angular
        .module('bibliotecaJsApp')
        .factory('firebaseFactory', firebaseFactory);

    firebaseFactory.$inject = ['$firebaseArray', '$firebaseObject'];

    function firebaseFactory($firebaseArray, $firebaseObject) {
        var service = {
            firebaseFn,
            firebaseObj
        };
        firebaseObj

        return service;

        ////////////////
        function firebaseFn() {

            var ref = firebase.database().ref();

            return $firebaseArray(ref);
        }

        function firebaseObj(param) {

            var ref = firebase.database().ref();

            return $firebaseObject(ref.child(param));
        }
    }
})();