import React from "react";

import { TextField } from "@material-ui/core";
import { styled } from "@mui/material/styles";

const MainInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    ...theme.custom.inputFont,
  },
  "& .MuiInputBase-input": {
    ...theme.custom.inputFont,
    "&:focus": {
      ...theme.custom.inputFont,
    },
  },
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
      autoFocus
      size="small"
      sx={{ width: "100%" }}
    />
  );
};

export default FormField;
