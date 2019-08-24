import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../components/context/GlobalState';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { getAllQuestions, registerQuestion } from '../../services/questionService';
import Question from '../../components/Question';
import { registerAnswer } from '../../services/answerService';
import { me } from '../../services/authService';
import { toast } from 'react-toastify';

const Questions = ({ history }) => {
  const { questions, setQuestions, currUser, setIsAdmin, isAdmin } = useContext(GlobalContext);
  const [ question, setQuestion ] = useState('');
  const [state, setState] = useState({});

  // Update input elements on change
  function handleChange(event) {
    const { name, value } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  // Route Protection
  useEffect(() => {
    (async() => {
      try { 
        const { data } = await me();
        setIsAdmin(data.isAdmin);
      } catch(e) {
        console.log('no login', e)
        history.push('/');
      }
    })();
      
  }, [history, setIsAdmin]);

  // Get All Questions and update state
  useEffect(() => {
    (async () => {
      const { data: questions } = await getAllQuestions();
      if(questions) {
        const userId = window.localStorage.userId;

        console.log(questions.questions);
        let newQuestions = [...questions.questions];

        newQuestions = newQuestions.map(ques => {
          const arr = ques.answers.filter(ans => ans.author._id === userId);
          return {
            ...ques,
            answers: arr
          }
        })

        // Update state based on questions.
        newQuestions.forEach(ques => {
          ques.answers.forEach(el => {
            setState(prevState => ({ ...prevState, [el.question]: el.text }));
          })
        })
        setQuestions(newQuestions);
      }
    })();
    
  }, [setQuestions])

  // Submit New Question submission
  const handleQuestionSubmit = async e => {
    e.preventDefault();
    
    const { data} = await registerQuestion({
      text: question
    });

    if(data) {
      console.log(data);
      setQuestion('');
      setQuestions(prevState => ([ data, ...prevState ]));
      toast('New Question Created!');
    }
  }

  // Handle new Answer
  const handleAnswerSubmit = async e => {
    e.preventDefault();
    const ansArray = [];
    
    for (var key in state) {
      const ans = {
        text: state[key],
        author: currUser._id,
        question: key
      }
      ansArray.push(ans)
    }

    const promises = ansArray.map(el => {
      return registerAnswer(el);
    });

    console.log(promises);
    const res = await Promise.all(promises);
    if(res) {
      toast('Submission Successful!');
    }
  }

  return (
    <>
      <Row>
        {
          isAdmin && (
            <Col xs={12}>
              <Form onSubmit={ e => { handleQuestionSubmit(e) }}>
                <Row>
                  <Col lg={10} xs={12}>
                    <Form.Group controlId="formBasicEmail" >
                      <Form.Control value={question} onChange={e => { setQuestion(e.target.value) } }  type="text" placeholder="Enter Your Question" />
                    </Form.Group>
                  </Col>
                  <Col lg={2} xs={12}>
                    <Button style={{ width: '100%'}}  variant="dark" type="submit">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          )
        }
        <Col xs={12} className="mt-5">
          <Form onSubmit={handleAnswerSubmit}>
          { questions.map( (ques, i) => <Question handleChange={handleChange} state={state} setState={setState} key={i} index={i} admin={isAdmin} question={ques} />)}
          {
            !isAdmin && (
              <Button className="mt-2" type="submit" variant="dark">Submit</Button>
            )
          }
          </Form>
        </Col>
      </Row>
    </>
   );
}
 
export default Questions;