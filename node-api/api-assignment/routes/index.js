const express = require('express')
//const router = express.Router() We already have instanciated it in server.js
console.log('inside routes-index')

const startRoute = (appexpress) => { 
  appexpress.use('/', require('./user'));
};

exports.startRoute = startRoute;