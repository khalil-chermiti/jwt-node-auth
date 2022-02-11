const user = require('../model/register.mongo') ;

async function searchUserbyID (id) {
    return await user.findById(id , {_id : 0 , __v : 0 });
}

module.exports = {
    searchUserbyID ,
}