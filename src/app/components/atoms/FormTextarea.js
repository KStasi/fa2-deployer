import React, { useState } from "react";

import "./FormField.css";
import Form from "react-bootstrap/Form";

const FormTextarea = ({ placeholder }) => {
  const [toggleShow] = useState(true);

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
