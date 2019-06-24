import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import * as reactRedux from 'react-redux'

import AppMain, { mapDispatchToProps } from './AppMain'

let tree

describe('mapDispatchToProps', () => {
  const dispatchProps = mapDispatchToProps(jest.fn())

  it('returns bound function to dispatch', () => {
    expect(dispatchProps).toEqual({
      doRestoreKeys: expect.any(Function)
    })
  })
})

describe('rendering the component', () => {
  const doRestoreKeys = jest.fn()

  beforeAll(() => {
    tree = renderer.create(<AppMain doRestoreKeys={doRestoreKeys} />)
    tree.getInstance().componentDidMount()
  })

  it('rendered correctly ', () => {
    expect(tree).toMatchSnapshot()
  })

  it('connected with redux', () => {
    expect(reactRedux.connect).toHaveBeenCalled()
  })

  it('called doRestoreKeys', () => {
    expect(doRestoreKeys).toHaveBeenCalled()
  })
})
