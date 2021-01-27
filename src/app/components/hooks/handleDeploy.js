import { MichelsonMap } from "@taquito/michelson-encoder";

import fa2Json from "../assets/TokenFA2.json";
import { BigNumber } from "bignumber.js";
import ipfsClient from "ipfs-http-client";

const handleDeploy = async (
  tokenName,
  tokenSymbol,
  tokenSupply,
  tokenDecimals,
  tokenOwner,
  tokenLogo,
  tokenHomepage,
  tokenDescription,
  storeOnIpfs,
  wallet,
  setFetching
) => {
  setFetching(true);
  try {
    const tokenSupplyUnits = tokenSupply * new BigNumber(10).pow(tokenDecimals);
    let metadata = new Buffer(
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
      }),
      "ascii"
    );
    console.log(storeOnIpfs);
    if (storeOnIpfs) {
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
    await wallet
      .originate({
        code: fa2Json,
        storage: {
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
                extras: MichelsonMap.fromLiteral({
                  symbol: Buffer(tokenSymbol, "ascii").toString("hex"),
                  name: Buffer(tokenName, "ascii").toString("hex"),
                  decimals: Buffer(tokenDecimals, "ascii").toString("hex"),
                }),
              },
            }),
          },
          metadata: metadata,
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
