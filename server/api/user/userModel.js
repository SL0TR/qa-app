const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const validateEmail = function(email) {
//   const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   return re.test(email)
// };

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: 'Email address is required',
    // validate: [validateEmail, 'Please fill a valid email address'],
    // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },

  // dont store the password as plain text
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false,
  }
});

// middleware that will run before a document
// is created
// UserSchema.pre('save', function(next) {

//   if (!this.isModified('password')) return next();
//   this.password = this.encryptPassword(this.password);
//   next();
// })


module.exports = mongoose.model('user', UserSchema);