import ir from 'ir-api'

import getBalances from './getBalances'

const getApi = ({ apiKey, apiSecret } = {}) => {
  if (!apiKey || !apiSecret) throw new Error('Missing API Credentials')

  const api = ir(apiKey, apiSecret, { timeout: 100 })

  return {
    getBalances: getBalances(api)
  }
}

export default getApi
