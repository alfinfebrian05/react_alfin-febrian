import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavbarBrand, Container } from "react-bootstrap";
import routers from "../../config/routers";
import { NavLinkComponent } from "../atoms";

const NavbarTemplate = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("account")) || false;
    setIsLoggedIn(user.loggedIn);
  }, []);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        fixed="top"
        className="shadow-sm"
      >
        <Container>
          <NavbarBrand href="/">Simple Navbar</NavbarBrand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end py-2"
          >
            <Nav className="gap-3 m-0">
              {isLoggedIn
                ? routers.map((router, idx) => {
                    return (
                      <NavLinkComponent
                        hrefTo={router.pathname}
                        children={router.textLink}
                        key={idx}
                      />
                    );
                  })
                : routers
                    .filter((router) => router.pathname !== "/create")
                    .map((router, idx) => {
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
