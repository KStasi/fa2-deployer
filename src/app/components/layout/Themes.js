import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  custom: {
    color: {
      type1: {
        default: "#4973F2",
        secondary: "#668CFF",
      },
      type2: {
        // default: "#F27E61",
        default: "#5226BF",
        secondary: "#8255F2",
      },
      type3: {
        default: "#223773",
        secondary: "#3655B3",
      },
      background: "#f2f4f3",
      font: "#FAFAFA",
    },
    mainFont: {
      font: "normal normal bold 16px/22px Roboto",
      "letterSpacing": "-0.16px",
      "textTransform": "none",
      "textAlign": "center",
    },
    secondaryFont: {
      color: "#FAFAFA",
      font: "normal normal normal 16px/22px Roboto",
      "letterSpacing": "-0.16px",
      "textTransform": "none",
      "textAlign": "center",
    },
    inputFont: {
      font: "normal normal normal 14px/18px Roboto",
      "letterSpacing": "-0.16px",
      "textTransform": "none",
      "textAlign": "left",
    },
    box: {
      "boxShadow": "4px 8px 20px #1F1F1F1A",
      "borderRadius": "4px",
      "minWidth": 150,
      height: 35,
    },
  },
});
