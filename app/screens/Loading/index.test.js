/**
 * @format
 */

import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import LoadingScreen, { mapStateToProps } from '.'

const apiKey = 'some-key'
const apiSecret = 'some-secret'
const keys = { apiKey, apiSecret }

const requireAuth = true
const navigate = jest.fn()
const navigation = { navigate }

const resetStubs = () => {
  navigate.clearMock()
}

describe('mapStateToProps', () => {
  describe('when there are keys', () => {
    const stateProps = mapStateToProps({
      ir: { apiKey, apiSecret, busy: false }
    })

    it('returned keys', () => {
      expect(stateProps).toHaveProperty('keys', keys)
    })

    it('returned loading', () => {
      expect(stateProps).toHaveProperty('loading', false)
    })
  })

  describe('when there are missing keys', () => {
    const stateProps = mapStateToProps({
      ir: { apiKey, apiSecret: null, requireAuth, busy: false }
    })

    it('returned keys is null', () => {
      expect(stateProps).toHaveProperty('keys', null)
    })

    it('returned loading', () => {
      expect(stateProps).toHaveProperty('loading', false)
    })
  })
})

describe('rendering', () => {
  let tree

  beforeAll(() => {
    tree = renderer.create(
      <LoadingScreen loading navigation={{ navigate: () => {} }} />
    )
  })

  it('rendered correctly', () => {
    expect(tree).toMatchSnapshot()
  })
})

describe('is loading', () => {
  beforeAll(() => {
    renderer
      .create(
        <LoadingScreen loading={true} navigation={navigation} keys={null} />
      )
      .getInstance()
      .componentDidUpdate({ navigation, loading: false, keys: null })
  })

  afterAll(resetStubs)

  it("didn't call navigate", () => {
    expect(navigate).not.toHaveBeenCalled()
  })
})

describe('once loading is done', () => {
  describe('when keys arrive', () => {
    beforeAll(() => {
      renderer
        .create(
          <LoadingScreen loading={false} navigation={navigation} keys={keys} />
        )
        .getInstance()
        .componentDidUpdate({ navigation, loading: true, keys: null })
    })

    afterAll(resetStubs)

    it('called navigate("LoggedInStackNavigator")', () => {
      expect(navigate).toHaveBeenCalledWith('LoggedInStackNavigator')
    })
  })

  describe('when keys do not arrive', () => {
    beforeAll(() => {
      renderer
        .create(
          <LoadingScreen loading={false} navigation={navigation} keys={null} />
        )
        .getInstance()
        .componentDidUpdate({ navigation, loading: true, keys: null })
    })

    afterAll(resetStubs)

    it('called navigate("LoggedOutStackNavigator")', () => {
      expect(navigate).toHaveBeenCalledWith('LoggedOutStackNavigator')
    })
  })
})
