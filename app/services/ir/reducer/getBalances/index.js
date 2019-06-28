// initiate the getting of IR Balances
const getBalances = state => ({
  ...state,
  busy: true,
  error: null,
  message: null
})

export default getBalances
