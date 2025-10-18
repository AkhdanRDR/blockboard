export const DIFFICULTY_TARGET = "0000";
export const MINE_INTERVAL = 100;
export const GENESIS_BLOCK = {
    index: 0, // posisi pertama
    timestamp: Date.now(), // waktu buat genesis block
    data: "Genesis Block", // isi data pertama
    nonce: 0, // angka awal buat mining
    hash: "", // hasil hash dari block ini
    previousHash: "0", // karena belum ada block sebelumnya
};
