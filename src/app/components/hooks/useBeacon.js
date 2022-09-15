import { useCallback, useState } from "react";
import constate from "constate";

import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit } from "@taquito/taquito";

import { DEFAULT_NETWORK } from "../../defaults";
import { NetworkType } from "@airgap/beacon-sdk";

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
};

const Tezos = new TezosToolkit(DEFAULT_NETWORK.rpcBaseURL);
const wallet = new BeaconWallet(options);
Tezos.setWalletProvider(wallet);
Tezos.setSignerProvider(new LambdaViewSigner());

export const [UseBeaconProvider, useBeacon] = constate(() => {
  const [pkh, setUserPkh] = useState();

  const connect = useCallback(async (currentNetwork) => {
    await wallet.disconnect();
    await wallet.clearActiveAccount();
    if (currentNetwork.id === NetworkType.CUSTOM) {
      await wallet.requestPermissions({
        network: {
          type: currentNetwork.id,
          name: "Flextesa",
          rpcUrl: "http://127.0.0.1:20000",
        },
      });
    } else {
      await wallet.requestPermissions({
        network: { type: currentNetwork.id },
      });
    }
    Tezos.setWalletProvider(wallet);
    Tezos.setRpcProvider(currentNetwork.rpcBaseURL);
    const activeAcc = await wallet.client.getActiveAccount();
    if (!activeAcc) {
      throw new Error("Not connected");
    }
    setUserPkh(await wallet.getPKH());
  }, []);

  const disconnect = useCallback(async () => {
    await wallet.disconnect();
    await wallet.clearActiveAccount();
    Tezos.setWalletProvider(wallet);
    setUserPkh(undefined);
  }, []);

  return {
    connect,
    disconnect,
    isConnected: !!pkh,
    Tezos,
    wallet,
    pkh,
  };
});

export default useBeacon;
