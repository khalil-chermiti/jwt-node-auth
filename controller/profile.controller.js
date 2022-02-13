const user = require('../model/register.mongo');
const jwt = require('jsonwebtoken') ;
const { JWT_SECRET } = require('../utils/config');
const {searchUserbyID} = require('../model/profile.model')


async function getProfileInfo(req , res) {

    const id = req.userID ;

    const user = await searchUserbyID(id) ;

    if (!user) return res.json({"message" : "no user found"}) ;

    res
        .status(200) 
        .json({user : user}) ;
    
}


module.exports = {
    getProfileInfo ,
}