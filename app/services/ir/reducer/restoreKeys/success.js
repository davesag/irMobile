// only save the keys to the state when they have been successfully retreived from
// the device's storage
const restoreKeysSuccess = (state, { payload }) => {
  const result = {
    ...state,
    busy: false,
    error: null,
    message: null
  }
  return payload
    ? {
        ...result,
        apiKey: payload.apiKey,
        apiSecret: payload.apiSecret,
        requireAuth: payload.requireAuth
      }
    : {
        ...result,
        apiKey: null,
        apiSecret: null,
        requireAuth: false
      }
}

export default restoreKeysSuccess
