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
  }
});

// middleware that will run before a document
// is created
// UserSchema.pre('save', function(next) {

//   if (!this.isModified('password')) return next();
//   this.password = this.encryptPassword(this.password);
//   next();
// })


// UserSchema.methods = {
//   // check the passwords on signin
//   authenticate: function(plainTextPword) {
//     return bcrypt.compareSync(plainTextPword, this.password);
//   },
//   // hash the passwords
//   encryptPassword: function(plainTextPword) {
//     if (!plainTextPword) {
//       return ''
//     } else {
//       var salt = bcrypt.genSaltSync(10);
//       return bcrypt.hashSync(plainTextPword, salt);
//     }
//   },
//   toJson: function() {
//     var obj = this.toObject()
//     delete obj.password
//     return obj;
//   }
// };

module.exports = mongoose.model('user', UserSchema);