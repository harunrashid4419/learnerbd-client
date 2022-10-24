import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {

    const handleLogIn = event =>{

    }

   return (
      <Container className="my-5 pt-5">
         <div className="border py-5 px-4 border-2 rounded" style={{ width: "500px" }}>
            <h4 className="mb-3 text-success text-center">
               Please Login
            </h4>
            <Form onSubmit={handleLogIn}>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="*********" />
               </Form.Group>

               <Button className="w-100" variant="primary" type="submit">
                  LogIn
               </Button>
               <p className="text-center mt-3">
                  Don't have any account <Link to="/registration">Registration</Link>
               </p>
               <div className="text-center">
                  <Button
                     className="w-100 mb-3"
                     variant="success"
                     type="submit"
                  >
                     <FaGoogle /> Google SignIn
                  </Button>
                  <Button className="w-100" variant="success" type="submit">
                     <FaGithub /> Github SignIn
                  </Button>
               </div>
            </Form>
         </div>
      </Container>
   );
};

export default Login;
