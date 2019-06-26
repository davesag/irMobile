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
import Config from 'react-native-config'
import { View } from 'react-native'

import StoryBookUI from '../storybook'

import { restoreKeys } from './services/ir/actions'

import SplashScreen from './screens/Splash'
import LoginScreen from './screens/Login'

const useStorybook = nav =>
  Config.STORYBOOK === 'true'
    ? /* istanbul ignore next */ {
        ...nav,
        StoryBook: StoryBookUI
      }
    : nav

const navBar = useStorybook({
  Splash: SplashScreen,
  Login: LoginScreen
})

const MainNavigator = createBottomTabNavigator(navBar)

const StackNavigator = createStackNavigator({
  MainNavigator: MainNavigator,
  Splash: SplashScreen,
  Login: LoginScreen
})

const AppContainer = createAppContainer(StackNavigator)

// TODO: Add https://github.com/joinspontaneous/react-native-loading-spinner-overlay
class AppMain extends PureComponent {
  static propTypes = {
    doRestoreKeys: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.doRestoreKeys()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
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
