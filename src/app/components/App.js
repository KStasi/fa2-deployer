import React from "react";

import Container from "react-bootstrap/Container";
import { UseBeaconProvider } from "./hooks/useBeacon";
import FormBox from "./layout/FormBox";
import Footer from "./layout/Footer";
import RiskAlert from "./layout/RiskAlert";

import "./App.css";

const App = () => {
  return (
    <UseBeaconProvider>
      <Container className="App h-100 w-100 p-0 m-0" fluid>
        <RiskAlert></RiskAlert>
        <FormBox></FormBox>
        <Footer></Footer>
      </Container>
    </UseBeaconProvider>
  );
};

export default App;
