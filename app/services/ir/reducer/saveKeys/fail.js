import withDefault from '../../../../utils/withDefault'

// leave the keys in the local state as we might attempt to save them again
// if they are not saved to the device.
const saveKeysFail = (state, { payload: error }) => ({
  ...state,
  busy: false,
  error,
  message: withDefault(error.message, 'Unable to save keys')
})

export default saveKeysFail
