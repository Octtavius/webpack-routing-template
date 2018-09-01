'use strict';

function MainController ($scope) {
    $scope.title = "Webpack Code Splitting";
}

MainController.$inject = ['$scope'];

// angular.module('codeSplitApp').controller('MainController', MainController);
module.exports = MainController;