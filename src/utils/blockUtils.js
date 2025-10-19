import { GENESIS_BLOCK } from "../constants/config";
import { calculateHash } from "./hashUtils";

export function createBlock(index, data, previousHash) {
  const timestamp = Date.now();
  const nonce = 0;
  const hash = calculateHash(index + 1, timestamp, data, nonce, previousHash);

  return {
    index: index + 1,
    timestamp,
    data,
    nonce,
    hash,
    previousHash,
  };
}

export function getGenesisBlock() {
  return GENESIS_BLOCK;
}
