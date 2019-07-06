/**
 * @format
 */

import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import SettingsScreen, { mapStateToProps, mapDispatchToProps } from '.'

const apiKey = 'some-key'
const apiSecret = 'some-secret'
const keys = { apiKey, apiSecret }
const requireAuth = true

const navigate = jest.fn()
const navigation = { navigate }

const resetStubs = () => {
  navigate.clearMock()
}

let tree

describe('mapStateToProps', () => {
  describe('when there are keys', () => {
    const stateProps = mapStateToProps({
      ir: { apiKey, apiSecret, requireAuth, busy: false }
    })

    it('returned keys', () => {
      expect(stateProps).toHaveProperty('keys', keys)
    })

    it('returned requireAuth', () => {
      expect(stateProps).toHaveProperty('requireAuth', requireAuth)
    })

    it('returned saving', () => {
      expect(stateProps).toHaveProperty('saving', false)
    })
  })

  describe('when there are missing keys', () => {
    const stateProps = mapStateToProps({
      ir: { apiKey, apiSecret: null, requireAuth, busy: false }
    })

    it('returned keys is null', () => {
      expect(stateProps).toHaveProperty('keys', null)
    })

    it('returned requireAuth', () => {
      expect(stateProps).toHaveProperty('requireAuth', requireAuth)
    })

    it('returned saving', () => {
      expect(stateProps).toHaveProperty('saving', false)
    })
  })
})

describe('mapDispatchToProps', () => {
  const dispatchProps = mapDispatchToProps(jest.fn())

  it('returns bound function to dispatch', () => {
    expect(dispatchProps).toEqual({
      doSaveKeys: expect.any(Function),
      doClearKeys: expect.any(Function)
    })
  })
})

describe('rendering', () => {
  beforeAll(() => {
    tree = renderer.create(
      <SettingsScreen
        keys={keys}
        requireAuth={requireAuth}
        doSaveKeys={() => {}}
        doClearKeys={() => {}}
        navigation={navigation}
      />
    )
  })

  it('rendered correctly', () => {
    expect(tree).toMatchSnapshot()
  })
})

describe('when keys are saved', () => {
  const doSaveKeys = jest.fn()

  beforeAll(() => {
    renderer
      .create(
        <SettingsScreen
          doSaveKeys={doSaveKeys}
          doClearKeys={() => {}}
          navigation={navigation}
        />
      )
      .getInstance()
      .handleSaveKeys(keys)
  })

  afterAll(resetStubs)

  it('called doSaveKeys with the keys', () => {
    expect(doSaveKeys).toHaveBeenCalledWith(keys)
  })

  it('called navigate("LoggedInStackNavigator")', () => {
    expect(navigate).toHaveBeenCalledWith('LoggedInStackNavigator')
  })
})

describe('when keys are cleared', () => {
  const doClearKeys = jest.fn()

  beforeAll(() => {
    renderer
      .create(
        <SettingsScreen
          keys={keys}
          doSaveKeys={() => {}}
          doClearKeys={doClearKeys}
          navigation={navigation}
        />
      )
      .getInstance()
      .handleClearKeys()
  })

  afterAll(resetStubs)

  it('called doClearKeys', () => {
    expect(doClearKeys).toHaveBeenCalled()
  })

  it('called navigate("LoggedOutStackNavigator")', () => {
    expect(navigate).toHaveBeenCalledWith('LoggedOutStackNavigator')
  })
})
