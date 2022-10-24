import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/UserContext";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Registration = () => {
   const { createUser, googleSignIn, profileUpdate, githubSignIn } =
      useContext(AuthContext);
   const navigate = useNavigate();

   const handleRegistration = (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const photoURL = event.target.photoURL.value;
      const password = event.target.password.value;
      console.log(name, email, photoURL, password);

      createUser(email, password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            updateProfileNameAndURL(name, photoURL);
            navigate("/login");
         })
         .catch((error) => {
            console.log("error ", error);
         });
   };

   const handleGoogleSignIn = () => {
      googleSignIn(googleProvider)
         .then((result) => {
            const user = result.user;
            console.log(user);
         })
         .catch((error) => console.log("error ", error));
   };

   const handleGithubLogIn = () => {
      githubSignIn(githubProvider)
         .then((result) => {
            const user = result.user;
            console.log(user);
         })
         .catch((error) => {
            console.log("error ", error);
         });
   };

   const updateProfileNameAndURL = (name, photoURL) => {
      const profile = {
         displayName: name,
         photoURL: photoURL,
      };
      profileUpdate(profile);
   };

   return (
      <Container className="my-5 pt-5">
         <div
            className="border py-5 px-4 border-2 rounded mx-auto"
            style={{ width: "500px" }}
         >
            <h4 className="mb-3 text-success text-center">
               Please Registration
            </h4>
            <Form onSubmit={handleRegistration}>
               <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                     name="name"
                     type="text"
                     placeholder="Enter Name"
                  />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicText2">
                  <Form.Label>Photo URL</Form.Label>
                  <Form.Control
                     name="photoURL"
                     type="text"
                     placeholder="PhotoURL"
                  />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                     name="email"
                     type="email"
                     placeholder="Enter email"
                  />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                     name="password"
                     type="password"
                     placeholder="*********"
                  />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                     type="checkbox"
                     label="Accepts terms and conditions"
                  />
               </Form.Group>

               <Button className="w-100" variant="primary" type="submit">
                  Registration
               </Button>
               <p className="text-center mt-3">
                  Already have an account <Link to="/login">Login</Link>
               </p>
               <div className="text-center">
                  <Button
                     onClick={handleGoogleSignIn}
                     className="w-100 mb-3"
                     variant="success"
                     type="submit"
                  >
                     <FaGoogle /> Google SignIn
                  </Button>
                  <Button
                     onClick={handleGithubLogIn}
                     className="w-100"
                     variant="success"
                     type="submit"
                  >
                     <FaGithub /> Github SignIn
                  </Button>
               </div>
            </Form>
         </div>
      </Container>
   );
};

export default Registration;
