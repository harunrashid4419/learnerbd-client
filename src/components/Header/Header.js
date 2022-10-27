import React, { useContext, useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import {
   Button,
   Container,
   Image,
   Nav,
   Navbar,
   NavDropdown,
} from "react-bootstrap";
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
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
               <Link className="left-side" to="/">
                  FreeLearn
               </Link>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     <span className="ms-3" onClick={() => setDark(!dark)}>
                        {dark ? (
                           <Button variant="light">Light</Button>
                        ) : (
                           <Button variant="dark">Dark</Button>
                        )}
                     </span>
                  </Nav>
                  <Nav>
                     <div className="menu">
                        <NavLink
                           className={({ isActive }) =>
                              isActive ? "text-danger" : undefined
                           }
                           to="/home"
                        >
                           Home
                        </NavLink>
                        <NavLink
                           className={({ isActive }) =>
                              isActive ? "text-danger" : undefined
                           }
                           to="/courses"
                        >
                           Courses
                        </NavLink>
                        <NavLink
                           className={({ isActive }) =>
                              isActive ? "text-danger" : undefined
                           }
                           to="/blog"
                        >
                           Blog
                        </NavLink>

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
                              <NavLink
                                 className={({ isActive }) =>
                                    isActive ? "text-danger" : undefined
                                 }
                                 to="/registration"
                              >
                                 Registration
                              </NavLink>
                              <NavLink
                                 className={({ isActive }) =>
                                    isActive ? "text-danger" : undefined
                                 }
                                 to="/login"
                              >
                                 LogIn
                              </NavLink>
                              <ReactTooltip />
                           </>
                        )}
                     </div>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
};

export default Header;
