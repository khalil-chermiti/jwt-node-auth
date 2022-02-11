const loginRouter = require('express').Router() ; 
const {loginUser} = require('../controller/login.controller.js') ;

loginRouter.post('/' , loginUser);

module.exports = loginRouter ;