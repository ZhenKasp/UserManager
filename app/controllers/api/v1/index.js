const User = require('../../../models/User.js')

index = (app) => {
  app.get('/api/v1', (req,res) => {
    User.findAll().then((users => {
      res.json({ 
        users: users
      }); 
    }))
  });     
}

module.exports = index;
