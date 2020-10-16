const User = require('../../../models/User.js')

unblock = (app) => {
  app.patch('/api/v1/unblock', (req,res) => {
    let userIDs = req.body.params.id.split(";");
    User.update({ status: "active" }, {where: {id: userIDs}}).then(
      setTimeout(() => {
        User.findAll().then(users => {
          res.json({ 
            users: users, 
            message: "Unblock successful",
            variant: "success"
          }); 
        })
      }, 1000)
    );
  });     
}

module.exports = unblock;