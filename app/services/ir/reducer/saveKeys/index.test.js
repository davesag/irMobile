import { INITIAL_STATE } from '..'
import saveKeys from '.'

const apiKey = 'some api key'
const apiSecret = 'some api secret'
const requireAuth = true

describe('if the keys changed', () => {
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
})

describe('if the keys did not change and there were balances', () => {
  const state = {
    ...INITIAL_STATE,
    apiKey,
    apiSecret,
    balances: ['some', 'data']
  }

  const expected = {
    ...state,
    requireAuth,
    busy: true
  }

  it('returns expected state', () => {
    expect(
      saveKeys(state, { payload: { apiKey, apiSecret, requireAuth } })
    ).toEqual(expected)
  })
})
