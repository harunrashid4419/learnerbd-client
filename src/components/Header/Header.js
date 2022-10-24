import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { AuthContext } from "../../Context/UserContext";

const Header = () => {
   const { user, logOut } = useContext(AuthContext);
   console.log(user);

   const handleLogOut = () => {
      logOut()
         .then((result) => console.log(result.user))
         .catch((error) => console.log("error ", error));
   };

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
                  {user ? (
                     <Button onClick={handleLogOut} variant="outline-danger">LogOut</Button>
                  ) : (
                     <>
                        <Link to="/registration">Registration</Link>
                        <Link to="/login">LogIn</Link>
                     </>
                  )}
               </div>
            </nav>
         </Container>
      </div>
   );
};

export default Header;
