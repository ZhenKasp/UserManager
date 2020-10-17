const express = require('express');
const logger = require('morgan');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');

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

require('./app/controllers/api/v1/routes.js')(app);
module.exports = app;
