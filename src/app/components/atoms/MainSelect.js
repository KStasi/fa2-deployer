import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";

const MainInput = styled(InputBase)(({ theme }) => ({
  background: "#4973F2 0% 0% no-repeat ",
  "box-shadow": "4px 8px 20px #1F1F1F1A",
  "border-radius": "4px",
  font: "normal normal bold 16px/22px Open Sans",
  "letter-spacing": "-0.16px",
  color: "#FAFAFA",
  "text-transform": "none",
  "text-align": "center",
  width: 200,
  height: 35,
  "& .MuiInputBase-input": {
    padding: "0 30px",
    font: "normal normal bold 14px/18px Open Sans",
    "letter-spacing": "-0.16px",
    color: "#FAFAFA",
    "&:focus": {
      background: "#4973F2 0% 0% no-repeat ",
    },
  },

  // margin: "0 0",
  // padding: "0 0",
}));

const StyledItem = styled(MenuItem)(({ theme }) => ({
  font: "normal normal  14px/18px Open Sans",
  "letter-spacing": "-0.16px",
  "text-transform": "none",
  "text-align": "center",
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
  return (
    // <FormControl sx={{ color: "#FAFAFA" }} variant="standard">
    <Select
      displayEmpty
      defaultValue={defaultValue}
      id={text}
      value={value}
      onChange={onChange}
      input={<MainInput sx={{ color: "#FAFAFA" }} />}
    >
      {items.map((item) => {
        return <StyledItem value={item}>{item}</StyledItem>;
      })}
    </Select>
    // </FormControl>
  );
};

export default MainSelect;
