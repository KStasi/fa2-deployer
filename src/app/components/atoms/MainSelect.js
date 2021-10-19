import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { styled, useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";

const MainInput = styled(InputBase)(({ theme, colorType }) => ({
  ...theme.custom.secondaryFont,
  background: `${theme.custom.color[colorType].default} 0% 0% no-repeat padding-box`,
  ...theme.custom.box,
  "&:hover": {
    "background-color": theme.custom.color[colorType].secondary,
  },
  "& .MuiInputBase-input": {
    ...theme.custom.secondaryFont,
    padding: "0 30px",
    background: `${theme.custom.color[colorType].default} 0% 0% no-repeat padding-box`,
    "&:hover": {
      "background-color": theme.custom.color[colorType].secondary,
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

const MainSelect = ({
  onChange,
  defaultValue,
  text,
  className,
  checked,
  value,
  items,
  colorType,
}) => {
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
        return <StyledItem value={item}>{item}</StyledItem>;
      })}
    </Select>
  );
};

export default MainSelect;
