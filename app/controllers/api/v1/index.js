const User = require('../../../models/User.js')
const authenticateToken = require('../../../midlware/authenticateToken');

index = (app) => {
  app.get('/api/v1', authenticateToken, (req,res) => {
    User.findAll().then((users => {
      res.json({ 
        users: users
      }); 
    }))
  });     
}

module.exports = index;
