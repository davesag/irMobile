import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { SafeAreaView } from 'react-native'

import APIDetailsForm from '.'

const keys = {
  apiKey: '1234567890',
  apiSecret: 'abcd123'
}

storiesOf('Forms', module)
  .add('APIDetailsForm without initial values', () => (
    <SafeAreaView>
      <APIDetailsForm onSave={() => {}} />
    </SafeAreaView>
  ))
  .add('APIDetailsForm with initial values', () => (
    <SafeAreaView>
      <APIDetailsForm keys={keys} requireAuth={true} onSave={() => {}} />
    </SafeAreaView>
  ))
  .add('APIDetailsForm is saving', () => (
    <SafeAreaView>
      <APIDetailsForm keys={keys} requireAuth={true} saving onSave={() => {}} />
    </SafeAreaView>
  ))
