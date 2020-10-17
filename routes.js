routes = (app) => {
  require('./app/controllers/api/v1/index')(app);
  require('./app/controllers/api/v1/signin')(app);
  require('./app/controllers/api/v1/signup')(app);
  require('./app/controllers/api/v1/logout')(app);
  require('./app/controllers/api/v1/deleteUsers')(app);
  require('./app/controllers/api/v1/block')(app);
  require('./app/controllers/api/v1/unblock')(app);
}
module.exports = routes;