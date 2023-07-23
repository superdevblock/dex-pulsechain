import { Nft, NftSource, NftType } from './types'

export const IPFS_GATEWAY = 'https://ipfs.io/ipfs'

export const nftSources: NftSource = {
  [NftType.PANCAKE]: {
    address: {
      56: '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07',
      943: '0x60935F36e4631F73f0f407e68642144e07aC7f5E',
    },
    identifierKey: 'image',
  },
  [NftType.MIXIE]: {
    address: {
      56: '0xa251b5EAa9E67F2Bc8b33F33e20E91552Bf85566',
      943: '',
    },
    identifierKey: 'image',
  },
}

const Nfts: Nft[] = [
  {
    name: 'Baller',
    description: 'Absolute (lottery) baller.',
    images: {
      lg: 'baller-lg.png',
      md: 'baller-md.png',
      sm: 'baller-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmeMfJk6yxYmMd41ThDpqcdEJmKXZTF9EmFeP49D15NvsF/baller.png`,
    },
    video: {
      webm: `${IPFS_GATEWAY}/QmeMfJk6yxYmMd41ThDpqcdEJmKXZTF9EmFeP49D15NvsF/baller.webm`,
      mp4: `${IPFS_GATEWAY}/QmeMfJk6yxYmMd41ThDpqcdEJmKXZTF9EmFeP49D15NvsF/baller.mp4`,
    },
    sortOrder: 999,
    identifier: 'baller',
    type: NftType.PANCAKE,
    variationId: 20,
  },
  {
    name: 'Lucky',
    description: "Lucky's got the golden ticket!",
    images: {
      lg: 'lucky-lg.png',
      md: 'lucky-md.png',
      sm: 'lucky-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmQzwfooRxLKigK7XBJzsQbP4DBpZW8jRM1sq5wrJLg6nF/lucky.png`,
    },
    video: {
      webm: `${IPFS_GATEWAY}/QmQzwfooRxLKigK7XBJzsQbP4DBpZW8jRM1sq5wrJLg6nF/lucky.webm`,
      mp4: `${IPFS_GATEWAY}/QmQzwfooRxLKigK7XBJzsQbP4DBpZW8jRM1sq5wrJLg6nF/lucky.mp4`,
    },
    sortOrder: 999,
    identifier: 'lucky',
    type: NftType.PANCAKE,
    variationId: 19,
  },
  {
    name: 'Lottie',
    description: "Lottie's looking hotto for lotto!",
    images: {
      lg: 'lottie-lg.png',
      md: 'lottie-md.png',
      sm: 'lottie-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmWnhyxSrD8v9bx5tE9mDkwW853bpjoCXGd7o2fe1BtQJ8/lottie.png`,
    },
    video: {
      webm: `${IPFS_GATEWAY}/QmWnhyxSrD8v9bx5tE9mDkwW853bpjoCXGd7o2fe1BtQJ8/lottie.webm`,
      mp4: `${IPFS_GATEWAY}/QmWnhyxSrD8v9bx5tE9mDkwW853bpjoCXGd7o2fe1BtQJ8/lottie.mp4`,
    },
    sortOrder: 999,
    identifier: 'lottie',
    type: NftType.PANCAKE,
    variationId: 18,
  },
  {
    name: 'Claire',
    description: 'Can Claire the clairvoyant see what’s in the cards for you?',
    images: {
      lg: 'claire-lg.png',
      md: 'claire-md.png',
      sm: 'claire-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmRa2WbGnqdgUzrYXxZWv549BDxq3heYridJeoWGcebcU8/claire.png`,
    },
    sortOrder: 999,
    identifier: 'claire',
    type: NftType.PANCAKE,
    variationId: 17,
  },
  {
    name: 'Syrup Soak',
    description: 'Ahh... what could be sweeter than a syrupy soak?',
    images: {
      lg: 'soak-lg.png',
      md: 'soak-md.png',
      sm: 'soak-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmW3zLfdQpw9vWpgcDyR2WM9A34tTWvvYyjKc3JjhtL68z/syrup-soak.png`,
    },
    video: {
      webm: `${IPFS_GATEWAY}/QmW3zLfdQpw9vWpgcDyR2WM9A34tTWvvYyjKc3JjhtL68z/syrup-soak.webm`,
      mp4: `${IPFS_GATEWAY}/QmW3zLfdQpw9vWpgcDyR2WM9A34tTWvvYyjKc3JjhtL68z/syrup-soak.mp4`,
    },
    sortOrder: 999,
    identifier: 'syrup-soak',
    type: NftType.PANCAKE,
    variationId: 16,
  },
  {
    name: 'Mixie v1',
    description: 'Stories were told, and songs were sung, about Chef Mixie’s pancakes and her big Syrup gun.',
    images: {
      lg: 'mixie-1-lg.png',
      md: 'mixie-1-md.png',
      sm: 'mixie-1-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmQiRpr7ZMkzV7qbqVaUZ1LiuHTTdpWmapUhaY6ZGmVLQ4/001-Chef-Mixie.png`,
    },
    sortOrder: 999,
    identifier: '001-Chef-Mixie',
    type: NftType.MIXIE,
    variationId: 1,
  },
  {
    name: 'Mixie v2',
    description: 'Stories were told, and songs were sung, about Chef Mixie’s pancakes and her big Syrup gun.',
    images: {
      lg: 'mixie-2-lg.png',
      md: 'mixie-2-md.png',
      sm: 'mixie-2-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmQiRpr7ZMkzV7qbqVaUZ1LiuHTTdpWmapUhaY6ZGmVLQ4/002-Chef-Mixie.png`,
    },
    sortOrder: 999,
    identifier: '002-Chef-Mixie',
    type: NftType.MIXIE,
    variationId: 2,
  },
  {
    name: 'Mixie v3',
    description: 'Stories were told, and songs were sung, about Chef Mixie’s pancakes and her big Syrup gun.',
    images: {
      lg: 'mixie-3-lg.png',
      md: 'mixie-3-md.png',
      sm: 'mixie-3-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmQiRpr7ZMkzV7qbqVaUZ1LiuHTTdpWmapUhaY6ZGmVLQ4/003-Chef-Mixie.png`,
    },
    sortOrder: 999,
    identifier: '003-Chef-Mixie',
    type: NftType.MIXIE,
    variationId: 3,
  },
  {
    name: 'Easter ‘21 Champions',
    description: 'Eggscellent! Celebrating Syrup Storm winning the Easter Battle!',
    images: {
      lg: 'easter-champion-storm-lg.png',
      md: 'easter-champion-storm-md.png',
      sm: 'easter-champion-storm-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmWFQdggxnAkgFNBWixT6v7nrgEnYfYDxG5A9u42aHhU6U/easter-champion-storm.png'`,
    },
    video: {
      webm: `${IPFS_GATEWAY}/QmWFQdggxnAkgFNBWixT6v7nrgEnYfYDxG5A9u42aHhU6U/easter-champion-storm.webm`,
      mp4: `${IPFS_GATEWAY}/QmWFQdggxnAkgFNBWixT6v7nrgEnYfYDxG5A9u42aHhU6U/easter-champion-storm.mp4`,
    },
    sortOrder: 999,
    identifier: 'easter-champion-storm',
    type: NftType.PANCAKE,
    variationId: 15,
  },
  {
    name: "Cakeston Easter '21",
    description: 'Melting Easter eggs and melting hearts!',
    images: {
      lg: 'cakeston-easter-21-lg.png',
      md: 'cakeston-easter-21-md.png',
      sm: 'cakeston-easter-21-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmZGqWaovULNEMKxBCGnGjh27JQkAyadS6AW4J4Lzf3XBp/easter-caker.png`,
    },
    sortOrder: 999,
    identifier: 'easter-caker',
    type: NftType.PANCAKE,
    variationId: 15,
  },
  {
    name: "Flipsie Easter '21",
    description: 'Watch out for Flipsie’s spatula smash!',
    images: {
      lg: 'flipsie-easter-21-lg.png',
      md: 'flipsie-easter-21-md.png',
      sm: 'flipsie-easter-21-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmZGqWaovULNEMKxBCGnGjh27JQkAyadS6AW4J4Lzf3XBp/easter-flipper.png`,
    },
    sortOrder: 999,
    identifier: 'easter-flipper',
    type: NftType.PANCAKE,
    variationId: 14,
  },
  {
    name: "Stormy Easter '21",
    description: 'Do you like chocolate with your syrup? Go long!',
    images: {
      lg: 'stormy-easter-21-lg.png',
      md: 'stormy-easter-21-md.png',
      sm: 'stormy-easter-21-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmZGqWaovULNEMKxBCGnGjh27JQkAyadS6AW4J4Lzf3XBp/easter-storm.png`,
    },
    sortOrder: 999,
    identifier: 'easter-storm',
    type: NftType.PANCAKE,
    variationId: 12,
  },
  {
    name: 'Bullish',
    description: 'Happy Niu Year! This bunny’s excited for the year of the bull (market!)',
    images: {
      lg: 'bullish-lg.png',
      md: 'bullish-md.png',
      sm: 'bullish-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmNS1A5HsRW1JvFWtGkm4o9TgZVe2P7kA8TB4yxvS6A7ms/bullish.png`,
    },
    video: {
      webm: `${IPFS_GATEWAY}/QmNS1A5HsRW1JvFWtGkm4o9TgZVe2P7kA8TB4yxvS6A7ms/bullish.webm`,
      mp4: `${IPFS_GATEWAY}/QmNS1A5HsRW1JvFWtGkm4o9TgZVe2P7kA8TB4yxvS6A7ms/bullish.mp4`,
    },
    sortOrder: 999,
    identifier: 'bullish',
    type: NftType.PANCAKE,
    variationId: 11,
  },
  {
    name: 'Hiccup',
    description: "Oopsie daisy! Hiccup's had a bit of an accident. Poor little fella.",
    images: {
      lg: 'hiccup-lg.png',
      md: 'hiccup-md.png',
      sm: 'hiccup-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmQ6EE6gkVzAQUdQLLM7CyrnME6LZHCoy92ZERW8HXmyjw/hiccup.png`,
    },
    sortOrder: 999,
    identifier: 'hiccup',
    type: NftType.PANCAKE,
    variationId: 10,
  },
  {
    name: 'Sleepy',
    description: 'Aww, looks like eating pancakes all day is tough work. Sweet dreams!',
    images: {
      lg: 'sleepy-lg.png',
      md: 'sleepy-md.png',
      sm: 'sleepy-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/sleepy.png`,
      blur: 'sleepy-blur.png',
    },
    sortOrder: 999,
    identifier: 'sleepy',
    type: NftType.PANCAKE,
    variationId: 5,
  },
  {
    name: 'Sunny',
    description: 'Sunny is always cheerful when there are pancakes around. Smile!',
    images: {
      lg: 'sunny-lg.png',
      md: 'sunny-md.png',
      sm: 'sunny-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/sunny.png`,
      blur: 'sunny-blur.png',
    },
    sortOrder: 999,
    identifier: 'sunny',
    type: NftType.PANCAKE,
    variationId: 9,
  },
  {
    name: 'Churro',
    description: "Don't let that dopey smile deceive you... Churro's a master CAKE chef!",
    images: {
      lg: 'churro-lg.png',
      md: 'churro-md.png',
      sm: 'churro-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/churro.png`,
      blur: 'churro-blur.png',
    },
    sortOrder: 999,
    identifier: 'churro',
    type: NftType.PANCAKE,
    variationId: 8,
  },
  {
    name: 'Dollop',
    description: "Nommm... Oh hi, I'm just meditating on the meaning of CAKE.",
    images: {
      lg: 'dollop-lg.png',
      md: 'dollop-md.png',
      sm: 'dollop-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/dollop.png`,
      blur: 'dollop-blur.png',
    },
    sortOrder: 999,
    identifier: 'dollop',
    type: NftType.PANCAKE,
    variationId: 6,
  },
  {
    name: 'Twinkle',
    description: "Three guesses what's put that twinkle in those eyes! (Hint: it's CAKE)",
    images: {
      lg: 'twinkle-lg.png',
      md: 'twinkle-md.png',
      sm: 'twinkle-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/twinkle.png`,
      blur: 'twinkle-blur.png',
    },
    sortOrder: 999,
    identifier: 'twinkle',
    type: NftType.PANCAKE,
    variationId: 7,
  },
  {
    name: 'Swapsies',
    description: 'These bunnies love nothing more than swapping pancakes. Especially on BSC.',
    images: {
      lg: 'swapsies-lg.png',
      md: 'swapsies-md.png',
      sm: 'swapsies-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/swapsies.png`,
      blur: 'swapsies-blur.png',
    },
    sortOrder: 999,
    identifier: 'swapsies',
    type: NftType.PANCAKE,
    variationId: 0,
  },
  {
    name: 'Drizzle',
    description: "It's raining syrup on this bunny, but he doesn't seem to mind. Can you blame him?",
    images: {
      lg: 'drizzle-lg.png',
      md: 'drizzle-md.png',
      sm: 'drizzle-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/drizzle.png`,
      blur: 'drizzle-blur.png',
    },
    sortOrder: 999,
    identifier: 'drizzle',
    type: NftType.PANCAKE,
    variationId: 1,
  },
  {
    name: 'Blueberries',
    description: "These bunnies like their pancakes with blueberries. What's your favorite topping?",
    images: {
      lg: 'blueberries-lg.png',
      md: 'blueberries-md.png',
      sm: 'blueberries-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/blueberries.png`,
      blur: 'blueberries-blur.png',
    },
    sortOrder: 999,
    identifier: 'blueberries',
    type: NftType.PANCAKE,
    variationId: 2,
  },
  {
    name: 'Circular',
    description: "Love makes the world go 'round... but so do pancakes. And these bunnies know it.",
    images: {
      lg: 'circular-lg.png',
      md: 'circular-md.png',
      sm: 'circular-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/circular.png`,
      blur: 'circular-blur.png',
    },
    sortOrder: 999,
    identifier: 'circular',
    type: NftType.PANCAKE,
    variationId: 3,
  },
  {
    name: 'Sparkle',
    description: 'It’s sparkling syrup, pancakes, and even lottery tickets! This bunny really loves it.',
    images: {
      lg: 'sparkle-lg.png',
      md: 'sparkle-md.png',
      sm: 'sparkle-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/sparkle.png`,
      blur: 'sparkle-blur.png',
    },
    sortOrder: 999,
    identifier: 'sparkle',
    type: NftType.PANCAKE,
    variationId: 4,
  },
]

export default Nfts
