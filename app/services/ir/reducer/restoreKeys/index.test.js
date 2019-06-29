import { INITIAL_STATE } from '..'
import restoreKeys from '.'

const state = { ...INITIAL_STATE }
const expected = { ...state, busy: true }

it('returns expected state', () => {
  expect(restoreKeys(state)).toEqual(expected)
})
