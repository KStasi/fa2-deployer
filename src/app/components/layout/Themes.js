import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  custom: {
    color: {
      type1: {
        default: "#4973F2",
        secondary: "#4165E1",
      },
      type2: {
        default: "#FF665A",
        secondary: "#F55A50",
      },
      type3: {
        default: "#343BBF",
        secondary: "#393FC4",
      },
      background: "#f2f4f3",
    },
    mainFont: {
      color: "#FAFAFA",
      font: "normal normal bold 16px/22px Open Sans",
      "letter-spacing": "-0.16px",
      "text-transform": "none",
      "text-align": "center",
    },
    secondaryFont: {
      color: "#FAFAFA",
      font: "normal normal normal 16px/22px Open Sans",
      "letter-spacing": "-0.16px",
      "text-transform": "none",
      "text-align": "center",
    },
    inputFont: {
      font: "normal normal normal 14px/18px Open Sans",
      "letter-spacing": "-0.16px",
      "text-transform": "none",
      "text-align": "center",
    },
    box: {
      "box-shadow": "4px 8px 20px #1F1F1F1A",
      "border-radius": "4px",
      "min-width": 150,
      height: 35,
    },
  },
});
