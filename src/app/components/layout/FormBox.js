import React, { useCallback, useState } from "react";
import DeployButton from "../atoms/DeployButton";
import OptionButton from "../atoms/OptionButton";
import FormField from "../atoms/FormField";
import FormTextarea from "../atoms/FormTextarea";
import LogoImg from "../atoms/LogoImg";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./FormBox.css";
import useBeacon from "../hooks/useBeacon";
import handleDeploy from "../hooks/handleDeploy";
import { DEFAULT_NETWORK, NETWORKS } from "../../defaults";

const FormBox = () => {
  const { connect, disconnect, pkh, Tezos, network } = useBeacon();

  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [tokenSupply, setTokenSupply] = useState("");
  const [tokenDecimals, setTokenDecimals] = useState("");
  const [tokenOwner, setTokenOwner] = useState("");
  const [tokenLogo, setTokenLogo] = useState("");
  const [tokenHomepage, setHomepage] = useState("");
  const [tokenDescription, setTokenDescription] = useState("");
  const [supplyTypeValue, setSupplyTypeValue] = useState("fixedSupply");
  const [metadataTypeValue, setMetadataTypeValue] = useState("onChainMetadata");
  const [, setFetching] = useState(false);
  const storeOnIpfs = false;

  const handleClick = useCallback(async () => {
    await handleDeploy(
      tokenName,
      tokenSymbol,
      tokenSupply,
      tokenDecimals,
      tokenOwner,
      tokenLogo,
      tokenHomepage,
      tokenDescription,
      supplyTypeValue,
      metadataTypeValue,
      Tezos.wallet,
      setFetching
    );
  }, [
    setFetching,
    Tezos.wallet,
    tokenName,
    tokenSymbol,
    tokenSupply,
    tokenDecimals,
    tokenOwner,
    tokenLogo,
    tokenHomepage,
    supplyTypeValue,
    metadataTypeValue,
    tokenDescription,
  ]);

  return (
    <Row>
      <Col className="m-0 p-0"></Col>
      <Col sm={4} className="m-0 p-0">
        <Form
          className="FormBox p-3"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
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
                type="number"
                placeholder="Supply"
                onChange={(e) => setTokenSupply(e.target.value)}
              ></FormField>
            </Col>
            <Col>
              <FormField
                type="number"
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
              <FormTextarea
                placeholder="Description"
                onChange={(e) => {
                  setTokenDescription(e.target.value);
                }}
              ></FormTextarea>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <FormField
                placeholder="Url for Logo"
                onChange={(e) => setTokenLogo(e.target.value)}
              ></FormField>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <FormField
                placeholder="Homepage"
                onChange={(e) => setHomepage(e.target.value)}
              ></FormField>
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label className="frm-label py-1">Supply type</Form.Label>
          </Form.Row>
          <Form.Row>
            <Col>
              <ButtonGroup toggle>
                <OptionButton
                  checked={supplyTypeValue === "fixedSupply"}
                  value={"fixedSupply"}
                  onChange={(e) => setSupplyTypeValue(e.currentTarget.value)}
                  text={
                    <>
                      <div className="d-btn-h1-text">Fixed Supply</div>
                    </>
                  }
                ></OptionButton>
                <OptionButton
                  checked={supplyTypeValue === "mintableSupply"}
                  value={"mintableSupply"}
                  onChange={(e) => setSupplyTypeValue(e.currentTarget.value)}
                  text={
                    <>
                      <div className="d-btn-h1-text">Mintable</div>
                    </>
                  }
                ></OptionButton>
              </ButtonGroup>
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label className="frm-label py-1">Metadata type</Form.Label>
          </Form.Row>
          <Form.Row>
            <Col>
              <ButtonGroup toggle>
                <OptionButton
                  checked={metadataTypeValue === "onChainMetadata"}
                  value={"onChainMetadata"}
                  onChange={(e) => setMetadataTypeValue(e.currentTarget.value)}
                  text={
                    <>
                      <div className="d-btn-h1-text">On-chain</div>
                    </>
                  }
                ></OptionButton>
                <OptionButton
                  checked={metadataTypeValue === "offChainMetadata"}
                  value={"offChainMetadata"}
                  onChange={(e) => setMetadataTypeValue(e.currentTarget.value)}
                  text={
                    <>
                      <div className="d-btn-h1-text">Off-chain</div>
                    </>
                  }
                ></OptionButton>
              </ButtonGroup>
            </Col>
          </Form.Row>

          {!pkh ? (
            <DeployButton
              onClick={() => connect(DEFAULT_NETWORK).catch(console.log)}
              text={
                <>
                  <div className="d-btn-h1-text">Connect</div>
                  <div className="d-btn-h2-text">to Wallet</div>
                </>
              }
            ></DeployButton>
          ) : (
            <DeployButton
              type="submit"
              onClick={handleClick}
              text={
                <>
                  <div className="d-btn-h1-text">Deploy</div>
                  <div className="d-btn-h2-text">with Wallet</div>
                </>
              }
            ></DeployButton>
          )}
        </Form>
      </Col>
      <Col className="m-0 p-0">
        {!pkh ? (
          <> </>
        ) : (
          <>
            <div>
              <DeployButton
                className="mt-5"
                onClick={() =>
                  connect(NETWORKS[+(NETWORKS[0].id == network.id)])
                }
                text={
                  <>
                    <div className="d-btn-h1-text">{network.name}</div>
                    <div className="d-btn-h2-text">network</div>
                  </>
                }
              ></DeployButton>
            </div>
            <div>
              <DeployButton
                onClick={() => {}}
                text={
                  <>
                    <div className="d-btn-h1-text">
                      {pkh.slice(0, 7) + "..."}
                    </div>
                    <div className="d-btn-h2-text">address</div>
                  </>
                }
              ></DeployButton>
            </div>
            <div>
              <DeployButton
                onClick={disconnect}
                text={
                  <>
                    <div className="d-btn-h1-text">Disconnect</div>
                    <div className="d-btn-h2-text">from Wallet</div>
                  </>
                }
              ></DeployButton>
            </div>
          </>
        )}
      </Col>
    </Row>
  );
};

export default FormBox;
