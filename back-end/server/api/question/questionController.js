const Question = require('./questionModel');

exports.get = async function(req, res, next) {
  const questions = await Question.find({}).sort({ 'created' : -1 });
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

exports.deleteOne = async function(req, res, next) {
  var question = req.question;
    question.remove(function(err, removed) {
      if (err) {
        console.log(err);
      } else {
        res.json(removed);
      }
    });
  // Question.deleteOne({ id: question._id }, function (err) {
  //   console.log(err)
  // });
  // console.log(data);
};

exports.post = async function(req, res, next) {
  const post  = req.body;
  console.log(post);
  const newPost = await Question.create(post);
  res.json(newPost);
  
};