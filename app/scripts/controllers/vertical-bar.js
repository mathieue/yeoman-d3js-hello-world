'use strict';

yeomanD3jsHelloWorldApp.controller('Vertical-BarCtrl', function($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];

  // loading data....
  var data =  d3.range(300).map(Math.random);;
  $scope.data = data;
});
