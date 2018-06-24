(function () {
	'use strict';

	angular
		.module('bibliotecaJsApp')
		.controller('CollectionController', CollectionController);

	CollectionController.$inject = ['$scope', 'CollectionService', '$log'];

	function CollectionController(scope, CollectionService, $log) {
		var vm = this;
		vm.$log = $log;
		vm.CollectionService = CollectionService;
		vm.activate();
	}

	CollectionController.prototype.activate = function () {
		var vm = this;
		vm.CollectionService.getBooks('java').then(function (data) {
			vm.collections = data.data.items;
			vm.$log.info(data.data.items);
		}, function (err) {
			vm.$log.info(err);
		});
	}

})();