import sagaHelper from 'redux-saga-testing'
import { put, call, takeEvery, select } from 'redux-saga/effects'
import * as selectors from './selectors'
import * as persistence from '../persistence'

import keySaga, { KEY } from './saga'
import * as actions from './actions'

jest.mock('./selectors')
selectors.getHistory = jest.fn()

jest.mock('../persistence')
persistence.storeData = jest.fn()
persistence.getData = jest.fn()
persistence.clearData = jest.fn()

describe('saga', () => {
  const saga = keySaga()

  const resetStubs = () => {
    persistence.storeData.clearMock()
    persistence.getData.clearMock()
    persistence.clearData.clearMock()
  }

  describe('watcher tests', () => {
    const it = sagaHelper(saga.watcher())

    it('triggers events handlers', result => {
      expect(result).toEqual(
        takeEvery(['RESTORE_KEYS', 'SAVE_KEYS', 'CLEAR_KEYS'], saga.worker)
      )
    })
  })

  describe('worker tests', () => {
    const apiKey = 'some api key'
    const apiSecret = 'some api secret'
    const keys = { apiKey, apiSecret }

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

    describe('handle default', () => {
      const it = sagaHelper(saga.worker({ type: 'DEFAULT' }))
      afterAll(resetStubs)

      it('does nothing', result => {
        expect(result).toBeUndefined()
      })
    })
  })
})
