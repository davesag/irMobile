const hasCodes = (currency, otherCurrency) => ({
  currencyCodeA,
  currencyCodeB
}) => currencyCodeA === otherCurrency && currencyCodeB === currency

/**
 *  given a set of fxRates and two fiat currencies, return the matching rate
 *  and converted balance
 *
 *  @param fxRates — An array of { currencyCodeA, currencyCodeB, rate } tuples
 *  @param currency — The currency code you have a balance for
 *  @param otherCurrency — The currency code you wish to return the balance in
 *  @param balance — The balance of the currency currency you have
 *  @returns [rate, convertedBalance]
 */
export const fxConversion = (fxRates, currency, otherCurrency, balance) => {
  if (currency === otherCurrency) return [1, balance]
  const { rate } = fxRates.find(hasCodes(currency, otherCurrency))
  return [rate, balance * rate]
}

export default fxConversion
