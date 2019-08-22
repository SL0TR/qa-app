const Question = require('./questionModel');
exports.get = async function(req, res, next) {
  const questions = await Question.find({});
  res.json({
    questions
  })

};

exports.params = async function(req, res, next, id) {

  const question = await Question.findById(id)
    .select('-password')
    .exec()

    if (!question) {
      next(new Error('No question with that id'));
    }

    req.question = question;
    next();

};

exports.getOne = function(req, res, next) {
  var question = req.question;
  res.json(question);
};

exports.post = async function(req, res, next) {
  console.log('triggered')
  const post  = req.body;
  const newPost = await Question.create(post);
  console.log(newPost)
  res.json(newPost);
  
};