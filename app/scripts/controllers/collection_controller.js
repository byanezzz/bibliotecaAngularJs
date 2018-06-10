  (function() {
      'use strict';

      angular
          .module('bibliotecaJsApp')
          .controller('CollectionController', CollectionController);

      CollectionController.$inject = ['$scope', 'CollectionService'];

      function CollectionController(scope, CollectionService) {
          var vm = this;
          vm.CollectionService = CollectionService;
          vm.activate();

          ////////////////


      }

      CollectionController.prototype.activate = function() {
          var vm = this;
          vm.collection = vm.CollectionService.collections
      }

  })();