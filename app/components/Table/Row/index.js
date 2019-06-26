import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Text } from 'react-native-elements'

import styles from '../styles'

const Row = ({ data, makeKey }) => (
  <View style={styles.row}>
    {data.map((datum, i) => (
      <View key={makeKey(datum, i)} style={styles.dataCell}>
        <Text style={styles.data}>{datum}</Text>
      </View>
    ))}
  </View>
)

Row.propTypes = {
  data: PropTypes.array.isRequired,
  makeKey: PropTypes.func
}

Row.defaultProps = {
  makeKey: (text, index) => `${text}-${index}`
}

export default Row
