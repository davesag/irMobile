import { createActions } from 'redux-actions'

export const ACTIONS = [
  'RESTORE_KEYS',
  'RESTORE_KEYS_SUCCESS',
  'RESTORE_KEYS_FAIL',
  'SAVE_KEYS',
  'SAVE_KEYS_SUCCESS',
  'SAVE_KEYS_FAIL',
  'CLEAR_KEYS',
  'CLEAR_KEYS_SUCCESS',
  'CLEAR_KEYS_FAIL'
]

const actions = ACTIONS.reduce((acc, elem) => {
  acc[elem] = undefined
  return acc
}, {})

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
} = createActions(actions)
