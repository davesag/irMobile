import toBalances from './toBalances'

const aud = 'Aud'
const usd = 'Usd'
const crypto = 'Xbt'
const availableBalance = 100

const fiatCurrencies = [aud, usd]
const fxRates = [{ currencyCodeA: aud, currencyCodeB: usd, rate: 1.4 }]
const cryptoRates = { [crypto]: 16580.47 }

const getBalances = toBalances(fiatCurrencies, fxRates, cryptoRates, aud)

describe('when the currency is fiat', () => {
  const expected = [
    {
      currency: usd,
      balance: availableBalance,
      fiatPrice: 1.4,
      fiatValue: 140
    }
  ]

  it('converts as expected', () => {
    expect(getBalances([], { currencyCode: usd, availableBalance })).toEqual(
      expected
    )
  })
})

describe('when the currency is crypto', () => {
  const expected = [
    {
      currency: crypto,
      balance: availableBalance,
      fiatPrice: 16580.47,
      fiatValue: 1658047
    }
  ]

  it('converts as expected', () => {
    expect(getBalances([], { currencyCode: crypto, availableBalance })).toEqual(
      expected
    )
  })
})
