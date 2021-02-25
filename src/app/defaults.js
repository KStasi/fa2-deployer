import { NetworkType } from "@airgap/beacon-sdk";

export const NETWORKS = [
  {
    id: NetworkType.DELPHINET,
    nextNetworkIndex: 1,
    name: "Delphinet",
    type: "test",
    rpcBaseURL: "https://testnet-tezos.giganode.io",
  },
  {
    id: NetworkType.EDONET,
    nextNetworkIndex: 2,
    name: "Edonet",
    type: "test",
    rpcBaseURL: "https://edonet-tezos.giganode.io",
  },
  {
    id: NetworkType.MAINNET,
    nextNetworkIndex: 0,
    name: "Mainnet",
    type: "main",
    rpcBaseURL: "https://mainnet-tezos.giganode.io",
  },
];

export const DEFAULT_NETWORK = NETWORKS[1];
