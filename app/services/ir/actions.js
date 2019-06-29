import { createActions } from 'redux-actions'

export const ACTIONS = [
  'CLEAR_KEYS',
  'CLEAR_KEYS_FAIL',
  'CLEAR_KEYS_SUCCESS',
  'GET_BALANCES',
  'GET_BALANCES_FAIL',
  'GET_BALANCES_SUCCESS',
  'RESTORE_KEYS',
  'RESTORE_KEYS_FAIL',
  'RESTORE_KEYS_SUCCESS',
  'SAVE_KEYS',
  'SAVE_KEYS_FAIL',
  'SAVE_KEYS_SUCCESS'
]

const actions = ACTIONS.reduce((acc, elem) => {
  acc[elem] = undefined
  return acc
}, {})

export const {
  clearKeys,
  clearKeysFail,
  clearKeysSuccess,
  getBalances,
  getBalancesFail,
  getBalancesSuccess,
  restoreKeys,
  restoreKeysFail,
  restoreKeysSuccess,
  saveKeys,
  saveKeysFail,
  saveKeysSuccess
} = createActions(actions)
