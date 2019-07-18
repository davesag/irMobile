import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

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

let tree

jest.mock('../Table')

describe('rendering', () => {
  describe('defaults', () => {
    beforeAll(() => {
      tree = renderer.create(<AccountBalances balances={balances} />)
    })

    it('rendered correctly ', () => {
      expect(tree).toMatchSnapshot()
    })
  })
})
