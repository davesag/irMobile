import * as actions from './actions'

describe('IR actions', () => {
  const apiKey = 'some api key'
  const apiSecret = 'some api secret'
  const requireAuth = true
  const keys = { apiKey, apiSecret, requireAuth }

  describe('#restoreKeys', () => {
    describe('request', () => {
      it('returns the expected object for restoreKeys', () => {
        expect(actions.restoreKeys()).toEqual({
          type: 'RESTORE_KEYS'
        })
      })
    })

    describe('success', () => {
      const keys = 'some keys'

      it('returns the expected object for restoreKeysSuccess', () => {
        expect(actions.restoreKeysSuccess(keys)).toEqual({
          type: 'RESTORE_KEYS_SUCCESS',
          payload: keys
        })
      })
    })

    describe('fail', () => {
      const error = new Error('oops')

      it('returns the expected object for restoreKeysFail', () => {
        expect(actions.restoreKeysFail(error)).toEqual({
          type: 'RESTORE_KEYS_FAIL',
          payload: error,
          error: true
        })
      })
    })
  })

  describe('#saveKeys', () => {
    describe('request', () => {
      it('returns the expected object for saveKeys', () => {
        expect(actions.saveKeys(keys)).toEqual({
          type: 'SAVE_KEYS',
          payload: keys
        })
      })
    })

    describe('success', () => {
      it('returns the expected object for saveKeysSuccess', () => {
        expect(actions.saveKeysSuccess()).toEqual({
          type: 'SAVE_KEYS_SUCCESS'
        })
      })
    })

    describe('fail', () => {
      const error = new Error('oops')

      it('returns the expected object for saveKeysFail', () => {
        expect(actions.saveKeysFail(error)).toEqual({
          type: 'SAVE_KEYS_FAIL',
          payload: error,
          error: true
        })
      })
    })
  })

  describe('#clearKeys', () => {
    describe('request', () => {
      it('returns the expected object for clearKeys', () => {
        expect(actions.clearKeys()).toEqual({
          type: 'CLEAR_KEYS'
        })
      })
    })

    describe('success', () => {
      it('returns the expected object for clearKeysSuccess', () => {
        expect(actions.clearKeysSuccess()).toEqual({
          type: 'CLEAR_KEYS_SUCCESS'
        })
      })
    })

    describe('fail', () => {
      const error = new Error('oops')

      it('returns the expected object for clearKeysFail', () => {
        expect(actions.clearKeysFail(error)).toEqual({
          type: 'CLEAR_KEYS_FAIL',
          payload: error,
          error: true
        })
      })
    })
  })
})
