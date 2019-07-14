import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { SafeAreaView } from 'react-native'

import APIDetailsForm from '.'

const keys = {
  apiKey: '1234567890',
  apiSecret: 'abcd123'
}

const onClear = () => {
  console.log('Cleared the form')
}

const onSave = () => {
  console.log('Saved the form')
}

storiesOf('APIDetailsForm', module)
  .add('empty', () => (
    <SafeAreaView>
      <APIDetailsForm onSave={onSave} onClear={onClear} />
    </SafeAreaView>
  ))
  .add('with values', () => (
    <SafeAreaView>
      <APIDetailsForm
        keys={keys}
        requireAuth={true}
        onSave={onSave}
        onClear={onClear}
      />
    </SafeAreaView>
  ))
  .add('saving', () => (
    <SafeAreaView>
      <APIDetailsForm
        keys={keys}
        requireAuth={true}
        saving
        onSave={onSave}
        onClear={onClear}
      />
    </SafeAreaView>
  ))
