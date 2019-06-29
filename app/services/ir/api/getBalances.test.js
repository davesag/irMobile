import getBalances from './getBalances'

import fetchBaseData from './utils/fetchBaseData'
import marketSummaries from './utils/marketSummaries'

jest.mock('./utils/fetchBaseData')
jest.mock('./utils/marketSummaries')

const api = jest.fn()

const fiatCode = 'Aud'
const allowedCoins = ['Xbt']
const fxRates = [{ currencyCodeA: fiatCode, currencyCodeB: 'Usd', rate: 1.4 }]

const accounts = [
  { currencyCode: fiatCode, availableBalance: 100 },
  { currencyCode: 'Xbt', availableBalance: 3 }
]

const summaries = [{ primaryCurrencyCode: 'Xbt', dayAvgPrice: 16580.47 }]

const getMarketSummaries = jest.fn().mockResolvedValue(summaries)

marketSummaries.mockReturnValue(getMarketSummaries)
fetchBaseData.mockResolvedValue([allowedCoins, fxRates, accounts])

const expected = [
  {
    currency: fiatCode,
    balance: 100,
    fiatPrice: 1,
    fiatValue: 100
  },
  {
    currency: 'Xbt',
    balance: 3,
    fiatPrice: 16580.47,
    fiatValue: 16580.47 * 3
  }
]

let result

beforeAll(async () => {
  result = await getBalances(api)(fiatCode)
})

it('called fetchBaseData with api', () => {
  expect(fetchBaseData).toHaveBeenCalledWith(api)
})

it('called marketSummaries with api', () => {
  expect(marketSummaries).toHaveBeenCalledWith(api)
})

it('called getMarketSummaries with crypto list and fiatCode', () => {
  expect(getMarketSummaries).toHaveBeenCalledWith(allowedCoins, fiatCode)
})

it('returned the expected result', () => {
  expect(result).toEqual(expected)
})
