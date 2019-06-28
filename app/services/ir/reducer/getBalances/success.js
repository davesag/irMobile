// got the balances
const getBalancesSuccess = (state, { payload }) => ({
  ...state,
  busy: false,
  error: null,
  message: null,
  balances: [...payload]
})

export default getBalancesSuccess
