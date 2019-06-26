import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-native'
import { Text } from 'react-native-elements'

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
        <Text h3>Splash Screen</Text>
      </SafeAreaView>
    )
  }
}

export default SplashScreen
