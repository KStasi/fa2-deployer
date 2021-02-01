import React from "react";

import Container from "react-bootstrap/Container";
import { UseBeaconProvider } from "./hooks/useBeacon";
import FormBox from "./layout/FormBox";
import Footer from "./layout/Footer";

import "./App.css";

const App = () => {
  return (
    <UseBeaconProvider>
      <Container className="App h-100 p-0" fluid>
        <FormBox></FormBox>
        <Footer></Footer>
      </Container>
    </UseBeaconProvider>
  );
};

export default App;
