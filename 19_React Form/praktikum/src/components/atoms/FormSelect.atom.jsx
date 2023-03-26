import React from "react";
import { Form } from "react-bootstrap";

const FormSelect = ({
  defaultOptionValue,
  handleChange,
  children,
  selectName,
}) => {
  return (
    <Form.Select
      defaultValue={defaultOptionValue}
      onChange={handleChange}
      name={selectName}
    >
      {children}
    </Form.Select>
  );
};

export default FormSelect;
