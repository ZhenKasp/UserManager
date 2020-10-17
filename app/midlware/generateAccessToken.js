const jwt = require("jsonwebtoken");
require('dotenv').config();

const generateAccessToken = (email) => {
  return jwt.sign({ email: email }, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

module.exports = generateAccessToken;