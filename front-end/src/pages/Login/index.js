import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { login } from '../../services/authService';
import GenericForm from '../../components/Forms/genericForm';

const Login = () => {

  const onSubmit = user => {
    login(user);
  };

  return (
    <Row className="justify-content-md-center mt-5">
      <Col xs={12}><h2 className="text-center mb-5">Login</h2></Col>
      <Col xs={4}>
        <GenericForm onSubmit={onSubmit}/>
      </Col>
    </Row>
   );
}
 
export default Login;