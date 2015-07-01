
var myApp = angular.module('myApp', []);

myApp.controller('personCtrl', function($scope) {
    $scope.firstName = "John",
    $scope.lastName = "Doe",
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    }
});