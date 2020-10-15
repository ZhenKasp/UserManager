const User = require('../../../models/User');

deleteUsers = (app) => {
  app.delete('/api/v1/delete', (req, res) => { 
    
    if (req.query) {
      let usersID = req.query.id.split(";");
      try {
        User.destroy({
          where: {id: usersID}
        }).then(
          setTimeout(() => {
            User.findAll().then(
              (users) => { 
                res.json({ 
                  users: users
                }); 
              }
            )
          }, 1000)
        );
      } catch (error) {
        console.log(error);
        res.json({ error: { message: "Samething went wrong on delete action" , data: error }});
      }
    }
  }); 
}

module.exports = deleteUsers;