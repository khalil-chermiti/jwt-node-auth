const profileRouter = require('express').Router() ;
const { jwtAuth } = require('../middleware/authenticate');
const { getProfileInfo } = require('../controller/profile.controller');


profileRouter.get('/' , jwtAuth , getProfileInfo) ;



module.exports = profileRouter ;