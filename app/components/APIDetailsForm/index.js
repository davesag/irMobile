import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Keyboard, View } from 'react-native'
import { Button, Switch, TextInput, Text, HelperText } from 'react-native-paper'
import { Formik, Field } from 'formik'

import { keysShape } from '../../shapes'

import styles from './styles'
import { validateKey, validateSecret } from './validation'

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

  render() {
    const { keys: keysProp, requireAuth, saving, onSave, onClear } = this.props
    const keys = keysProp || {}
    const hasKeys = Object.keys(keys).length !== 0

    return (
      <Formik
        initialValues={{ ...keys, requireAuth }}
        onSubmit={(values, actions) => {
          console.log('submit', values)
          onSave(values)
          Keyboard.dismiss()
        }}
        enableReinitialize={true}
        isInitialValid={hasKeys}
        validateOnBlur={true}
        validateOnChange={true}
      >
        {({
          values,
          touched,
          errors,
          dirty,
          handleChange,
          handleBlur,
          handleSubmit,
          ...props
        }) => {
          const hasErrors = Object.keys(errors).length !== 0
          const canNotBeSubmitted = hasErrors || !dirty || saving

          const handleChangeKey = value => {
            handleChange('apiKey')(cleanKey(value))
          }

          const handleChangeSecret = value => {
            handleChange('apiSecret')(cleanSecret(value))
          }
          const hasFieldErrors = ['apiKey', 'apiSecret'].reduce((acc, elem) => {
            acc[elem] = Boolean(errors[elem] && touched[elem])
            return acc
          }, {})

          return (
            <View style={styles.container}>
              <View>
                <Field
                  name="apiKey"
                  style={styles.input}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  label="apiKey"
                  disabled={saving}
                  error={hasFieldErrors.apiKey}
                  onChangeText={handleChangeKey}
                  onBlur={handleBlur('apiKey')}
                  onFocus={() => {
                    if (values.apiKey) handleChange('apiKey')(null)
                  }}
                  value={values.apiKey}
                  component={TextInput}
                  validate={validateKey}
                />
                <HelperText type="error" visible={hasFieldErrors.apiKey}>
                  {errors.apiKey}
                </HelperText>
              </View>
              <View>
                <Field
                  name="apiSecret"
                  style={styles.input}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  label="apiSecret"
                  disabled={saving}
                  error={hasFieldErrors.apiSecret}
                  onChangeText={handleChangeSecret}
                  onBlur={handleBlur('apiSecret')}
                  onFocus={() => {
                    if (values.apiSecret) handleChange('apiSecret')(null)
                  }}
                  value={values.apiSecret}
                  component={TextInput}
                  validate={validateSecret}
                />
                <HelperText type="error" visible={hasFieldErrors.apiSecret}>
                  {errors.apiSecret}
                </HelperText>
              </View>
              <View style={styles.switchWrapper}>
                <Switch
                  value={values.requireAuth}
                  onValueChange={handleChange('requireAuth')}
                />
                <Text style={styles.switchLabel}>
                  Require passcode for each use
                </Text>
              </View>
              <View style={styles.buttons}>
                <Button
                  style={styles.saveButton}
                  mode="contained"
                  disabled={canNotBeSubmitted}
                  onPress={handleSubmit}
                  accessibilityLabel="Save Keys"
                >
                  Save Keys
                </Button>
                <Button
                  style={styles.clearButton}
                  mode="outlined"
                  onPress={onClear}
                  disabled={saving}
                  accessibilityLabel="Clear Keys"
                >
                  Clear Keys
                </Button>
              </View>
            </View>
          )
        }}
      </Formik>
    )
  }
}

export default APIDetailsForm
