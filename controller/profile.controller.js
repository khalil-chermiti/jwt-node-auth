const user = require('../model/register.mongo');
const jwt = require('jsonwebtoken') ;
const { JWT_SECRET } = require('../utils/config');
const {searchUserbyID} = require('../model/profile.model')


async function getProfileInfo(req , res) {
    const token = req.cookies.access_token ;

    if (!token) return res.status(403).json({"message" : "login first"});

    const id = jwt.verify(token , JWT_SECRET) ;

    const user = await searchUserbyID(id.id) ;

    if (!user) return res.json({"message" : "no user found"}) ;

    res
        .status(200) 
        .json({user : user}) ;
    
}


module.exports = {
    getProfileInfo ,
}