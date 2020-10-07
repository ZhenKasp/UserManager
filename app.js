const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mysql = require('mysql');
const passport = require('./app/passport/passport');

require('dotenv').config();
require('./app/models/sequelize.js');

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.LOGIN,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

connection.connect((err)=> {
  if(err) throw err;
  console.log("DB Connected Successfully");
});

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

passport(app);

require('./app/controllers/api/v1/index.js')(app, connection);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json({ error: err.status })
});

connection.end();

module.exports = app;
