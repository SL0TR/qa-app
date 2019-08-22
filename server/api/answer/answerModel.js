const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AnswerSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    author: true,
    required: true
  },
  question: {
    type: Schema.Types.ObjectId,
    ref: 'question',
    required: true
  }
});


module.exports = mongoose.model('answer', AnswerSchema);