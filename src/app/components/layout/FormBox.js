import React, { useState } from "react";

import DeployButton from "../atoms/DeployButton";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./FormBox.css";

const FormBox = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <Row>
      <Col className="m-0 p-0"></Col>
      <Col sm={4} className="m-0 p-0">
        <Form className="FormBox ">
          <p className="frm-h1-text pt-2 m-0">FA 2 Bakery</p>
          <p className="frm-h2-text m-0">Deploy your own token in a minute</p>
          <DeployButton></DeployButton>
        </Form>
      </Col>
      <Col className="m-0 p-0"></Col>
    </Row>
  );
};

export default FormBox;
