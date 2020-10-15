const User = require('../../../models/User');

deleteUsers = (app) => {
  app.delete('/api/v1/delete', (req, res) => { 
    
    if (req.query) {
      let usersID = req.query.id.split(";");
      console.log(usersID);
      usersID.map(userID => {
        User.destroy({
          where: {id: userID}
        })
      }).then(
        User.findAll().then(
          (users) => {
            res.json({ 
              users: users
            }); 
          }
        )
      )
    }
  }); 
}

module.exports = deleteUsers;