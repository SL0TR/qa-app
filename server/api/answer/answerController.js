const Answer = require('./answerModel');
exports.get = async function(req, res, next) {
  const answers = await Answer.find({});
  res.json({
    answers
  })

};

exports.params = async function(req, res, next, id) {

  const answer = await Answer.findById(id)
    .select('-password')
    .exec()

    if (!answer) {
      next(new Error('No answer with that id'));
    }

    req.answer = answer;
    next();

};

exports.getOne = function(req, res, next) {
  var answer = req.answer;
  res.json(answer);
};

exports.post = async function(req, res, next) {
  const answer  = req.body;
  const newAnswer = await Answer.create(answer);
  res.json(newAnswer);
  
};