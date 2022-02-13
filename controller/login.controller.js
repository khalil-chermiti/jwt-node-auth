const jwt = require('jsonwebtoken');
const {scryptSync, timingSafeEqual} = require('crypto');
const { JWT_SECRET } = require('../utils/config.js');
const {searchByUsername} = require('../model/login.model') ;

function verify (password , hash) {
    const [salt , key] = hash.split(':');
    const passwordBuffer = scryptSync(password, salt , 64) ;
    const keyBuffer = Buffer.from(key , 'hex') ;
    const match = timingSafeEqual(passwordBuffer , keyBuffer) ;

    return match ; 
}

async function loginUser(req , res) {
    const user = req.body ;

    if (!user || !user.username || !user.password ) return res.json({"message" : "missing info"}) ;

    // get user from db
    const dbUser = await searchByUsername(user.username) ;

    // check password 
    if (!verify(user.password , dbUser.password)) return res.json({"message" : "wrong username or password"}) ;

    // sign jwt

    id = dbUser._id.toString() ;

    const token = jwt.sign({id : id} , JWT_SECRET , {expiresIn : '1h'});

    return res
        .status(200)
        .cookie('access_token' , token)  
        .json({"message" : "login success"}) ;

}

module.exports = {
    loginUser ,
}