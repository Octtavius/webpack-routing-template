'use strict';

function ViewerController ($scope) {
    $scope.title = "Viewer Template";
    $scope.welcomeMessage = "Hello to Viewer page"
}


ViewerController.$inject = ['$scope'];

module.exports = ViewerController;