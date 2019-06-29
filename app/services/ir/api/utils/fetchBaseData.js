export const fetchBaseData = async ({
  getValidPrimaryCurrencyCodes,
  getFxRates,
  getAccounts
}) => Promise.all([getValidPrimaryCurrencyCodes(), getFxRates(), getAccounts()])

export default fetchBaseData
