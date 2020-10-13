
const passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
User = require('../models/User.js'),
bcrypt = require('bcryptjs');

module.exports = () => {
  passport.use(new LocalStrategy ({
    usernameField: 'email',
    passwordField: 'password'
  },
  (username, password, done) => {
    User.findOne({ where: { email: username } })
    .then((user) => {
      if (!user) {
        return done(null, {error : "Incorrect mail or password"}); 
      }
      bcrypt.compare(password, user.password, (bcryptErr, verified) => { 
        if (verified) {
          user.lastSignInAt = new Date();
          user.save();

          return done(null, user);
        } else {
          return done(null, {error : "Incorrect mail or password"});
        }
      });  
    })
    .catch((err) => {   
      console.log(err);
      done(err);
    });
  }));
}