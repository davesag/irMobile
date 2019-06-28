import { INITIAL_STATE } from '..'
import getBalancesSuccess from './success'

const balances = [
  {
    currency: 'Eth',
    balance: 100,
    fiatPrice: 433.49,
    fiatValue: 43349
  }
]

const state = { ...INITIAL_STATE, busy: true }
const expected = {
  ...state,
  busy: false,
  balances
}

it('returns expected state', () => {
  expect(getBalancesSuccess(state, { payload: balances })).toEqual(expected)
})
