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
      943: '0x3dD4f4C5FA142d828095c558d42CA64a9c251bBA',
      56: '0x63c618917E5632367f9f9f9D7F11E596d414a731',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'Dude-PLS LP',
    lpAddresses: {
      943: '0x05c55FD2a9EF5FD5569D92417E27425009D7E28B',
      56: '0x63c618917E5632367f9f9f9D7F11E596d414a731',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'tDAI-PLS LP',
    lpAddresses: {
      943: '0xf8077d17a58731b11de439e791cd01d1804e1d1f',
      56: '0x63c618917E5632367f9f9f9D7F11E596d414a731',
    },
    token: tokens.tdai,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'Dude-tDAI LP',
    lpAddresses: {
      943: '0x2a269d08021cb0b36d060c9f126ed39cc1eaa69c',
      56: '0x63c618917E5632367f9f9f9D7F11E596d414a731',
    },
    token: tokens.cake,
    quoteToken: tokens.tdai,
  }
]

export default farms
