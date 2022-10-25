import React from "react";
import "./CourseDetails.css";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const CourseDetails = () => {
   const details = useLoaderData();
   return (
      <div className="main-details">
         <div className="details">
            <div className="course-details">
               <div className="left-side d-flex align-items-center">
                  <div>
                     <img src={details.image} alt="" />
                  </div>
               </div>
               <div className="right-side d-flex align-items-center">
                  <div>
                     <h3>{details.title}</h3>
                     <p>{details.details}</p>

                     <div className="mt-4">
                        <Link>
                           <Button
                              className="text-dark font-bold"
                              variant="outline-primary"
                           >
                              <FaDownload /> Download PDF
                           </Button>
                        </Link>
                        <Link to={`../premium/${details.id}`}>
                           <Button className="ms-5" variant="outline-success">
                              Go Premium
                           </Button>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CourseDetails;