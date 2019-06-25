import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import APIDetailsForm from '.'

let tree

describe('basic form', () => {
  beforeAll(() => {
    tree = renderer.create(<APIDetailsForm />)
  })

  it('rendered correctly ', () => {
    expect(tree).toMatchSnapshot()
  })
})
