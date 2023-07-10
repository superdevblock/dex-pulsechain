const { ethers } = require("hardhat");

async function main() {
  const dude = await ethers.getContractFactory("DudeFactory");
  const dudeFactory = await dude.deploy();

  console.log("This is DudeFactory contract address: ", dudeFactory.address);
}

main();