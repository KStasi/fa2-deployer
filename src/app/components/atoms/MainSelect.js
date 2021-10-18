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

const MainInput = styled(InputBase)(({ theme }) => ({
  ...theme.custom.secondaryFont,
  background: `${theme.custom.color["type1"].default} 0% 0% no-repeat padding-box`,
  ...theme.custom.box,
  "&:hover": {
    "background-color": theme.custom.color["type1"].secondary,
  },
  "& .MuiInputBase-input": {
    ...theme.custom.secondaryFont,
    padding: "0 30px",
    background: `${theme.custom.color["type1"].default} 0% 0% no-repeat padding-box`,
    "&:hover": {
      "background-color": theme.custom.color["type1"].secondary,
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
}) => {
  const theme = useTheme();

  return (
    <Select
      displayEmpty
      defaultValue={defaultValue}
      id={text}
      value={value}
      onChange={onChange}
      input={<MainInput />}
    >
      {items.map((item) => {
        return <StyledItem value={item}>{item}</StyledItem>;
      })}
    </Select>
  );
};

export default MainSelect;
