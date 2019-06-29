import keysChanged from './keysChanged'

const apiKey = '12345'
const apiSecret = 'abcde'

const state = { apiKey, apiSecret }

describe('if the apiKey changed', () => {
  it('returns true', () => {
    expect(keysChanged(state, { apiKey: 'new-key', apiSecret })).toBe(true)
  })
})

describe('if the apiSecret changed', () => {
  it('returns true', () => {
    expect(keysChanged(state, { apiKey, apiSecret: 'new secret' })).toBe(true)
  })
})

describe('if neither changed', () => {
  it('returns false', () => {
    expect(keysChanged(state, { apiKey, apiSecret })).toBe(false)
  })
})
