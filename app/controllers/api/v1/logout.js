const logout = (app) => {
  app.delete('/api/v1/logout', (req, res) => {
    if (req.session.passport) {
      req.session.destroy();
        console.log("session destroy");
        res.json({ success: true, view: 'login'});
    } else {
        console.log("dont destroy");
        res.json({ success: false });
    } 
  });
}

module.exports = logout;