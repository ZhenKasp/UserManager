const User = require('../../../models/User');
const passport = require('passport');

signin = (app) => {
  app.post('/api/v1/signin', 
    passport.authenticate('local'),
    (req, res) => { res.json({ username: req.session.passport.user.username })}
  ); 
}

module.exports = signin;