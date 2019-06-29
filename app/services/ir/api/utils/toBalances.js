import fxConversion from './fxConversion'

const toBalances = (fiatCurrencies, fxRates, cryptoRates, fiatCode) => (
  acc,
  { currencyCode, availableBalance }
) => {
  const [rate, value] = fiatCurrencies.includes(currencyCode)
    ? fxConversion(fxRates, currencyCode, fiatCode, availableBalance)
    : [cryptoRates[currencyCode], availableBalance * cryptoRates[currencyCode]]
  acc.push({
    currency: currencyCode,
    balance: availableBalance,
    fiatPrice: rate,
    fiatValue: value
  })
  return acc
}

export default toBalances
