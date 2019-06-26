import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Button, CheckBox, Input, Text } from 'react-native-elements'

import { keysShape } from '../../shapes'

import styles from './styles'

const cleanKey = key => key.replace(/[^a-z0-9\-]/gi, '')

class APIDetailsForm extends Component {
  static propTypes = {
    keys: PropTypes.shape(keysShape),
    requireAuth: PropTypes.bool,
    saving: PropTypes.bool,
    onSave: PropTypes.func.isRequired
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
      }
    }
  }

  updateField = field => text => {
    const value = cleanKey(text)
    if (value) {
      this.setState({ [field]: { value, error: null } })
    } else {
      this.setState({ [field]: { value, error: 'Required field' } })
    }
  }

  toggleField = field => () => {
    this.setState({ [field]: { value: !this.state[field].value } })
  }

  canBeSubmitted = () => {
    const { apiKey, apiSecret } = this.state
    return (
      apiKey.errors || apiSecret.errors || !apiKey.value || !apiSecret.value
    )
  }

  submit = () => {
    const { apiKey, apiSecret, requireAuth } = this.state
    this.props.onSave({
      apiKey: apiKey.value,
      apiSecret: apiSecret.value,
      requireAuth: requireAuth.value
    })
  }

  render() {
    const { apiKey, apiSecret, requireAuth } = this.state

    const { saving, onSave } = this.props
    const disabled = this.canBeSubmitted()

    return (
      <View style={styles.container}>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          inputStyle={styles.input}
          value={apiKey.value}
          label="apiKey"
          errorStyle={{ color: 'red' }}
          errorMessage={apiKey.error}
          onChangeText={this.updateField('apiKey')}
        />
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          inputStyle={styles.input}
          value={apiSecret.value}
          label="apiSecret"
          errorStyle={{ color: 'red' }}
          errorMessage={apiSecret.error}
          onChangeText={this.updateField('apiSecret')}
        />
        <CheckBox
          checked={requireAuth.value}
          onPress={this.toggleField('requireAuth')}
          title="Require passcode for each use"
        />
        <Button
          title="Save Keys"
          disabled={disabled || saving}
          loading={saving}
          onPress={this.submit}
        />
      </View>
    )
  }
}

export default APIDetailsForm
