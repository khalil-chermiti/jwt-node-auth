const {createUser , usernameExists} = require('../model/register.model');
const {JWT_SECRET} = require('../utils/config') ;
const jwt = require('jsonwebtoken') ;
const {randomBytes, createHash} = require('crypto') ; 
const { userExist } = require('../middleware/authenticate');

// ! encrypting password 

function hash(password) {
    const salt = randomBytes(16).toString('hex') ;
    const hashedPassword = createHash('sha256').update(password).digest('hex');
    return `${salt}:${hashedPassword}` ;
}

async function registerUser (req , res) {
    const user = req.body ;

    // check valid input 
    if (!user || !user.username || ! user.password) {
        return res.status(404).json({"message" :"invalid or missing data"});
    }

    // check for unique username
    username = await usernameExists(user.username); 
    console.log(username)

    if (username.length > 0) {
        return res.status(404).send({"message" : "username is taken"});
    }


    // hashing password 
    user.password = hash(user.password);

    // creating user
    const userData = await createUser(user) ;

    // creating token
    const id = userData._id.toString() ;

    const token = jwt.sign({id : id} , JWT_SECRET ,  { expiresIn: '1h' }) ;

    return res
        .cookie('access_token' , token)    
        .status(200)
        .json({token : token});
}

module.exports = {
    registerUser ,
}