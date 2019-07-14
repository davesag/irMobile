import handlers from './handlers'

const mockChange = jest.fn()
const handleChange = jest.fn(() => mockChange)

const resetStubs = () => {
  handleChange.mockClear()
  mockChange.mockClear()
}

const values = {
  apiKey: '123456-abcde',
  apiSecret: '123456abcde'
}

const doTest = thing => {
  const change = `handleChange${thing}`
  const focus = `handleFocus${thing}`
  const v = `api${thing}`

  describe(`#${change}`, () => {
    const h = handlers({ values, handleChange })
    const changeFn = h[change]
    const value = values[v]

    beforeAll(() => {
      changeFn(value)
    })

    afterAll(resetStubs)

    it(`called handleChange with "${v}"`, () => {
      expect(handleChange).toHaveBeenCalledWith(v)
    })

    it('called the actual change handler with the key', () => {
      expect(mockChange).toHaveBeenCalledWith(value)
    })
  })

  describe(`#${focus}`, () => {
    describe('when there there is already something in the field', () => {
      const h = handlers({ values, handleChange })
      const focusFn = h[focus]

      beforeAll(() => {
        focusFn()
      })

      afterAll(resetStubs)

      it(`called handleChange with ${v}`, () => {
        expect(handleChange).toHaveBeenCalledWith(v)
      })

      it('called the actual change handler with null', () => {
        expect(mockChange).toHaveBeenCalledWith(null)
      })
    })

    describe('when there there is nothing in the field', () => {
      const h = handlers({ values: {}, handleChange })
      const focusFn = h[focus]

      beforeAll(() => {
        focusFn()
      })

      afterAll(resetStubs)

      it('did not call handleChange', () => {
        expect(handleChange).not.toHaveBeenCalled()
      })
    })
  })
}

;['Key', 'Secret'].forEach(doTest)
