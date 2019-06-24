import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import App from './App'

let tree

describe('rendering the component', () => {
  beforeAll(() => {
    tree = renderer.create(<App />)
  })

  it('rendered correctly ', () => {
    expect(tree).toMatchSnapshot()
  })
})
