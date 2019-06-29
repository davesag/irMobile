import fetchBaseData from './fetchBaseData'

const validPrimaryCurrencyCodes = 'codes'
const fxRates = 'rates'
const accounts = 'accounts'

const api = {
  getValidPrimaryCurrencyCodes: jest
    .fn()
    .mockResolvedValue(validPrimaryCurrencyCodes),
  getFxRates: jest.fn().mockResolvedValue(fxRates),
  getAccounts: jest.fn().mockResolvedValue(accounts)
}

const expected = [validPrimaryCurrencyCodes, fxRates, accounts]

let result

beforeAll(async () => {
  result = await fetchBaseData(api)
})

it('returned the expected result', () => {
  expect(result).toEqual(expected)
})
