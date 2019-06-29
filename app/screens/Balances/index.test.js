/**
 * @format
 */

import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import BalancesScreen, { mapStateToProps, mapDispatchToProps } from '.'

const apiKey = 'some-key'
const apiSecret = 'some-secret'
const keys = { apiKey, apiSecret }
const balances = [
  {
    currency: 'Aud',
    balance: 100,
    fiatPrice: 1,
    fiatValue: 100
  },
  {
    currency: 'Xbt',
    balance: 5,
    fiatPrice: 16580.47,
    fiatValue: 16580.47 * 5
  }
]
const navigation = { navigate: jest.fn() }

let tree

describe('mapStateToProps', () => {
  describe('when there are keys', () => {
    const stateProps = mapStateToProps({
      ir: { apiKey, apiSecret, balances, busy: false }
    })

    it('returned hasKeys is true', () => {
      expect(stateProps).toHaveProperty('hasKeys', true)
    })

    it('returned balances', () => {
      expect(stateProps).toHaveProperty('balances', balances)
    })

    it('returned loading', () => {
      expect(stateProps).toHaveProperty('loading', false)
    })
  })

  describe('when there are missing keys', () => {
    const stateProps = mapStateToProps({
      ir: { apiKey, apiSecret: null, balances, busy: false }
    })

    it('returned hasKeys is false', () => {
      expect(stateProps).toHaveProperty('hasKeys', false)
    })
  })
})

describe('mapDispatchToProps', () => {
  const dispatchProps = mapDispatchToProps(jest.fn())

  it('returns bound function to dispatch', () => {
    expect(dispatchProps).toEqual({
      getBalances: expect.any(Function)
    })
  })
})

describe('rendering', () => {
  describe('when no keys', () => {
    beforeAll(() => {
      tree = renderer.create(
        <BalancesScreen
          balances={[]}
          navigation={navigation}
          getBalances={() => {}}
        />
      )
    })

    it('rendered correctly', () => {
      expect(tree).toMatchSnapshot()
    })
  })

  describe('when empty balances', () => {
    beforeAll(() => {
      tree = renderer.create(
        <BalancesScreen
          hasKeys
          balances={[]}
          navigation={navigation}
          getBalances={() => {}}
        />
      )
    })

    it('rendered correctly', () => {
      expect(tree).toMatchSnapshot()
    })
  })

  describe('has no balances but is loading', () => {
    beforeAll(() => {
      tree = renderer.create(
        <BalancesScreen
          loading
          hasKeys
          balances={[]}
          navigation={navigation}
          getBalances={() => {}}
        />
      )
    })

    it('rendered correctly', () => {
      expect(tree).toMatchSnapshot()
    })
  })

  describe('when has balances and not loading', () => {
    beforeAll(() => {
      tree = renderer.create(
        <BalancesScreen
          hasKeys
          balances={balances}
          navigation={navigation}
          getBalances={() => {}}
        />
      )
    })

    it('rendered correctly', () => {
      expect(tree).toMatchSnapshot()
    })
  })
})

describe('refreshBalances', () => {
  const getBalances = jest.fn()

  beforeAll(() => {
    tree = renderer.create(
      <BalancesScreen
        hasKeys
        balances={balances}
        navigation={navigation}
        getBalances={getBalances}
      />
    )
    tree.getInstance().refreshBalances()
  })

  it('called getBalances', () => {
    expect(getBalances).toHaveBeenCalled()
  })
})

describe('navigateToLogin', () => {
  beforeAll(() => {
    tree = renderer.create(
      <BalancesScreen
        hasKeys
        balances={balances}
        navigation={navigation}
        getBalances={() => {}}
      />
    )
    tree.getInstance().navigateToLogin()
  })

  it('called getBalances', () => {
    expect(navigation.navigate).toHaveBeenCalledWith('Login')
  })
})
