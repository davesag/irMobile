import { INITIAL_STATE } from '..'
import getBalancesFail from './fail'

const balances = [
  {
    currency: 'Eth',
    balance: 100,
    fiatPrice: 433.49,
    fiatValue: 43349
  }
]

const message = 'oops'
const error = new Error(message)
const state = { ...INITIAL_STATE, busy: true, balances }
const expected = {
  ...state,
  busy: false,
  error,
  message,
  balances: []
}

it('returns expected state', () => {
  expect(getBalancesFail(state, { payload: error, isError: true })).toEqual(
    expected
  )
})
