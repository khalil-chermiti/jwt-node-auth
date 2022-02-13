const cookieParser = require('cookie-parser') ;
const express = require("express") ; 
var morgan = require('morgan') ;
const app = express() ;

const loginRouter = require('./routes/login.route') ;
const registerRouter = require('./routes/register.route') ;
const profileRouter = require('./routes/profile.route') ;
const logoutRouter = require('./routes/logout.route') ;

app.use(morgan('tiny')) ;
app.use(cookieParser()) ;
app.use(express.json()) ;
app.use(express.urlencoded({extended : true })) ;

app.get('/', (req, res) => res.send({message : 'ok'})) ;

app.use('/login' , loginRouter ) ;

app.use('/register' , registerRouter) ;

app.use('/profile' , profileRouter) ;

app.use("/logout" , logoutRouter);

module.exports = app ;