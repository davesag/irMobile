import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Cell from '.'

const value = 'some value'

let tree

describe('rendering', () => {
  describe('non numeric and no style', () => {
    beforeAll(() => {
      tree = renderer.create(<Cell value={value} />)
    })

    it('rendered correctly ', () => {
      expect(tree).toMatchSnapshot()
    })
  })

  describe('numeric and with style', () => {
    const style = { borderTop: 10 }

    beforeAll(() => {
      tree = renderer.create(<Cell value={value} style={style} numeric />)
    })

    it('rendered correctly ', () => {
      expect(tree).toMatchSnapshot()
    })
  })
})
