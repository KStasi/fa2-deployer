import React from "react";

import Container from "react-bootstrap/Container";
import { UseBeaconProvider } from "./hooks/useBeacon";
import FormBox from "./layout/FormBox";

import "./App.css";

const App = () => {
  return (
    <UseBeaconProvider>
      <Container className="App h-100" fluid>
        <FormBox></FormBox>
      </Container>
    </UseBeaconProvider>
  );
};

export default App;
