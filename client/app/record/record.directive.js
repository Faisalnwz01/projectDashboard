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
            controller: ['$scope','$mdToast', function($scope, $mdToast) {
                $scope.changeOwner;
                $scope.changeStatus;
                $scope.adjustBudget;
                $scope.searchFilters = '';
                var tempBudget = '';
                var tempOwner = '';
                var tempStatus = ''
                $scope.$watch('datasource', function(newValue, oldValue) {
                    if (newValue)
                        $scope.projects = angular.copy($scope.datasource);
                    console.log($scope.projects)
                }, true);
                $scope.$watch('filter', function(newValue, oldValue) {
                    if (newValue)
                        $scope.searchFilters = angular.copy($scope.filter);
                    console.log($scope.searchFilters)
                }, true);

                //toggle the budget input
                $scope.toggleBudget = function(index, proj) {
                    if ($scope.adjustBudget == null || $scope.adjustBudget == '') {
                        tempBudget = proj.budget;
                        $scope.adjustBudget = index;
                    } else {
                        if (tempBudget !== proj.budget) {
                            $mdToast.show(
                                $mdToast.simple()
                                .textContent('You have changed the budget for ' + proj.title + ' to ' + proj.budget)
                                .position('right')
                                .hideDelay(3000)
                            );
                        }
                        tempBudget = '';
                        $scope.adjustBudget = '';
                    }
                };
                //toggle the owner input
                $scope.toggleOwner = function(index, proj) {
                    if ($scope.changeOwner == null || $scope.changeOwner == '') {
                        tempOwner = proj.project_owner;
                        $scope.changeOwner = index;
                    } else {
                        if (tempOwner !== proj.project_owner) {
                            $mdToast.show(
                                $mdToast.simple()
                                .textContent('You have changed the Project Owner for ' + proj.title + ' to ' + proj.project_owner)
                                .position('right')
                                .hideDelay(3000)
                            );
                        }
                        tempOwner = '';
                        $scope.changeOwner = '';
                    }
                };
                //toggle the status input
                $scope.toggleStatus = function(index, proj) {
                    if ($scope.changeStatus == null || $scope.changeStatus == '') {
                        tempStatus = proj.status;
                        $scope.changeStatus = index;
                    } else {
                        if (tempStatus !== proj.status) {
                            $mdToast.show(
                                $mdToast.simple()
                                .textContent('You have changed the Project Owner for ' + proj.title + ' to ' + proj.status)
                                .position('right')
                                .hideDelay(3000)
                            );
                        }
                        tempStatus = '';
                        $scope.changeStatus = '';
                    }
                };
            }]
        };
    });
