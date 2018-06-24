(function () {
	'use strict';

	angular
		.module('bibliotecaJsApp')
		.factory('CollectionFactory', CollectionFactory);

	CollectionFactory.$inject = ['$http', 'END_POINT'];

	function CollectionFactory($http, END_POINT) {
		var service = {
			getBook: getBook
		};

		return service;

		////////////////
		function getBook(parm) {
			return $http.get(END_POINT.getBook + parm);

		}
	}
})();