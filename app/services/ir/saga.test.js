import sagaHelper from 'redux-saga-testing'
import { put, call, takeEvery, select } from 'redux-saga/effects'
import * as flash from 'react-native-flash-message'
import * as selectors from './selectors'
import * as persistence from '../persistence'
import keySaga, { KEY } from './saga'
import * as actions from './actions'
import getApi from './api'

jest.mock('./selectors')
selectors.getHistory = jest.fn()

jest.mock('../persistence')
persistence.storeData = jest.fn()
persistence.getData = jest.fn()
persistence.clearData = jest.fn()

jest.mock('./api')
jest.mock('react-native-flash-message', () => ({ showMessage: () => {} }))

describe('saga', () => {
  const saga = keySaga()

  const resetStubs = () => {
    persistence.storeData.clearMock()
    persistence.getData.clearMock()
    persistence.clearData.clearMock()
    getApi.clearMock()
  }

  describe('watcher tests', () => {
    const it = sagaHelper(saga.watcher())

    it('triggers events handlers', result => {
      expect(result).toEqual(
        takeEvery(
          [
            'CLEAR_KEYS',
            'CLEAR_KEYS_FAIL',
            'GET_BALANCES',
            'GET_BALANCES_FAIL',
            'RESTORE_KEYS',
            'RESTORE_KEYS_FAIL',
            'RESTORE_KEYS_SUCCESS',
            'SAVE_KEYS',
            'SAVE_KEYS_FAIL',
            'SAVE_KEYS_SUCCESS'
          ],
          saga.worker
        )
      )
    })
  })

  describe('worker tests', () => {
    const apiKey = 'some api key'
    const apiSecret = 'some api secret'
    const keys = { apiKey, apiSecret }
    const message = 'some error message'

    describe('RESTORE_KEYS', () => {
      const action = { type: 'RESTORE_KEYS' }

      describe('when there is no error', () => {
        const it = sagaHelper(saga.worker(action))

        afterAll(resetStubs)

        it('calls getData with the correct key', result => {
          expect(result).toEqual(call(persistence.getData, KEY))
          return keys
        })

        it('dispatches restoreKeysSuccess with the keys', result => {
          expect(result).toEqual(put(actions.restoreKeysSuccess(keys)))
        })
      })

      describe('when an error is thrown', () => {
        const error = new Error('oops')
        const it = sagaHelper(saga.worker(action))
        afterAll(resetStubs)

        it('calls getData with the correct key', result => {
          expect(result).toEqual(call(persistence.getData, KEY))
          return error
        })

        it('dispatches restoreKeysFail with the error', result => {
          expect(result).toEqual(put(actions.restoreKeysFail(error)))
        })
      })
    })

    describe('RESTORE_KEYS_FAIL', () => {
      const action = { type: 'RESTORE_KEYS_FAIL' }
      const it = sagaHelper(saga.worker(action))

      it('selects getMessage', result => {
        expect(result).toEqual(select(selectors.getMessage))
        return message
      })

      it('calls showMessage with a message object', result => {
        expect(result).toEqual(
          call(flash.showMessage, {
            message,
            type: 'danger'
          })
        )
      })
    })

    describe('RESTORE_KEYS_SUCCESS', () => {
      const action = { type: 'RESTORE_KEYS_SUCCESS' }
      const it = sagaHelper(saga.worker(action))

      it('dispatches saveKeysSuccess', result => {
        expect(result).toEqual(put(actions.getBalances()))
      })
    })

    describe('SAVE_KEYS', () => {
      const action = { type: 'SAVE_KEYS', payload: keys }
      describe('when it works', () => {
        const it = sagaHelper(saga.worker(action))
        afterAll(resetStubs)

        it('selects getKeys', result => {
          expect(result).toEqual(select(selectors.getKeys))
          return keys
        })

        it('calls storeData with key and keys', result => {
          expect(result).toEqual(call(persistence.storeData, KEY, keys))
        })

        it('dispatches saveKeysSuccess', result => {
          expect(result).toEqual(put(actions.saveKeysSuccess()))
        })
      })

      describe('when an error is thrown', () => {
        const error = new Error('oops')
        const it = sagaHelper(saga.worker(action))
        afterAll(resetStubs)

        it('selects getKeys', result => {
          expect(result).toEqual(select(selectors.getKeys))
          return keys
        })

        it('calls storeData with key and keys', result => {
          expect(result).toEqual(call(persistence.storeData, KEY, keys))
          return error
        })

        it('dispatches saveKeysFail with the error', result => {
          expect(result).toEqual(put(actions.saveKeysFail(error)))
        })
      })
    })

    describe('SAVE_KEYS_FAIL', () => {
      const action = { type: 'SAVE_KEYS_FAIL' }
      const it = sagaHelper(saga.worker(action))

      it('selects getMessage', result => {
        expect(result).toEqual(select(selectors.getMessage))
        return message
      })

      it('calls showMessage with a message object', result => {
        expect(result).toEqual(
          call(flash.showMessage, {
            message,
            type: 'warning'
          })
        )
      })
    })

    describe('SAVE_KEYS_SUCCESS', () => {
      const action = { type: 'SAVE_KEYS_SUCCESS' }
      const it = sagaHelper(saga.worker(action))

      it('dispatches saveKeysSuccess', result => {
        expect(result).toEqual(put(actions.getBalances()))
      })
    })

    describe('CLEAR_KEYS', () => {
      const action = { type: 'CLEAR_KEYS' }

      describe('when it works', () => {
        const it = sagaHelper(saga.worker(action))
        afterAll(resetStubs)

        it('calls clearData with the right key', result => {
          expect(result).toEqual(call(persistence.clearData, KEY))
        })

        it('dispatches clearKeysSuccess', result => {
          expect(result).toEqual(put(actions.clearKeysSuccess()))
        })
      })

      describe('when an error is thrown', () => {
        const error = new Error('oops')
        const it = sagaHelper(saga.worker(action))
        afterAll(resetStubs)

        it('calls clearData with the right key', result => {
          expect(result).toEqual(call(persistence.clearData, KEY))
          return error
        })

        it('dispatches clearKeysFail with the error', result => {
          expect(result).toEqual(put(actions.clearKeysFail(error)))
        })
      })
    })

    describe('CLEAR_KEYS_FAIL', () => {
      const action = { type: 'CLEAR_KEYS_FAIL' }
      const it = sagaHelper(saga.worker(action))

      it('selects getMessage', result => {
        expect(result).toEqual(select(selectors.getMessage))
        return message
      })

      it('calls showMessage with a message object', result => {
        expect(result).toEqual(
          call(flash.showMessage, {
            message,
            type: 'warning'
          })
        )
      })
    })

    describe('GET_BALANCES', () => {
      const balances = 'some balances'
      const getBalances = () => {}

      const action = { type: 'GET_BALANCES' }

      describe('when it works', () => {
        getApi.mockImplementation(() => ({ getBalances }))
        const it = sagaHelper(saga.worker(action))

        afterAll(resetStubs)

        it('selects getKeys', result => {
          expect(result).toEqual(select(selectors.getKeys))
          return keys
        })

        it("calls getBalances with 'Aud'", result => {
          expect(result).toEqual(call(getBalances, 'Aud'))
          return balances
        })

        it('dispatches getBalancesSuccess with the balances', result => {
          expect(result).toEqual(put(actions.getBalancesSuccess(balances)))
        })
      })

      describe('when an error is thrown', () => {
        const error = new Error('oops')

        const it = sagaHelper(saga.worker(action))
        afterAll(resetStubs)

        it('selects getKeys', result => {
          expect(result).toEqual(select(selectors.getKeys))
          return error
        })

        it('dispatches getBalancesFail with the error', result => {
          expect(result).toEqual(put(actions.getBalancesFail(error)))
        })
      })
    })

    describe('GET_BALANCES_FAIL', () => {
      const action = { type: 'GET_BALANCES_FAIL' }
      const it = sagaHelper(saga.worker(action))

      it('selects getMessage', result => {
        expect(result).toEqual(select(selectors.getMessage))
        return message
      })

      it('calls showMessage with a message object', result => {
        expect(result).toEqual(
          call(flash.showMessage, {
            message,
            type: 'danger'
          })
        )
      })
    })

    describe('handle default', () => {
      const it = sagaHelper(saga.worker({ type: 'DEFAULT' }))
      afterAll(resetStubs)

      it('does nothing', result => {
        expect(result).toBeUndefined()
      })
    })
  })
})
