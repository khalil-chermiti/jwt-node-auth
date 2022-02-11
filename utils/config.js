require('dotenv').config() ;

const config = {} ; 

config.PORT = process.env.PORT ;

config.DB_URL = process.env.DB_URL ;

config.JWT_SECRET = process.env.JWT_SECRET ;

module.exports = config ;