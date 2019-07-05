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

import { restoreKeys } from './services/ir/actions'

import About from './screens/About'
import Balances from './screens/Balances'
import Settings from './screens/Settings'

import styles from './styles'
import useStorybook from './utils/useStorybook'
import navigationOptions from './utils/tabNavigationOptions'

const navBar = useStorybook({ Balances, Settings, About })
const TabNavigator = createBottomTabNavigator(navBar, { navigationOptions })
const StackNavigator = createStackNavigator({ TabNavigator })
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
