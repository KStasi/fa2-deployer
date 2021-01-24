import React from "react";

import "./FormField.css";
import Form from "react-bootstrap/Form";

const FormTextarea = ({ placeholder }) => {
  return (
    <>
      <Form.Control
        size="lg"
        required
        as="textarea"
        placeholder={placeholder}
        className="input-text my-2"
      />
    </>
  );
};

export default FormTextarea;
