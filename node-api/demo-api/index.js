const express = require('express');

const app = express();

app.listen(8080, () => {
	console.log("Server on");
})

app.get('/', function (req, res, next) {
   res.send('Hello World');
});


module = index;