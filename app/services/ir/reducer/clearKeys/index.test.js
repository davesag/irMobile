import { INITIAL_STATE } from '..'
import clearKeys from '.'

const apiKey = 'some api key'
const apiSecret = 'some api secret'
const requireAuth = true

const state = { ...INITIAL_STATE, apiKey, apiSecret, requireAuth }
const expected = {
  ...state,
  apiKey: null,
  apiSecret: null,
  requireAuth: false,
  busy: true,
  balances: []
}

it('returns expected state', () => {
  expect(clearKeys(state)).toEqual(expected)
})
