import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import useForm from "react-hook-form";

const GenericForm = ({ onSubmit }) => {

  const { handleSubmit, register, errors } = useForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          name="email"
          placeholder="Enter Email"
          ref={register({
            required: 'Required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid email address"
            }
          })}
        />
        {errors.email && errors.email.message}
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control
          placeholder="Enter Password"
          type="password"
          name="password"
          ref={register({
            required: 'Required',
            maxLength: 10,
            minLength: 3,
          })}
        />
        {errors.password &&
       errors.password.type === 'required' &&
       'Your input is required'}
       {errors.password &&
       errors.password.type === 'maxLength' &&
       'Your input exceeded max character if 10'}
       {errors.password &&
       errors.password.type === 'minLength' &&
       'Your input needs to be more than 2 characters'}
      </Form.Group>
      <Row className="justify-content-md-center">
        <Col xs={3}>
          <Button variant="primary" type="submit">
          Submit
        </Button>
        </Col>
      </Row>
      
    </Form>
   );
}
 
export default GenericForm;