import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import LeftSide from "../components/LeftSide/LeftSide";

const Main = () => {
   return (
      <div>
         <Header />
         <Container>
            <Row>
               <Col md="3">
                  <LeftSide />
               </Col>
               <Col md="9">
                  <Outlet />
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default Main;
