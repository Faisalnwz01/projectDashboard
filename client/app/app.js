'use strict';

angular.module('projectDashboardApp', [
        'projectDashboardApp.constants',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ngMaterial',
        'ngLodash'
    ])
    .config(function($urlRouterProvider, $locationProvider, $logProvider) {
        $urlRouterProvider
            .otherwise('/');
        $logProvider.debugEnabled(false);
        $locationProvider.html5Mode(true);
    });
