import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      369: '0xCF3750B3de1C49693988b5e03A17A32D9b83E8Dc',
      56: '0x63c618917E5632367f9f9f9D7F11E596d414a731',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.1',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
