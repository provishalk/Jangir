import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../img/logo.png";
import "./DefaultNavBar.scss";
const DefaultNavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="light" className="pt-4">
        <Container>
          <Navbar.Brand href="#home">
            <div>
              <img src={logo} alt="" className="navbar__logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#Services">Services</Nav.Link>
              <Nav.Link href="#Page">Page</Nav.Link>
              <Nav.Link href="#Cases">Cases</Nav.Link>
              <Nav.Link href="#Blog">Blog</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets" className="navbar__get-in-touch">
                Get in Touch
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Sign in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default DefaultNavBar;
