import React, { useContext } from "react";
import { Button, ButtonGroup, Container, Form, Image } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import "./Premium.css";

const Premium = () => {
   const courseDetails = useLoaderData();
   const { user } = useContext(AuthContext);

   console.log(courseDetails, user);
   return (
      <div className="py-5 bg-secondary">
         <Container>
            <div className="d-flex justify-content-between align-items-center">
               <h3 className="text-white">Course ID: {courseDetails.id}</h3>
               <Image
                  style={{ width: "70px" }}
                  className="ms-3 rounded-circle"
                  src={user?.photoURL}
                  alt=""
               />
            </div>
            <Form className="form">
               <h3 className="text-center text-white mb-3">
                  User's check out form
               </h3>
               <div id="course-info" className="d-flex justify-content-between">
                  <h4 className="text-white mb-4">
                     Course Name: <span>{courseDetails?.name}</span>
                  </h4>
                  <h4 className="text-white mb-4">
                     Price: <span>${courseDetails?.price}</span>
                  </h4>
               </div>
               <Form.Group className="mb-4" controlId="formBasicText">
                  <Form.Control
                     readOnly
                     defaultValue={user?.displayName}
                     type="text"
                     placeholder="Enter Name"
                  />
               </Form.Group>
               <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Control
                     defaultValue={user?.email}
                     type="email"
                     placeholder="Enter email"
                  />
               </Form.Group>

               <div className="d-flex">
                  <Form.Group
                     className="mb-4 address"
                     controlId="formBasicText2"
                  >
                     <Form.Control
                        type="text"
                        placeholder=" Enter your Address"
                     />
                  </Form.Group>
                  <Form.Group className="mb-4 city" controlId="formBasicCity">
                     <Form.Control
                        type="text"
                        placeholder=" Enter phone city"
                     />
                  </Form.Group>
               </div>

               <div className="d-flex">
                  <Form.Group
                     className="mb-4 country"
                     controlId="formBasicText2"
                  >
                     <Form.Control
                        type="text"
                        placeholder=" Enter your country"
                     />
                  </Form.Group>
                  <Form.Group
                     className="mb-4 number"
                     controlId="formBasicNumber"
                  >
                     <Form.Control
                        type="number"
                        placeholder=" Enter phone number"
                     />
                  </Form.Group>
               </div>
               <div className="text-center mt-3">
                  <Link>
                     <Button className="process-btn">
                        Process
                     </Button>
                  </Link>
               </div>
            </Form>
         </Container>
      </div>
   );
};

export default Premium;
