import React from "react";
import { Form } from "react-bootstrap";

const FormCheck = ({
  formCheckType,
  formCheckLabel,
  formCheckValue,
  formCheckName,
  checkOnChange,
  handleInvalid,
  invalidMessage,
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
      <Form.Control.Feedback type="invalid">
        {invalidMessage}
      </Form.Control.Feedback>
    </>
  );
};

export default FormCheck;
