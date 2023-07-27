import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'Dude',
    lpAddresses: {
      369: '0xb3f8A3123b608F2957CBC1B584C7066D8f17eE1F',
      56: '0x63c618917E5632367f9f9f9D7F11E596d414a731',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'WPLS-FILGOB LP',
    lpAddresses: {
      369: '0xbc993Ef8731E3e4053b1E111E5010f3aC3EbdC5C',
      56: '0x63c618917E5632367f9f9f9D7F11E596d414a731',
    },
    token: tokens.filgob,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'PLS-DAI LP',
    lpAddresses: {
      369: '0x146E1f1e060e5b5016Db0D118D2C5a11A240ae32',
      56: '0x146E1f1e060e5b5016Db0D118D2C5a11A240ae32',
    },
    token: tokens.dai,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'PLS-TPA LP',
    lpAddresses: {  
      369: '0x379a7Bb65a21D43E451e45b254CDdf798e434eF7',
      56: '0x379a7Bb65a21D43E451e45b254CDdf798e434eF7',
    },
    token: tokens.tpa,
    quoteToken: tokens.wbnb,
  },
  // {
  //   pid: 4,
  //   lpSymbol: 'TPA-DAI LP',
  //   lpAddresses: {
  //     369: '0x379a7Bb65a21D43E451e45b254CDdf798e434eF7',
  //     56: '0x379a7Bb65a21D43E451e45b254CDdf798e434eF7',
  //   },
  //   token: tokens.dai,
  //   quoteToken: tokens.tpa,
  // },
  // {
  //   pid: 5,
  //   lpSymbol: 'FILGOB-DAI LP',
  //   lpAddresses: {
  //     369: '0x379a7Bb65a21D43E451e45b254CDdf798e434eF7',
  //     56: '0x379a7Bb65a21D43E451e45b254CDdf798e434eF7',
  //   },
  //   token: tokens.dai,
  //   quoteToken: tokens.filgob,  
  // }
]

export default farms
