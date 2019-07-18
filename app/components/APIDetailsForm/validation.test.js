import { validateKey, validateSecret } from './validation'

describe('#validateKey', () => {
  it('returns an error when key is blank', () => {
    expect(validateKey('')).toEqual('API Key is Required')
  })

  it('returns undefined when key exists', () => {
    expect(validateKey('some-key')).toBeUndefined()
  })
})

describe('#validateSecret', () => {
  it('returns an error when secret is blank', () => {
    expect(validateSecret('')).toEqual('API Secret is Required')
  })

  it('returns undefined when secret exists', () => {
    expect(validateSecret('some-secret')).toBeUndefined()
  })
})
