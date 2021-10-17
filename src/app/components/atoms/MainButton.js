import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

const ColorButton = styled(Button)(({ theme }) => ({
  background: `${theme.color} 0% 0% no-repeat padding-box`,
  "box-shadow": "4px 8px 20px #1F1F1F1A",
  "border-radius": "4px",
  font: "normal normal bold 14px/18px Open Sans",
  "letter-spacing": "-0.16px",
  color: "#FAFAFA",
  "text-transform": "none",
  width: 200,
  height: 35,
}));

const MainButton = ({ onClick, text, className, type, disabled, color }) => {
  color = color || "#4973F2";
  const customTheme = createTheme({
    color,
  });

  return (
    <ThemeProvider theme={customTheme}>
      <ColorButton disabled={disabled} onClick={onClick} variant="contained">
        {text}
      </ColorButton>
    </ThemeProvider>
  );
};

export default MainButton;
