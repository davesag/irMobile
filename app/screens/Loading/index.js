import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import { navigationShape, keysShape } from '../../shapes'

import styles from './styles'

export class LoadingScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape(navigationShape).isRequired,
    keys: PropTypes.shape(keysShape),
    loading: PropTypes.bool
  }

  static defaultProps = {
    keys: null,
    loading: true
  }

  componentDidUpdate(prevProps) {
    const {
      navigation: { navigate },
      keys,
      loading
    } = this.props
    if (!loading)
      if (keys) navigate('LoggedInStackNavigator')
      else navigate('LoggedOutStackNavigator')
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }
}

export const mapStateToProps = ({ ir: { apiKey, apiSecret, busy } }) => ({
  keys: apiKey && apiSecret ? { apiKey, apiSecret } : null,
  loading: busy
})

export default connect(
  mapStateToProps,
  null
)(LoadingScreen)
