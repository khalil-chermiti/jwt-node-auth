const registerRouter = require('express').Router() ; 
const { userExist } = require('../middleware/authenticate');
const {registerUser} = require('../controller/register.controller');

registerRouter.post('/' , userExist ,registerUser);

module.exports = registerRouter ;