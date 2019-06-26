import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { SafeAreaView, View } from 'react-native'

import Row from '.'
import styles from '../styles'

const data = ['Aye', 'Bee', 'Sea', 'Dee']

storiesOf('Table.Row', module).add('with simple data', () => (
  <SafeAreaView>
    <View style={styles.table}>
      <Row data={data} />
    </View>
  </SafeAreaView>
))
