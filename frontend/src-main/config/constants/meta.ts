import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Dude',
  description: 'Dude',
  image: '',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Dude')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Dude')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Dude')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Dude')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Dude')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Dude')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Dude')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Dude')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Dude')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Dude')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Dude')}`,
      }
    default:
      return null
  }
}
