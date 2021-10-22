import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)(({ theme, colorType }) => ({
  ...theme.custom.secondaryFont,
  ...theme.custom.box,
  background: `${theme.custom.color[colorType].default} 0% 0% no-repeat padding-box`,
  "&:hover": {
    background: `${theme.custom.color[colorType].secondary} 0% 0% no-repeat padding-box`,
  },
  "&:active": {
    background: `${theme.custom.color[colorType].secondary} 0% 0% no-repeat padding-box`,
  },
  "&:focus": {
    background: `${theme.custom.color[colorType].secondary} 0% 0% no-repeat padding-box`,
  },
}));

const MainButton = ({ onClick, text, type, disabled, colorType }) => {
  colorType = colorType || "type1";
  type = type || "button";

  return (
    <ColorButton
      type={type}
      colorType={colorType}
      disabled={disabled}
      onClick={onClick}
      variant="contained"
    >
      {text}
    </ColorButton>
  );
};

export default MainButton;
