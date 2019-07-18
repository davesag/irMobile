import React from 'react'
import { View } from 'react-native'
import { Button, Switch, TextInput, Text, HelperText } from 'react-native-paper'
import { Field } from 'formik'

import { validateKey, validateSecret } from './validation'
import handlers from './handlers'

import styles from './styles'

const form = ({ saving, onClear }) => ({
  values,
  touched,
  errors,
  dirty,
  handleChange,
  handleBlur,
  handleSubmit
}) => {
  const hasErrors = Object.keys(errors).length !== 0
  const canNotBeSubmitted = hasErrors || !dirty || saving
  const {
    handleChangeKey,
    handleChangeSecret,
    handleFocusKey,
    handleFocusSecret
  } = handlers({ values, handleChange })

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
          onFocus={handleFocusKey}
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
          onFocus={handleFocusSecret}
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
        <Text style={styles.switchLabel}>Require passcode for each use</Text>
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
}

export default form
