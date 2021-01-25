import { NetworkType } from "@airgap/beacon-sdk";

export const NETWORKS = [
  {
    id: NetworkType.DELPHINET,
    name: "Delphinet",
    type: "test",
    rpcBaseURL: "https://testnet-tezos.giganode.io",
  },
  {
    id: NetworkType.MAINNET,
    name: "Mainnet",
    type: "main",
    rpcBaseURL: "https://mainnet-tezos.giganode.io",
  },
];

export const DEFAULT_NETWORK = NETWORKS[0];
