import { takeEvery, call, put, select } from 'redux-saga/effects'

import {
  restoreKeysSuccess,
  restoreKeysFail,
  getBalancesSuccess,
  getBalancesFail,
  saveKeysSuccess,
  saveKeysFail,
  clearKeysSuccess,
  clearKeysFail
} from './actions'

import getApi from './api'
import { storeData, getData, clearData } from '../persistence'
import { getKeys } from './selectors'

export const KEY = '@ir/keys'

// TODO: Wrap in try catch or something to be more robust but
// for now just assume it will work

// The Saga always runs after the reducer
export default () => {
  function* worker({ type }) {
    let keys

    switch (type) {
      case 'RESTORE_KEYS':
        try {
          keys = yield call(getData, KEY)
          yield put(restoreKeysSuccess(keys))
        } catch (err) {
          yield put(restoreKeysFail(err))
        }
        /* istanbul ignore next */ break
      case 'SAVE_KEYS':
        try {
          // keys were saved in the state by the saveKeys action.
          keys = yield select(getKeys)
          yield call(storeData, KEY, keys)
          yield put(saveKeysSuccess())
        } catch (err) {
          yield put(saveKeysFail(err))
        }
        /* istanbul ignore next */ break
      case 'CLEAR_KEYS':
        try {
          yield call(clearData, KEY)
          yield put(clearKeysSuccess())
        } catch (err) {
          yield put(clearKeysFail(err))
        }
        /* istanbul ignore next */ break
      case 'GET_BALANCES':
        try {
          keys = yield select(getKeys)
          const { getBalances } = getApi(keys)
          const balances = yield call(getBalances, 'Aud')
          yield put(getBalancesSuccess(balances))
        } catch (err) {
          yield put(getBalancesFail(err))
        }
        /* istanbul ignore next */ break
      default:
        break
    }
  }

  function* watcher() {
    yield takeEvery(
      ['RESTORE_KEYS', 'SAVE_KEYS', 'CLEAR_KEYS', 'GET_BALANCES'],
      worker
    )
  }

  return { worker, watcher }
}
