const {createUser} = require('../model/register.model');
const {JWT_SECRET} = require('../utils/config') ;
const jwt = require('jsonwebtoken') ;
const {randomBytes, createHash} = require('crypto') ; 

// ! encrypting password 

function hash(password) {
    const salt = randomBytes(16).toString('hex') ;
    const hashedPassword = createHash('sha256').update(password).digest('hex');
    return `${salt}:${hashedPassword}` ;
}



async function registerUser (req , res) {
    const user = req.body ;
    
    if (!user || !user.username || ! user.password) {
        return res.status(404).send('invalid or missing data');
    } else {

        // hashing password 
        user.password = hash(user.password);

        console.log(user) ;

        const userData = await createUser(user) ;

        const id = userData._id.toString() ;

        const token = jwt.sign({id : id} , JWT_SECRET ,  { expiresIn: '1h' }) ;

        return res
            .cookie('access_token' , token)    
            .status(200)
            .json({token : token});
    }
}

module.exports = {
    registerUser ,
}