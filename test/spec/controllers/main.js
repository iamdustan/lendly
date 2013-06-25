'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('lendyApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of lends to the scope', function () {
    expect(scope.lends.length).toBe(0);
  });
});
