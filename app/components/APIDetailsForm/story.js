import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { SafeAreaView } from 'react-native'

import APIDetailsForm from '.'

storiesOf('Forms', module).add('APIDetailsForm', () => (
  <SafeAreaView>
    <APIDetailsForm />
  </SafeAreaView>
))
