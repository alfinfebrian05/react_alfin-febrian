import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const LinkComponent = ({ link_pathname, children }) => {
  const [onHover, setOnHover] = useState(false);

  const handleOnMouseEnter = () => {
    setOnHover(true);
  };
  const handleOnMouseLeave = () => {
    setOnHover(false);
  };

  return (
    <>
      {onHover ? (
        <Button
          href={link_pathname}
          onMouseLeave={handleOnMouseLeave}
          variant="primary"
        >
          {children}
        </Button>
      ) : (
        <Button
          href={link_pathname}
          onMouseEnter={handleOnMouseEnter}
          variant="link"
          className="text-decoration-none fw-semibold"
        >
          {children}
        </Button>
      )}
    </>
  );
};

export default LinkComponent;
