import React, { useCallback, useState } from "react";
import FormField from "../atoms/FormField";
import useBeacon from "../hooks/useBeacon";
import handleDeploy from "../hooks/handleDeploy";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MainButton from "../atoms/MainButton";
import MainSelect from "../atoms/MainSelect";
import HorizontalStack from "../atoms/HorizontalStack";
import Stack from "@mui/material/Stack";

const validateInput = (
  admin,
  contractName,
  contractDescription,
  tokensString
) => {
  if (
    [admin, contractName, contractDescription].some(
      (str) => !str || str.trim() == ""
    )
  )
    return false;
  if (
    tokensString.some((token) => {
      return Object.values(token).some((str) => !str || str.trim() == "");
    })
  )
    return false;
  return true;
};
const FormBox = () => {
  const { pkh, Tezos } = useBeacon();

  const [tokensString, setTokens] = useState("[]");
  const tokens = JSON.parse(tokensString);
  const [admin, setAdmin] = useState(pkh);
  const [contractName, setContractName] = useState("");
  const [contractDescription, setContractDescription] = useState("");
  const [tokenType, setTokenType] = useState("Basic");
  const [, setFetching] = useState(false);

  const handleClick = useCallback(async () => {
    if (validateInput(admin, contractName, contractDescription, tokens)) {
      await handleDeploy(
        admin,
        contractName,
        contractDescription,
        tokensString,
        tokenType,
        Tezos.wallet,
        setFetching
      );
    }
  }, [
    setFetching,
    Tezos.wallet,
    tokensString,
    admin,
    contractName,
    contractDescription,
    tokenType,
    tokens,
  ]);
  return (
    <Paper
      component="form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
      sx={{
        px: 8,
        py: 5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack direction="column" alignItems="center" spacing={2}>
        <FormField
          label="Admin"
          onChange={(e) => setAdmin(e.target.value)}
        ></FormField>
        <FormField
          label="Contract name"
          onChange={(e) => setContractName(e.target.value)}
        ></FormField>
        <FormField
          label="Contract description"
          multiline="true"
          onChange={(e) => setContractDescription(e.target.value)}
          maxRows="4"
          minRows="4"
        ></FormField>
        <HorizontalStack>
          <MainSelect
            text="Supply Type"
            defaultValue={tokenType}
            onChange={(e) => setTokenType(e.target.value)}
            items={["Basic", "Granular"]}
          ></MainSelect>
          <MainButton
            colorType="type3"
            text="Add Asset"
            onClick={() =>
              setTokens(
                JSON.stringify(
                  tokens.concat({
                    name: "",
                    symbol: "",
                    decimals: "",
                    supply: "",
                    description: "",
                    icon: "",
                  })
                )
              )
            }
          ></MainButton>{" "}
        </HorizontalStack>
        {tokens.map((tokenInfo, index) => (
          <React.Fragment key={index}>
            <HorizontalStack>
              <Box
                sx={{
                  width: 200,
                  font: "normal normal bold 16px/22px Roboto",
                }}
              >
                Asset {index}
              </Box>
              <MainButton
                colorType="type3"
                text="Remove Asset"
                onClick={() => {
                  tokens.splice(index, 1);
                  setTokens(JSON.stringify(tokens));
                }}
              ></MainButton>{" "}
            </HorizontalStack>
            <HorizontalStack>
              <FormField
                label="Name"
                onChange={(e) => {
                  tokens[index].name = e.target.value;
                  setTokens(JSON.stringify(tokens));
                }}
              ></FormField>
              <FormField
                label="Symbol"
                onChange={(e) => {
                  tokens[index].symbol = e.target.value;
                  setTokens(JSON.stringify(tokens));
                }}
              ></FormField>
            </HorizontalStack>
            <HorizontalStack>
              <FormField
                label="Supply"
                type="number"
                onChange={(e) => {
                  tokens[index].supply = e.target.value;
                  setTokens(JSON.stringify(tokens));
                }}
              ></FormField>
              <FormField
                label="Decimals"
                type="number"
                onChange={(e) => {
                  tokens[index].decimals = e.target.value;
                  setTokens(JSON.stringify(tokens));
                }}
              ></FormField>
            </HorizontalStack>
            <FormField
              label="Icon"
              type="text"
              onChange={(e) => {
                tokens[index].icon = e.target.value;
                setTokens(JSON.stringify(tokens));
              }}
            ></FormField>
            <FormField
              label="Description"
              multiline="true"
              maxRows="4"
              minRows="4"
              onChange={(e) => {
                tokens[index].description = e.target.value;
                setTokens(JSON.stringify(tokens));
              }}
            ></FormField>
          </React.Fragment>
        ))}
        <MainButton
          type="submit"
          colorType="type2"
          text="Deploy"
          onClick={handleClick}
          disabled={!pkh}
        ></MainButton>
      </Stack>
    </Paper>
  );
};

export default FormBox;
