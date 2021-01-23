import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./DeployButton.css";
import Button from "react-bootstrap/Button";

const DeployButton = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      <Button className="d-btn px-10 py-1 my-4">
        <div className="d-btn-h1-text">Deploy</div>
        <div className="d-btn-h2-text">with Thanos</div>
      </Button>
    </>
  );
};

export default DeployButton;
