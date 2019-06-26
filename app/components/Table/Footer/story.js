import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { SafeAreaView, View } from 'react-native'

import Footer from '.'
import styles from '../styles'

const data = ['Total', '', '', '12,345.67']

storiesOf('Table.Footer', module)
  .add('without data', () => (
    <SafeAreaView>
      <View style={styles.table}>
        <Footer />
      </View>
    </SafeAreaView>
  ))
  .add('with data', () => (
    <SafeAreaView>
      <View style={styles.table}>
        <Footer data={data} />
      </View>
    </SafeAreaView>
  ))
