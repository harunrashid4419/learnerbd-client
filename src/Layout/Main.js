import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import LeftSide from "../components/LeftSide/LeftSide";

const Main = () => {
   return (
      <div>
         <Header />
         <Outlet/>
      </div>
   );
};

export default Main;
