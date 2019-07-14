import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import APIDetailsForm from '.'

const keys = {
  apiKey: '1234567890',
  apiSecret: 'abcd123'
}

const requireAuth = true

let tree

describe('rendering', () => {
  describe('defaults', () => {
    beforeAll(() => {
      tree = renderer.create(
        <APIDetailsForm onSave={() => {}} onClear={() => {}} />
      )
    })

    it('rendered correctly ', () => {
      expect(tree).toMatchSnapshot()
    })
  })

  describe('with keys', () => {
    beforeAll(() => {
      tree = renderer.create(
        <APIDetailsForm
          keys={keys}
          requireAuth={true}
          onSave={() => {}}
          onClear={() => {}}
        />
      )
    })

    it('rendered correctly ', () => {
      expect(tree).toMatchSnapshot()
    })
  })

  describe('with keys and saving', () => {
    beforeAll(() => {
      tree = renderer.create(
        <APIDetailsForm
          keys={keys}
          requireAuth={true}
          saving
          onSave={() => {}}
          onClear={() => {}}
        />
      )
    })

    it('rendered correctly ', () => {
      expect(tree).toMatchSnapshot()
    })
  })
})

describe('submit', () => {
  const onSave = jest.fn()

  beforeAll(() => {
    tree = renderer.create(
      <APIDetailsForm
        keys={keys}
        requireAuth={true}
        saving
        onSave={onSave}
        onClear={() => {}}
      />
    )
    tree.getInstance().submit({ ...keys, requireAuth })
  })

  it('called onSave with the correct values', () => {
    expect(onSave).toHaveBeenCalledWith({ ...keys, requireAuth })
  })
})
