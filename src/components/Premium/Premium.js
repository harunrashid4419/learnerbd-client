import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const Premium = () => {
   const courseDetails = useLoaderData();
   console.log(courseDetails);
   return (
      <div className="py-5">
         <Container>
            <div className="ms-5 mb-4">
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
            </div>
         </Container>
      </div>
   );
};

export default Premium;
