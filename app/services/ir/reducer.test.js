import cc from 'camelcase'

import * as reducer from './reducer'

const defaultState = (fields = {}) => ({ ...reducer.INITIAL_STATE, ...fields })

describe('IR Reducer', () => {
  const apiKey = 'some api key'
  const apiSecret = 'some api secret'

  describe('Restore Keys', () => {
    describe('#restoreKeys', () => {
      const state = defaultState()
      const expected = {
        ...state,
        busy: true
      }

      it('returns expected state', () => {
        expect(reducer.restoreKeys(state)).toEqual(expected)
      })
    })

    describe('#restoreKeysSuccess', () => {
      const state = defaultState({ busy: true })
      const expected = {
        ...state,
        busy: false,
        apiKey,
        apiSecret
      }

      it('returns expected state', () => {
        expect(
          reducer.restoreKeysSuccess(state, { payload: { apiKey, apiSecret } })
        ).toEqual(expected)
      })
    })

    describe('#restoreKeysFail', () => {
      describe('if an error', () => {
        const message = 'oops'
        const error = new Error(message)
        const state = defaultState({ busy: true })
        const expected = {
          ...state,
          busy: false,
          error,
          message
        }

        it('returns expected state', () => {
          expect(
            reducer.restoreKeysFail(state, { payload: error, error: true })
          ).toEqual(expected)
        })
      })

      describe('if just a message', () => {
        const message = 'oops'
        const state = defaultState({ busy: true })
        const expected = {
          ...state,
          busy: false,
          error: message,
          message
        }

        it('returns expected state', () => {
          expect(reducer.restoreKeysFail(state, { payload: message })).toEqual(
            expected
          )
        })
      })
    })
  })

  describe('Save Keys', () => {
    describe('#saveKeys', () => {
      const state = defaultState()
      const expected = {
        ...state,
        apiKey,
        apiSecret,
        busy: true
      }

      it('returns expected state', () => {
        expect(
          reducer.saveKeys(state, { payload: { apiKey, apiSecret } })
        ).toEqual(expected)
      })
    })

    describe('#saveKeysSuccess', () => {
      const state = defaultState({ busy: true, apiKey, apiSecret })
      const expected = {
        ...state,
        busy: false
      }

      it('returns expected state', () => {
        expect(reducer.saveKeysSuccess(state)).toEqual(expected)
      })
    })

    describe('#saveKeysFail', () => {
      const message = 'oops'
      const error = new Error(message)
      const state = defaultState({ busy: true, apiKey, apiSecret })
      const expected = {
        ...state,
        busy: false,
        error,
        message
      }

      it('returns expected state', () => {
        expect(
          reducer.saveKeysFail(state, { payload: error, isError: true })
        ).toEqual(expected)
      })
    })
  })

  describe('Clear Keys', () => {
    describe('#clearKeys', () => {
      const state = defaultState({ apiKey, apiSecret })
      const expected = {
        ...state,
        apiKey: null,
        apiSecret: null,
        busy: true
      }

      it('returns expected state', () => {
        expect(reducer.clearKeys(state)).toEqual(expected)
      })
    })

    describe('#clearKeysSuccess', () => {
      const state = defaultState({ busy: true })
      const expected = {
        ...state,
        busy: false
      }

      it('returns expected state', () => {
        expect(reducer.clearKeysSuccess(state)).toEqual(expected)
      })
    })

    describe('#clearKeysFail', () => {
      const message = 'oops'
      const error = new Error(message)
      const state = defaultState({ busy: true })
      const expected = {
        ...state,
        busy: false,
        error,
        message
      }

      it('returns expected state', () => {
        expect(
          reducer.clearKeysFail(state, { payload: error, isError: true })
        ).toEqual(expected)
      })
    })
  })

  describe('handlers', () => {
    const doTest = type => {
      it(`#${type}`, () => {
        expect(reducer.handlers).toHaveProperty(type, reducer[cc(type)])
      })
    }

    ;[
      'RESTORE_KEYS',
      'RESTORE_KEYS_SUCCESS',
      'RESTORE_KEYS_FAIL',
      'SAVE_KEYS',
      'SAVE_KEYS_SUCCESS',
      'SAVE_KEYS_FAIL',
      'CLEAR_KEYS',
      'CLEAR_KEYS_SUCCESS',
      'CLEAR_KEYS_FAIL'
    ].forEach(doTest)
  })
})
