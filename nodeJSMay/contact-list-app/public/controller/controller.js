// var myApp = angular.module('myApp', []);
// myApp.controller('AppCtrl',function($scope, $http){
//   console.log('hello world from the control room');

// $http.get('/contactList').then(successCallBack, errorCallBack);

// function succesCallBack(response){
//   console.log('I got the data I requested');
//   $scope.contactList = response
// }



var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http',

function($scope, $http){
  console.log('hello world from the control room');

$http.get('/contactList').then(function(response){
  console.log('I got the data I requested');

  $scope.contactList = response.data;
  console.log(response.data);
});

// $http.get('/contactList').then(function())

// function succesCallBack(response){
//   console.log('I got the data I requested');
//   $scope.contactList = response
// }




}]);