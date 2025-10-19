import CryptoJS from "crypto-js";

export function calculateHash(index, timestamp, data, nonce, previousHash) {
  const inputString = index + timestamp + data + nonce + previousHash;
  const presentHash = CryptoJS.SHA256(inputString).toString();
  return presentHash;
}
