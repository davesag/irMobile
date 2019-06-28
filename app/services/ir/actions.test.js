import cc from 'camelcase'
import * as actions from './actions'

describe('IR Actions', () => {
  const doTest = type => {
    const action = cc(type)
    const failType = `${type}_FAIL`
    const failAction = cc(failType)
    const successType = `${type}_SUCCESS`
    const successAction = cc(successType)

    describe(`#${action}`, () => {
      it('returns the expected object', () => {
        expect(actions[action]()).toEqual({ type })
      })
    })

    describe(`#${successAction}`, () => {
      const payload = 'some payload'

      it('returns the expected object', () => {
        expect(actions[successAction](payload)).toEqual({
          type: successType,
          payload
        })
      })
    })

    describe(`#${failAction}`, () => {
      const error = new Error('oops')

      it('returns the expected object', () => {
        expect(actions[failAction](error)).toEqual({
          type: failType,
          payload: error,
          error: true
        })
      })
    })
  }

  ;['CLEAR_KEYS', 'RESTORE_KEYS', 'SAVE_KEYS'].forEach(doTest)
})
