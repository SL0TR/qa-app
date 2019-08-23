import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { registerUser } from '../../services/userService';
import GenericForm from '../../components/Forms/genericForm';

const Register = () => {

  const onSubmit = user => {
    registerUser(user);
  };

  return (
    <Row className="justify-content-md-center mt-5">
      <Col xs={12}><h2 className="text-center mb-5">User Registration</h2></Col>
      <Col xs={4}>
        <GenericForm onSubmit={onSubmit}/>
      </Col>
    </Row>
   );
}
 
export default Register;