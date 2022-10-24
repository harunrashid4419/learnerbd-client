import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Header = () => {
   return (
      <div className="main-header">
         <Container>
            <nav className="header">
               <div className="left">
                  <Link to="/">FreeLearn</Link>
               </div>
               <div className="menu">
                  <Link to="/home">Home</Link>
                  <Link to="/course">Course</Link>
                  <Link to="/blog">Blog</Link>
                  <Link to="/registration">Registration</Link>
                  <Link to="/login">LogIn</Link>
               </div>
            </nav>
         </Container>
      </div>
   );
};

export default Header;
