'use strict';

describe('Filter: advanceSearch', function () {

  // load the filter's module
  beforeEach(module('projectDashboardApp'));

  // initialize a new instance of the filter before each test
  var advanceSearch;
  beforeEach(inject(function ($filter) {
    advanceSearch = $filter('advanceSearch');
  }));

  it('should return the input prefixed with "advanceSearch filter:"', function () {
    var text = 'angularjs';
    expect(advanceSearch(text)).toBe('advanceSearch filter: ' + text);
  });

});
