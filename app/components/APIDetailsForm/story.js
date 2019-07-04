import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { SafeAreaView } from 'react-native'

import APIDetailsForm from '.'

const keys = {
  apiKey: '1234567890',
  apiSecret: 'abcd123'
}

storiesOf('APIDetailsForm', module)
  .add('empty', () => (
    <SafeAreaView>
      <APIDetailsForm onSave={() => {}} onClear={() => {}} />
    </SafeAreaView>
  ))
  .add('with values', () => (
    <SafeAreaView>
      <APIDetailsForm
        keys={keys}
        requireAuth={true}
        onSave={() => {}}
        onClear={() => {}}
      />
    </SafeAreaView>
  ))
  .add('saving', () => (
    <SafeAreaView>
      <APIDetailsForm
        keys={keys}
        requireAuth={true}
        saving
        onSave={() => {}}
        onClear={() => {}}
      />
    </SafeAreaView>
  ))
