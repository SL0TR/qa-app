import React, { useContext, useEffect } from 'react'
import { toast } from 'react-toastify';
import { Row, Col } from 'react-bootstrap';
import { registerUser } from '../../services/userService';
import GenericForm from '../../components/Forms/genericForm';
import { GlobalContext } from '../../components/context/GlobalState';

const Register = ( { history }) => {

  const { currUser, setCurrUser } = useContext(GlobalContext);


  useEffect(() => {
    if(currUser._id) {
      history.push('/');
    }
  }, [currUser._id, history])

  const onSubmit = async user => {
    const { data } = await registerUser(user);
    if(data) {
      toast('User registration successful!');
      setCurrUser(data.user);
    }
  };

  return (
    <Row className="justify-content-md-center mt-5">
      <Col xs={12}><h2 className="text-center mb-5">User Registration</h2></Col>
      <Col lg={4} xs={12}>
        <GenericForm onSubmit={onSubmit}/>
      </Col>
    </Row>
   );
}
 
export default Register;