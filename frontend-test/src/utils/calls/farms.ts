import BigNumber from 'bignumber.js'
import { DEFAULT_GAS_LIMIT, DEFAULT_TOKEN_DECIMAL } from 'config'
import getGasPrice from 'utils/getGasPrice'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

export const stakeFarm = async (masterChefContract, pid, amount, referral) => {
  console.log("arsinoe : stakeFarm")
  const gasPrice = getGasPrice()
  console.log("arsinoe : gasPrice ", gasPrice)
  const value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()
  console.log("arsinoe : value ", value)
  if (pid === 0) {  
    console.log(value, referral, { ...options, gasPrice })
    // const tx = await masterChefContract.enterStaking(value, referral, { ...options, gasPrice })
    const tx = await masterChefContract.enterStaking(value, referral, { ...options })
    const receipt = await tx.wait()
    return receipt.status
  }
  console.log("arsinoe : deposit")
  console.log("arsinoe : pid, value, referral, options ", pid, value, referral, options)
  // const tx = await masterChefContract.deposit(pid, value, referral, { ...options, gasPrice })
  const tx = await masterChefContract.deposit(pid, value, referral, { ...options})
  console.log("arsinoe : tx ", tx)
  const receipt = await tx.wait()
  console.log("arsinoe : receipt ", receipt)
  
  return receipt.status
}

export const unstakeFarm = async (masterChefContract, pid, amount, referral) => {
  console.log("arsnoe : unstakeFarm")
  const gasPrice = getGasPrice()
  console.log("arsinoe : gasPrice ", gasPrice)
  const value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()
  console.log("arsinoe : value ", value)
  if (pid === 0) {
    const tx = await masterChefContract.leaveStaking(value, { ...options, gasPrice })
    const receipt = await tx.wait()
    return receipt.status
  }

  const tx = await masterChefContract.withdraw(pid, value, { ...options, gasPrice })
  const receipt = await tx.wait()
  return receipt.status
}

export const harvestFarm = async (masterChefContract, pid, referral) => {
  const gasPrice = getGasPrice()
  if (pid === 0) {
    const tx = await masterChefContract.leaveStaking('0', { ...options, gasPrice })
    const receipt = await tx.wait()
    return receipt.status
  }

  const tx = await masterChefContract.deposit(pid, '0', referral, { ...options, gasPrice })
  const receipt = await tx.wait()
  return receipt.status
}
