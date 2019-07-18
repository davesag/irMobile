import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'

import Row from '../Row'

const Body = ({ data, makeKey }) => (
  <ScrollView>
    {data.map(row => (
      <Row
        key={`row-${row[0]}`}
        data={row}
        makeKey={(value, i) => makeKey(row[0], i)}
      />
    ))}
  </ScrollView>
)

Body.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  makeKey: PropTypes.func.isRequired
}

Body.defaultProps = {
  data: null
}

export default Body
