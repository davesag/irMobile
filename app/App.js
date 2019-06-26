/**
 * @format
 */
import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-native-elements'

import AppMain from './AppMain'

import store from './services/store'
import theme from './theme'

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppMain />
    </ThemeProvider>
  </Provider>
)

export default App
