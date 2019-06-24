const reactNavigation = jest.genMockFromModule('react-navigation')

const mockStackNavigator = jest.fn()
const mockAppContainer = () => null

reactNavigation.createStackNavigator = jest.fn(() => mockStackNavigator)
reactNavigation.createAppContainer = jest.fn(() => mockAppContainer)

module.exports = reactNavigation
