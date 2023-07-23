// const getTokenLogoURL = (address: string) =>
//   `https://assets.trustwalletapp.com/blockchains/smartchain/assets/${address}/logo.png`

const getTokenLogoURL = (address: string) =>
  `http://dude-dex.netlify.app/images/tokens/${address}.png`

export default getTokenLogoURL
