import { INITIAL_STATE } from '..'
import clearKeysSuccess from './success'

const state = { ...INITIAL_STATE, busy: true }

const expected = {
  ...state,
  busy: false
}

it('returns expected state', () => {
  expect(clearKeysSuccess(state)).toEqual(expected)
})
