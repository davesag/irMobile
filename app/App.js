/**
 * @format
 */
import React from 'react'
import { Provider } from 'react-redux'
import { Text } from 'react-native'
import { Provider as ThemeProvider } from 'react-native-paper'
import FlashMessage from 'react-native-flash-message'

import AppMain from './AppMain'

import store from './services/store'
import theme from './theme'

// TODO: work out a better way to approach this.
Text.allowFontScaling = false

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppMain />
      <FlashMessage position="bottom" />
    </ThemeProvider>
  </Provider>
)

export default App
