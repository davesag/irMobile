import { INITIAL_STATE } from '..'
import saveKeysSuccess from './success'

const apiKey = 'some api key'
const apiSecret = 'some api secret'
const requireAuth = true

const state = { ...INITIAL_STATE, busy: true, apiKey, apiSecret, requireAuth }
const expected = {
  ...state,
  busy: false
}

it('returns expected state', () => {
  expect(saveKeysSuccess(state)).toEqual(expected)
})
