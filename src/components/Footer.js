import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top jutify-content-between p-3">
          <Col className="p-0" md={3} sm={3} xs={4}>
            Nirmalya Ghosh
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={9} sm={9} xs={8}>
            Made by Nirmalya using React in Seattle
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
