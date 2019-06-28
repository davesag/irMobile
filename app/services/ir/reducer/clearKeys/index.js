// remove the keys from the local state regardless of success or fail.
const clearKeys = state => ({
  ...state,
  apiKey: null,
  apiSecret: null,
  requireAuth: false,
  busy: true,
  error: null,
  message: null
})

export default clearKeys
