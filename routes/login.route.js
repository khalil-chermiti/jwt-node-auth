const loginRouter = require('express').Router() ; 
const { userExist } = require('../middleware/authenticate.js');
const {loginUser} = require('../controller/login.controller.js') ;

loginRouter.post('/' , userExist , loginUser);

module.exports = loginRouter ;