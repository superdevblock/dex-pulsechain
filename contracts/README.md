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

Factory:            0xb3f8A3123b608F2957CBC1B584C7066D8f17eE1F
Router:             0x266CcC4c9e96F8589284e5aAFeAa7ab273a30c92
WPLS:               0xA1077a294dDE1B09bB078844df40758a5D0f9a27
LP Token:           0x266CcC4c9e96F8589284e5aAFeAa7ab273a30c92
Master Chip:        0x9eA48cd5dEA91643BfCA7B9bfFFaE503638f83dD

    _dude:          0x266CcC4c9e96F8589284e5aAFeAa7ab273a30c92,
    _dev:           0x60557846DAc1820A504F525E355f1695B330a539
    _DUDEPERBLOCK:  1
    _STARTBLOCKL    17085881

https://scan.v4.testnet.pulsechain.com/
0xa40bf1b880f9d98bf8d8a2c051e288629eb41381bdd8abf27de07bda76756bd6
```

0xa40bf1b880f9d98bf8d8a2c051e288629eb41381bdd8abf27de07bda76756bd6
