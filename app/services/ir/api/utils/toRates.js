const reduceRates = (acc, { primaryCurrencyCode, dayAvgPrice }) => {
  acc[primaryCurrencyCode] = dayAvgPrice
  return acc
}

export default reduceRates
