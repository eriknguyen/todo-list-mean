'use strict';

describe('Component: MainComponent', function () {

  // load the controller's module
  beforeEach(module('todoListApp'));

  var MainComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MainComponent = $componentController('MainComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
