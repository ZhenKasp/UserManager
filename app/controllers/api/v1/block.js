const User = require('../../../models/User.js')

block = (app) => {
  app.patch('/api/v1/block', (req,res) => {
    let userIDs = req.body.params.id.split(";");
    User.update({ status: "blocked" }, {where: {id: userIDs}}).then(
      setTimeout(() => {
        User.findAll().then(users => {
          res.json({ 
            users: users, 
            message: "Block successful",
            variant: "success"
          }); 
        })
      }, 1000)
    )
  });     
}

module.exports = block;
