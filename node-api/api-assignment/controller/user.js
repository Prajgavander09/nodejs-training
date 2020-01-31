const express = require('express');

const getUser = require('../services/getEmp')
const getAllUser = require('../services/getAllEmp')
const postUser = require('../services/postReq')
const putUser = require('../services/putReq')
const deleteUser = require('../services/deleteReq')

const userControl = {
  home(request, response) {
    response.send('hello user at home page!');
  },

  getEmployees (request, response) {
    let message = getAllUser(request, response);
    response.send(message);
  },

  getEmployee (request, response) {
    let message = getUser(request, response);
    response.send(message);
  },

  postEmployee (request, response) {
    let message = postUser(request, response);
    response.send(message);
  }, 

  modifyEmployee (request, response) {
    let message = putUser(request, response);
    response.send(message); 
  },

  deleteEmployee (request, response) {
    let message = deleteUser(request, response);
    response.send(message);
  }
}

module.exports = userControl;


