import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import theme from '../../../theme'

import Header from '.'

const makeKey = (value, i) => i

let tree

describe('rendering', () => {
  describe('without data', () => {
    beforeAll(() => {
      tree = renderer.create(<Header theme={theme} makeKey={makeKey} />)
    })

    it('rendered correctly ', () => {
      expect(tree).toMatchSnapshot()
    })
  })

  describe('with data', () => {
    const data = ['Aye', 'Bee', 'Sea']

    beforeAll(() => {
      tree = renderer.create(
        <Header data={data} theme={theme} makeKey={makeKey} />
      )
    })

    it('rendered correctly ', () => {
      expect(tree).toMatchSnapshot()
    })
  })
})
