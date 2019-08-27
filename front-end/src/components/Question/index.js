import React, { useContext } from 'react'
import {  Row, Col, Form, Button } from 'react-bootstrap';
import { deleteQuestion } from '../../services/questionService';
import { GlobalContext } from '../context/GlobalState';
import { toast } from 'react-toastify';

const Question = ({ question, index, admin, state, handleChange }) => {
  
  const { questions, setQuestions } = useContext(GlobalContext);

  const handleDelete = async id => {
    const { data: { _id } } = await deleteQuestion(id);
    const newQuestions = [...questions].filter(ques => ques._id !== _id);
    setQuestions(newQuestions);
    toast('Question Deleted!');
  }

  return (
    <Row className="justify-content-center align-items-center mb-3">
      <Col lg={(admin && admin !== 'false' && admin !== '') ? 10 : 12 } xs={12} >
        <Form.Label>{ index+1 + '. ' + question.text }</Form.Label>
        {
          (admin === 'false' || !admin ) && (
            <Form.Control value={state[question._id]} name={question._id} onChange={handleChange}  type="text" placeholder="Enter answer" />
          )
        }
      </Col>
      {/* <Answer question={question} answers={question.answers} /> */}
      { (admin !== 'false' && admin !== '' && admin)  && (
        <Col lg={2} xs={12} className="mb-2">
          <Button style={{ width: '100%' }} onClick={() => { handleDelete(question._id)}}  variant="danger" >Delete</Button>
        </Col>
      )}
    </Row>
   );
}

export default Question;