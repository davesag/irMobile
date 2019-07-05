/**
 * @format
 */

import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import AboutScreen from '.'

let tree

describe('rendering', () => {
  const navigation = {}

  beforeAll(() => {
    tree = renderer.create(<AboutScreen navigation={navigation} />)
  })

  it('rendered correctly', () => {
    expect(tree).toMatchSnapshot()
  })
})
