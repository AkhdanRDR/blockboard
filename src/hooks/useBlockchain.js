import { useState } from "react";
import { createBlock } from "../utils/blockUtils";
import { mineBlock as mineBlockUtil } from "../utils/miningUtils";

export function useBlockchain() {
  const [blockchain, setBlockchain] = useState([]);
  const [isMining, setIsMining] = useState(false);
  const [miningProgress, setMiningProgress] = useState(0);
  const [validationResult, setValidationResult] = useState(null);
  const [tamperMode, setTamperMode] = useState(false);

  async function addBlock(data, autoMine = true) {
    let lastBlock = blockchain[blockchain.length - 1];
    let newBlock = createBlock(lastBlock.index + 1, data, lastBlock.hash);
    
    for (let i = 0; i <= 100; i += 10) {
      await new Promise((r) => setTimeout(r, 100));
      setMiningProgress(i);
    }

    const newChain = [...blockchain, newBlock];
    setBlockchain(newChain);
    if (autoMine) mineBlock(newChain.length - 1);
  }

  function mineBlock(blockIndex) {
    const difficulty = 4;
    setIsMining(true);
    let targetBlock = blockchain[blockIndex];
    const minedBlock = mineBlockUtil(targetBlock, difficulty);

    const newChain = [...blockchain];
    newChain[blockIndex] = minedBlock;

    setBlockchain((prevChain) => {
      const newChain = [...prevChain];
      newChain[blockIndex] = minedBlock;
      return newChain;
    });
    setIsMining(false);
  }

  return {
    blockchain,
    isMining,
    miningProgress,
    validationResult,
    tamperMode,
    addBlock,
    mineBlock,
  };
}
