import extractCurrencyCode from './extractCurrencyCode'

const currencyCode = 'Xbt'
const data = { currencyCode }

it('extracts the currencyCode', () => {
  expect(extractCurrencyCode(data)).toEqual(currencyCode)
})
