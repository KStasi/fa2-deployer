import React from "react";

import "./FormField.css";
import Form from "react-bootstrap/Form";

const FormCheck = ({ placeholder, onChange }) => {
  return (
    <>
      <div className="my-2">
        <Form.Check
          size="lg"
          onChange={onChange}
          type="checkbox"
          label={placeholder}
        />
      </div>
    </>
  );
};

export default FormCheck;
