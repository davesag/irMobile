import { INITIAL_STATE } from '..'
import restoreKeysFail from './fail'

const state = { ...INITIAL_STATE, busy: true }

describe('if an error', () => {
  const message = 'oops'
  const error = new Error(message)
  const expected = {
    ...state,
    busy: false,
    error,
    message
  }

  it('returns expected state', () => {
    expect(restoreKeysFail(state, { payload: error, error: true })).toEqual(
      expected
    )
  })
})

describe('if just a message', () => {
  const message = 'oops'
  const expected = {
    ...state,
    busy: false,
    error: message,
    message
  }

  it('returns expected state', () => {
    expect(restoreKeysFail(state, { payload: message })).toEqual(expected)
  })
})
