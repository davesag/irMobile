export const separateCryptoFromFiat = (allCrypto, coins) => {
  const crypto = []
  const fiat = []
  coins.forEach(coin => {
    if (allCrypto.includes(coin)) crypto.push(coin)
    else fiat.push(coin)
  })
  return { crypto, fiat }
}

export default separateCryptoFromFiat
