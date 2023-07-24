import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      369: '0x8faA8E6FD5618988f839A3e4Fe59f74049685687',
      56: '0x63c618917E5632367f9f9f9D7F11E596d414a731',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.5',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
