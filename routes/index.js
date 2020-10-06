const User = require('../models/User.js')

index = (app, connection) => {
  app.get('/api/v1/', (req,res) => {
    res.json({ message: "Hello" }); 
  });     
}

module.exports = index;
