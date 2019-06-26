import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { SafeAreaView } from 'react-native'

import Table from '.'

const body = [['A', 'B', 'C', 'D'], ['E', 'F', 'G', 'H']]

const header = ['Aye', 'Bee', 'Sea', 'Dee']
const footer = ['Total', '', '', 'Eee']

storiesOf('Table', module)
  .add('simple', () => (
    <SafeAreaView>
      <Table body={body} />
    </SafeAreaView>
  ))
  .add('with header', () => (
    <SafeAreaView>
      <Table header={header} body={body} />
    </SafeAreaView>
  ))
  .add('with footer', () => (
    <SafeAreaView>
      <Table footer={footer} body={body} />
    </SafeAreaView>
  ))
  .add('with header, footer, and custom style', () => (
    <SafeAreaView>
      <Table
        header={header}
        footer={footer}
        body={body}
        tableStyle={{ padding: 10 }}
      />
    </SafeAreaView>
  ))
