'use strict';

(function() {

    class MainController {
        constructor($http, API, lodash) {
            this.$http = $http;
            this.projects = [];

            //just incase we want to add a button to search instead of on click
            this.search = function(searchParam) {
                this.filters = searchParam;
            };
            this.gatherStatus = function(records) {
                this.statusForRecords = {
                    divisions: {},
                    status: {}
                };
                this.statusForRecords.divisions = lodash.countBy(records, function(n) {
                    return n['division'];
                });
                this.statusForRecords.status = lodash.countBy(records, function(n) {
                    return n['status'];
                });

            };
            //get the data from the mock data factory
            API.getMockData().then(response => {
                this.projects = response;
                this.gatherStatus(this.projects);
            });
           
        }
    }

    angular.module('projectDashboardApp')
        .controller('MainController', MainController);

})();
