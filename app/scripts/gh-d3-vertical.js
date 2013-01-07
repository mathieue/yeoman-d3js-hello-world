angular.module('ghD3', [])
.directive('ghD3Vertical', function () {

  // constants
  var margin = 50,
  width = 800,
  height = 200 - .5 - margin;

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

        var barWidth = 5;

        var y = d3.scale.linear()
        .domain([0, d3.max(data)])
        .rangeRound([0, height - margin]);

        vis.selectAll("rect")
        .data(data)
        .enter().append("rect")
        .attr("x", function(d, i) { return i * barWidth ; })
        .attr("y", function(d) { return height - y(d) - .5; })
        .attr("width", barWidth - .5)
        .attr("height", function(d) { return y(d); });

      });
    }
  };
});