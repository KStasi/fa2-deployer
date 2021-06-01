#!/usr/bin/env bash

if [$# -ne 2]; then
    echo "Usage: ./compile-contracts.sh <INPUT_DIR> <OUTPUT_DIR>"
fi

contracts=(FA2MintableSupply FA2FixedSupply FA2MintableSupplyNotPausable FA2FixedSupplyNotPausable)

for f in "${contracts[@]}"; do
    ligo compile-contract --michelson-format=json --output "$2/$f.json" "$1/$f.mligo" single_asset_main 
done
