import React from 'react'
import PropTypes from 'prop-types'
import { DataTable, withTheme } from 'react-native-paper'

import Cell from '../Cell'

import styles from '../styles'

const Footer = ({ data, theme, makeKey }) =>
  data ? (
    <DataTable.Row style={styles.footerStyle(theme)}>
      {data.map((value, i) => {
        const align = i === data.length - 1 ? 'right' : undefined

        return (
          <DataTable.Title
            key={makeKey(value, i)}
            style={styles.cellStyle(i, data, theme, align)}
          >
            <Cell value={value} numeric={i !== 0} />
          </DataTable.Title>
        )
      })}
    </DataTable.Row>
  ) : null

Footer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  theme: PropTypes.object.isRequired,
  makeKey: PropTypes.func.isRequired
}

Footer.defaultProps = {
  data: null
}

export default withTheme(Footer)
