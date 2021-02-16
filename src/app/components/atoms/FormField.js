import React from "react";

import "./FormField.css";
import Form from "react-bootstrap/Form";

const FormField = ({
  placeholder,
  onChange,
  type,
  defaultValue,
  notRequired,
}) => {
  type = type || "text";
  return (
    <>
      <Form.Control
        size="lg"
        required={!notRequired}
        type={type}
        defaultValue={defaultValue ? defaultValue : ""}
        placeholder={placeholder}
        className="input-text my-2"
        onChange={onChange}
      />
    </>
  );
};

export default FormField;
