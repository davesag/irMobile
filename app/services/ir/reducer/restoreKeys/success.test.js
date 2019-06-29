import { INITIAL_STATE } from '..'
import restoreKeysSuccess from './success'

const apiKey = 'some api key'
const apiSecret = 'some api secret'
const requireAuth = true
const state = { ...INITIAL_STATE, busy: true }

describe('if there were keys to restore', () => {
  describe('if the keys changed', () => {
    const expected = {
      ...state,
      busy: false,
      apiKey,
      apiSecret,
      requireAuth
    }

    it('returns expected state', () => {
      expect(
        restoreKeysSuccess(state, {
          payload: { apiKey, apiSecret, requireAuth }
        })
      ).toEqual(expected)
    })
  })

  describe('if there was a balance and the keys did not change', () => {
    const unusualState = {
      ...state,
      apiKey,
      apiSecret,
      balances: ['some', 'balance']
    }
    const expected = {
      ...unusualState,
      busy: false,
      requireAuth
    }

    it('returns expected state', () => {
      expect(
        restoreKeysSuccess(unusualState, {
          payload: { apiKey, apiSecret, requireAuth }
        })
      ).toEqual(expected)
    })
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
