const User = require('../../../models/User');
const passport = require('passport');

signin = (app) => {
  app.post('/api/v1/signin', 
    passport.authenticate('local'),
    (req, res) => {
      console.log();
      if (req.session.passport.user.error) {
        return res.json({ error: req.session.passport.user.error })
      } else {
        return res.json({ username: req.session.passport.user.username })
      }
    }
  ); 
}

module.exports = signin;