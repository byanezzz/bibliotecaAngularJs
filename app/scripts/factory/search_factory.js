(function () {
	'use strict';

	angular
		.module('bibliotecaJsApp')
		.factory('SearchFactory', SearchFactory)

	SearchFactory.$inject = ['$http', 'END_POINT'];

	function SearchFactory($http, END_POINT) {
		var service = {
			getBook,
		};
		return service;

		function getBook(parm) {
			return $http.get(END_POINT.getBook + parm);
		}
	}
})();
