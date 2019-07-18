import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import theme from '../../theme'

import Table from '.'

const body = [['A', 'B', 'C'], ['D', 'E', 'F']]
const header = ['Aye', 'Bee', 'Sea']
const footer = ['Total', '', 'Dee']

const customStyle = { padding: 10 }

let tree

jest.mock('./Header')
jest.mock('./Body')
jest.mock('./Footer')

describe('rendering', () => {
  describe('without header or footer', () => {
    beforeAll(() => {
      tree = renderer.create(<Table body={body} theme={theme} />)
    })

    it('rendered correctly ', () => {
      expect(tree).toMatchSnapshot()
    })
  })

  describe('with header', () => {
    beforeAll(() => {
      tree = renderer.create(
        <Table body={body} header={header} theme={theme} />
      )
    })

    it('rendered correctly ', () => {
      expect(tree).toMatchSnapshot()
    })
  })

  describe('with footer', () => {
    beforeAll(() => {
      tree = renderer.create(
        <Table body={body} footer={footer} theme={theme} />
      )
    })

    it('rendered correctly ', () => {
      expect(tree).toMatchSnapshot()
    })
  })

  describe('with header and footer and custom style', () => {
    beforeAll(() => {
      tree = renderer.create(
        <Table
          body={body}
          header={header}
          footer={footer}
          tableStyle={customStyle}
          theme={theme}
        />
      )
    })

    it('rendered correctly ', () => {
      expect(tree).toMatchSnapshot()
    })
  })
})
