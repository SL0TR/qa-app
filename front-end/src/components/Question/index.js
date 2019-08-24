import React, { useRef, useContext } from 'react'
import { Accordion, Card, ListGroup, Button, Popover, Row, Col, OverlayTrigger } from 'react-bootstrap';
import { deleteQuestion } from '../../services/questionService';
import { GlobalContext } from '../context/GlobalState';
import { toast } from 'react-toastify';

const Question = ({ question, index, admin }) => {
  
  const { questions, setQuestions } = useContext(GlobalContext);

  const handleDelete = async id => {
    popUpRef.current.handleHide();
    const { data: { _id } } = await deleteQuestion(id);
    const newQuestions = [...questions].filter(ques => ques._id !== _id);
    setQuestions(newQuestions);
    toast('Item Deleted!');

  }

  const popUpRef = useRef(null);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        <Row>
          <Col xs={12}>
            Are you sure you want to delete this Question?
          </Col>
          <Col xs={12}>
            <Button onClick={() => {handleDelete(question._id)}} size="sm" className="mt-2" variant="danger">Delete</Button>
          </Col>
        </Row>
      </Popover.Content>
    </Popover>
  );

  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as="h4" style={{ cursor: 'pointer' }} eventKey={index.toString()}>
          {question.text}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={index.toString()}>
        <Card.Body>
        <ListGroup>
          {question.answers.length === 0 && (<p>No answers yet</p>)}
          {question.answers.map ((ans, i) => (
            <ListGroup.Item key={i}>Answer</ListGroup.Item>
          ))}
          { admin && (
            <Row>
              <Col lg={4} xs={12}>
              <OverlayTrigger ref={popUpRef} trigger="click" placement="right" overlay={popover}>
                <Button variant="danger" >Delete Question</Button>
              </OverlayTrigger>
              </Col>
            </Row>
          )}
          
        </ListGroup>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
   );
}

export default Question;