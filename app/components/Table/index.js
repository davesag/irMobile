import React from 'react'
import PropTypes from 'prop-types'
import { DataTable, withTheme } from 'react-native-paper'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

import styles from './styles'

const Table = ({ body, header, footer, tableStyle, theme }) => {
  const [makeBodyKey, makeFooterKey] = header
    ? [
        (value, i) => `row-${value}-${header[i]}`,
        (value, i) => `footer-${header[i]}`
      ]
    : [(value, i) => `row-${value}-${i}`, (value, i) => `footer-${i}`]

  return (
    <DataTable
      style={[
        tableStyle,
        {
          borderColor: theme.colors.tableBorderColor
        }
      ]}
    >
      <Header data={header} makeKey={(value, i) => `header-${value}`} />
      <Body data={body} makeKey={makeBodyKey} />
      <Footer data={footer} makeKey={makeFooterKey} />
    </DataTable>
  )
}

Table.propTypes = {
  theme: PropTypes.object.isRequired,
  body: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  header: PropTypes.arrayOf(PropTypes.string).isRequired,
  footer: PropTypes.arrayOf(PropTypes.string).isRequired,
  tableStyle: PropTypes.object
}

Table.defaultProps = {
  tableStyle: null
}

export default withTheme(Table)
