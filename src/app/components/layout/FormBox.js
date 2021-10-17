import React, { useCallback, useState, Fragment } from "react";
// import DeployButton from "../atoms/DeployButton";
// import OptionButton from "../atoms/OptionButton";
import FormField from "../atoms/FormField";
// import FormTextarea from "../atoms/FormTextarea";
import { Form, Field } from "react-final-form";

import "./FormBox.css";
import useBeacon from "../hooks/useBeacon";
import handleDeploy from "../hooks/handleDeploy";
import { DEFAULT_NETWORK, NETWORKS } from "../../defaults";
// import http from "http";
import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MainButton from "../atoms/MainButton";
import MainSelect from "../atoms/MainSelect";
import Stack from "@mui/material/Stack";

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
    <Paper
      sx={{
        p: 8,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      > */}
      <Stack direction="column" alignItems="center" spacing={2}>
        <FormField
          label="Admin"
          defaultValue={pkh}
          onChange={(e) => {}}
          // onChange={(e) => setTokenOwner(e.target.value)}
        ></FormField>
        <FormField
          label="Contract name"
          onChange={(e) => {}}
          // onChange={(e) => setTokenOwner(e.target.value)}
        ></FormField>
        <FormField
          label="Contract description"
          multiline="true"
          onChange={(e) => {}}
          maxRows="4"
          minRows="4"
          // onChange={(e) => setTokenOwner(e.target.value)}
        ></FormField>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <MainSelect
            text="Supply Type"
            value="Mintable"
            items={["Mintable", "Fixed"]}
          ></MainSelect>
          <MainButton color="#343BBF" text="Add Asset"></MainButton>{" "}
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Box
            sx={{ width: 200, font: "normal normal bold 16px/22px Open Sans" }}
          >
            Asset 0
          </Box>
          <MainButton color="#343BBF" text="Remove Asset"></MainButton>{" "}
        </Stack>
        <Stack direction="row" spacing={2}>
          <FormField
            label="Name"
            onChange={(e) => {}}
            // onChange={(e) => setTokenOwner(e.target.value)}
          ></FormField>
          <FormField
            label="Symbol"
            typw="number"
            onChange={(e) => {}}
            // onChange={(e) => setTokenOwner(e.target.value)}
          ></FormField>{" "}
        </Stack>
        <Stack direction="row" spacing={2}>
          <FormField
            label="Supply"
            onChange={(e) => {}}
            // onChange={(e) => setTokenOwner(e.target.value)}
          ></FormField>
          <FormField
            label="Decimals"
            typw="number"
            onChange={(e) => {}}
            // onChange={(e) => setTokenOwner(e.target.value)}
          ></FormField>
        </Stack>
        <FormField
          label="Icon"
          typw="text"
          onChange={(e) => {}}
          // onChange={(e) => setTokenOwner(e.target.value)}
        ></FormField>
        <FormField
          label="Description"
          multiline="true"
          onChange={(e) => {}}
          maxRows="4"
          minRows="4"
          // onChange={(e) => setTokenOwner(e.target.value)}
        ></FormField>
        <MainButton color="#FF665A" text="Deploy"></MainButton>
      </Stack>
    </Paper>
  );
};

export default FormBox;
