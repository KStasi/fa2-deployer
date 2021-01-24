import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import FormBox from "./layout/FormBox";

import "./App.css";

const App = () => {
  return (
    <Container className="App" fluid>
      <FormBox></FormBox>
    </Container>
  );
};
export default App;
