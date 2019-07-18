import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, View } from 'react-native'
import { Text } from 'react-native-paper'
import makeNavigationOptions from '../../utils/makeNavigationOptions'

import { navigationShape } from '../../shapes'

import styles from './styles'

export class AboutScreen extends PureComponent {
  static navigationOptions = makeNavigationOptions('About', 'info')

  static propTypes = {
    navigation: PropTypes.shape(navigationShape).isRequired
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.instructions}>
            Wonderfully written about-text goes here.
          </Text>
          <Text style={styles.instructions}>
            Nice things about the people who helped make it.
          </Text>
        </View>
      </SafeAreaView>
    )
  }
}

export default AboutScreen
