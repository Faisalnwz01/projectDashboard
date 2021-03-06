'use strict';

describe('Controller: MainController', function() {

  // load the controller's module
  beforeEach(module('projectDashboardApp'));
  beforeEach(module('stateMock'));

  var scope;
  var MainController;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function( $controller, $rootScope, $state) {
    scope = $rootScope.$new();
    state = $state;
    MainController = $controller('MainController', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the controller', function() {
    $httpBackend.flush();
    expect(MainController.projects.length).toBe(30);
  });
});
