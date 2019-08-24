const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const QuestionSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  answers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'answer'
    }
  ],
  created: { type: Date, default: Date.now }
});


module.exports = mongoose.model('question', QuestionSchema);