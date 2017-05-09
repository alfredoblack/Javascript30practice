
var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http',

function($scope, $http){
  console.log('hello world from the control room');


var refresh = function(){
  $http.get('/contactList').then(function(response){
    console.log('I got the data I requested');

    $scope.contactList = response.data;
      console.log(response.data);
    $scope.contact = null;


  });

}

refresh();

  $scope.addContact = function(){
   console.log($scope.contact);
   $http.post('/contactList', $scope.contact).then(function(response){
    console.log(response);
    
   });

   refresh();
 }

 $scope.remove = function(id){
  console.log(id);
  $http.delete('/contactList/' + id).then(function(response){
    refresh();
  })
 }

 $scope.edit = function(id){
  console.log(id);
  $http.get('/contactList/' + id).then(function(response){
    $scope.contact = response.data;
  });
 }


}]);