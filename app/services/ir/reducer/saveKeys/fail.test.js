import { INITIAL_STATE } from '..'
import saveKeysFail from './fail'

const apiKey = 'some api key'
const apiSecret = 'some api secret'
const requireAuth = true

const message = 'oops'
const error = new Error(message)
const state = { ...INITIAL_STATE, busy: true, apiKey, apiSecret, requireAuth }
const expected = {
  ...state,
  busy: false,
  error,
  message
}

it('returns expected state', () => {
  expect(saveKeysFail(state, { payload: error, isError: true })).toEqual(
    expected
  )
})
