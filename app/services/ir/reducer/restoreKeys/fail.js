import withDefault from '../../../../utils/withDefault'

// error might be an actual error or simple that there are no keys in the local database
const restoreKeysFail = (state, { payload: error, error: isError }) => ({
  ...state,
  busy: false,
  error,
  message: isError
    ? withDefault(error.message, 'Unable to restore keys')
    : error
})

export default restoreKeysFail
