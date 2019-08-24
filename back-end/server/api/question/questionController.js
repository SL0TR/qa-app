const Question = require('./questionModel');

exports.get = async function(req, res, next) {

  const { userId } = req;
  if (!userId) {
    return res.status(400).json({ msg: 'Not authorised!' });
  } 

  const questions = await Question.find({})
  .sort({ 'created' : -1 }) 
  .populate({ 
    path: 'answers',
    populate: {
      path: 'author',
      select: '-password'
    }
  })
  .exec();
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

  const { userId } = req;
  if (!userId) {
    return res.status(400).json({ msg: 'Not authorised!' });
  }

  var question = req.question;
  res.json(question);
};

exports.deleteOne = async function(req, res, next) {

  const { userId, isAdmin } = req;
  if (!isAdmin) {
    return res.status(400).json({ msg: 'Not authorised!' });
  } 

  var question = req.question;
  question.remove(function(err, removed) {
    if (err) {
      return res.status(400).json({ msg: `Item couldn't be deleted!` });
    } else {
      res.json(removed);
    }
  });
};

exports.post = async function(req, res, next) {

  const { isAdmin } = req;
  if (!isAdmin) {
    return res.status(400).json({ msg: 'Not authorised!' });
  } 

  const question  = req.body;
  console.log(question);
  const newQuestion = await Question.create(question);
  res.json(newQuestion);
};
