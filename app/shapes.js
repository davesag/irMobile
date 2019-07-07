import { arrayOf, func, number, oneOfType, shape, string } from 'prop-types'

export const navigationShape = {
  goBack: func.isRequired,
  navigate: func.isRequired
}

export const keysShape = {
  apiKey: string.isRequired,
  apiSecret: string.isRequired
}

export const balancesShape = {
  currency: string.isRequired,
  balance: number.isRequired,
  fiatPrice: number.isRequired,
  fiatValue: number.isRequired
}

const errorShape = {
  name: string.isRequired,
  message: string,
  details: shape({
    method: string.isRequired,
    url: string.isRequired
  }),
  status: number
}
