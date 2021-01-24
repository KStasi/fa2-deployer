import React, { useState } from "react";

import DeployButton from "../atoms/DeployButton";
import FormField from "../atoms/FormField";
import FormTextarea from "../atoms/FormTextarea";
import LogoImg from "../atoms/LogoImg";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./FormBox.css";
import useBeacon from "../hooks/useBeacon";

const FormBox = ({}) => {
  const { connect, pkh } = useBeacon();

  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [tokenSupply, setTokenSupply] = useState("");
  const [tokenDecimals, setTokenDecimals] = useState("");
  const [tokenOwner, setTokenOwner] = useState("");
  const [tokenLogo, setTokenLogo] = useState("");
  const [tokenDescription, setTokenDescription] = useState("");

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
              <FormField
                placeholder="Name"
                onChange={(e) => setTokenName(e.target.value)}
              ></FormField>
              <FormField
                placeholder="Symbol"
                onChange={(e) => setTokenSymbol(e.target.value)}
              ></FormField>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <FormField
                placeholder="Supply"
                onChange={(e) => setTokenSupply(e.target.value)}
              ></FormField>
            </Col>
            <Col>
              <FormField
                placeholder="Decimals"
                onChange={(e) => setTokenDecimals(e.target.value)}
              ></FormField>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <FormField
                placeholder="Owner"
                onChange={(e) => setTokenOwner(e.target.value)}
              ></FormField>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <FormField
                placeholder="Logo url"
                onChange={(e) => setTokenLogo(e.target.value)}
              ></FormField>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <FormTextarea
                placeholder="Description"
                onChange={(e) => setTokenDescription(e.target.value)}
              ></FormTextarea>
            </Col>
          </Form.Row>
          {!pkh ? (
            <DeployButton
              onClick={connect}
              text={
                <>
                  <div className="d-btn-h1-text">Connect</div>
                  <div className="d-btn-h2-text">to Thanos</div>
                </>
              }
            ></DeployButton>
          ) : (
            <DeployButton
              onClick={() => {}}
              text={
                <>
                  <div className="d-btn-h1-text">Deploy</div>
                  <div className="d-btn-h2-text">with Thanos</div>
                </>
              }
            ></DeployButton>
          )}
        </Form>
      </Col>
      <Col className="m-0 p-0"></Col>
    </Row>
  );
};

export default FormBox;
