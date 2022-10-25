import React, { useContext } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import './Premium.css';

const Premium = () => {
   const courseDetails = useLoaderData();
   const { user } = useContext(AuthContext);

   console.log(courseDetails, user);
   return (
      <div className="py-5 bg-secondary">
         <Container>
            {/* <div className="ms-5 mb-4">
               <h3 className="text-dark">
                  Course ID:{" "}
                  <span className="text-danger">{courseDetails.id}</span>
               </h3>
               <h5 className="text-dark py-2">
                  Course Name:{" "}
                  <span className="text-danger">{courseDetails.name}</span>
               </h5>
               <p>{courseDetails.title}</p>
               <p>{courseDetails.details}</p>
            </div>
            <img src={courseDetails.image} alt="" />
            <div className="mt-5 text-center">
               <Link to='/blog'><Button variant="primary">Read Blog</Button></Link>
            </div> */}
            <div className="d-flex justify-content-between align-items-center">
               <h3 className="text-white">ID: {courseDetails.id}</h3>
               <Image
                  style={{ width: "70px" }}
                  className="ms-3 rounded-circle"
                  src={user?.photoURL}
                  alt=""
               />
            </div>
            {/* <div className="form-section">
               <h3 className="text-white text-center mt-3 mb-4">User's check out form</h3>
               <input className="name" type="text" name="name" value="" placeholder="Enter your Name"/>
               <input className="email" type="email" name="name" value="" placeholder="Enter your Email"/>
               <input className="city" type="text" name="city" value="" placeholder="Enter your City"/>
               <input className="country" type="text" name="country" value="" placeholder="Enter your Country"/>
               <input className="number" type="number" name="phone" value="" placeholder="Enter your Phone"/>
            </div> */}
         </Container>
      </div>
   );
};

export default Premium;
