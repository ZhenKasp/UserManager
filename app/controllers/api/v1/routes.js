routes = (app) => {
  require('./index.js')(app);
  require('./signin.js')(app);
  require('./signup.js')(app);
  require('./logout.js')(app);
  require('./deleteUsers.js')(app);
  require('./block.js')(app);
  require('./unblock.js')(app);
}
module.exports = routes;