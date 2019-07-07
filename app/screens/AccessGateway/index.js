import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { withTheme } from 'react-native-elements'

import { navigationShape } from '../../shapes'

import styles from './styles'

export class AccessGatewayScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape(navigationShape).isRequired,
    hasKeys: PropTypes.bool,
    loading: PropTypes.bool
  }

  static defaultProps = {
    hasKeys: false,
    loading: true
  }

  componentDidUpdate() {
    const {
      navigation: { navigate },
      hasKeys,
      loading
    } = this.props
    if (!loading)
      if (hasKeys) navigate('LoggedInStackNavigator')
      else navigate('LoggedOutStackNavigator')
  }

  render() {
    const {
      navigation: { getParam },
      theme: { colors }
    } = this.props
    const backgroundColor = getParam('colour', colors.startup)
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <ActivityIndicator />
      </View>
    )
  }
}

export const mapStateToProps = ({ ir: { apiKey, apiSecret, busy } }) => ({
  hasKeys: Boolean(apiKey && apiSecret),
  loading: busy
})

export default connect(
  mapStateToProps,
  null
)(withTheme(AccessGatewayScreen))
