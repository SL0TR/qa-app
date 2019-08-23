import React, { useContext, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import GenericForm from '../../components/Forms/genericForm';
import { GlobalContext } from '../../components/context/GlobalState';

const Login = ({ history }) => {

  const { onSubmit, currUser } = useContext(GlobalContext);

  useEffect(() => {
    if(currUser) {
      toast('Successfully Signed In!');
      history.push('/');
    }
  }, [currUser, history])

  return (
    <Row className="justify-content-md-center mt-5">
      <Col xs={12}><h2 className="text-center mb-5">Login</h2></Col>
      <Col lg={4} xs={12}>
        <GenericForm onSubmit={onSubmit}/>
      </Col>
    </Row>
   );
}
 
export default Login;