/**
 * @format
 */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import { restoreKeys } from './services/ir/actions'

import About from './screens/About'
import Balances from './screens/Balances'
import AccessGateway from './screens/AccessGateway'
import Settings from './screens/Settings'

import styles from './styles'
import useStorybook from './utils/useStorybook'
import navigationOptions from './utils/tabNavigationOptions'

const loggedInNavBar = useStorybook({ Balances, Settings, About })
const LoggedInTabNavigator = createBottomTabNavigator(loggedInNavBar, {
  navigationOptions
})
const LoggedInStackNavigator = createStackNavigator({ LoggedInTabNavigator })

const loggedOutNavBar = useStorybook({ Settings, About })
const LoggedOutTabNavigator = createBottomTabNavigator(loggedOutNavBar, {
  navigationOptions
})
const LoggedOutStackNavigator = createStackNavigator({ LoggedOutTabNavigator })

const MainNavigator = createSwitchNavigator(
  { AccessGateway, LoggedInStackNavigator, LoggedOutStackNavigator },
  { initialRouteName: 'AccessGateway' }
)

const AppContainer = createAppContainer(MainNavigator)

class AppMain extends PureComponent {
  static propTypes = {
    doRestoreKeys: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.doRestoreKeys()
    SplashScreen.hide()
  }

  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    )
  }
}

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ doRestoreKeys: restoreKeys }, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(AppMain)
