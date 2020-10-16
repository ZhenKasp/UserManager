const passport = require('passport');

signin = (app) => {
  app.post('/api/v1/signin', 
    passport.authenticate('local'),
    (req, res) => {
      if (req.session.passport.user.error) {
        res.json({ error: req.session.passport.user.error, variant: "danger"});
      } else {
        res.json({ username: req.session.passport.user.username, message: "Login successful" , variant: "success"});
      }
    }
  ); 
}

module.exports = signin;
