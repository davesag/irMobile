const getBalancesFail = (state, { payload: error }) => ({
  ...state,
  balances: [],
  busy: false,
  error,
  message: error.message
})

export default getBalancesFail
