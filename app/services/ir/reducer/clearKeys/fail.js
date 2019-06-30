import withDefault from '../../../../utils/withDefault'

// the keys are already removed from the state
const clearKeysFail = (state, { payload: error }) => ({
  ...state,
  busy: false,
  error,
  message: withDefault(error.message, 'Unable to clear keys')
})

export default clearKeysFail
