import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { SafeAreaView } from 'react-native'

import AccountBalances from '.'

const balances = [
  { currency: 'Xbt', balance: 3, fiatPrice: 16839.25, fiatValue: 50517.75 },
  {
    currency: 'Eth',
    balance: 21.62806365,
    fiatPrice: 464.04,
    fiatValue: 10036.286656146001
  }
]

storiesOf('AccountBalances', module).add('simple', () => (
  <SafeAreaView>
    <AccountBalances balances={balances} />
  </SafeAreaView>
))
