import React, { useState } from "react";

import DeployButton from "../atoms/DeployButton";
import FormField from "../atoms/FormField";
import FormTextarea from "../atoms/FormTextarea";
import LogoImg from "../atoms/LogoImg";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./FormBox.css";

const FormBox = ({}) => {
  return (
    <Row>
      <Col className="m-0 p-0"></Col>
      <Col sm={4} className="m-0 p-0">
        <Form className="FormBox p-3">
          <p className="frm-h1-text m-0">FA 2 Bakery</p>
          <p className="frm-h2-text m-0 mb-3">
            Deploy your own token in a minute
          </p>
          <Form.Row>
            <Col>
              <LogoImg></LogoImg>
            </Col>
            <Col>
              <FormField placeholder="Name"></FormField>
              <FormField placeholder="Symbol"></FormField>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <FormField placeholder="Supply"></FormField>
            </Col>
            <Col>
              <FormField placeholder="Decimals"></FormField>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <FormField placeholder="Owner"></FormField>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <FormField placeholder="Logo url"></FormField>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <FormTextarea placeholder="Description"></FormTextarea>
            </Col>
          </Form.Row>
          <DeployButton></DeployButton>
        </Form>
      </Col>
      <Col className="m-0 p-0"></Col>
    </Row>
  );
};

export default FormBox;
