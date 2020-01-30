const http = require('http');
//const index = require('./index');
const express = require('express');

const port = process.env.PORT || 8080;

const server = http.createServer()

const app = express();

app.listen(8080, () => {
	console.log("Server on");

})

app.get('/', function (req, res, next) {
   res.send('Hello World');
   res.end();
});


//module = index;
//server.listen(port , function() {console.log('server started')})

