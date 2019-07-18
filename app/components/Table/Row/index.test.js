import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import theme from '../../../theme'

import Row from '.'

const makeKey = (value, i) => i

let tree

describe('given data', () => {
  const data = ['Aye', 'Bee', 'Sea']

  beforeAll(() => {
    tree = renderer.create(<Row data={data} theme={theme} makeKey={makeKey} />)
  })

  it('rendered correctly ', () => {
    expect(tree).toMatchSnapshot()
  })
})

describe('given no data', () => {
  beforeAll(() => {
    tree = renderer.create(<Row theme={theme} makeKey={makeKey} />)
  })

  it('rendered correctly ', () => {
    expect(tree).toMatchSnapshot()
  })
})
