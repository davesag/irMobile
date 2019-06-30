import { getKeys, getMessage } from './selectors'

describe('#getKeys', () => {
  const apiKey = 'some api key'
  const apiSecret = 'some api secret'
  const requireAuth = true

  const ir = { apiKey, apiSecret, requireAuth }

  const state = { ir }
  it('returns the keys', () => {
    expect(getKeys(state)).toEqual(ir)
  })
})

describe('#getMessage', () => {
  const message = 'some message'

  const ir = { message }

  const state = { ir }
  it('returns the message', () => {
    expect(getMessage(state)).toEqual(message)
  })
})
