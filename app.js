const cookieParser = require('cookie-parser') ;
const express = require("express") ; 
const app = express() ;

const loginRouter = require('./routes/login.route') ;
const registerRouter = require('./routes/register.route') ;
const profileRouter = require('./routes/profile.route') ;

app.use(cookieParser()) ;
app.use(express.json()) ;
app.use(express.urlencoded({extended : true })) ;

app.get('/', (req, res) => res.send({message : 'ok'})) ;

app.use('/login' , loginRouter ) ;

app.use('/register' , registerRouter) ;

app.use('/profile' , profileRouter) ;

app.get("/logout", (req, res) => {
    return res
      .clearCookie("access_token")
      .status(200)
      .json({ message: "Successfully logged out 😏 🍀" });
  });

module.exports = app ;