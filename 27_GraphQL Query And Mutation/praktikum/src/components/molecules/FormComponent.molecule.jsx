import React from "react";
import { Form } from "react-bootstrap";

const FormComponent = ({ children, formClassName, onSubmitHandler }) => {
  return (
    <Form className={formClassName} onSubmit={onSubmitHandler}>
      {children}
    </Form>
  );
};

export default FormComponent;
