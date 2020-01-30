var express = require('express');
// const appexpress = express()
// var router = express.Router();

const main = require('./main.js') 

exports.postRequest = (appexpress) => {
	appexpress.post('/employee', (req, res) => {
		const emp = {
			id : parseInt(Date.now()) ,
			name : req.body.name ,
	  	company : req.body.company,
	  	position : req.body.position
		}
		//console.log(req.body);
		main.userData.db.push(emp);
		res.send(emp);	
	})
}

