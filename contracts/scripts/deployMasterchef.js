const { ethers } = require("hardhat");

async function main() {
  const dude = await ethers.getContractFactory("Masterchef");
  const masterchef = await dude.deploy();

  console.log("This is Masterchef contract address: ", masterchef.address);
}

main();