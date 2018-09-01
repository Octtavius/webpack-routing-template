'use strict';

ConfigRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function ConfigRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    var home = {
        name: 'home',
        url: '/home',
        templateUrl: './main/partials/home-view.html',
        controller: "MainController"
    };

    var viewer = {
        name: 'viewer',
        url: '/viewer',
        templateUrl: './viewer/partials/viewer.html',
        controller: "ViewerController"
    };


    $stateProvider.state(home);
    $stateProvider.state(viewer);
}

module.exports = ConfigRouter;

// angular.module('codeSplitApp').config(ConfigRouter);