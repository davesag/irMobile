export const validateKey = value => (value ? undefined : 'API Key is Required')

export const validateSecret = value =>
  value ? undefined : 'API Secret is Required'
