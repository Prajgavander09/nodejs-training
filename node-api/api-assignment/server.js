const express = require('express');
const appexpress = express()

const router = express.Router()

//body parser mthd
appexpress.use(express.json());

// {
//  //data: ,
//  message: ,
//  error: 
// }
const route = require('./routes/index');

route.startRoute(appexpress);

// require('../routes/getReq').getRequest(appexpress)
// require('./postReq').postRequest(appexpress)
// require('./putReq').putRequest(appexpress)
// require('./deleteReq').deleteRequest(appexpress)

appexpress.listen(8080, console.log("Server started on localhost:8080"));



