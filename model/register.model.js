const user = require('./register.mongo') ; 

async function createUser (userObj) {
    return await user.create({
        username : userObj.username ,
        password : userObj.password ,
    })
} ;
async function usernameExists (username) {
    return await user.find({"username" : username});
} ;

module.exports = {
    createUser ,
    usernameExists,
}
