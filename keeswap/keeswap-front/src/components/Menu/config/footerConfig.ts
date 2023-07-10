import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.keeswap.com/contact-us',
      },
      {
        label: t('Brand'),
        href: 'https://docs.keeswap.com/brand',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/keeswap',
      },
      {
        label: t('Community'),
        href: 'https://docs.keeswap.com/contact-us/telegram',
      },
      {
        label: t('KeeSwap Token'),
        href: 'https://docs.keeswap.com/tokenomics/kee',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.keeswap.com/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.keeswap.com/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.keeswap.com/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/keeswap',
      },
      {
        label: t('Documentation'),
        href: 'https://keeswap.gitbook.io/keeswap.com/',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://app.gitbook.com/@keeswap-1/s/keeswap/code/bug-bounty',
      },
      {
        label: t('Audits'),
        href: 'https://docs.keeswap.com/help/faq#is-keeswap-safe-has-keeswap-been-audited',
      },
      {
        label: t('Careers'),
        href: 'https://docs.keeswap.com/hiring/become-a-chef',
      },
    ],
  },
]
