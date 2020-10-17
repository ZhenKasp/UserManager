const User = require('../../../models/User');
const generateAccessToken = require('../../../midlware/generateAccessToken')

signup = (app) => {
  app.post('/api/v1/signup', (req,res) => {
    const email = req.body.email.toLowerCase(),
      username = req.body.username,
      firstname = req.body.firstname,
      lastname = req.body.lastname,
      password = req.body.password
      
    const hashPass = require('bcryptjs').hashSync(password, 9);
    
    (async () => {
      try {
        const date = new Date();
        const newUser = await User.create({
          email: email,
          username: username,
          firstname: firstname,
          lastname: lastname,
          password: hashPass,
          lastSignInAt: date
        });
        await newUser.save();
        const token = generateAccessToken({ email: email });

        res.json({ success: true, token: token, message: "Registration successful." , variant: "success"});
      } catch (error) {
        console.log(error)
        res.json({ success: false, error: error.errors[0].message, variant: "danger"}).status(400); 
      }  
    })();
  }); 
}

module.exports = signup;