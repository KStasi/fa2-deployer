import React from "react";

import "./FormField.css";
import Form from "react-bootstrap/Form";

const FormTextarea = ({ placeholder, onChange }) => {
  return (
    <>
      <Form.Control
        size="lg"
        as="textarea"
        onChange={onChange}
        placeholder={placeholder}
        className="input-text my-2"
      />
    </>
  );
};

export default FormTextarea;
