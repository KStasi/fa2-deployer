import { NetworkType } from "@airgap/beacon-sdk";

export const NETWORKS = [
  {
    id: NetworkType.DELPHINET,
    nextNetworkIndex: 1,
    name: "Delphinet",
    type: "test",
    rpcBaseURL: "https://delphinet.smartpy.io/",
  },
  {
    id: NetworkType.EDONET,
    nextNetworkIndex: 2,
    name: "Edonet",
    type: "test",
    rpcBaseURL: "https://edonet.smartpy.io/",
  },
  {
    id: "florencenet",
    nextNetworkIndex: 3,
    name: "Florencenet",
    type: "test",
    rpcBaseURL: "https://florencenet.smartpy.io/",
  },
  {
    id: NetworkType.MAINNET,
    nextNetworkIndex: 0,
    name: "Mainnet",
    type: "main",
    rpcBaseURL: "https://mainnet.smartpy.io",
  },
];

export const DEFAULT_NETWORK = NETWORKS[2];
