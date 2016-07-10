var app = angular.module('shop', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/main', {
      templateUrl: 'index.html',
      controller: 'MainCtrl'
    });
}]);

app.controller('MainCtrl', ['$scope', function($scope) {

}]);
