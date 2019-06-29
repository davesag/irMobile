import { handleActions } from 'redux-actions'

import clearKeys from './clearKeys'
import clearKeysFail from './clearKeys/fail'
import clearKeysSuccess from './clearKeys/success'
import getBalances from './getBalances'
import getBalancesFail from './getBalances/fail'
import getBalancesSuccess from './getBalances/success'
import restoreKeys from './restoreKeys'
import restoreKeysFail from './restoreKeys/fail'
import restoreKeysSuccess from './restoreKeys/success'
import saveKeys from './saveKeys'
import saveKeysFail from './saveKeys/fail'
import saveKeysSuccess from './saveKeys/success'

export const INITIAL_STATE = {
  apiKey: null, // consider encrypting this.
  apiSecret: null, // consider encrypting this.
  busy: false, // check to see if we are mid-save, restore, or clear
  error: null, // either an Error object or an error message
  message: null, // the error's message, no matter if error is an Error or just a message.
  requireAuth: false, // do we need to check auth before importing the keys?
  balances: [] // array of { currency, balance, fiatPrice, fiatValue }
}

export const handlers = {
  CLEAR_KEYS: clearKeys,
  CLEAR_KEYS_FAIL: clearKeysFail,
  CLEAR_KEYS_SUCCESS: clearKeysSuccess,
  GET_BALANCES: getBalances,
  GET_BALANCES_FAIL: getBalancesFail,
  GET_BALANCES_SUCCESS: getBalancesSuccess,
  RESTORE_KEYS: restoreKeys,
  RESTORE_KEYS_FAIL: restoreKeysFail,
  RESTORE_KEYS_SUCCESS: restoreKeysSuccess,
  SAVE_KEYS: saveKeys,
  SAVE_KEYS_FAIL: saveKeysFail,
  SAVE_KEYS_SUCCESS: saveKeysSuccess
}

export default handleActions(handlers, INITIAL_STATE)
