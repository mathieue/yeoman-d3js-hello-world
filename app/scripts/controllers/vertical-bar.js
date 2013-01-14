'use strict';

yeomanD3jsHelloWorldApp.controller('Vertical-BarCtrl', function($scope) {
  // loading data....
 
  // data from  'http://odatabdx.cloudapp.net/v1/databordeaux/naissances1900/?&format=json';
  var json = openData();
  var data = {};

  for (var i = json['d'].length - 1; i >= 0; i--) {
    var item = json['d'][i];
    var year = item['annee'];
    var count = parseInt(item['nombre']);

    if (data[year]) {
      data[year] += count;
    }
    else {
      data[year] = count;
    }
  };

  var flat_data = [];
  for (var k in data){
    if (data.hasOwnProperty(k)) {
      flat_data.push({'year' : parseInt(k), 'count': data[k]});
    }
  }
  
  $scope.data = flat_data;
});
