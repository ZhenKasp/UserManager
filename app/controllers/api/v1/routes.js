routes = (app) => {
  require('./index.js')(app);
  require('./signin.js')(app);
  require('./signup.js')(app);
  require('./logout.js')(app);
  require('./deleteUsers.js')(app);
}
module.exports = routes;