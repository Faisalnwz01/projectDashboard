'use strict';

angular.module('projectDashboardApp')
    .filter('advanceSearch', ['$filter', function($filter) {
        return function(data, text) {
            var output = [];
            var dates = [];
            var minDate, maxDate;
            //return with full set of data if there is no filter or filter is empthy string
            if (text == null || text == '') {
                return data;
            }
            //check how many filters user wants to apply by spliting the incomeing text
            var textArr = text.split(' ');
            angular.forEach(textArr, function(fil) {
                //if we see any ranges for the dates
                if (fil.search('-') !== -1) {
                    dates = fil.split('-');
                    //set min date and max date, user input order shouldnt matter
                    minDate = new Date(dates[0]) < new Date(dates[1]) ? new Date(dates[0]) : new Date(dates[1]);
                    maxDate = new Date(dates[0]) > new Date(dates[1]) ? new Date(dates[0]) : new Date(dates[1]);
                    output = output.length == 0 ? data : output;
                    angular.forEach(output, function(proj, index) {
                        var p = new Date(proj.created).getTime();
                        if (p > maxDate.getTime() || p < minDate.getTime()) {
                            //let take out all the dates that dont fall within our required min and max date
                            output.splice(index, 1);
                        };
                    })
                } else {
                    //check to see if there is a pervious filter applied by checking the output length
                    output = output.length == 0 ? data : output;
                    //filter out by keyword 
                    output = $filter('filter')(output, fil);
                }

            });
            return output;
        }
    }]);
