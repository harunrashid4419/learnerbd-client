import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/UserContext";

const Login = () => {
   const { userLogIn } = useContext(AuthContext);
   const [error, setError] = useState("");
   const [showPassword, setShowPassword] = useState(false);
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";

   const handleLogIn = (event) => {
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
      console.log(email, password);

      userLogIn(email, password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            event.target.reset();
            navigate(from, { replace: true });
         })
         .catch((error) => {
            console.log("error ", error);
            setError(error.message);
         });
   };


   return (
      <Container className="my-5 pt-5">
         <div
            className="border py-5 px-4 border-2 rounded mx-auto"
            style={{ width: "500px" }}
         >
            <h4 className="mb-3 text-success text-center">Please Login</h4>
            <Form onSubmit={handleLogIn}>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                     name="email"
                     type="email"
                     placeholder="Enter email"
                  />
               </Form.Group>

               <Form.Group
                  className="mb-3 position-relative"
                  controlId="formBasicPassword"
               >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                     name="password"
                     type={showPassword ? "text" : "password"}
                     placeholder="*********"
                  />
                  <div onClick={() => setShowPassword(!showPassword)}>
                     {showPassword ? (
                        <FaEye
                           className="position-absolute end-0 top-0"
                           style={{ marginTop: "43px", marginRight: "10px" }}
                        />
                     ) : (
                        <FaEyeSlash
                           className="position-absolute end-0 top-0"
                           style={{ marginTop: "43px", marginRight: "10px" }}
                        />
                     )}
                  </div>
               </Form.Group>
               <p className="text-danger">{error}</p>
               <Button className="w-100" variant="primary" type="submit">
                  LogIn
               </Button>
               <p className="text-center mt-3">
                  Don't have any account{" "}
                  <Link to="/registration">Registration</Link>
               </p>
               {/* <div className="text-center">
                  <Button className="w-100 mb-3" variant="success">
                     <FaGoogle /> Google SignIn
                  </Button>
                  <Button className="w-100" variant="success">
                     <FaGithub /> Github SignIn
                  </Button>
               </div> */}
            </Form>
         </div>
      </Container>
   );
};

export default Login;
