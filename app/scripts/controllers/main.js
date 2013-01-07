'use strict';

yeomanD3jsHelloWorldApp.controller('MainCtrl', function($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];

  // loading data....
  var data = [32, 57, 293];
  $scope.data = data;
});
