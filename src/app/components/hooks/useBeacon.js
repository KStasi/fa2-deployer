import { useCallback, useState } from "react";
import constate from "constate";

import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType, PermissionScope } from "@airgap/beacon-sdk";
import { TezosToolkit } from "@taquito/taquito";

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
const net = "https://delphinet-tezos.giganode.io";
const Tezos = new TezosToolkit(net);
const wallet = new BeaconWallet(options);
Tezos.setWalletProvider(wallet);
Tezos.setSignerProvider(new LambdaViewSigner());

export const [UseBeaconProvider, useBeacon] = constate(() => {
  const [pkh, setUserPkh] = useState();

  const connect = useCallback(async () => {
    await wallet.requestPermissions({
      network: { type: NetworkType.DELPHINET },
      scopes: [
        PermissionScope.OPERATION_REQUEST,
        PermissionScope.SIGN,
        PermissionScope.THRESHOLD,
      ],
    });

    setUserPkh(await wallet.getPKH());
  }, []);

  return { connect, isConnected: !!pkh, Tezos, wallet, pkh };
});

export default useBeacon;
