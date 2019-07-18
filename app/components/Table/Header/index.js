import React from 'react'
import PropTypes from 'prop-types'
import { DataTable, withTheme } from 'react-native-paper'

import Cell from '../Cell'

import styles from '../styles'

const Header = ({ data, theme, makeKey }) =>
  data ? (
    <DataTable.Header style={styles.headerStyle(theme)}>
      {data.map((value, i) => (
        <DataTable.Title
          key={makeKey(value, i)}
          style={styles.cellStyle(i, data, theme)}
        >
          <Cell value={value} />
        </DataTable.Title>
      ))}
    </DataTable.Header>
  ) : null

Header.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  theme: PropTypes.object.isRequired,
  makeKey: PropTypes.func.isRequired
}

Header.defaultProps = {
  data: null
}

export default withTheme(Header)
