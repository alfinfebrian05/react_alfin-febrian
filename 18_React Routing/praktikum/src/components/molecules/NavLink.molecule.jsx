import React from "react";
import Nav from "react-bootstrap/Nav";
import { LinkComponent } from "../atoms";

const NavLink = ({ children, linkHref }) => {
  return (
    <Nav.Link>
      <LinkComponent link_pathname={linkHref}>{children}</LinkComponent>
    </Nav.Link>
  );
};

export default NavLink;
