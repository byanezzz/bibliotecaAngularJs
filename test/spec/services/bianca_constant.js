'use strict';

describe('Service: biancaConstant', function () {

  // load the service's module
  beforeEach(module('bibliotecaJsApp'));

  // instantiate service
  var biancaConstant;
  beforeEach(inject(function (_biancaConstant_) {
    biancaConstant = _biancaConstant_;
  }));

  it('should do something', function () {
    expect(!!biancaConstant).toBe(true);
  });

});
