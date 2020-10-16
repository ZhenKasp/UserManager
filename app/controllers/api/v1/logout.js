const logout = (app) => {
  app.delete('/api/v1/logout', (req, res) => {

    console.log(req)
    if (req.session) {
      req.logout();
      req.session.destroy();
        console.log("session destroy");
        res.json({ success: true, view: 'login', message: "Logout successful" , variant: "success"});
    } else {
        console.log("dont destroy");
        res.json({ success: false, message: "Something goes wrong" , variant: "danger"});
    } 
  });
}

module.exports = logout;