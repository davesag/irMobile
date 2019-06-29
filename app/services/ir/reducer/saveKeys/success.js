// just flag that we are done saving the keys.
const saveKeysSuccess = state => ({
  ...state,
  busy: false,
  error: null,
  message: null
})

export default saveKeysSuccess
