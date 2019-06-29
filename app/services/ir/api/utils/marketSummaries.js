export const marketSummaries = ({ getMarketSummary }) => async (
  crypto,
  secondaryCurrencyCode
) =>
  Promise.all(
    crypto.map(primaryCurrencyCode =>
      getMarketSummary({ primaryCurrencyCode, secondaryCurrencyCode })
    )
  )

export default marketSummaries
