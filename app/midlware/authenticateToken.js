const jwt = require("jsonwebtoken");
require('dotenv').config();

authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token == null) return res.json({ error: "You need to singin first.", variant: "danger"}).sendStatus(401); 

  jwt.verify(token, process.env.TOKEN_SECRET, (error, user) => {
    if (error) {
      return res.json({ error: error.message, variant: "danger"}).sendStatus(403); 
    }
    req.user = user;
    next();
  })
}

module.exports = authenticateToken;

