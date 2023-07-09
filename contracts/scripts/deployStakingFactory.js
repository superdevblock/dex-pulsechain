const { ethers } = require("hardhat");

async function main() {
  const contract = await ethers.getContractFactory("TokenStaking");
  const staking = await contract.deploy("0x5EA2dbc5Aec49E1474835890e5E4a5c501396662", 
                                    "0x5EA2dbc5Aec49E1474835890e5E4a5c501396662",
                                    365,
                                    270,
                                    5,
                                    120);

  console.log("This is Staking contract address: ", staking.address);
}

main();