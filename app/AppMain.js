/**
 * @format
 */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import Config from 'react-native-config'
import { View } from 'react-native'

import { restoreKeys } from './services/ir/actions'

import SplashScreen from './screens/Splash'
import splashNav from './screens/Splash/navigationOptions'

// Establish stack navigator
const StackNavigator = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
      navigationOptions: splashNav
    }
  },
  { mode: 'modal' }
)

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
