import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { SafeAreaView, View } from 'react-native'

import Header from '.'
import styles from '../styles'

const data = ['Aye', 'Bee', 'Sea', 'Dee']

storiesOf('Table.Header', module)
  .add('without header data', () => (
    <SafeAreaView>
      <View style={styles.table}>
        <Header />
      </View>
    </SafeAreaView>
  ))
  .add('with header data', () => (
    <SafeAreaView>
      <View style={styles.table}>
        <Header data={data} />
      </View>
    </SafeAreaView>
  ))
