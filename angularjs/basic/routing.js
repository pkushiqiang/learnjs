//Define an angular module for our app
var sampleApp = angular.module('sampleApp', []);

//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/AddNewOrder', {
      templateUrl: 'templates/add_order.html',
      controller: 'AddOrderController',
      foodata: 'addorder'
    }).
    when('/ShowOrders', {
      templateUrl: 'templates/show_orders.html',
      controller: 'ShowOrdersController',
      foodata: 'showorders'
    }).
    otherwise({
      redirectTo: '/AddNewOrder'
    });
  }]);


sampleApp.controller('AddOrderController', function($scope) {

  $scope.message = 'This is Add new order screen';

});


sampleApp.controller('ShowOrdersController', function($scope,  $route) {

  
  var foo = $route.current.foodata;  
  
  $scope.message = 'This is Show orders screen foo='+foo;
});