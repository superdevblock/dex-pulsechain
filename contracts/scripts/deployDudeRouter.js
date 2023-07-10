const { ethers } = require("hardhat");

async function main() {
  const dude = await ethers.getContractFactory("DudeRouter");
  const dudeRouter = await dude.deploy();

  console.log("This is DudeRouter contract address: ", dudeRouter.address);
}

main();