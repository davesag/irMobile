/**
 * @format
 */

import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import AccessGatewayScreen, { mapStateToProps } from '.'

const apiKey = 'some-key'
const apiSecret = 'some-secret'

const requireAuth = true
const navigate = jest.fn()
const navigation = { navigate, getParam: jest.fn(() => 'blue') }
const theme = {
  colors: {
    startup: 'blue'
  }
}

const resetStubs = () => {
  navigate.clearMock()
}

describe('mapStateToProps', () => {
  describe('when there are keys', () => {
    const stateProps = mapStateToProps({
      ir: { apiKey, apiSecret, busy: false }
    })

    it('returned hasKeys', () => {
      expect(stateProps).toHaveProperty('hasKeys', true)
    })

    it('returned loading', () => {
      expect(stateProps).toHaveProperty('loading', false)
    })
  })

  describe('when there are missing keys', () => {
    const stateProps = mapStateToProps({
      ir: { apiKey, apiSecret: null, requireAuth, busy: false }
    })

    it('returned hasKeys is false', () => {
      expect(stateProps).toHaveProperty('hasKeys', false)
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
      <AccessGatewayScreen loading navigation={navigation} theme={theme} />
    )
  })

  afterAll(resetStubs)

  it('rendered correctly', () => {
    expect(tree).toMatchSnapshot()
  })
})

describe('is loading', () => {
  beforeAll(() => {
    renderer
      .create(
        <AccessGatewayScreen
          loading={true}
          navigation={navigation}
          theme={theme}
        />
      )
      .getInstance()
      .componentDidUpdate()
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
          <AccessGatewayScreen
            loading={false}
            navigation={navigation}
            hasKeys={true}
            theme={theme}
          />
        )
        .getInstance()
        .componentDidUpdate()
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
          <AccessGatewayScreen
            loading={false}
            navigation={navigation}
            theme={theme}
          />
        )
        .getInstance()
        .componentDidUpdate()
    })

    afterAll(resetStubs)

    it('called navigate("LoggedOutStackNavigator")', () => {
      expect(navigate).toHaveBeenCalledWith('LoggedOutStackNavigator')
    })
  })
})
