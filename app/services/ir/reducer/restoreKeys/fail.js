// error might be an actual error or simple that there are no keys in the local database
const restoreKeysFail = (state, { payload: error, error: isError }) => ({
  ...state,
  busy: false,
  error,
  message: isError ? error.message : error
})

export default restoreKeysFail
