// put the keys in the state here rather than wait for success.
const saveKeys = (state, { payload: { apiKey, apiSecret, requireAuth } }) => ({
  ...state,
  apiKey,
  apiSecret,
  requireAuth,
  busy: true,
  error: null,
  message: null
})

export default saveKeys
