//var express = require('express');
//var router = express.Router();
//const appexpress = express()

const main = require('./main.js')

exports.getRequest = (appexpress) => {
  appexpress.get('/', function (req, res, next) {
    //if (error) throw error;
    res.send('hello user !');
  })

  ///employees page
  appexpress.get('/employee', function(req, res, next) {
    //if (error) throw error;
    res.send(main.userData.db);
  });

  ///employees/id page
  appexpress.get('/employee/:id', function(req, res, next) {
    //if (error) throw error;
    const user = main.userData.db.find((userData, index)=> userData.id === parseInt(req.params.id))

    if (!user) {
    	return res.status(404).send("ID not found"); 
    } 

    res.send(user);
  });
}