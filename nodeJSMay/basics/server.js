var http = require('http');
var moduleOne = require('./moduleOne');
var moduleTwo = require('./moduletwo');
  
function onRequest(request, response){
  response.writeHead(200,{'Content-Type': 'text/plain'});
  response.write(moduleTwo.myVariable);
  moduleOne.myFunction();
  moduleTwo.myFunction();
  response.end();

}
http.createServer(onRequest).listen(8000);