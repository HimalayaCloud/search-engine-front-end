import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'

const RegisterForm = () => {
  return (
    <Fragment>
      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Pasword"
            name="password"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
          ></Form.Control>
        </Form.Group>
        <Button variant="success" type="submit">
          Register
        </Button>
      </Form>
      <p>
        Already have an account?
        <Link to="/login">
          <Button variant="info" size="sm" className="ml-2">
            Login
          </Button>
        </Link>
      </p>
    </Fragment>
  );
};

export default RegisterForm;
