import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Table from '.'

const body = [['A', 'B', 'C'], ['D', 'E', 'F']]
const header = ['Aye', 'Bee', 'Sea']
const footer = ['Total', '', 'Dee']

const customStyle = { padding: 10 }

let tree

describe('rendering', () => {
  describe('without header or footer', () => {
    beforeAll(() => {
      tree = renderer.create(<Table body={body} />)
    })

    it('rendered correctly ', () => {
      expect(tree).toMatchSnapshot()
    })
  })

  describe('with header', () => {
    beforeAll(() => {
      tree = renderer.create(<Table body={body} header={header} />)
    })

    it('rendered correctly ', () => {
      expect(tree).toMatchSnapshot()
    })
  })

  describe('with footer', () => {
    beforeAll(() => {
      tree = renderer.create(
        <Table body={body} header={header} footer={footer} />
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
        />
      )
    })

    it('rendered correctly ', () => {
      expect(tree).toMatchSnapshot()
    })
  })
})
