import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, View } from 'react-native'
import { Text } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveKeys } from '../../services/ir/actions'

import { navigationShape, keysShape } from '../../shapes'

import APIDetailsForm from '../../components/APIDetailsForm'

import styles from './styles'

export class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Settings'
  }

  static propTypes = {
    navigation: PropTypes.shape(navigationShape).isRequired,
    saveKeys: PropTypes.func.isRequired,
    keys: PropTypes.shape(keysShape),
    requireAuth: PropTypes.bool,
    saving: PropTypes.bool
  }

  static defaultProps = {
    keys: null,
    requireAuth: false,
    saving: false
  }

  render() {
    const { keys, requireAuth, saveKeys, saving } = this.props

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text h3>Supply your credentials</Text>
          <Text>
            These keys are needed to interact with the Independent Reserve API
          </Text>
        </View>
        <APIDetailsForm
          saving={saving}
          keys={keys}
          requireAuth={requireAuth}
          onSave={saveKeys}
        />
      </SafeAreaView>
    )
  }
}

export const mapStateToProps = ({
  ir: { apiKey, apiSecret, requireAuth, busy }
}) => ({
  keys: apiKey && apiSecret ? { apiKey, apiSecret } : null,
  requireAuth,
  saving: busy
})

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ saveKeys }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)