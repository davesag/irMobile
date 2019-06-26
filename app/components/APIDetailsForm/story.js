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
      <APIDetailsForm onSave={() => {}} />
    </SafeAreaView>
  ))
  .add('with values', () => (
    <SafeAreaView>
      <APIDetailsForm keys={keys} requireAuth={true} onSave={() => {}} />
    </SafeAreaView>
  ))
  .add('saving', () => (
    <SafeAreaView>
      <APIDetailsForm keys={keys} requireAuth={true} saving onSave={() => {}} />
    </SafeAreaView>
  ))
