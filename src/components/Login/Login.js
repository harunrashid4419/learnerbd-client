import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/UserContext";

const Login = () => {
    const { userLogIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogIn = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)

        userLogIn(email, password)
            .then( result =>{
                const user = result.user;
                console.log(user);
                navigate('/home');
            })
            .catch( error =>{
                console.log('error ', error)
            })
    }

   return (
      <Container className="my-5 pt-5">
         <div className="border py-5 px-4 border-2 rounded mx-auto" style={{ width: "500px" }}>
            <h4 className="mb-3 text-success text-center">
               Please Login
            </h4>
            <Form onSubmit={handleLogIn}>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control name='email' type="email" placeholder="Enter email" />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name='password' type="password" placeholder="*********" />
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
