import extractCurrencyCode from './utils/extractCurrencyCode'
import fetchBaseData from './utils/fetchBaseData'
import marketSummaries from './utils/marketSummaries'
import onlyWithBalance from './utils/onlyWithBalance'
import separateCryptoFromFiat from './utils/separateCryptoFromFiat'
import toBalances from './utils/toBalances'
import toRates from './utils/toRates'

export const getBalances = api => async fiatCode => {
  const [allowedCoins, fxRates, accounts] = await fetchBaseData(api)

  const current = accounts.filter(onlyWithBalance)
  const coins = current.map(extractCurrencyCode)
  const { crypto, fiat } = separateCryptoFromFiat(allowedCoins, coins)

  const getMarketSummaries = marketSummaries(api)
  const summaries = await getMarketSummaries(crypto, fiatCode)
  const rates = summaries.reduce(toRates, {})

  return current.reduce(toBalances(fiat, fxRates, rates, fiatCode), [])
}

export default getBalances
