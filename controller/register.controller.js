const {createUser} = require('../model/register.model');
const {JWT_SECRET} = require('../utils/config') ;
const jwt = require('jsonwebtoken') ;

async function registerUser (req , res) {
    const user = req.body ;
    
    if (!user || !user.username || ! user.password) {
        return res.status(404).send('invalid or missing data');
    } else {

        // create user 
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