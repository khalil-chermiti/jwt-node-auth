const profileRouter = require('express').Router() ;
const { getProfileInfo } = require('../controller/profile.controller');

profileRouter.get('/' , getProfileInfo) ;



module.exports = profileRouter ;