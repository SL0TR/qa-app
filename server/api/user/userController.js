const User = require('./userModel');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const config = require('../../config/config');


exports.get = function(req, res, next) {
  res.send({
    test: 'test'
  })
};

exports.post = async function(req, res, next) {

  const { email, password } = req.body;

  // simple valdiation
  if(!email || !password ) {
    return res.status(400).json({ msg: 'Please enter all fields'})
  }


  //Check for existing user
  const user = await User.findOne({ email });
  if(user) return res.status(400).json({ msg: 'User already exists!'});
  
  console.log(email)
  // Create new User
  const newUser = new User({
    email: email.toLowerCase(),
    password
  });

  // Create salt & hash
  const passwordHash = await bcrypt.hash(newUser.password, 10);
  newUser.password = passwordHash;

  const createdUser = await newUser.save();
  const token = jwt.sign({ userId: newUser.id }, config.secrets.jwt);

  // send token to cookie
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: config.expireTime
  });

  res.json({
    token,
    user: {
      id: createdUser.id,
      email: createdUser.email
    }
  });

  
};