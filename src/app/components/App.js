import React from "react";

import { UseBeaconProvider } from "./hooks/useBeacon";
import FormBox from "./layout/FormBox";
import Footer from "./layout/Footer";
import Faq from "./layout/Faq";
import ButtonGroup from "./layout/ButtonGroup";
import { defaultTheme } from "./layout/Themes";
import RiskAlert from "./atoms/RiskAlert";
import { ThemeProvider } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import logo from "./assets/Logo.svg";

const App = () => {
  return (
    <UseBeaconProvider>
      <ThemeProvider theme={defaultTheme}>
        <Box
          component="main"
          sx={{
            backgroundColor: "#f2f4f3",
            flexGrow: 1,
            minHeight: "100vh",
            display: "flex",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container direction="row" spacing={3}>
              <Grid item xs={12} md={3} lg={3}>
                <img src={logo} alt={"logo"} />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <RiskAlert />
                <FormBox />
                <Faq />
              </Grid>
              <Grid item xs={12} md={3} lg={3}>
                <ButtonGroup />
              </Grid>
            </Grid>
            <Footer />
          </Container>
        </Box>
      </ThemeProvider>
    </UseBeaconProvider>
  );
};

export default App;
