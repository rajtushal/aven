import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import TableContent from "./TableContent";
import "./maincontent.css";
import SideInfo from "./SideInfo";
import { Container, Col, Row } from "react-bootstrap";

function MainContent() {
  return (
    <Container fluid className="p-0">
      <BreadCrumbs />
      <Row className="main-content w-100 m-0">
        <Col xs={8} className="ps-0">
          <TableContent />
        </Col>
        <Col xs={4} className="pe-0">
          <SideInfo name="Emanuel " />
        </Col>
      </Row>
    </Container>
  );
}

export default MainContent;
