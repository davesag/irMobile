import ir from 'ir-api'

export const getBalances = async (
  apiKey,
  apiSecret,
  secondaryCurrencyCode = 'Aud'
) => {
  const {
    getAccounts,
    getMarketSummary,
    getValidPrimaryCurrencyCodes,
    getFxRates
  } = ir(apiKey, apiSecret, { timeout: 100 })

  const onlyWithBalance = ({ availableBalance }) => availableBalance > 0

  const fetchBaseData = async () =>
    Promise.all([getValidPrimaryCurrencyCodes(), getFxRates(), getAccounts()])

  const separateCryptoFromFiat = (allCrypto, coins) => {
    const crypto = []
    const fiat = []
    coins.forEach(coin => {
      if (allCrypto.includes(coin)) crypto.push(coin)
      else fiat.push(coin)
    })
    return { crypto, fiat }
  }

  const fxConversion = (
    fxRates,
    currencyCode,
    secondaryCurrencyCode,
    availableBalance
  ) => {
    if (currencyCode === secondaryCurrencyCode) return [1, availableBalance]
    const { rate } = fxRates.find(
      ({ currencyCodeA, currencyCodeB }) =>
        currencyCodeA === secondaryCurrencyCode &&
        currencyCodeB === currencyCode
    )
    return [rate, availableBalance * rate]
  }

  const [allowedCoins, fxRates, accounts] = await fetchBaseData()
  const current = accounts.filter(onlyWithBalance)
  const coins = current.map(({ currencyCode }) => currencyCode)
  const { crypto, fiat } = separateCryptoFromFiat(allowedCoins, coins)

  const marketSummaries = await Promise.all(
    crypto.map(primaryCurrencyCode =>
      getMarketSummary({ primaryCurrencyCode, secondaryCurrencyCode })
    )
  )

  const rates = marketSummaries.reduce((acc, elem) => {
    acc[elem.primaryCurrencyCode] = elem.dayAvgPrice
    return acc
  }, {})

  return current.reduce((acc, { currencyCode, availableBalance }) => {
    const [rate, value] = fiat.includes(currencyCode)
      ? fxConversion(
          fxRates,
          currencyCode,
          secondaryCurrencyCode,
          availableBalance
        )
      : [rates[currencyCode], availableBalance * rates[currencyCode]]
    acc.push({
      currency: currencyCode,
      balance: availableBalance,
      fiatPrice: rate,
      fiatValue: value
    })
    return acc
  }, [])
}
