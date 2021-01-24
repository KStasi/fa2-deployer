import { NetworkType } from "@airgap/beacon-sdk";

export const NETWORKS = [
  {
    id: NetworkType.DELPHINET,
    name: "Delphi Testnet",
    type: "test",
    rpcBaseURL: "https://testnet-tezos.giganode.io",
  },
  {
    id: NetworkType.MAINNET,
    name: "Tezos Mainnet",
    type: "main",
    rpcBaseURL: "https://mainnet-tezos.giganode.io",
  },
];

export const DEFAULT_NETWORK = NETWORKS[0];
