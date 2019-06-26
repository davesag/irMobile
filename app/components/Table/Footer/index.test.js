import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Footer from '.'

let tree

describe('rendering', () => {
  describe('without data', () => {
    beforeAll(() => {
      tree = renderer.create(<Footer />)
    })

    it('rendered correctly ', () => {
      expect(tree).toMatchSnapshot()
    })
  })

  describe('with data', () => {
    const data = ['Total', '', '12345.00']

    beforeAll(() => {
      tree = renderer.create(<Footer data={data} />)
    })

    it('rendered correctly ', () => {
      expect(tree).toMatchSnapshot()
    })
  })
})
