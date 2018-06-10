(function () {
	'use strict';

	angular
		.module('bibliotecaJsApp')
		.controller('SearchCtrl', SearchCtrl)

	SearchCtrl.$inject = ['$scope'];

	function SearchCtrl($scope) {

		var vm = this;
		vm.name = "Bianca";
		activate();
		
		function activate() { }
	}
})();