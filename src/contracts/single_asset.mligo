(*
  This contract is derived from `fa2_single_asset` contract
  from https://github.com/tqtezos/smart-contracts.

  Preprocessor directives MINTABLE and PAUSABLE control whether
  the tokens are mintable/burnable, and whether the administrator
  can pause the contract.
*)


#include "./tqtezos/smart-contracts/single_asset/ligo/src/fa2_single_token.mligo"

#if MINTABLE
#include "./tqtezos/smart-contracts/single_asset/ligo/src/token_manager.mligo"
#endif

#include "./simple_admin.mligo"

type single_asset_storage = {
  admin : simple_admin_storage;
  assets : single_token_storage;
  metadata : contract_metadata;
}

type single_asset_param =
  | Assets of fa2_entry_points
  | Admin of simple_admin
#if MINTABLE
  | Tokens of token_manager
#endif

let single_asset_main 
    (param, s : single_asset_param * single_asset_storage)
  : (operation list) * single_asset_storage =
  match param with
  | Admin p ->

    let ops, admin = simple_admin (p, s.admin) in
    let new_s = { s with admin = admin; } in
    (ops, new_s)

#if MINTABLE
  | Tokens p ->
    let u1 = fail_if_not_admin s.admin in

    let ops, assets = token_manager (p, s.assets) in 
    let new_s = { s with assets = assets; } in 
    (ops, new_s)
#endif

  | Assets p -> 
#if PAUSABLE
    let u2 = fail_if_paused s.admin in
#endif

    let ops, assets = fa2_main (p, s.assets) in
    let new_s = { s with assets = assets; } in
    (ops, new_s)

