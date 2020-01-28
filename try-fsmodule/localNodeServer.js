/// creating a nodejs server

var http = require('http')
http.createServer(function(request, response) {
  response.write("Hello from NodeJS localserver....");
  response.end();
}).listen(8080); 