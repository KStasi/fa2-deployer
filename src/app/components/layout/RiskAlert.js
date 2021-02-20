import React from "react";
import { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

const RiskAlert = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Row className="m-0 p-0">
        <Col className="m-0 p-0">
          <Alert
            className="py-0 my-0"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            <p className="d-btn-h1-text py-3 m-0">
              That is an experimental service. Use at your own risk.
            </p>
          </Alert>
        </Col>
      </Row>
    );
  }
  return (
    <Row className="m-0 p-0">
      <Col className="m-0 p-0"></Col>
    </Row>
  );
};

export default RiskAlert;
