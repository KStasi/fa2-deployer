import { useCallback, useState } from "react";
import constate from "constate";

import { BeaconWallet } from "@taquito/beacon-wallet";
import { PermissionScope } from "@airgap/beacon-sdk";
import { TezosToolkit } from "@taquito/taquito";

import { DEFAULT_NETWORK } from "../../defaults";

class LambdaViewSigner {
  async publicKeyHash() {
    const acc = await wallet.client.getActiveAccount();
    if (!acc) throw new Error("Not connected");
    return acc.address;
  }
  async publicKey() {
    const acc = await wallet.client.getActiveAccount();
    if (!acc) throw new Error("Not connected");
    return acc.publicKey;
  }
  async secretKey() {
    throw new Error("Secret key cannot be exposed");
  }
  async sign() {
    throw new Error("Cannot sign");
  }
}

const options = {
  name: "FA2 deployer",
  iconUrl: "https://tezostaquito.io/img/favicon.png",
  eventHandlers: {
    PERMISSION_REQUEST_SUCCESS: {
      handler: async (data) => {
        console.log("permission data:", data);
      },
    },
  },
};

const Tezos = new TezosToolkit(DEFAULT_NETWORK.rpcBaseURL);
const wallet = new BeaconWallet(options);
Tezos.setWalletProvider(wallet);
Tezos.setSignerProvider(new LambdaViewSigner());

export const [UseBeaconProvider, useBeacon] = constate(() => {
  const [pkh, setUserPkh] = useState();
  const [network, setNetwork] = useState();

  const connect = useCallback(async (network) => {
    await wallet.requestPermissions({
      network: { type: network.id },
      scopes: [
        PermissionScope.OPERATION_REQUEST,
        PermissionScope.SIGN,
        PermissionScope.THRESHOLD,
      ],
    });

    Tezos.setRpcProvider(network.rpcBaseURL);
    setUserPkh(await wallet.getPKH());
    setNetwork(network);
  }, []);

  const disconnect = useCallback(async () => {
    console.log(wallet);
    await wallet.disconnect();
    await wallet.clearActiveAccount();
    Tezos.setWalletProvider(wallet);
    setUserPkh(undefined);
    setNetwork(network);
  }, []);

  return {
    connect,
    disconnect,
    isConnected: !!pkh,
    Tezos,
    wallet,
    pkh,
    network,
  };
});

export default useBeacon;
