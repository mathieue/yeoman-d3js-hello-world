angular.module('ghD3', [])
.directive('ghD3Vertical', function () {

  // constants
  var margin = 100,
  width = 800,
  height = 300  - margin;
  var barWidth = 4;

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

        var y = d3.scale.linear()
        .domain([0, d3.max(data, function(d) { return d['count']; })])
        .rangeRound([0, height - margin]);

        var x = d3.scale.linear()
        .domain([d3.min(data, function(d) { return d['year']; }), 
          d3.max(data, function(d) { return d['year']; })])
        .rangeRound([0, width]);

        vis.selectAll("rect")
        .data(data)
        .enter().append("rect")
        .attr("x", function(d, i) { return x(d['year']) ; })
        .attr("y", function(d, i) { return height - y(d['count']) - .5; })
        .attr("width", barWidth)
        .attr("height", function(d) { return y(d['count']); });
      });
    }
  };
});