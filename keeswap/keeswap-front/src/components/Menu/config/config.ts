import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    href: "/swap",
    icon: "Swap",
    items: [
      {
        label: t('Exchange'),
        href: "/swap",
      },
      {
        label: t('Liquidity'),
        href: "/liquidity",
      },
    ],
  },
  //   {
  //   label: t('Exchange'),
  //   icon: 'Swap',
  //   href: '/swap',
  //   hideSubNav: true,
  //   showItemsOnMobile: false,
  //   items: [],
  // },
  // {
  //   label: t('Liquidity'),
  //   icon: 'Add',
  //   href: '/liquidity',
  //   hideSubNav: true,
  //   showItemsOnMobile: false,
  //   items: [],
  // },
  {
    label: t('Farms'),
    href: '/farms',
    icon: 'Farm',
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: t('Pools'),
    href: '/pools',
    icon: 'Pool',
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: '',
    href: "/info",
    icon: "More",
    hideSubNav: true,
    items: [
      {
        label: t('Info'),
        href: "/info",
      },
      {
        label: t('Docs'),
        href: "/docs",
      },
    ],
  },
  // {
  //   label: t('NFT'),
  //   href: '/nfts',
  //   icon: 'NFT',
  //   showItemsOnMobile: false,
  //   items: [],
  // },  
]

export default config
