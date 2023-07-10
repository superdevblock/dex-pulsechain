import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'KeeSwap',
  description:
    'The most popular AMM on BSC by user count! Earn KEE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by KeeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://keeswap.com/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('KeeSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('KeeSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('KeeSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('KeeSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('KeeSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('KeeSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('KeeSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('KeeSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('KeeSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('KeeSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('KeeSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('KeeSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('KeeSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('KeeSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('KeeSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('KeeSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('KeeSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('KeeSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('KeeSwap Info & Analytics')}`,
        description: 'View statistics for KeeSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('KeeSwap Info & Analytics')}`,
        description: 'View statistics for KeeSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('KeeSwap Info & Analytics')}`,
        description: 'View statistics for KeeSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('KeeSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('KeeSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('KeeSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('KeeSwap')}`,
      }
    default:
      return null
  }
}
