import React from "react";

import "./FormField.css";
import Form from "react-bootstrap/Form";

const FormField = ({ placeholder, onChange, type, defaultValue }) => {
  type = type || "text";
  return (
    <>
      <Form.Control
        size="lg"
        required
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
