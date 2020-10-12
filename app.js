const express = require('express');
const logger = require('morgan');
const mysql = require('mysql');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const cors = require('cors');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const passport = require('./app/passport/passport');

require('dotenv').config();
require('./app/models/sequelize.js');

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.LOGIN,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

connection.connect((err) => {
  if(err) throw err;
  console.log("DB Connected Successfully");
});

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

app.use(cors({
  origin: 'http://localhost:3000',
  credentials : true
 }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());  

const sessionStore = new MySQLStore({
  expiration: (1825 * 86400 * 1000),
  endConnectionOnClose: false
}, connection); 

passport(app);
app.use(session({
  key: process.env.CKEY,
  secret: process.env.CSECRET,
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: {
      maxAge: (1825 * 86400 * 1000),
      secure: true
  }
}));

require('./app/controllers/api/v1/index.js')(app);
require('./app/controllers/api/v1/signin.js')(app);
require('./app/controllers/api/v1/signup.js')(app);
require('./app/controllers/api/v1/logout.js')(app);
module.exports = app;
