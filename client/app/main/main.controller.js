'use strict';

(function() {

    class MainController {
        constructor($http, API, $mdToast) {
            this.$http = $http;
            this.projects = [];
           
            //just incase we want to add a button to search instead of on click
            this.search = function(searchParam) {
                this.filters = searchParam;
            };
            
            //get the data from the mock data factory
            API.getMockData().then(response => {
                this.projects = response;
                console.log(response.length)
            });
        }
    }

    angular.module('projectDashboardApp')
        .controller('MainController', MainController);

})();
