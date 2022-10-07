import React from "react";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";

const MainInput = styled(InputBase)(({ theme, colorType }) => ({
  ...theme.custom.secondaryFont,
  background: `${theme.custom.color[colorType].default} 0% 0% no-repeat padding-box`,
  ...theme.custom.box,
  "& .MuiInputBase-input": {
    ...theme.custom.secondaryFont,
    "paddingLeft": "30px",
    background: `${theme.custom.color[colorType].default} 0% 0% no-repeat padding-box`,
    "&:hover": {
      "backgroundColor": theme.custom.color[colorType].secondary,
    },
    "&:focus": {
      "backgroundColor": theme.custom.color[colorType].secondary,
    },
  },
  "& .MuiSvgIcon-root": {
    ...theme.custom.secondaryFont,
    "&:hover": {
      ...theme.custom.secondaryFont,
    },
  },
}));

const StyledItem = styled(MenuItem)(({ theme }) => ({
  ...theme.custom.inputFont,
}));

const MainSelect = ({ onChange, defaultValue, text, items, colorType }) => {
  colorType = colorType || "type1";

  return (
    <Select
      displayEmpty
      defaultValue={defaultValue}
      id={text}
      onChange={onChange}
      colorType={colorType}
      input={<MainInput />}
    >
      {items.map((item) => {
        return <StyledItem key={item} value={item}>{item}</StyledItem>;
      })}
    </Select>
  );
};

export default MainSelect;
