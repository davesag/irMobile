import React from 'react'
import PropTypes from 'prop-types'
import { DataTable, withTheme } from 'react-native-paper'

import Cell from '../Cell'

import styles from '../styles'

const Row = ({ data, theme, makeKey }) =>
  data ? (
    <DataTable.Row style={styles.rowStyle(theme)}>
      {data.map((value, i) => (
        <DataTable.Cell
          style={styles.cellStyle(i, data, theme)}
          numeric={i !== 0}
          key={makeKey(value, i)}
        >
          <Cell value={value} numeric={i !== 0} />
        </DataTable.Cell>
      ))}
    </DataTable.Row>
  ) : null

Row.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  theme: PropTypes.object.isRequired,
  makeKey: PropTypes.func.isRequired
}

export default withTheme(Row)
