import { MichelsonMap } from "@taquito/michelson-encoder";

import fa2MultiAsset from "../assets/MultiAsset.json";
import { BigNumber } from "bignumber.js";

const handleDeploy = async (
  admin,
  contractName,
  contractDescription,
  tokensString,
  wallet,
  setFetching
) => {
  setFetching(true);
  try {
    const tokens = JSON.parse(tokensString);
    let metadata = MichelsonMap.fromLiteral({
      "": Buffer("tezos-storage:contents", "ascii").toString("hex"),
      contents: Buffer(
        JSON.stringify({
          version: "v0.0.1",
          name: contractName,
          description: contractDescription,
          authors: ["FA2 Bakery"],
          source: {
            tools: ["Ligo"],
          },
          interfaces: ["TZIP-012", "TZIP-016"],
        }),
        "ascii"
      ).toString("hex"),
    });
    const storage = {
      admin: {
        admin: admin,
        pending_admin: null,
        paused: false,
      },
      assets: {
        token_total_supply: MichelsonMap.fromLiteral({}),
        ledger: MichelsonMap.fromLiteral({}),
        operators: MichelsonMap.fromLiteral({}),
        token_metadata: MichelsonMap.fromLiteral({}),
      },
      metadata: metadata,
    };
    tokens.forEach((token, index) => {
      const tokenSupply = token.supply * new BigNumber(10).pow(token.decimals);
      storage.assets.token_total_supply.set(index, tokenSupply);
      storage.assets.ledger.set([admin, index], tokenSupply);
      storage.assets.token_metadata.set(index, {
        token_id: index,
        token_info: MichelsonMap.fromLiteral({
          symbol: Buffer(token.symbol, "ascii").toString("hex"),
          name: Buffer(token.name, "ascii").toString("hex"),
          decimals: Buffer(token.decimals, "ascii").toString("hex"),
          shouldPreferSymbol: Buffer("true", "ascii").toString("hex"),
          description: Buffer(token.description, "ascii").toString("hex"),
          thumbnailUri: Buffer(token.icon, "ascii").toString("hex"),
        }),
      });
    });
    console.log(fa2MultiAsset);
    await wallet
      .originate({
        code: fa2MultiAsset,
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
