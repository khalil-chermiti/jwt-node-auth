const user = require("./register.mongo");

async function searchByUsername(username) {
    return await user.findOne({username : username} , {__v : 0}) ;
}

module.exports ={
    searchByUsername ,
}