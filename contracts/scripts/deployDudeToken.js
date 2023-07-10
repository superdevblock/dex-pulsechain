const { ethers } = require("hardhat");

async function main() {
  const dude = await ethers.getContractFactory("DudeToken");
  const dudeToken = await dude.deploy();

  console.log("This is DudeFactory contract address: ", dudeToken.address);
}

main();