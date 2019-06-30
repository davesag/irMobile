import withDefault from './withDefault'

const message = 'hello'
const defaultMessage = 'sailor'

it('returns the message if it exists', () => {
  expect(withDefault(message, defaultMessage)).toEqual(message)
})

it('returns the default if the message is blank', () => {
  expect(withDefault('', defaultMessage)).toEqual(defaultMessage)
})
