import { INITIAL_STATE } from '..'
import saveKeys from '.'

const apiKey = 'some api key'
const apiSecret = 'some api secret'
const requireAuth = true
const state = { ...INITIAL_STATE }

const expected = {
  ...state,
  apiKey,
  apiSecret,
  requireAuth,
  busy: true
}

it('returns expected state', () => {
  expect(
    saveKeys(state, { payload: { apiKey, apiSecret, requireAuth } })
  ).toEqual(expected)
})
