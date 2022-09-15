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
    id: NetworkType.GHOSTNET,
    nextNetworkIndex: 2,
    name: "Ghostnet",
    type: "test",
    rpcBaseURL: "https://ghostnet.ecadinfra.com",
  },
  {
    id: NetworkType.JAKARTANET,
    nextNetworkIndex: 3,
    name: "Jakarta",
    type: "test",
    rpcBaseURL: "https://jakartanet.tezos.marigold.dev",
  },
  {
    id: NetworkType.ITHACANET,
    nextNetworkIndex: 4,
    name: "Ithacanet",
    type: "test",
    rpcBaseURL: "https://ithacanet.ecadinfra.com",
  },
  {
    id: NetworkType.HANGZHOUNET,
    nextNetworkIndex: 5,
    name: "Hangzhou",
    type: "test",
    rpcBaseURL: "https://hangzhounet.smartpy.io/",
  },
  {
    id: NetworkType.GRANADANET,
    nextNetworkIndex: 6,
    name: "Granadanet",
    type: "test",
    rpcBaseURL: "https://granadanet.smartpy.io/",
  },
  {
    id: NetworkType.FLORENCENET,
    nextNetworkIndex: 7,
    name: "Florencenet",
    type: "test",
    rpcBaseURL: "https://florencenet.smartpy.io/",
  },
  {
    id: NetworkType.CUSTOM,
    nextNetworkIndex: 8,
    name: "Flextesa",
    type: "test",
    rpcBaseURL: "http://127.0.0.1:20000",
  },
];

export const DEFAULT_NETWORK = NETWORKS[0];
