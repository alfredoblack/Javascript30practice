var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactList', ['contactList']);


app.use(express.static(__dirname + '/public'));

app.get('/contactList', function(req, res){
  console.log('i received a GET request');

db.contactList.find(function(err, docs){
  console.log(docs);
  res.json(docs);
  
})



});
// app.get('/', function(req, res){
//   res.send('hello world from server.js');
// });

app.listen(3000);
console.log('server is running on port 3000');