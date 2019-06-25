/**
 * @format
 */

import 'react-native'
import React from 'react'
import LoginScreen from '.'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

let tree

describe('rendering', () => {
  const navigation = {}

  beforeAll(() => {
    tree = renderer.create(<LoginScreen navigation={navigation} />)
  })

  it('rendered correctly', () => {
    expect(tree).toMatchSnapshot()
  })
})
