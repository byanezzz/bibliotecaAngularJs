(function () {
  'use strict';

  angular
    .module('bibliotecaJsApp')
    .service('searchService', searchService);

  searchService.$inject = ['$q', 'SearchFactory'];
  function searchService(q, SearchFactory) {
    var service = this;
    service.SearchFactory = SearchFactory;
    service.q = q;
  }

  searchService.prototype.getBooks = function (parm) {
    var service = this;
    var defered = service.q.defer();

    service.SearchFactory.getBook(parm).then(
      function (data) {
        defered.resolve(data);
      },
      function (err) {
        defered.reject(err);
      }
    )
    return defered.promise;
  }
})();