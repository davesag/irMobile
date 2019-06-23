import { getKeys } from './selectors'

describe('#getKeys', () => {
  const apiKey = 'some api key'
  const apiSecret = 'some api secret'
  const ir = { apiKey, apiSecret }

  const state = { ir }
  it('returns the keys', () => {
    expect(getKeys(state)).toEqual(ir)
  })
})
