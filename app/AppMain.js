/**
 * @format
 */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import StoryBookUI from '../storybook'

import { restoreKeys } from './services/ir/actions'

import BalancesScreen from './screens/Balances'
import SettingsScreen from './screens/Settings'

import styles from './styles'

const useStorybook = nav =>
  process.env.NODE_ENV === 'development'
    ? /* istanbul ignore next */ {
        ...nav,
        StoryBook: StoryBookUI
      }
    : nav

const navBar = useStorybook({
  Balances: BalancesScreen,
  Settings: SettingsScreen
})

const MainNavigator = createBottomTabNavigator(navBar)

const StackNavigator = createStackNavigator({
  MainNavigator: MainNavigator,
  Balances: BalancesScreen,
  Settings: SettingsScreen
})

const AppContainer = createAppContainer(StackNavigator)

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
