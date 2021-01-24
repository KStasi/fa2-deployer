import React, { useState } from "react";

import "./FormField.css";
import Form from "react-bootstrap/Form";

const FormField = ({ placeholder, onChange }) => {
  const [toggleShow] = useState(true);

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
