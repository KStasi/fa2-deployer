import React, { useCallback, useState, Fragment } from "react";
import FormField from "../atoms/FormField";
import "./FormBox.css";
import useBeacon from "../hooks/useBeacon";
import handleDeploy from "../hooks/handleDeploy";
import { DEFAULT_NETWORK, NETWORKS } from "../../defaults";
// import http from "http";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MainButton from "../atoms/MainButton";
import MainSelect from "../atoms/MainSelect";
import HorizontalStack from "../atoms/HorizontalStack";
import Stack from "@mui/material/Stack";

const checkURL = (url) => {
  return url && url.match(/\.(jpeg|jpg|gif|png)$/) != null;
};

const AssetsGroup = ({ tokens, setTokens, handleRemove }) => {
  return (
    <React.Fragment>
      {tokens.map((tokenInfo, index) => (
        <React.Fragment key={index}>
          <HorizontalStack>
            <Box
              sx={{
                width: 200,
                font: "normal normal bold 16px/22px Open Sans",
              }}
            >
              Asset 0
            </Box>
            <MainButton
              colorType="type3"
              text="Remove Asset"
              onClick={() => handleRemove(index)}
            ></MainButton>{" "}
          </HorizontalStack>
          <HorizontalStack>
            <FormField
              label="Name"
              onChange={(e) => {
                tokens[index].name = e.target.value;
                setTokens(tokens);
              }}
            ></FormField>
            <FormField
              label="Symbol"
              type="number"
              onChange={(e) => {
                tokens[index].symbol = e.target.value;
                setTokens(tokens);
              }}
            ></FormField>
          </HorizontalStack>
          <HorizontalStack>
            <FormField
              label="Supply"
              onChange={(e) => {
                tokens[index].suply = e.target.value;
                setTokens(tokens);
              }}
            ></FormField>
            <FormField
              label="Decimals"
              typw="number"
              onChange={(e) => {
                tokens[index].decimals = e.target.value;
                setTokens(tokens);
              }}
            ></FormField>
          </HorizontalStack>
          <FormField
            label="Icon"
            type="text"
            onChange={(e) => {
              tokens[index].icon = e.target.value;
              setTokens(tokens);
            }}
          ></FormField>
          <FormField
            label="Description"
            multiline="true"
            maxRows="4"
            minRows="4"
            onChange={(e) => {
              tokens[index].description = e.target.value;
              setTokens(tokens);
            }}
          ></FormField>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default AssetsGroup;
