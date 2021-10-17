import React from "react";

import { TextField } from "@material-ui/core"; //importing material ui component
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

const MainInput = styled(TextField)(({ theme }) => ({
  font: "normal normal bold  Open Sans",
}));

const FormField = ({
  label,
  onChange,
  type,
  multiline,
  defaultValue,
  notRequired,
  maxRows,
  minRows,
}) => {
  type = type || "text";
  return (
    <MainInput
      id={label}
      label={label}
      variant="outlined"
      required={!notRequired}
      type={type}
      multiline={multiline}
      maxRows={maxRows}
      minRows={minRows}
      defaultValue={defaultValue ? defaultValue : ""}
      onChange={onChange}
      size="small"
    />
  );
};

export default FormField;
