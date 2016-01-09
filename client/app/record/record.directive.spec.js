'use strict';

describe('Directive: record', function () {

  // load the directive's module and view
  beforeEach(module('projectDashboardApp'));
  beforeEach(module('app/record/record.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<record></record>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('Division');
  }));
});
