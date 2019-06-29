/**
 * @format
 */
import React from 'react'
import { Provider } from 'react-redux'
import { Text } from 'react-native'
import { ThemeProvider } from 'react-native-elements'

import AppMain from './AppMain'

import store from './services/store'
import theme from './theme'

// TODO: work out a better way to approach this.
Text.allowFontScaling = false

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppMain />
    </ThemeProvider>
  </Provider>
)

export default App
