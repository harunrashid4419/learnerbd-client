import React from "react";
import "./TopHeader.css";
import {
   FaFacebook,
   FaInstagram,
   FaMailBulk,
   FaPhoneAlt,
   FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TopHeader = () => {
   return (
      <div className="header-bg">
         <div className="top-header container">
            <div className="info">
               <p>
                  <FaMailBulk /> harunrashid4419@gmail.com
               </p>
               <p>
                  <FaPhoneAlt /> 01185251500
               </p>
            </div>
            <div className="social-icon">
               <div>
                  <Link>
                     <FaFacebook />
                  </Link>
                  <Link>
                     <FaTwitter />
                  </Link>
                  <Link>
                     <FaInstagram />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TopHeader;
