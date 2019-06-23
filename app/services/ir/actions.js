import { createActions } from 'redux-actions'

export const {
  restoreKeys,
  restoreKeysSuccess,
  restoreKeysFail,
  saveKeys,
  saveKeysSuccess,
  saveKeysFail,
  clearKeys,
  clearKeysSuccess,
  clearKeysFail
} = createActions({
  RESTORE_KEYS: undefined,
  RESTORE_KEYS_SUCCESS: undefined,
  RESTORE_KEYS_FAIL: undefined,
  SAVE_KEYS: undefined,
  SAVE_KEYS_SUCCESS: undefined,
  SAVE_KEYS_FAIL: undefined,
  CLEAR_KEYS: undefined,
  CLEAR_KEYS_SUCCESS: undefined,
  CLEAR_KEYS_FAIL: undefined
})
