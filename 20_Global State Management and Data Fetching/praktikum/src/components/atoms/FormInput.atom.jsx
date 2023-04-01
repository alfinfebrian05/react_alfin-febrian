import React from "react";
import { Form } from "react-bootstrap";

const FormInput = ({
  inputType,
  inputAs,
  inputAccept,
  inputPlaceholder,
  inputName,
  handleChange,
  inputValue,
  handleInvalid,
}) => {
  return (
    <>
      {inputAs === "textarea" && (
        <Form.Control
          as="textarea"
          rows="5"
          name={inputName}
          value={inputValue}
          onChange={handleChange}
          isInvalid={handleInvalid}
        />
      )}
      {inputAs === "input" && inputType && (
        <Form.Control
          as={inputAs}
          type={inputType}
          name={inputName}
          placeholder={inputPlaceholder}
          value={inputValue}
          onChange={handleChange}
          isInvalid={handleInvalid}
        />
      )}
      {inputAccept === "image" && inputType === "file" && (
        <Form.Control
          as={inputAs}
          type={inputType}
          name={inputName}
          // accept=".jpg, image/png"
          value={inputValue}
          onChange={handleChange}
          isInvalid={handleInvalid}
        />
      )}
    </>
  );
};

export default FormInput;
