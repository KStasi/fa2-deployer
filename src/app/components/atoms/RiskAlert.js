import React from "react";
import Paper from "@mui/material/Paper";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import Stack from "@mui/material/Stack";

import Alert from "@mui/material/Alert";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

const ColoredAllert = styled(Alert)(({ theme, colorType }) => ({
  ...theme.custom.secondaryFont,
  background: `${theme.custom.color[colorType].default} 0% 0% no-repeat padding-box`,
  margin: "0 auto 5vh auto",
}));

const RiskAlert = () => {
  return (
    <ColoredAllert variant="filled" colorType="type2" severity="warning">
      Use at your own risk!
    </ColoredAllert>
  );
};

export default RiskAlert;
