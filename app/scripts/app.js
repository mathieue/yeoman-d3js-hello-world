'use strict';

var yeomanD3jsHelloWorldApp = angular.module('yeomanD3jsHelloWorldApp', [])
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

yeomanD3jsHelloWorldApp.directive('ghD3', function () {

  // constants
  var margin = 20,
  width = 960,
  height = 500 - .5 - margin;

  return {
    restrict: 'E',
    terminal: true,
    scope: {
      val: '='
    },

    link: function (scope, element, attrs) {

      var vis = d3.select(element[0])
      .append("svg")
      .attr("class", "chart")
      .attr("width", width)
      .attr("height", height + margin + 100);
      
      // whenever the bound 'exp' expression changes, execute this 
      scope.$watch('val', function (newVal, oldVal) {

        // clear
        vis.selectAll('*').remove();

        // if 'val' is undefined, exit
        if (!newVal) {
          return;
        }
        
        // get data from scope
        var data = newVal;

        // display
        var x = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0, 420]);

        vis.selectAll("rect")
          .data(data)
          .enter().append("rect")
          .attr("y", function(d, i) { return i * 20; })
          .attr("width", x)
          .attr("height", 20);
        // display done..

      });
    }
  };
});