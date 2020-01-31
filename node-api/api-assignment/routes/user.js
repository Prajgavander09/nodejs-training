const express = require('express')

const router = express.Router();

const userController = require('../controller/user');

console.log('inside routes-user')


router.get('/', userController.home) 
router.get('/employee', userController.getEmployees) 
router.get('/employee/:id', userController.getEmployee)
router.post('/employee', userController.postEmployee)
router.delete('/employee/:id', userController.deleteEmployee)
router.put('/employee/:id', userController.modifyEmployee)


/*

const express = require("express");
console.log("routes/user.js - 1");

const router = express.Router();
console.log("routes/user.js - 2");

const userController = require('../controller/user');
console.log("routes/user.js - 3");

router.get('/user/:id', userController.addUser);
console.log("routes/user.js - 4");
*/
module.exports = router;

