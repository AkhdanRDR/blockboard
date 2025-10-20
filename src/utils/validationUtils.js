import { calculateHash } from "./hashUtils";

export function isValidBlock(block, previousBlock) {
  let thisHash = calculateHash(
    block.index,
    block.timestamp,
    block.data,
    block.nonce,
    block.previousHash
  );
  if (
    block.index == previousBlock.index + 1 &&
    block.previousHash == previousBlock.hash &&
    block.hash == thisHash
  ) {
    return true;
  } else {
    return false;
  }
}

export function isValidChain(blockchain) {
  let errors = [];
  for (let i = 1; i < blockchain.length; i++) {
    let valid = isValidBlock(blockchain[i], blockchain[i - 1]);
    if (!valid) {
      errors.push(`Block #${i} invalid`);
    }
  }
  return { isValid: errors.length === 0, errors: errors };
}
