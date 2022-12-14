import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SingleCourse.css";

const SingleCourse = ({ course }) => {
   const { id, name, image, price, rating, discount } = course;
   console.log(course);
   return (
      <div>
         <Link to={`../course/${id}`} className="single-course">
            <div>
               <img className="course-img" src={image} alt="" />
               <p className="course-discount">{discount}</p>
            </div>
            <div className="course-content">
               <h2 className="mb-3">{name}</h2>
               <span className="text-white">Rating: {rating.number}</span>
               <span className="text-white ms-3">Price: ${price}</span>
            </div>
         </Link>
      </div>
   );
};

export default SingleCourse;
