import marketSummaries from './marketSummaries'

const api = {
  getMarketSummary: jest.fn().mockResolvedValue('summary')
}

const primaryCurrencyCode = 'Xbt'
const secondaryCurrencyCode = 'Aud'

const crypto = [primaryCurrencyCode]

const expected = ['summary']
let result

beforeAll(async () => {
  const fn = marketSummaries(api)
  result = await fn(crypto, secondaryCurrencyCode)
})

it('called getMarketSummary with the correct data', () => {
  expect(api.getMarketSummary).toBeCalledWith({
    primaryCurrencyCode,
    secondaryCurrencyCode
  })
})

it('returned the expected result', () => {
  expect(result).toEqual(expected)
})
