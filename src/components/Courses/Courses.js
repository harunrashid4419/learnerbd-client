import React from "react";
import { Container } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import SingleCourse from "../SingleCourse/SingleCourse";
import "./Courses.css";

const Courses = () => {
   const courses = useLoaderData();
   return (
      <Container className="our-courses">
         <h3>Our Courses:-</h3>
         <div className="all-course">
            <div className="course-container">
               {courses.map((course) => (
                  <SingleCourse
                     props={course.id}
                     course={course}
                  ></SingleCourse>
               ))}
            </div>
            <div className="all-link">
               {courses.map((course) => (
                  <Link to={`../course/${course.id}`} className="single-link">
                     {course.name}
                  </Link>
               ))}
            </div>
         </div>
      </Container>
   );
};

export default Courses;
