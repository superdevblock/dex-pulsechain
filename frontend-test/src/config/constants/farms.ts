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
      943: '0x49126956fC7f873609cb8a7CcEE7775b2d780815',
      56: '0x63c618917E5632367f9f9f9D7F11E596d414a731',
    },
    token: tokens.cake,                                      
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'Dude-PLS LP',
    lpAddresses: {
      943: '0xab82277b689670F38217D8456F2840aBEC74d6C9',
      56: '0x63c618917E5632367f9f9f9D7F11E596d414a731',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  // {
  //   pid: 2,
  //   lpSymbol: 'tDAI-PLS LP',
  //   lpAddresses: {
  //     943: '0xf8077D17A58731b11de439e791Cd01d1804e1d1F',
  //     56: '0x63c618917E5632367f9f9f9D7F11E596d414a731',
  //   },
  //   token: tokens.tdai,
  //   quoteToken: tokens.wbnb,
  // },
  {
    pid: 3,
    lpSymbol: 'Dude-tDAI LP',
    lpAddresses: {
      943: '0xc2E66Ca12Dd9d645F5B62cB7b58e70B015899378',
      56: '0x63c618917E5632367f9f9f9D7F11E596d414a731', 
    },
    token: tokens.cake,
    quoteToken: tokens.tdai,
  }
  // ,
  // {
  //   pid: 4,
  //   lpSymbol: 'TPA-WPLS LP',
  //   lpAddresses: {
  //     943: '0x361F24550233a039ddA983fFC8dBc95015f224C5',
  //     56: '0x63c618917E5632367f9f9f9D7F11E596d414a731', 
  //   },
  //   token: tokens.tpa,
  //   quoteToken: tokens.wbnb,
  // }, 
  // {
  //   pid: 5,
  //   lpSymbol: 'TPA-DAI LP',
  //   lpAddresses: {
  //     943: '0xf94B1Cc7efd18429074160A73Bd9C5Ef7aC11D91',
  //     56: '0x63c618917E5632367f9f9f9D7F11E596d414a731', 
  //   },
  //   token: tokens.tpa,
  //   quoteToken: tokens.tdai,
  // }
]

export default farms
