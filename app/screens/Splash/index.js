import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, Text } from 'react-native'

import { navigationShape } from '../../shapes'

import styles from './styles'

export class SplashScreen extends PureComponent {
  static navigationOptions = {
    title: 'Splash Screen'
  }

  static propTypes = {
    navigation: PropTypes.shape(navigationShape).isRequired
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Splash Screen</Text>
      </SafeAreaView>
    )
  }
}

export default SplashScreen
