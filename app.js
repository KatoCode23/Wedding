var app = angular.module('app', []);

app.controller('myController', function($scope){

  $scope.bridesMaids = [
    {
      name: 'Beata Kanter',
      title: 'Maid of Honor'
    },
    {
      name: 'Ina Halvorsen',
      title: 'Bridesmaid'
    },
    {
      name: 'Jay Miriam',
      title: 'Bridesmaid'
    },
    {
      name: 'Ida Sofie Aasle',
      title: 'Bridesmaid'
    },
    {
      name: 'Gitte Bromander',
      title: 'Bridesmaid'
    }
  ];

 $scope.groomsmen = [
    {
      name: 'John Vasconcellos',
      title: 'Best Man'
    },
    {
      name: 'Eric Pringle',
      title: 'Groomsmen'
    },
    {
      name: 'Mitch Christiansin',
      title: 'Groomsmen'
    },
    {
      name: 'George Warren',
      title: 'Groomsmen'
    },
    {
      name: 'Brian Liebert',
      title: 'Groomsmen'
    }
  ];

console.log($scope.bridesMaids);
console.log($scope.groomsmen);

});
