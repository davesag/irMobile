import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = {
  apiKey: null, // consider encrypting this.
  apiSecret: null, // consider encrypting this.
  error: null, // either an Error object or an error message
  busy: false, // check to see if we are mid-save, restore, or clear
  message: null // the error's message, no matter if error is an Error or just a message.
}

// start the process of restoring the keys from the device's storage.
export const restoreKeys = state => ({
  ...state,
  busy: true,
  error: null,
  message: null
})

// only save the keys to the state when they have been successfully retreived from
// the device's storage
export const restoreKeysSuccess = (
  state,
  { payload: { apiKey, apiSecret } }
) => ({
  ...state,
  apiKey,
  apiSecret,
  busy: false,
  error: null,
  message: null
})

// error might be an actual error or simple that there are no keys in the local database
export const restoreKeysFail = (state, { payload: error, error: isError }) => ({
  ...state,
  busy: false,
  error,
  message: isError ? error.message : error
})

// put the keys in the state here rather than wait for success.
export const saveKeys = (state, { payload: { apiKey, apiSecret } }) => ({
  ...state,
  apiKey,
  apiSecret,
  busy: true,
  error: null,
  message: null
})

// just flag that we are done saving the keys.
export const saveKeysSuccess = state => ({
  ...state,
  busy: false,
  error: null,
  message: null
})

// leave the keys in the local state as we might attempt to save them again
// if they are not saved to the device.
export const saveKeysFail = (state, { payload: error }) => ({
  ...state,
  busy: false,
  error,
  message: error.message
})

// remove the keys from the local state regardless of success or fail.
export const clearKeys = state => ({
  ...state,
  apiKey: null,
  apiSecret: null,
  busy: true,
  error: null,
  message: null
})

// flag that we are done clearing the keys
export const clearKeysSuccess = state => ({
  ...state,
  busy: false,
  error: null,
  message: null
})

// the keys are already removed from the state
export const clearKeysFail = (state, { payload: error }) => ({
  ...state,
  busy: false,
  error,
  message: error.message
})

export const handlers = {
  RESTORE_KEYS: restoreKeys,
  RESTORE_KEYS_SUCCESS: restoreKeysSuccess,
  RESTORE_KEYS_FAIL: restoreKeysFail,
  SAVE_KEYS: saveKeys,
  SAVE_KEYS_SUCCESS: saveKeysSuccess,
  SAVE_KEYS_FAIL: saveKeysFail,
  CLEAR_KEYS: clearKeys,
  CLEAR_KEYS_SUCCESS: clearKeysSuccess,
  CLEAR_KEYS_FAIL: clearKeysFail
}

export default createReducer(INITIAL_STATE, handlers)
