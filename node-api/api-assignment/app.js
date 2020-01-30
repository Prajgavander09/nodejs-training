const express = require('express');
const Get = require('./getReq');
const Post = require('./postReq');

const appexpress = express()
appexpress.use(express.json());


// {
//  //data: ,
//  message: ,
//  error: 
// }

require('./getReq').getRequest(appexpress)
require('./postReq').postRequest(appexpress)
require('./putReq').putRequest(appexpress)
require('./deleteReq').deleteRequest(appexpress)

appexpress.listen(8080, console.log("Server started on localhost:8080"));



