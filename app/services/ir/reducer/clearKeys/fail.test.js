import { INITIAL_STATE } from '..'
import clearKeysFail from './fail'

const message = 'oops'
const error = new Error(message)
const state = { ...INITIAL_STATE, busy: true }
const expected = {
  ...state,
  busy: false,
  error,
  message
}

it('returns expected state', () => {
  expect(clearKeysFail(state, { payload: error, isError: true })).toEqual(
    expected
  )
})
