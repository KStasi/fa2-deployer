import React from "react";
import FormField from "../atoms/FormField";
import Box from "@mui/material/Box";
import MainButton from "../atoms/MainButton";
import HorizontalStack from "../atoms/HorizontalStack";

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
              onChange={(e) => {
                tokens[index].symbol = e.target.value;
                setTokens(tokens);
              }}
            ></FormField>
          </HorizontalStack>
          <HorizontalStack>
            <FormField
              label="Supply"
              type="number"
              onChange={(e) => {
                tokens[index].supply = e.target.value;
                setTokens(tokens);
              }}
            ></FormField>
            <FormField
              label="Decimals"
              type="number"
              onChange={(e) => {
                tokens[index].decimals = e.target.value;
                setTokens(tokens);
              }}
            ></FormField>
          </HorizontalStack>
          <FormField
            label="Icon"
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
