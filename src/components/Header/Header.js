import React, { useContext, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Button, Container, Image } from "react-bootstrap";
import { AuthContext } from "../../Context/UserContext";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import TopHeader from "../TopHeader/TopHeader";
import ReactTooltip from "react-tooltip";

const Header = () => {
   const { user, logOut } = useContext(AuthContext);
   const [dark, setDark] = useState(false);
   console.log(user);

   const handleLogOut = () => {
      logOut()
         .then((result) => console.log(result.user))
         .catch((error) => console.log("error ", error));
   };

   return (
      <div>
         <TopHeader></TopHeader>
         <div className="main-header">
            <Container>
               <nav className="header">
                  <div className="left">
                     <Link to="/">FreeLearn</Link>
                  </div>
                  <div className="menu">
                     <Link to="/home">Home</Link>
                     <Link to="/courses">Courses</Link>
                     <Link to="/blog">Blog</Link>

                     {user ? (
                        <>
                           <Button
                              onClick={handleLogOut}
                              variant="outline-danger"
                           >
                              <ReactTooltip />
                              LogOut
                           </Button>
                           {user?.photoURL ? (
                              <Image
                                 data-tip={user?.displayName}
                                 style={{ width: "40px" }}
                                 className="ms-3 rounded-circle"
                                 src={user?.photoURL}
                                 alt=""
                              />
                           ) : (
                              <FaUser
                                 data-tip={user?.displayName}
                                 className="ms-3 text-white"
                                 style={{ fontSize: "35px" }}
                              />
                           )}
                        </>
                     ) : (
                        <>
                           <Link to="/registration">Registration</Link>
                           <Link to="/login">LogIn</Link>
                           <ReactTooltip />
                        </>
                     )}
                     <span className="ms-2" onClick= {() => setDark(!dark)}>
                        {dark ? (
                           <Button variant="primary">Light</Button>
                           ) : (
                           <Button variant="primary">Dark</Button>
                        )}
                     </span>
                  </div>
               </nav>
            </Container>
         </div>
      </div>
   );
};

export default Header;
