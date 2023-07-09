# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deployStakingFactory.js --network bsctest
npx hardhat verify --network bsctest --contract contracts/TokenStaking.sol:TokenStaking 0x984F076eC052d35b9603DCbDE0190Bb6D50d4632 "0x44A2621B73cd545F057E495c6E54A5dC30c4ddd9", "0x44A2621B73cd545F057E495c6E54A5dC30c4ddd9", 365, 270, 5, 120

npx hardhat verify 0x5EA2dbc5Aec49E1474835890e5E4a5c501396662 --network bsctest



```
