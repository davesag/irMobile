import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Text } from 'react-native-elements'

import styles from '../styles'

const Header = ({ data }) =>
  data ? (
    <View style={styles.row}>
      {data.map(text => (
        <View key={text} style={styles.headerCell}>
          <Text style={styles.header}>{text}</Text>
        </View>
      ))}
    </View>
  ) : null

Header.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string)
}

Header.defaultProps = {
  data: null
}

export default Header
