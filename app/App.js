/**
 * @format
 */
import React from 'react'
import { Provider } from 'react-redux'

import AppMain from './AppMain'

import store from './services/store'

const App = () => (
  <Provider store={store}>
    <AppMain />
  </Provider>
)

export default App
