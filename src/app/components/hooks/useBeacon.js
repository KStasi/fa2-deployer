import { useCallback, useState } from "react";
import constate from "constate";

import { BeaconWallet } from "@taquito/beacon-wallet";
import { PermissionScope, NetworkType } from "@airgap/beacon-sdk";
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
  const [network, setNetwork] = useState(DEFAULT_NETWORK);

  const connect = useCallback(async (currentNetwork) => {
    await wallet.disconnect();
    await wallet.clearActiveAccount();
    await wallet.requestPermissions({
      // network: { type: NetworkType.CUSTOM, rpcUrl: currentNetwork.rpcBaseURL },
      network: { type: currentNetwork.id },
      scopes: [
        PermissionScope.OPERATION_REQUEST,
        PermissionScope.SIGN,
        PermissionScope.THRESHOLD,
      ],
    });
    Tezos.setRpcProvider(currentNetwork.rpcBaseURL);
    setUserPkh(await wallet.getPKH());
    setNetwork(currentNetwork);
  }, []);

  const disconnect = useCallback(async () => {
    await wallet.disconnect();
    await wallet.clearActiveAccount();
    Tezos.setWalletProvider(wallet);
    setUserPkh(undefined);
    setNetwork(DEFAULT_NETWORK);
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
