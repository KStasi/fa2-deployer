import React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import Stack from "@mui/material/Stack";

const RiskAlert = () => {
  const [show, setShow] = useState(true);

  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        height: 60,
        background: "#ff665aef 0% 0% no-repeat padding-box",
        font: "normal normal bold  Open Sans",
        "letter-spacing": "0.1px",
        color: "#fafafa",
        margin: "0 auto 5vh auto",
      }}
    >
      <Stack direction="row" spacing={2}>
        <WarningAmberOutlinedIcon></WarningAmberOutlinedIcon>
        <p> Use at your own risk!</p>
      </Stack>
    </Paper>
  );
};

export default RiskAlert;
