import React from "react";

const InputText = ({
  value,
  inputType,
  className,
  inputName,
  onInputChange,
  labelName,
}) => {
  return (
    <>
      {inputType === "text" ? (
        <>
          <label htmlFor={inputName} className="form-label">
            {labelName}
          </label>
          <input
            type="text"
            name={inputName}
            value={value}
            className={className}
            onChange={onInputChange}
            autoComplete="off"
            required
          />
        </>
      ) : (
        <>
          <label htmlFor={inputName} className="form-label">
            {labelName}
          </label>
          <input
            type={inputType}
            name={inputName}
            value={value}
            className={className}
            autoComplete="off"
            required
            onChange={onInputChange}
          />
        </>
      )}
    </>
  );
};

export default InputText;
