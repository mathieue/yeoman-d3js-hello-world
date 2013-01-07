'use strict';

describe('Controller: Vertical-BarCtrl', function() {

  // load the controller's module
  beforeEach(module('yeomanD3jsHelloWorldApp'));

  var Vertical-BarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    Vertical-BarCtrl = $controller('Vertical-BarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
