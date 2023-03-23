import React, { useState } from "react";
import { Nav, Navbar, NavbarBrand, Container } from "react-bootstrap";
import routers from "../../config/routers";
import { NavLinkComponent } from "../atoms";

const NavbarTemplate = () => {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="light"
        variant="light"
        fixed="top"
        className="shadow"
      >
        <Container>
          <NavbarBrand href="/">Simple Navbar</NavbarBrand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end py-2"
          >
            <Nav className="gap-3 m-0">
              {routers.map((router, idx) => {
                return (
                  <NavLinkComponent
                    hrefTo={router.pathname}
                    children={router.textLink}
                    key={idx}
                  />
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavbarTemplate;
