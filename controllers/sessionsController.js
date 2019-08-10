const User = require('../models/user');
const jwt = require("jsonwebtoken");

// exports.login = (req, res) => {
//   res.render('sessions/login', {
//     title: 'Login'
//   });
// };

exports.authenticate = (req, res) => {
  console.log("the body", req.body);
  User.findOne({
      email: req.body.email
    })
    .then(user => {
      user.authenticate(req.body.password, (err, isMatch) => {
        if (err) throw new Error(err);

        if (isMatch) {
          req.session.userId = user.id;
          const token = jwt.sign(
            {payload: req.body.email},
            "bobthebuilder",
            {expiresIn: "1h"}
          );
          res.cookie('token', token, {httpOnly: true}).status(201).send({success: "Authenticated Successfully"});
        } else {
          res.json({error: "Your credentials do not match"});
        }
      });
    })
    .catch(err => {
      res.status(404).json(err);
    });
};

exports.logout = (req, res) => {
  if (!req.isAuthenticated()) res.status(401).send({error: "Could Not Authenticate"});

  req.session.userId = null;
  res.clearCookie('token').status(200).send({sucess: "You are Logout"});
};