// the keys are already removed from the state
const clearKeysFail = (state, { payload: error }) => ({
  ...state,
  busy: false,
  error,
  message: error.message
})

export default clearKeysFail
