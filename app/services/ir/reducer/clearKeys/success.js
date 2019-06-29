// flag that we are done clearing the keys
const clearKeysSuccess = state => ({
  ...state,
  busy: false,
  error: null,
  message: null
})

export default clearKeysSuccess
