import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import Header from './Header'
import Footer from './Footer'
import Row from './Row'

import styles from './styles'

const Table = ({
  body,
  header, // null or array of strings
  footer, // null or array of strings
  tableStyle
}) => {
  return (
    <View style={[styles.table, tableStyle]}>
      <Header data={header} />
      {body.map(row => (
        <Row data={row} key={row[0]} />
      ))}
      <Footer data={footer} />
    </View>
  )
}

Table.propTypes = {
  body: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  header: PropTypes.arrayOf(PropTypes.string),
  footer: PropTypes.arrayOf(PropTypes.string),
  tableStyle: PropTypes.object
}

Table.defaultProps = {
  tableStyle: null,
  header: null,
  footer: null
}

export default Table
