import keysChanged from '../keysChanged'

// put the keys in the state here rather than wait for success.
const saveKeys = (state, { payload: { apiKey, apiSecret, requireAuth } }) => ({
  ...state,
  apiKey,
  apiSecret,
  requireAuth,
  busy: true,
  error: null,
  message: null,
  balances: keysChanged(state, { apiKey, apiSecret }) ? [] : state.balances
})

export default saveKeys
