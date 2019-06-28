import { INITIAL_STATE } from '..'
import getBalances from '.'

const state = { ...INITIAL_STATE }

const expected = {
  ...state,
  busy: true
}

it('returns expected state', () => {
  expect(getBalances(state)).toEqual(expected)
})
