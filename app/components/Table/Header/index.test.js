import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Header from '.'

let tree

describe('rendering', () => {
  describe('without data', () => {
    beforeAll(() => {
      tree = renderer.create(<Header />)
    })

    it('rendered correctly ', () => {
      expect(tree).toMatchSnapshot()
    })
  })

  describe('with data', () => {
    const data = ['Aye', 'Bee', 'Sea']

    beforeAll(() => {
      tree = renderer.create(<Header data={data} />)
    })

    it('rendered correctly ', () => {
      expect(tree).toMatchSnapshot()
    })
  })
})
