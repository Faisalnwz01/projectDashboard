'use strict';

angular.module('projectDashboardApp')
    .directive('record', function() {
        return {
            templateUrl: 'app/record/record.html',
            restrict: 'EA',
            scope: {
                datasource: '=',
                filter: '=',
            },
            link: function(scope, element, attributes, $mdToast) {
                scope.changeOwner;
                scope.changeStatus;
                scope.adjustBudget;
                scope.searchFilters = '';
                var tempBudget = '';
                var tempOwner = '';
                var tempStatus = ''

                //keep a watch on filter and change the filters if it changes
                scope.$watch('filter', function(newValue, oldValue) {
                    if (newValue)
                        scope.searchFilters = angular.copy(scope.filter);
                }, true);


                //toggle the budget input
                scope.toggleBudget = function(index, proj) {
                    if (scope.adjustBudget == null || scope.adjustBudget === '') {
                        tempBudget = proj.budget;
                        scope.adjustBudget = index;
                    } else {
                        if (tempBudget !== proj.budget) {
                            scope.$emit('changedRecord', 'You have changed the budget for ' + proj.title + ' to ' + proj.budget);
                        };
                        tempBudget = '';
                        scope.adjustBudget = '';
                    }
                };
                //toggle the owner input
                scope.toggleOwner = function(index, proj) {
                    if (scope.changeOwner == null || scope.changeOwner === '') {
                        tempOwner = proj.project_owner;
                        scope.changeOwner = index;
                    } else {
                        if (tempOwner !== proj.project_owner) {
                            scope.$emit('changedRecord', 'You have changed the Project Owner for ' + proj.title + ' to ' + proj.project_owner);
                        };
                        tempOwner = '';
                        scope.changeOwner = '';
                    }
                };
                //toggle the status input
                scope.toggleStatus = function(index, proj) {
                    if (scope.changeStatus == null || scope.changeStatus === '') {
                        tempStatus = proj.status;
                        scope.changeStatus = index;
                    } else {
                        if (tempStatus !== proj.status) {
                            scope.$emit('changedRecord', 'You have changed the Status for ' + proj.title + ' to ' + proj.status);
                        };
                        tempStatus = '';
                        scope.changeStatus = '';
                    }
                };
            }
        };
    });
