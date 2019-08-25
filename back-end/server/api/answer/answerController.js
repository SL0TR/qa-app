const Answer = require('./answerModel');
const Question = require('../question/questionModel');

exports.get = async function(req, res, next) {
  
  const { userId } = req;
  if (!userId) {
    return res.status(400).json({ msg: 'Not authorised!' });
  }

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

  const { userId } = req;
  if (!userId) {
    return res.status(400).json({ msg: 'Not authorised!' });
  }


  var answer = req.answer;
  res.json(answer);
};

exports.post = async function(req, res, next) {

  const { userId } = req;
  if (!userId) {
    return res.status(400).json({ msg: 'Not authorised!' });
  }

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


exports.userAnswer = async function(req, res, next) {

  const { isAdmin } = req;
  if (!isAdmin) {
    return res.status(400).json({ msg: 'Not authorised!' });
  } 

  const { userId, questionId }  = req.body;
  try {
    const answer = await  Answer.findOne({ author: userId, question: questionId })
    // console.log(answer)
    res.json(answer);
    
  } catch(e) {
    console.log(e.message)
  }
  
};