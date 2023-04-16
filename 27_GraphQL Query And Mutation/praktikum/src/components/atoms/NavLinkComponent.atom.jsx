import React, { useState } from "react";
import { Nav } from "react-bootstrap";

const NavLinkComponent = ({ hrefTo, children }) => {
  const [linkHovered, setLinkHovered] = useState(false);
  const handleLinkHovered = () => setLinkHovered(!linkHovered);

  return (
    <>
      {linkHovered ? (
        <Nav.Link
          href={hrefTo}
          onMouseLeave={handleLinkHovered}
          onMouseEnter={handleLinkHovered}
          className="btn btn-primary text-white text-center"
        >
          {children}
        </Nav.Link>
      ) : (
        <Nav.Link
          href={hrefTo}
          onMouseLeave={handleLinkHovered}
          onMouseEnter={handleLinkHovered}
          className="text-primary fw-semibold text-center"
        >
          {children}
        </Nav.Link>
      )}
    </>
  );
};

export default NavLinkComponent;
