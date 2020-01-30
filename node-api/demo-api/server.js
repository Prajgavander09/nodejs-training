///creating a nodejs api without expressjs

const http = require('http');

http.createServer(function (request, response) {
  response.write('<h1>Local Server started on port 8080 <h1>'); 
  var url = request.url;
  if(url ==='/contact'){
    response.write('<h1> contact us <h1>'); //write a response
    response.end(); //end the response
  }else{
    response.write('<h3>Hello World! <h3>'); //write a response
    response.end(); //end the response
  } 
}).listen(8080, function() { console.log('Port is 8080');
});



