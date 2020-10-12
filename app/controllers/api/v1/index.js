const User = require('../../../models/User.js')

index = (app) => {

  app.get('/api/v1', (req,res) => {
    console.log(req.session);
    User.findAll().then((users => {
      console.log("All users:", JSON.stringify(users, null, 2));
      res.json({ 
        message: "Hello",
        users: users
       }); 
    }))
  });     
}

module.exports = index;
