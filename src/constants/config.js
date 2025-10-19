export const DIFFICULTY_TARGET = "0";
export const MINE_INTERVAL = 100;
export const GENESIS_BLOCK = {
  index: 0, // first position
  timestamp: Date.now(), // time to create genesis block
  data: "Genesis Block", // first data entry
  nonce: 0, // first number for mining
  hash: "", // hash return from this block
  previousHash: "0", // because there isn't previous block
};
