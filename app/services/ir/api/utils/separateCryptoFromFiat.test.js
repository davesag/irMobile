import separateCryptoFromFiat from './separateCryptoFromFiat'

const allCrypto = ['Xbt', 'Eth']
const coins = ['Aud', ...allCrypto]

const expected = { crypto: allCrypto, fiat: [coins[0]] }

it('separates the coins as expected', () => {
  expect(separateCryptoFromFiat(allCrypto, coins)).toEqual(expected)
})
