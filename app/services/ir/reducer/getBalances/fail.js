import withDefault from '../../../../utils/withDefault'

const getBalancesFail = (state, { payload: error }) => ({
  ...state,
  balances: [],
  busy: false,
  error,
  message: withDefault(
    error.message,
    'Unable to connect to Independent Reserve'
  )
})

export default getBalancesFail
