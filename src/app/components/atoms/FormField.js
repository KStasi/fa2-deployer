import React from "react";

import "./FormField.css";
import Form from "react-bootstrap/Form";

const FormField = ({ placeholder, onChange }) => {
  return (
    <>
      <Form.Control
        size="lg"
        required
        type="text"
        placeholder={placeholder}
        className="input-text my-2"
        onChange={onChange}
      />
    </>
  );
};

export default FormField;
