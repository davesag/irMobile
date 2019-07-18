import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import theme from '../../../theme'

import Footer from '.'

let tree

const makeKey = (value, i) => i

describe('rendering', () => {
  describe('without data', () => {
    beforeAll(() => {
      tree = renderer.create(<Footer theme={theme} makeKey={makeKey} />)
    })

    it('rendered correctly ', () => {
      expect(tree).toMatchSnapshot()
    })
  })

  describe('with data', () => {
    const data = ['Total', '', '12345.00']

    beforeAll(() => {
      tree = renderer.create(
        <Footer data={data} theme={theme} makeKey={makeKey} />
      )
    })

    it('rendered correctly ', () => {
      expect(tree).toMatchSnapshot()
    })
  })
})
