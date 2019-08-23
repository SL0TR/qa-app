const User = require('../api/user/userModel');
const bcrypt = require('bcryptjs');
const config = require('../config/config');
const jwt = require('jsonwebtoken');

exports.signin = async function(req, res, next) {
  const { email, password } = req.body;

  if(!email || !password) {
    return res.status(400).json({ msg: 'Please enter all the fields!'})
  }

   //Check for existing user
   const user = await User.findOne({ email });
   if(!user) return res.status(400).json({ msg: `This email address doesn't exist`});
   
  //Validate password
  const stringPass = await bcrypt.compare(password, user.password);
  if(!stringPass) return res.status(400).json({ msg: 'Invalid credentials'});

  // get the token
  const token = jwt.sign({ userId: user.id }, config.secrets.jwt);

  // send token to cookie
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: new Date(Date.now() + config.expireTime)
  });

  // send response
  res.json({
    token,
    user: {
      id: user.id,
      email: user.email
    }
  });
    
};

exports.me = async function (req, res, next) {
  const { userId } = req;
  if(!userId) {
    return res.status(400).json({ msg: `No User in session`});
  } else {
    const user = await User.findById(userId)
    .select('-password')
    .exec()
    if (!user) {
      return res.status(400).json({ msg: `No User exists with that ID`});
    }
    res.json(user);
  }
}

exports.signout = async function (req, res, next) {
  console.log('called')
  res.clearCookie('token');
  res.json({
    msg: 'Successfully Signed out!'
  })
}