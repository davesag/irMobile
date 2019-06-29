import { INITIAL_STATE } from '..'
import restoreKeysSuccess from './success'

const apiKey = 'some api key'
const apiSecret = 'some api secret'
const requireAuth = true
const state = { ...INITIAL_STATE, busy: true }

describe('if there were keys to restore', () => {
  const expected = {
    ...state,
    busy: false,
    apiKey,
    apiSecret,
    requireAuth
  }

  it('returns expected state', () => {
    expect(
      restoreKeysSuccess(state, { payload: { apiKey, apiSecret, requireAuth } })
    ).toEqual(expected)
  })
})

describe('if there were no keys to restore', () => {
  const expected = {
    ...state,
    busy: false,
    apiKey: null,
    apiSecret: null,
    requireAuth: false
  }

  it('returns expected state', () => {
    expect(restoreKeysSuccess(state, { payload: null })).toEqual(expected)
  })
})
