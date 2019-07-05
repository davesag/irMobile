import Icon from 'react-native-vector-icons/FontAwesome5'
import makeNavigationOptions from './makeNavigationOptions'

jest.mock('react-native-vector-icons/FontAwesome5')
Icon.mockImplementation(() => null)

let navigationOptions
describe('given a title', () => {
  const title = 'a title'

  describe('given an icon name', () => {
    const iconName = 'an icon name'
    const tintColor = 'blue'

    beforeAll(() => {
      navigationOptions = makeNavigationOptions(title, iconName)()
      navigationOptions.tabBarIcon({ tintColor })
    })

    it('attached a title', () => {
      expect(navigationOptions).toHaveProperty('title', title)
    })

    it('attached a tabBarIcon', () => {
      expect(navigationOptions).toHaveProperty(
        'tabBarIcon',
        expect.any(Function)
      )
    })

    it('attached the tabBarOptions', () => {
      expect(navigationOptions).toHaveProperty('tabBarOptions')
    })
  })

  describe('given no icon name', () => {
    beforeAll(() => {
      navigationOptions = makeNavigationOptions(title)()
    })

    it('attached a title', () => {
      expect(navigationOptions).toHaveProperty('title', title)
    })

    it('did not attach a tabBarIcon', () => {
      expect(navigationOptions).not.toHaveProperty('tabBarIcon')
    })

    it('did not attach the tabBarOptions', () => {
      expect(navigationOptions).not.toHaveProperty('tabBarOptions')
    })
  })
})

describe('given neither a name nor icon name', () => {
  it('returned undefined', () => {
    expect(makeNavigationOptions()).toEqual(undefined)
  })
})
