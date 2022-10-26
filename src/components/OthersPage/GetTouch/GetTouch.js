import React from "react";
import { Link } from "react-router-dom";
import "./GetTouch.css";

const GetTouch = () => {
   return (
      <div className="main-section">
         <div className="touch-section container">
            <h1>GET IN TOUCH</h1>
            <div className="text-email">
               <input
                  className="name"
                  type="text"
                  name=""
                  placeholder="Enter your name"
               />
               <input
                  className="email"
                  type="email"
                  name=""
                  placeholder="Enter your email"
               />
            </div>
            <textarea rows="" cols="" placeholder="Your Message"></textarea>
            <div className="send-button">
               <Link>Send Message</Link>
            </div>
         </div>
      </div>
   );
};

export default GetTouch;
