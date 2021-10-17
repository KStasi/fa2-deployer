import React from "react";

import "./FormField.css";
import { TextField } from "@material-ui/core"; //importing material ui component

const FormTextarea = ({ placeholder, onChange }) => {
  return (
    <TextField
      id={label}
      label={label}
      variant="outlined"
      required={!notRequired}
      type={type}
      defaultValue={defaultValue ? defaultValue : ""}
      onChange={onChange}
    />
  );
};

export default FormTextarea;
