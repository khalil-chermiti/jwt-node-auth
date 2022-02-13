const logoutRouter = require('express').Router() ;
const {logoutUser} =require('../controller/lougout.controller')

logoutRouter.post('/' , logoutUser ) ;

module.exports = logoutRouter ;