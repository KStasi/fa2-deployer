import React from "react";

import { UseBeaconProvider } from "./hooks/useBeacon";
import FormBox from "./layout/FormBox";
import Footer from "./layout/Footer";
import { defaultTheme } from "./layout/Themes";
// import Footer from "./layout/Footer";
import RiskAlert from "./atoms/RiskAlert";
import MainButton from "./atoms/MainButton";
import MainSelect from "./atoms/MainSelect";
// import FormField from "./atoms/FormField";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";

import "./App.css";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import logo from "./assets/Logo.svg";
import { NETWORKS } from "./Constants";

const App = () => {
  return (
    <UseBeaconProvider>
      <ThemeProvider theme={defaultTheme}>
        <Box
          component="main"
          sx={{
            backgroundColor: "#f2f4f3",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            display: "flex",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container direction="row" spacing={3}>
              <Grid item xs={12} md={3} lg={3}>
                <img src={logo} alt={"logo"} />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <RiskAlert></RiskAlert>
                <FormBox></FormBox>
              </Grid>
              <Grid item xs={12} md={3} lg={3}>
                <Stack direction="column" alignItems="center" spacing={2}>
                  <MainButton text="Connect"></MainButton>
                  <MainSelect
                    text="Network"
                    value={NETWORKS[0]}
                    items={NETWORKS}
                  ></MainSelect>
                </Stack>
              </Grid>
            </Grid>
            <Footer description="Yep" title="Kkk"></Footer>
          </Container>
        </Box>
      </ThemeProvider>
    </UseBeaconProvider>
  );
};

export default App;
