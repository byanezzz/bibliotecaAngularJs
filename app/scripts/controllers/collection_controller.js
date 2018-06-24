  (function() {
      'use strict';

      angular
          .module('bibliotecaJsApp')
          .controller('CollectionController', CollectionController);

      CollectionController.$inject = ['$scope', 'CollectionService', '$log'];

      function CollectionController(scope, CollectionService, $log) {
          var vm = this;
          vm.scope = scope;
          vm.$log = $log;
          vm.CollectionService = CollectionService;

          vm.activate();
      }

      CollectionController.prototype.activate = function() {
          var vm = this;
          vm.ext = vm.CollectionService.getFirebaseObjSave(['collections', 'items']);

          vm.ext.$bindTo(vm.scope, "collection.collections").then(function() {
              console.log(vm.scope.collection.collections);
          });
      }

      CollectionController.prototype.recharge = function() {
          var vm = this;
          vm.CollectionService.getBooks('java').then(function(data) {
              vm.collections = data.data.items;

          }, function(err) {

          });
      };

      CollectionController.prototype.addMessage = function() {
          var vm = this;
          vm.CollectionService.getFirebase().$add({
              from: '$scope.user',
              content: '$scope.message'
          });
      };

      CollectionController.prototype.addCollections = function() {
          var vm = this;
          vm.ext.items = vm.collections;
          vm.ext.$save();
      };

      CollectionController.prototype.deleteCollections = function(col) {
          var vm = this;
          angular.forEach(vm.collections, function(value, key) {
              if (value && value.id && (value.id === col.id)) {
                  delete vm.collections[key];
              }
          });
      };

  })();