import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Row from '.'

let tree

describe('rendering', () => {
  const data = ['Aye', 'Bee', 'Sea']

  beforeAll(() => {
    tree = renderer.create(<Row data={data} />)
  })

  it('rendered correctly ', () => {
    expect(tree).toMatchSnapshot()
  })
})
