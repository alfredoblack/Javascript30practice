var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http',

function($scope, $http){
  console.log('hello world from the control room');
  

    personOne = {
      name: 'adriana',
      email: 'adriana@bob.com',
      number: '111111111'
    };

    personTwo = {
      name: 'Snoppy',
      email: 'snoopy@bob.com',
      number: '5555111111'
    };

    personThree = {
      name: 'kelly',
      email: 'kelly@bob.com',
      number: '77777777'
    };



var contactList= [personOne, personTwo, personThree];

$scope.contactList = contactList;

}]);