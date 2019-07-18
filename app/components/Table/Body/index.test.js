import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Body from '.'

const body = [['A', 'B', 'C'], ['D', 'E', 'F']]
const makeKey = (value, i) => i

let tree

jest.mock('../Row')

describe('rendering', () => {
  beforeAll(() => {
    tree = renderer.create(<Body data={body} makeKey={makeKey} />)
  })

  it('rendered correctly ', () => {
    expect(tree).toMatchSnapshot()
  })
})
