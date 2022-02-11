const user = require('./register.mongo') ; 

async function createUser (userObj) {
    return await user.create({
        username : userObj.username ,
        password : userObj.password ,
    })
} ;

module.exports = {
    createUser ,
}
