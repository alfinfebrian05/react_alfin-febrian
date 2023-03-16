import React from "react";

const Button = ({ children, onClickAction, buttonType, buttonClassType }) => {
  return (
    <button
      className={`btn btn-${buttonClassType}`}
      onClick={onClickAction}
      type={buttonType}
    >
      {children}
    </button>
  );
};

export default Button;
