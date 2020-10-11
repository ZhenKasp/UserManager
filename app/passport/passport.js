const passport = require('passport');


const mainStrategy = require('./mainStategy');

module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user);
  }); 
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  mainStrategy();
}