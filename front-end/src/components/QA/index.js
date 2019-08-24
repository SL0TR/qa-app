import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import { getUserAnswer } from '../../services/answerService';

const QA = ({ ques, user }) => {

  const [answer, setAnswer] = useState('');

  useEffect(() => {

    (async() => {
      const ansData = {
        questionId: ques._id,
        userId: user._id
      }
  
      const data = await getUserAnswer(ansData);

      if(data && data.data ) {
        setAnswer(data.data.text);
      } else {
        setAnswer('No answer yet');
      }
  
    })()

  }, [ques, user])

  return (
    <Row>
      <Col xs={12}>
        <p className="lead"><em> {ques.text ? ques.text : 'loading...'} </em></p>
        <blockquote className="blockquote">
          <p className="mb-0">{answer  ? answer : 'loading...'}</p>
        </blockquote>
      </Col>
    </Row>
   );
}
 
export default QA;