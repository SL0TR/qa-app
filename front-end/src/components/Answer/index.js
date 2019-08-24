import React, { useState, useContext } from 'react';
import { ListGroup, ButtonToolbar } from 'react-bootstrap';
import {Form, Row, Col, Button } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';
import { registerAnswer } from '../../services/answerService';

const Answer = ({ answers, question }) => {

  const { currUser, questions, setQuestions } = useContext(GlobalContext);

  const [answer, setAnswer] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const newAns = {
      text: answer,
      author: currUser._id,
      question: question._id
    }

    const { data } = await registerAnswer(newAns);
    setAnswer('');
    const newQuestions = [...questions];
    newQuestions.forEach(ques => {
      if(ques._id === data.question) {
        ques.answers = [
          ...ques.answers,
          data
        ]
      }
    })
    console.log(newQuestions);
    setQuestions(newQuestions);

  }

  return (
    <Row >
      <Col xs={12} className="my-4">
        {answers.map((ans, i) => (
          <Form.Control value={ans.text}  key={i} type="text" placeholder="Enter answer" />
        ))}
        {answers.length === 0 && (
          <Form.Control value={''} type="text" placeholder="Enter answer" /> 
        )}
      </Col>
      {/* <Col xs={12}>
        <Form onSubmit={ e => { handleSubmit(e) }} className="mt-4">
          <Row>
            <Col lg={9} xs={12}>
              <Form.Group controlId="formAnswer" >
                <Form.Control value={answer} onChange={e => { setAnswer(e.target.value) } }  type="text" placeholder="Enter Your Answer" />
              </Form.Group>
            </Col>
            <Col lg={3} xs={12}>
              <Button style={{ width: '100%'}}  variant="dark" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Col> */}
    </Row>
   );
}
 
export default Answer;