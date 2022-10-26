import React from "react";
import "./Home.css";
import learnImg from "../../assets/images/rear-view-programmer-working-all-night-long.jpg";
import { Link } from "react-router-dom";
import StudentTalent from "../OthersPage/StudentTalent/StudentTalent";
import GetTouch from "../OthersPage/GetTouch/GetTouch";
import Socket from "../OthersPage/Socket/Socket";

const Learning = () => {
   return (
      <div>
         <div className="main-learning">
            <div className="container">
               <div className="learning-container">
                  <div className="img">
                     <img src={learnImg} alt="" />
                  </div>
                  <div className="content">
                     <div>
                        <h3>
                           Welcome to <span>Free Learn</span>
                        </h3>
                        <p>
                           If you are looking for good online courses then you
                           have come to the right place. You can do our course
                           very well without any previous experience. Our course
                           is carefully designed for a beginner.
                        </p>
                        <Link to="/courses">See Courses</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <StudentTalent></StudentTalent>
         <GetTouch></GetTouch>
         <Socket></Socket>
      </div>
   );
};

export default Learning;
