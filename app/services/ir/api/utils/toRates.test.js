import toRates from './toRates'

const primaryCurrencyCode = 'Xbt'
const dayAvgPrice = 16580.47

const data = { primaryCurrencyCode, dayAvgPrice }

const expected = {
  [primaryCurrencyCode]: dayAvgPrice
}

it('returns the expected result', () => {
  expect(toRates({}, data)).toEqual(expected)
})
