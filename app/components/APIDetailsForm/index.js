import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Keyboard, View } from 'react-native'
import { Button, CheckBox, Input } from 'react-native-elements'

import { keysShape } from '../../shapes'

import styles from './styles'

const cleanKey = key => key.replace(/[^a-f0-9-]/gi, '')
const cleanSecret = key => key.replace(/[^a-f0-9]/gi, '')

class APIDetailsForm extends Component {
  static propTypes = {
    keys: PropTypes.shape(keysShape),
    requireAuth: PropTypes.bool,
    saving: PropTypes.bool,
    onSave: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  }

  static defaultProps = {
    requireAuth: false,
    keys: null,
    saving: false
  }

  constructor(props) {
    super(props)

    this.state = {
      apiKey: {
        value: props.keys ? props.keys.apiKey : null,
        error: null
      },
      apiSecret: {
        value: props.keys ? props.keys.apiSecret : null,
        error: null
      },
      requireAuth: {
        value: props.requireAuth
      },
      dirty: false
    }
  }

  updateField = field => value => {
    if (value) {
      this.setState({ [field]: { value, error: null }, dirty: true })
    } else {
      this.setState({
        [field]: { value, error: 'Required field' },
        dirty: true
      })
    }
  }

  toggleField = field => () => {
    this.setState({ [field]: { value: !this.state[field].value }, dirty: true })
    Keyboard.dismiss()
  }

  updateApiKey = text => {
    this.updateField('apiKey')(cleanKey(text))
  }

  updateApiSecret = text => {
    this.updateField('apiSecret')(cleanSecret(text))
  }

  canNotBeSubmitted = () => {
    const { apiKey, apiSecret, dirty } = this.state
    return (
      !dirty ||
      apiKey.errors ||
      apiSecret.errors ||
      !apiKey.value ||
      !apiSecret.value
    )
  }

  submit = () => {
    const { apiKey, apiSecret, requireAuth } = this.state
    this.setState({ dirty: false })
    this.props.onSave({
      apiKey: apiKey.value,
      apiSecret: apiSecret.value,
      requireAuth: requireAuth.value
    })
    Keyboard.dismiss()
  }

  clear = () => {
    const { onClear } = this.props
    this.setState({
      apiKey: { value: null, error: null },
      apiSecret: { value: null, error: null },
      requireAuth: { value: false },
      dirty: true
    })
    onClear()
  }

  render() {
    const { apiKey, apiSecret, requireAuth } = this.state
    const { saving } = this.props
    const disabled = this.canNotBeSubmitted()

    return (
      <View style={styles.container}>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          clearTextOnFocus
          inputStyle={styles.input}
          value={apiKey.value}
          label="apiKey"
          errorStyle={{ color: 'red' }}
          errorMessage={apiKey.error}
          onChangeText={this.updateApiKey}
          onSubmitEditing={Keyboard.dismiss}
        />
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          clearTextOnFocus
          inputStyle={styles.input}
          value={apiSecret.value}
          label="apiSecret"
          errorStyle={{ color: 'red' }}
          errorMessage={apiSecret.error}
          onChangeText={this.updateApiSecret}
          onSubmitEditing={Keyboard.dismiss}
        />
        <CheckBox
          checked={requireAuth.value}
          onPress={this.toggleField('requireAuth')}
          title="Require passcode for each use"
        />
        <View style={styles.buttons}>
          <Button
            style={styles.saveButton}
            title="Save Keys"
            disabled={disabled || saving}
            loading={saving}
            onPress={this.submit}
          />
          <Button
            style={styles.clearButton}
            type="outline"
            title="Clear Keys"
            disabled={saving || (!apiSecret.value && !apiKey.value)}
            onPress={this.clear}
          />
        </View>
      </View>
    )
  }
}

export default APIDetailsForm
