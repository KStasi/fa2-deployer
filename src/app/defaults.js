import { NetworkType } from "@airgap/beacon-sdk";

export const NETWORKS = [
  {
    id: NetworkType.MAINNET,
    nextNetworkIndex: 1,
    name: "Mainnet",
    type: "main",
    rpcBaseURL: "https://mainnet.smartpy.io",
  },
  {
    id: NetworkType.JAKARTANET,
    nextNetworkIndex: 2,
    name: "Jakarta",
    type: "test",
    rpcBaseURL: "https://jakartanet.tezos.marigold.dev",
  },
  {
    id: NetworkType.ITHACANET,
    nextNetworkIndex: 3,
    name: "Ithacanet",
    type: "test",
    rpcBaseURL: "https://ithacanet.ecadinfra.com",
  },
  {
    id: NetworkType.HANGZHOUNET,
    nextNetworkIndex: 4,
    name: "Hangzhou",
    type: "test",
    rpcBaseURL: "https://hangzhounet.smartpy.io/",
  },
  {
    id: NetworkType.GRANADANET,
    nextNetworkIndex: 5,
    name: "Granadanet",
    type: "test",
    rpcBaseURL: "https://granadanet.smartpy.io/",
  },
  {
    id: NetworkType.FLORENCENET,
    nextNetworkIndex: 0,
    name: "Florencenet",
    type: "test",
    rpcBaseURL: "https://florencenet.smartpy.io/",
  },
];

export const DEFAULT_NETWORK = NETWORKS[0];
