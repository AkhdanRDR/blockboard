import { DIFFICULTY_TARGET } from "../constants/config";
import { calculateHash } from "./hashUtils";

export function mineBlock(block, difficulty) {
  return new Promise((resolve) => {
    let nonce = 0;
    let found = false;
    const target = DIFFICULTY_TARGET.repeat(difficulty);
    
    function mineChunk() {
      for (let i = 0; i < 10000; i++) {
        let newHash = calculateHash(
          block.index,
          block.timestamp,
          block.data,
          nonce,
          block.previousHash
        );

        if (newHash.startsWith(target)) {
          found = true;
          block.nonce = nonce;
          block.hash = newHash;
          console.log(`✅ Block mined! Nonce: ${nonce}, Hash: ${newHash}`);
          resolve(block);
          return;
        } else {
          nonce++;
        }
      }

      if (!found) {
        setTimeout(mineChunk, 0);
      }
    }
    mineChunk();
  });
}
