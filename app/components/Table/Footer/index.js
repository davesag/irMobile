import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Text } from 'react-native-elements'

import styles from '../styles'

const makeKey = (text, index) => `${text}-${index}`

const Footer = ({ data }) =>
  data ? (
    <View style={styles.row}>
      {data.map((text, i) => (
        <View key={makeKey(text, i)} style={styles.footerCell}>
          <Text style={styles.footer}>{text}</Text>
        </View>
      ))}
    </View>
  ) : null

Footer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string)
}

Footer.defaultProps = {
  data: null
}

export default Footer
