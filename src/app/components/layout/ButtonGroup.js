import React from "react";

import { useBeacon } from "../hooks/useBeacon";
import MainButton from "../atoms/MainButton";
import MainSelect from "../atoms/MainSelect";
import Stack from "@mui/material/Stack";
import { DEFAULT_NETWORK, NETWORKS } from "../../defaults";
import { useState } from "react";

const ButtonGroup = () => {
  const { connect, disconnect, pkh, Tezos } = useBeacon();
  const [network, setNetwork] = useState(DEFAULT_NETWORK.name);

  return (
    <Stack direction="column" alignItems="center" spacing={2}>
      {!pkh ? (
        <MainButton
          text="Connect"
          onClick={() => connect(network).catch(console.log)}
        ></MainButton>
      ) : (
        <>
          <MainButton
            text={pkh.slice(0, 6) + "..." + pkh.slice(-6)}
            onClick={() => {}}
          ></MainButton>
          <MainButton
            text="Disconnect"
            onClick={() => disconnect().catch(console.log)}
          ></MainButton>
        </>
      )}
      <MainSelect
        text="Network"
        defaultValue={DEFAULT_NETWORK.name}
        items={NETWORKS.map((item) => item.name)}
        onChange={(e) => setNetwork(e.target.value)}
      ></MainSelect>
    </Stack>
  );
};

export default ButtonGroup;
