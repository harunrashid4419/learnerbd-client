import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SingleCourse.css";

const SingleCourse = ({ course }) => {
   const { id, name, image, price, rating } = course;
   console.log(course);
   return (
      <div>
         <div className="single-course">
            <img src={image} alt="" />
            <span className="text-danger">Price: ${price}</span>
            <div className="d-flex justify-content-between mt-2">
               <h4>{name}</h4>
               <span className="text-danger">Rating: {rating.number}</span>
            </div>
            <Link to={`../course/${id}`}><Button className="w-100 my-3" variant="primary">Details</Button></Link>
         </div>
      </div>
   );
};

export default SingleCourse;
