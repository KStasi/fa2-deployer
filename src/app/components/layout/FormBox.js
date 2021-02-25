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
import http from "http";

const checkURL = (url) => {
  return url && url.match(/\.(jpeg|jpg|gif|png)$/) != null;
};

const FormBox = () => {
  const { connect, disconnect, pkh, Tezos, network } = useBeacon();

  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [tokenSupply, setTokenSupply] = useState("");
  const [tokenDecimals, setTokenDecimals] = useState("");
  const [tokenOwner, setTokenOwner] = useState("");
  const [tokenLogo, setTokenLogo] = useState("");
  const [img, setImage] = useState("");
  const [tokenDescription, setTokenDescription] = useState("");
  const [supplyTypeValue, setSupplyTypeValue] = useState("fixedSupply");
  const [metadataTypeValue, setMetadataTypeValue] = useState("onChainMetadata");
  const [pausableTypeValue, setPausableTypeValue] = useState("pausable");
  const [, setFetching] = useState(false);

  const handleClick = useCallback(async () => {
    await handleDeploy(
      tokenName,
      tokenSymbol,
      tokenSupply,
      tokenDecimals,
      tokenOwner || pkh,
      tokenLogo,
      tokenDescription,
      supplyTypeValue,
      metadataTypeValue,
      pausableTypeValue,
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
    supplyTypeValue,
    metadataTypeValue,
    pausableTypeValue,
    tokenDescription,
  ]);

  return (
    <Row className="m-0 p-0">
      <Col className="m-0 p-0"></Col>
      <Col sm={4} className="m-0 p-0">
        <Form
          className="FormBox p-3"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Form.Row>
            <Col>
              <LogoImg img={img}></LogoImg>
              <div className="frm-h1-text m-0 my-3">Tezos Token Factory</div>
              <div className="frm-h-text m-0 my-3">
                Deploy your own token in a minute
              </div>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Label className="frm-label py-1">Supply type</Form.Label>
              <ButtonGroup toggle>
                <OptionButton
                  checked={supplyTypeValue === "fixedSupply"}
                  value={"fixedSupply"}
                  onChange={(e) => setSupplyTypeValue(e.currentTarget.value)}
                  text={
                    <>
                      <div className="o-btn-h1-text">Fixed Supply</div>
                    </>
                  }
                ></OptionButton>
                <OptionButton
                  checked={supplyTypeValue === "mintableSupply"}
                  value={"mintableSupply"}
                  onChange={(e) => setSupplyTypeValue(e.currentTarget.value)}
                  text={
                    <>
                      <div className="o-btn-h1-text">Mintable</div>
                    </>
                  }
                ></OptionButton>
              </ButtonGroup>
            </Col>
            <Col>
              <Form.Label className="frm-label py-1">Token type</Form.Label>
              <ButtonGroup toggle>
                <OptionButton
                  checked={pausableTypeValue === "pausable"}
                  value={"pausable"}
                  onChange={(e) => setPausableTypeValue(e.currentTarget.value)}
                  text={
                    <>
                      <div className="o-btn-h1-text">Pausable</div>
                    </>
                  }
                ></OptionButton>
                <OptionButton
                  checked={pausableTypeValue === "notPausable"}
                  value={"notPausable"}
                  onChange={(e) => setPausableTypeValue(e.currentTarget.value)}
                  text={
                    <>
                      <div className="o-btn-h1-text">Not pausable</div>
                    </>
                  }
                ></OptionButton>
              </ButtonGroup>
            </Col>
          </Form.Row>
          <Form.Row></Form.Row>
          <Form.Row>
            <Col>
              <FormField
                placeholder="Name (e.q. Dollar)"
                onChange={(e) => setTokenName(e.target.value)}
              ></FormField>
              <FormField
                placeholder="Symbol (e.q. USD)"
                onChange={(e) => setTokenSymbol(e.target.value)}
              ></FormField>
            </Col>
            <Col>
              <FormField
                type="number"
                placeholder="Supply (e.q. 1.000.000)"
                onChange={(e) => setTokenSupply(e.target.value)}
              ></FormField>
              <FormField
                type="number"
                placeholder="Decimals (e.q. 2)"
                onChange={(e) => setTokenDecimals(e.target.value)}
              ></FormField>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <FormField
                placeholder="Owner (e.q. tz1VSUr...)"
                defaultValue={pkh}
                onChange={(e) => setTokenOwner(e.target.value)}
              ></FormField>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <FormTextarea
                placeholder="*Description (e.q. This is my first token)"
                onChange={(e) => {
                  setTokenDescription(e.target.value);
                }}
              ></FormTextarea>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <FormField
                placeholder="*Token's image (https://web.co/logo.png, max - 350x350 px)"
                notRequired={true}
                onChange={(e) => {
                  setTokenLogo(e.target.value);
                  if (checkURL(e.target.value)) {
                    const req = http.request(e.target.value, function (r) {
                      if (r.statusCode == 200) setImage(e.target.value);
                      else setImage(undefined);
                    });
                    req.on("error", function (e) {});
                    req.end();
                  }
                }}
              ></FormField>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <div className="o-btn-h1-text m-0 px-2 py-2 text-left">
                * Optional fields
              </div>
            </Col>
          </Form.Row>
          <DeployButton
            type="submit"
            onClick={handleClick}
            disabled={!pkh}
            text={
              <>
                <div className="d-btn-h1-text">Deploy</div>
                <div className="d-btn-h2-text">with Wallet</div>
              </>
            }
          ></DeployButton>
        </Form>
      </Col>
      <Col className="m-0 p-0">
        {!pkh ? (
          <DeployButton
            className="mt-5"
            onClick={() => connect(DEFAULT_NETWORK).catch(console.log)}
            text={
              <>
                <div className="d-btn-h1-text">Connect</div>
                <div className="d-btn-h2-text">Your Wallet</div>
              </>
            }
          ></DeployButton>
        ) : (
          <>
            <div>
              <DeployButton
                className="mt-5"
                onClick={() => connect(NETWORKS[network.nextNetworkIndex])}
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
