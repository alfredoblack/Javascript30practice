var express = require('express');
var app = express();



app.use(express.static(__dirname + '/public'));

app.get('/contactList', function(req, res){
  console.log('i received a GET request')

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
  console.log('hello i can read this');
  res.json(contactList);
 

});
// app.get('/', function(req, res){
//   res.send('hello world from server.js');
// });

app.listen(3000);
console.log('server is running on port 3000');