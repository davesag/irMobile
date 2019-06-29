// leave the keys in the local state as we might attempt to save them again
// if they are not saved to the device.
const saveKeysFail = (state, { payload: error }) => ({
  ...state,
  busy: false,
  error,
  message: error.message
})

export default saveKeysFail
