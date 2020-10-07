const passport = require('passport');

const mainStrategy = require('../passport/mainStrategy');

module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());


  passport.serializeUser((User, done) => {
    done(null, user);
  }); 
  passport.deserializeUser((User, done) => {
    done(null, user);
  });

  mainStrategy();
}