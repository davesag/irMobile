const reactNavigation = jest.genMockFromModule('react-navigation')

const mockStackNavigator = jest.fn()
const mockTabNavigator = jest.fn()
const mockSwitchNavigator = jest.fn()
const mockAppContainer = () => null

reactNavigation.createStackNavigator = jest.fn(() => mockStackNavigator)
reactNavigation.createAppContainer = jest.fn(() => mockAppContainer)
reactNavigation.createBottomTabNavigator = jest.fn(() => mockTabNavigator)
reactNavigation.createSwitchNavigator = jest.fn(() => mockSwitchNavigator)
reactNavigation.getActiveChildNavigationOptions = jest.fn()

module.exports = reactNavigation
