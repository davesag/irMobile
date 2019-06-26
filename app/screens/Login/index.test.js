/**
 * @format
 */

import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import * as reactRedux from 'react-redux'

import LoginScreen, { mapStateToProps, mapDispatchToProps } from '.'

const apiKey = 'some-key'
const apiSecret = 'some-secret'
const keys = { apiKey, apiSecret }

const requireAuth = true

let tree

describe('mapStateToProps', () => {
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

describe('mapDispatchToProps', () => {
  const dispatchProps = mapDispatchToProps(jest.fn())

  it('returns bound function to dispatch', () => {
    expect(dispatchProps).toEqual({
      saveKeys: expect.any(Function)
    })
  })
})

describe('rendering', () => {
  const navigation = {}

  beforeAll(() => {
    tree = renderer.create(
      <LoginScreen
        keys={keys}
        requireAuth={requireAuth}
        saveKeys={() => {}}
        navigation={navigation}
      />
    )
  })

  it('rendered correctly', () => {
    expect(tree).toMatchSnapshot()
  })
})
