import makeNavigationOptions from './makeNavigationOptions'

let navigationOptions

describe('utils/makeNavigationOptions', () => {
  describe('given no options', () => {
    const expected = {
      header: null,
      title: null
    }

    beforeAll(() => {
      navigationOptions = makeNavigationOptions()
    })

    it('returns the expected fields', () => {
      expect(navigationOptions()).toEqual(expected)
    })
  })

  describe('given header and title', () => {
    const header = 'a header'
    const title = 'a title'

    describe('only', () => {
      const expected = {
        header,
        title
      }

      beforeAll(() => {
        navigationOptions = makeNavigationOptions({ header, title })
      })

      it('returns the expected fields', () => {
        expect(navigationOptions()).toEqual(expected)
      })
    })

    describe('with extras', () => {
      const extras = { some: 'other field' }
      const expected = {
        header,
        title,
        ...extras
      }

      beforeAll(() => {
        navigationOptions = makeNavigationOptions({ header, title, ...extras })
      })

      it('returns the expected fields', () => {
        expect(navigationOptions()).toEqual(expected)
      })
    })
  })
})
