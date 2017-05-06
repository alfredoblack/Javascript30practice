var http = require('http');
var fs = require('fs'); 
//file system, pick up the html file from the server 




  var onRequest = function(request, response){
    response.writeHead(200,{'Content-Type': 'text/html'});
    fs.readFile('./index.html',null, function(error, data){
      if (error){
        response.writeHead(404);
        response.write('file not found');
      } else {

        response.write(data);
      }
      response.end();
    })
  }

http.createServer(onRequest).listen(8000);






// var moduleOne = require('./moduleOne');
// var moduleTwo = require('./moduletwo');
  

// var onRequest = function(request, response){
//     response.writeHead(200,{'Content-Type': 'text/plain'});
//     response.write(moduleTwo.myVariable);
//     response.write(moduleOne.myString);
//     moduleOne.myFunction();
//     moduleTwo.myFunction();
//     response.end();
//   }

// http.createServer(onRequest).listen(8000);

// http.createServer(function(request, response){
//   response.writeHead(200,{'Content-Type': 'text/plain'});
//   response.write(moduleTwo.myVariable);
//   response.write(moduleOne.myString);
//   moduleOne.myFunction();
//   moduleTwo.myFunction();
//   response.end();

// }).listen(8000);

