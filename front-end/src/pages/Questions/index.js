import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../components/context/GlobalState';
import { Row, Col, Accordion, Form, Button } from 'react-bootstrap';
import { getAllQuestions, registerQuestion } from '../../services/questionService';
import Question from '../../components/Question';

const Questions = () => {
  const { questions, setQuestions, currUser } = useContext(GlobalContext);
  const [ question, setQuestion ] = useState('');

  useEffect(() => {

    (async () => {
      const { data: questions } = await getAllQuestions();
      if(questions) {
        setQuestions(questions.questions)
      }
    })();
    
  }, [setQuestions])

  const handleSubmit = async e => {
    e.preventDefault();
    
    const questionData = {
      text: question
    }
    const { data} = await registerQuestion(questionData);
    if(data ) {
      setQuestion('');
      const prevQuestions = questions;
      const newQuestions = [
        data,
        ...prevQuestions
      ]
      setQuestions(newQuestions);
    }
  }
  const admin = currUser && currUser.isAdmin 
  return (
    <>
      <Row>
        {
          admin && (
            <Col xs={12}>
              <Form onSubmit={ e => { handleSubmit(e) }}>
                <Row>
                  <Col lg={9} xs={12}>
                    <Form.Group controlId="formBasicEmail" >
                      <Form.Control value={question} onChange={e => { setQuestion(e.target.value) } }  type="text" placeholder="Enter Your Question" />
                    </Form.Group>
                  </Col>
                  <Col lg={3} xs={12}>
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
          <Accordion defaultActiveKey="0">
            { questions.map( (ques, i) => <Question key={i} index={i} admin={admin} question={ques} />)}
          </Accordion>
        </Col>
      </Row>
    </>
   );
}
 
export default Questions;