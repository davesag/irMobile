import navigationOptions from './navigationOptions'

const expected = {
  header: null,
  title: null
}

it('returns the expected', () => {
  expect(navigationOptions()).toEqual(expected)
})
