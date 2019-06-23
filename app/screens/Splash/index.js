import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

export class SplashScreen extends PureComponent {
  /* istanbul ignore next */
  static navigationOptions = {
    title: 'Independent Reserve'
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Independent Reserve</Text>
      </View>
    )
  }
}

export default SplashScreen
