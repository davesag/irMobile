/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
// import Config from 'react-native-config'
import { View } from 'react-native'

import SplashScreen from './screens/Splash'

import store from './services/store'

// Establish stack navigator
const StackNavigator = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
      navigationOptions: () => ({
        header: null,
        title: null
      })
    }
  },
  { mode: 'modal' }
)

const AppContainer = createAppContainer(StackNavigator)

const App = () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <AppContainer />
    </View>
  </Provider>
)

export default App
