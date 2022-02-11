const registerRouter = require('express').Router() ; 
const {registerUser} = require('../controller/register.controller');

registerRouter.post('/' , registerUser);

module.exports = registerRouter ;