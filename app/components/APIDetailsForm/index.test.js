import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import APIDetailsForm from '.'

const keys = {
  apiKey: '1234567890',
  apiSecret: 'abcd123'
}

let tree

describe('rendering', () => {
  describe('defaults', () => {
    beforeAll(() => {
      tree = renderer.create(<APIDetailsForm onSave={() => {}} />)
    })

    it('rendered correctly ', () => {
      expect(tree).toMatchSnapshot()
    })
  })

  describe('with keys', () => {
    beforeAll(() => {
      tree = renderer.create(
        <APIDetailsForm keys={keys} requireAuth={true} onSave={() => {}} />
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
      <APIDetailsForm keys={keys} requireAuth={true} saving onSave={onSave} />
    )
    tree.getInstance().submit()
  })

  it('called onSave with the correct values', () => {
    expect(onSave).toHaveBeenCalledWith({ ...keys, requireAuth: true })
  })
})

describe('updating fields', () => {
  describe('#updateField', () => {
    beforeAll(() => {
      tree = renderer.create(
        <APIDetailsForm keys={keys} requireAuth={true} onSave={() => {}} />
      )
    })

    describe('with a valid value', () => {
      const newKey = 'some-new-key'

      beforeAll(() => {
        tree.getInstance().updateField('apiKey')(newKey)
      })

      it('updated the state correctly', () => {
        expect(tree.getInstance().state).toHaveProperty('apiKey', {
          value: newKey,
          error: null
        })
      })
    })

    describe('with empty string', () => {
      beforeAll(() => {
        tree.getInstance().updateField('apiKey')('')
      })

      it('updated the state correctly', () => {
        expect(tree.getInstance().state).toHaveProperty('apiKey', {
          value: '',
          error: 'Required field'
        })
      })
    })
  })

  describe('#toggleField', () => {
    beforeAll(() => {
      tree = renderer.create(
        <APIDetailsForm keys={keys} requireAuth={true} onSave={() => {}} />
      )
      tree.getInstance().toggleField('requireAuth')()
    })

    it('updated the state correctly', () => {
      expect(tree.getInstance().state).toHaveProperty('requireAuth', {
        value: false
      })
    })
  })

  describe('#updateApiKey', () => {
    const newKey = 'some new-key'
    const expected = 'ee-e'

    beforeAll(() => {
      tree = renderer.create(
        <APIDetailsForm keys={keys} requireAuth={true} onSave={() => {}} />
      )
      tree.getInstance().updateApiKey(newKey)
    })

    it('updated the state correctly', () => {
      expect(tree.getInstance().state).toHaveProperty('apiKey', {
        value: expected,
        error: null
      })
    })
  })

  describe('#updateApiSecret', () => {
    const newSecret = 'some new-secret'
    const expected = 'eeece'

    beforeAll(() => {
      tree = renderer.create(
        <APIDetailsForm keys={keys} requireAuth={true} onSave={() => {}} />
      )
      tree.getInstance().updateApiSecret(newSecret)
    })

    it('updated the state correctly', () => {
      expect(tree.getInstance().state).toHaveProperty('apiSecret', {
        value: expected,
        error: null
      })
    })
  })
})
