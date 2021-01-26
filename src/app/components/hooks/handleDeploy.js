import { MichelsonMap } from "@taquito/michelson-encoder";

import fa2Json from "../assets/TokenFA2.json";
import { BigNumber } from "bignumber.js";

const handleDeploy = async (
  tokenName,
  tokenSymbol,
  tokenSupply,
  tokenDecimals,
  tokenOwner,
  tokenLogo,
  tokenHomepage,
  tokenDescription,
  wallet,
  setFetching
) => {
  setFetching(true);
  try {
    const tokenSupplyUnits = tokenSupply * new BigNumber(10).pow(tokenDecimals);
    await wallet
      .originate({
        code: fa2Json,
        storage: {
          admin: {
            admin: tokenOwner,
            pending_admin: null,
            paused: true,
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
                extras: MichelsonMap.fromLiteral({
                  symbol: Buffer(tokenSymbol, "ascii").toString("hex"),
                  name: Buffer(tokenName, "ascii").toString("hex"),
                  decimals: Buffer(tokenDecimals, "ascii").toString("hex"),
                }),
              },
            }),
          },
          metadata: MichelsonMap.fromLiteral({
            "": Buffer("tezos-storage:contents", "ascii").toString("hex"),
            contents: Buffer(
              JSON.stringify({
                version: "v0.0.1",
                description: tokenDescription,
                name: tokenName,
                authors: ["FA2 Bakery"],
                homepage: tokenHomepage,
                logo: tokenLogo,
                source: {
                  tools: ["Ligo dev-20201031", "Flextesa 20200921"],
                  location: "https://ligolang.org/",
                },
                interfaces: ["TZIP-12", "TZIP-16"],
                errors: [],
                views: [],
                tokens: {
                  dynamic: [
                    {
                      big_map: "token_metadata",
                    },
                  ],
                },
              }),
              "ascii"
            ).toString("hex"),
          }),
          total_supply: tokenSupplyUnits,
        },
      })
      .send();
  } catch (e) {
    console.error(e);
  } finally {
    setFetching(false);
  }
};

export default handleDeploy;
