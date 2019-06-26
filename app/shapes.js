import { func, string } from 'prop-types'

export const navigationShape = {
  goBack: func.isRequired,
  navigate: func.isRequired
}

export const keysShape = {
  apiKey: string.isRequired,
  apiSecret: string.isRequired
}
