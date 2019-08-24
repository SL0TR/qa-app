const Answer = require('./answerModel');
const Question = require('../question/questionModel');

exports.get = async function(req, res, next) {

  const answers = await Answer.find({});
  res.json({
    answers
  })

};

exports.put = function(req, res, next) {
  var post = req.post;

  var update = req.body;

  _.merge(post, update);

  post.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
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
  const questionId  = answer.question;

  let newAnswer = await Answer.create(answer);
  newAnswer =  await newAnswer
  .populate({ 
    path: 'author',
    select: '-password'
  })
  .execPopulate()

  try {
    const question = await Question.findById( { _id: questionId } )
    .exec();

    question.answers.push(newAnswer);

    try {
      await question.save()
    } catch(e) {
      res.status(400).json({ msg: `Coulnd't create an answer, error!`})
    }

  } catch(e) {
    res.status(400).json({ msg: `Coulnd't create an answer, error!`});
  }
  res.json(newAnswer);
  
};