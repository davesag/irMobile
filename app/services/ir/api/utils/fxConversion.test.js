import fxConversion from './fxConversion'

const balance = 100
const aud = 'Aud'
const usd = 'Usd'
const rates = [{ currencyCodeA: aud, currencyCodeB: usd, rate: 1.4 }]

describe('when the currencies are the same', () => {
  const expected = [1, balance]

  it('returns the expected result', () => {
    expect(fxConversion(rates, aud, aud, balance)).toEqual(expected)
  })
})

describe('when the currencies are different', () => {
  const expected = [1.4, 1.4 * balance]

  it('returns the expected result', () => {
    expect(fxConversion(rates, usd, aud, balance)).toEqual(expected)
  })
})
