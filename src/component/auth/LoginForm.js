import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link , useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";


const LoginForm = () => {
  // Context
  const{loginUser} = useContext(AuthContext)
// Router

const navigate = useNavigate()

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const {username, password} = loginForm

  const onChangeLoginForm = (event) => {
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
  };

  const login = async event => {
    event.preventDefault();
    try {
      const loginData = await loginUser(loginForm)
      if(loginData.success) {
        navigate('/dashboard')
      }else {
        console.log(loginData)
      }
    } catch (error) {
      console.log(error)
    }
 
  }

  return (
    <Fragment>
      <Form onSubmit={login}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
            value={username}
            onChange={onChangeLoginForm}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Pasword"
            name="password"
            required
            value={password}
            onChange={onChangeLoginForm}
          ></Form.Control>
        </Form.Group>
        <Button variant="success" type="submit">
          Login
        </Button>
      </Form>
      <p>
        Don't have an account?
        <Link to="/register">
          <Button variant="info" size="sm" className="ml-2">
            Register
          </Button>
        </Link>
      </p>
    </Fragment>
  );
};

export default LoginForm;
