import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Text } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveKeys, clearKeys } from '../../services/ir/actions'
import makeNavigationOptions from '../../utils/makeNavigationOptions'

import { navigationShape, keysShape } from '../../shapes'

import APIDetailsForm from '../../components/APIDetailsForm'

import styles from './styles'

export class SettingsScreen extends Component {
  static navigationOptions = makeNavigationOptions('Settings', 'cog')

  static propTypes = {
    navigation: PropTypes.shape(navigationShape).isRequired,
    doSaveKeys: PropTypes.func.isRequired,
    doClearKeys: PropTypes.func.isRequired,
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
    const { keys, requireAuth, doSaveKeys, saving, doClearKeys } = this.props

    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }}>
          <View>
            <Text h3>Settings</Text>
            <Text style={styles.instructions}>
              An API key and secret are needed to interact with the Independent
              Reserve API.
            </Text>
            <Text style={styles.instructions}>
              To generate an API key and secret log into Independent Reserve, go
              to the Settings page, click &ldquo;API Keys&rdquo; and then click
              &ldquo;generate&rdquo;.
            </Text>
            <Text style={styles.instructions}>
              These keys are saved to your device and never sent to anyone apart
              from Independent Reserve.
            </Text>
          </View>
          <APIDetailsForm
            saving={saving}
            keys={keys}
            requireAuth={requireAuth}
            onSave={doSaveKeys}
            onClear={doClearKeys}
          />
        </KeyboardAwareScrollView>
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
  bindActionCreators({ doSaveKeys: saveKeys, doClearKeys: clearKeys }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreen)
