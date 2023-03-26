import React from "react";
import { Form } from "react-bootstrap";

const FormCheck = ({
  formCheckType,
  formCheckLabel,
  formCheckValue,
  formCheckName,
  checkOnChange,
  handleInvalid,
}) => {
  return (
    <>
      <Form.Check
        type={formCheckType}
        name={formCheckName}
        label={formCheckLabel}
        value={formCheckValue}
        onChange={checkOnChange}
        isInvalid={handleInvalid}
      />
    </>
  );
};

export default FormCheck;
