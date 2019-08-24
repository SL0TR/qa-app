import React, { useState, useEffect, useContext } from 'react'
import { getAllUsers } from '../../services/userService';
import { Row, Col, Accordion, Card } from 'react-bootstrap';
import { GlobalContext } from '../../components/context/GlobalState';
import { getAllQuestions } from '../../services/questionService';
import QA from '../../components/QA';
// import { getUserAnswer } from '../../services/answerService';

const Users = () => {
  const [users, setUsers] = useState([]);
  // const [qa, setQa] = useState([]);
  const { questions, setQuestions  } = useContext(GlobalContext);


  useEffect(() => {

    (async() => {
      const promises = [getAllUsers(), getAllQuestions()]

      const [userData, projectsData] = await Promise.all(promises);

      if(userData) {
        setUsers(userData.data.users)
      }
      
      if(projectsData) {
        // console.log(projectsData.data.questions)
        setQuestions(projectsData.data.questions);
      }
      
    })()
  }, [setQuestions])


  // useEffect(() => {

    
  //   (async() => {

  //   const arr = users.map(user => {
  //     return {
  //       user: user.email,
  //       qList: questions.map(ques => {
  //         return {
  //           questionId: ques._id,
  //           userId: user._id,
  //         }
  //       })
  //     }
  //   })
  
  //     // setQa(arr)
  //   if(users.length !== 0 && questions.length !== 0) {
      
  //     const promises = arr.map(el => {
  //       let data;
  //       el.qList.forEach(el => {
  //         data = getUserAnswer(el)
  //         // data = 'test'
  //       })
  //       return data;
  //     })

  //     console.log(promises);

  //     var t0 = performance.now();

  //     const res = await Promise.all(promises);
      
  //     if(res) {

  //       console.log(res)
  //       var t1 = performance.now();
  //       console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
  //     }
  //   }
  //   })()
     
    

  // }, [questions, users])


  return (
    <Row>
      <Col xs={12}>
        <Accordion defaultActiveKey="0">
          {
            users.map((user, i) => (
              <Card key={user._id}>
                <Card.Header style={{ cursor: 'pointer' }}>
                  <Accordion.Toggle as="h4" eventKey={i.toString()} >
                  &#9786; { user.email }
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={i.toString()}>
                  <Card.Body>
                    { questions && questions.map(ques => (
                      <QA user={user} key={ques._id}  ques={ques} />
                    )) }
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))
          }
        </Accordion>
      </Col>
    </Row>
  );
}
 
export default Users;