import React from "react";
import "./CourseDetails.css";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import jsPDF from 'jspdf';
import coadingImage from '../../assets/images/3659197.jpg';

const CourseDetails = () => {
   const details = useLoaderData();
   console.log(details);

   const downloadPDF = () =>{
      const document = new jsPDF ('landscope', 'px', 'a4', 'false');
      document.addImage(coadingImage, 'PNG', 65,20,500,400);
      document.save('CoadingImage.pdf')
   }

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
                     <h3 className="mb-4">{details.title}</h3>
                     <h5>What you will learn from this course?</h5>
                     <p>{details.learn}</p>
                     <h5>Overview:</h5>
                     <p>{details.details}</p>
                     <span className="text-danger fs-1"><del>${details.previous_price}</del></span>
                     <span className="text-success ms-3 fs-1">${details.price}</span>
                     <div className="mt-4">
                        <Link>
                           <Button
                           onClick={downloadPDF}
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
