// const jwt = require('jsonwebtoken');
// const config = require('../config/config');
// const User = require('../api/user/userModel');


// exports.verifyUser = function() {
//   return function(req, res, next) {
//     var username = req.body.username;
//     var password = req.body.password;

//     // if no username or password then send
//     if (!username || !password) {
//       res.status(400).send('You need a username and password');
//     } 

//     // look user up in the DB so we can check
//     // IF the passwords math for the username
//     User.findOne({username: username})
//       .then(function(user){
//         if (!user) {
//           res.status(401).send('No user with the given username');
//         } else {
//           // checking the passwords here
//           if (!user.authenticate(password)) {
//             res.status(401).send('Wrong Password');
//           } else {
//             // if everything is good
//             // then attach to req.user
//             // and call next to controller
//             // can sign a token from the req.user._id
//             req.user = user;
//             next();
//           }
//         }
//       }, function(err) {
//         next(err);
//       })
//   };
// };