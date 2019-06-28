// starts the process of restoring the keys from the device's storage.
const restoreKeys = state => ({
  ...state,
  busy: true,
  error: null,
  message: null
})

export default restoreKeys
