import ir from 'ir-api'

import getApi from '.'
import getBalances from './getBalances'

jest.mock('./getBalances')
jest.mock('ir-api')

const apiKey = 'a key'
const apiSecret = ' a secret'

describe('when credentials are supplied', () => {
  const irAPI = {}
  ir.mockReturnValue(irAPI)
  const getBalancesFn = () => {}
  getBalances.mockReturnValue(getBalancesFn)

  const api = getApi({ apiKey, apiSecret })

  it('called ir with the key and secret', () => {
    expect(ir).toHaveBeenCalledWith(apiKey, apiSecret, { timeout: 100 })
  })

  it('calls getBalances with an api', () => {
    expect(getBalances).toHaveBeenCalledWith(irAPI)
  })

  it('has a getBalances function', () => {
    expect(api).toHaveProperty('getBalances', getBalancesFn)
  })
})

describe('when nothing is supplied', () => {
  it('throws', () => {
    expect(() => getApi()).toThrow('Missing API Credentials')
  })
})

describe('when key but not secret is supplied', () => {
  it('throws', () => {
    expect(() => getApi({ apiKey })).toThrow('Missing API Credentials')
  })
})
