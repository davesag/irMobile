import { cleanKey, cleanSecret } from './clean'

describe('#cleanKey', () => {
  const key = '1x2s3r4y5=6/7 8?9+0.-zakblctd@e!'
  const expected = '1234567890-abcde'

  it('returns a cleaned key', () => {
    expect(cleanKey(key)).toEqual(expected)
  })
})

describe('#cleanSecret', () => {
  const secret = '1x2s3r4y5=6/7 8?9+0.-zakblctd@e!'
  const expected = '1234567890abcde'

  it('returns a cleaned secret', () => {
    expect(cleanSecret(secret)).toEqual(expected)
  })
})
