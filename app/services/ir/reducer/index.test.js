import cc from 'camelcase'

import { handlers } from '.'
import { ACTIONS } from '../actions'

describe('IR Reducer', () => {
  const doTest = type => {
    describe(`#${type}`, () => {
      it('has a handler function', () => {
        expect(handlers).toHaveProperty(type, expect.any(Function))
      })

      it('the handler function has the correct name', () => {
        expect(handlers[type]).toHaveProperty('name', cc(type))
      })
    })
  }

  ACTIONS.forEach(doTest)
})
