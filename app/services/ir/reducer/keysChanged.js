const keysChanged = (state, { apiKey, apiSecret }) =>
  state.apiKey !== apiKey || state.apiSecret !== apiSecret

export default keysChanged
