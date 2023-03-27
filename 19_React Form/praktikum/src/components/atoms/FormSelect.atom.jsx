import React from "react";
import { Form } from "react-bootstrap";

const FormSelect = ({
  defaultOptionValue,
  handleChange,
  children,
  selectName,
  handleInvaLid,
}) => {
  return (
    <Form.Select
      defaultValue={defaultOptionValue}
      onChange={handleChange}
      name={selectName}
      isInvalid={handleInvaLid}
    >
      {children}
    </Form.Select>
  );
};

export default FormSelect;
