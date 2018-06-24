(function () {
	'use strict';

	angular
		.module('bibliotecaJsApp')
		.controller('SearchCtrl', SearchCtrl)

	SearchCtrl.$inject = ['$scope', 'searchService', '$log'];

	function SearchCtrl(scope, searchService, log) {
		var vm = this;
		vm.bookTitle;
		vm.log = log;
		vm.searchService = searchService;
		vm.activate();
	};
	SearchCtrl.prototype.activate = function () {

	};
	SearchCtrl.prototype.searchBook = function () {
		var vm = this;
		vm.searchService.getBooks(vm.bookTitle).then(function (data) {
			vm.collections = data.data.items;
			vm.log.info(data.data.items);
		}, function (err) {
			vm.log.info(err);
		});
	};
})();