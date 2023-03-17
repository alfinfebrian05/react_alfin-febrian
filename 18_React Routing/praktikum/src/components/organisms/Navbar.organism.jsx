import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { NavLink } from "../molecules";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Simple Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink linkHref="/">Home</NavLink>
              <NavLink linkHref="/">Features</NavLink>
              <NavLink linkHref="/">Pricing</NavLink>
              <NavLink linkHref="/">FAQs</NavLink>
              <NavLink linkHref="/">About</NavLink>
            </Nav>
            <Nav>
              {/* <NavLink linkHref="/create-product">Create Product</NavLink> */}
              <NavDropdown
                title="What You Want Todo?"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/create-product">
                  Create Product
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
