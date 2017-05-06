function myFunction(){
  console.log('function is called module ONE');
}

var myString = 'String';

module.exports.myFunction = myFunction;
module.exports.myString = myString;