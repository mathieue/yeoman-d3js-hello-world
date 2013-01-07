'use strict';

var yeomanD3jsHelloWorldApp = angular.module('yeomanD3jsHelloWorldApp', ['ghD3'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
;