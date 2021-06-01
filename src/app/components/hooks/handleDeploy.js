import { MichelsonMap } from "@taquito/michelson-encoder";

import fa2FixedJson from "../assets/FA2FixedSupply.json";
import fa2MintableJson from "../assets/FA2MintableSupply.json";
import fa2FixedNotPausableJson from "../assets/FA2FixedSupplyNotPausable.json";
import fa2MintableNotPausableJson from "../assets/FA2MintableSupplyNotPausable.json";
import { BigNumber } from "bignumber.js";
import ipfsClient from "ipfs-http-client";

const handleDeploy = async (
  tokenName,
  tokenSymbol,
  tokenSupply,
  tokenDecimals,
  tokenOwner,
  tokenLogo,
  tokenDescription,
  supplyTypeValue,
  metadataTypeValue,
  pausableTypeValue,
  wallet,
  setFetching
) => {
  setFetching(true);
  try {
    const tokenSupplyUnits = tokenSupply * new BigNumber(10).pow(tokenDecimals);
    let metadata = new Buffer(
      JSON.stringify({
        version: "v0.0.1",
        name: tokenName,
        authors: ["FA2 Bakery"],
        source: {
          tools: ["Ligo dev-20201031", "Flextesa 20200921"],
          location: "https://ligolang.org/",
        },
        interfaces: ["TZIP-012", "TZIP-016"],
        errors: [],
        views: [],
      }),
      "ascii"
    );
    if (metadataTypeValue == "offChainMetadata") {
      const ipfs = ipfsClient("https://ipfs.infura.io:5001/api/v0/");
      const result = await ipfs.add([metadata]);
      metadata = MichelsonMap.fromLiteral({
        "": Buffer("ipfs://" + result.path, "ascii").toString("hex"),
      });
    } else {
      metadata = MichelsonMap.fromLiteral({
        "": Buffer("tezos-storage:contents", "ascii").toString("hex"),
        contents: metadata.toString("hex"),
      });
    }

    const storage = {
      admin: {
        admin: tokenOwner,
        pending_admin: null,
        paused: false,
      },
      assets: {
        total_supply: tokenSupplyUnits,
        ledger: MichelsonMap.fromLiteral({
          [tokenOwner]: tokenSupplyUnits,
        }),
        operators: MichelsonMap.fromLiteral({}),
        token_metadata: MichelsonMap.fromLiteral({
          0: {
            token_id: 0,
            token_info: MichelsonMap.fromLiteral({
              symbol: Buffer(tokenSymbol, "ascii").toString("hex"),
              name: Buffer(tokenName, "ascii").toString("hex"),
              decimals: Buffer(tokenDecimals, "ascii").toString("hex"),
              shouldPreferSymbol: Buffer("true", "ascii").toString("hex"),

              ...(tokenDescription && {
                description: Buffer(tokenDescription, "ascii").toString("hex"),
              }),
              ...(tokenLogo && {
                thumbnailUri: Buffer(tokenLogo, "ascii").toString("hex"),
              }),
            }),
          },
        }),
      },
      metadata: metadata,
      total_supply: tokenSupplyUnits,
    };

    await wallet
      .originate({
        code:
          supplyTypeValue == "fixedSupply"
            ? pausableTypeValue == "pausable"
              ? fa2FixedJson
              : fa2FixedNotPausableJson
            : pausableTypeValue == "pausable"
            ? fa2MintableJson
            : fa2MintableNotPausableJson,
        storage,
      })
      .send();
  } catch (e) {
    console.error(e);
  } finally {
    setFetching(false);
  }
};

export default handleDeploy;
