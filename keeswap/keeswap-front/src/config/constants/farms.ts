import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'KEE-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x045baabbc1d18001aDab9BE95909CaCc2078360C',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.wbnb,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 2,
    lpSymbol: 'KEE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xA024E3c03273BAa9Ba7e35a3689243a5B5498Cb4',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'KEE',
    lpAddresses: {
      97: '',
      56: '0xA024E3c03273BAa9Ba7e35a3689243a5B5498Cb4',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.busd,
    isTokenOnly: true,
  },
  {
    pid: 4,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.busd,
    isTokenOnly: true,
  },
  // {
  //   pid: 2,
  //   lpSymbol: 'KEE-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x34590017147534F01bb3E95b2E018313684412Fc',
  //   },
  //   token: serializedTokens.cake,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 3,
  //   lpSymbol: 'KEE-USDT LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0A0983b634CF0f7bacA19D880A8699C96b0395E0',
  //   },
  //   token: serializedTokens.cake,
  //   quoteToken: serializedTokens.usdt,
  // },
  // {
  //   pid: 4,
  //   lpSymbol: 'USDT-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
  //   },
  //   token: serializedTokens.usdt,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 5,
  //   lpSymbol: 'KEE',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xcbb21Da5Fee14a468b34EBdAb10656408c36Ab5b',
  //   },
  //   token: serializedTokens.cake,
  //   quoteToken: serializedTokens.busd,
  //   isTokenOnly: true,
  // },
  // {
  //   pid: 6,
  //   lpSymbol: 'WBNB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f',
  //   },
  //   token: serializedTokens.wbnb,
  //   quoteToken: serializedTokens.busd,
  //   isTokenOnly: true,
  // },
  // {
  //   pid: 7,
  //   lpSymbol: 'BUSD',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  //   },
  //   token: serializedTokens.busd,
  //   quoteToken: serializedTokens.busd,
  //   isTokenOnly: true,
  // },
  // {
  //   pid: 8,
  //   lpSymbol: 'USDT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
  //   },
  //   token: serializedTokens.usdt,
  //   quoteToken: serializedTokens.busd,
  //   isTokenOnly: true,
  // },
]

export default farms
