/* eslint-disable no-process-exit */
import { ethers } from "hardhat";

const main = async () => {
  const gameContractFactory = await ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Geralt"],
    ["https://i.imgur.com/hTkzoQO.jpeg"],
    [100],
    [100],
    "Imlerith",
    "https://i.imgur.com/qa0oyzu.jpeg",
    10000,
    45
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
