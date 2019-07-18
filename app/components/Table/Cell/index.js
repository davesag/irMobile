import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native-paper'

import styles from '../styles'

const Cell = ({ value, numeric, style }) =>
  numeric ? (
    <Text style={[styles.data, style]}>{value}</Text>
  ) : (
    <Text style={style}>{value}</Text>
  )

Cell.propTypes = {
  value: PropTypes.string.isRequired,
  numeric: PropTypes.bool,
  style: PropTypes.object
}

Cell.defaultProps = {
  numeric: false,
  style: {}
}

export default Cell
